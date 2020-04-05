import React, { useState, useRef, useEffect } from "react";
import Measure from "react-measure";
import "@tensorflow/tfjs";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import { useUserMedia } from "./hooks/useUserMedia";
import { useCardRatio } from "./hooks/useCardRatio";
import { useOffsets } from "./hooks/useOffsets";
import { 
  useModelPredictions,
  renderPredictions 
} from "./hooks/useModelPredictions";
import {
  Button
} from '@material-ui/core';
import {
  Video,
  Canvas,
  Box,
  Wrapper,
  Container,
  Flash,
  Overlay,
  Footer
} from "./styles";

const CAPTURE_OPTIONS = {
  audio: false,
  video: { facingMode: "user" }
};

export function CameraElem({ 
  onCapture,
  onClear,
  facingMode,
  setFacingMode,
  captureOptions
}) {
  const boxRef = useRef();
  const canvasRef = useRef();
  const videoRef = useRef();
  const modelRef = React.useRef(null);
  const predictionsRef = React.useRef(null);
  const requestRef = React.useRef(null);

  const [container, setContainer] = useState({ width: 0, height: 0 });
  const [boxContainer, setBoxContainer] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0
  });
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isCanvasEmpty, setIsCanvasEmpty] = useState(true);
  const [isObjectDetection, setIsObjectDetection] = useState(true);
  const [isModelLoading, setIsModelLoading] = useState(false);
  const [isFlashing, setIsFlashing] = useState(false);
  const [ready, setReady] = React.useState(false);
  
  const mediaStream = useUserMedia(captureOptions);
  const [aspectRatio, calculateRatio] = useCardRatio(1.586);  
  
  const offsets = useOffsets(
    videoRef.current && videoRef.current.videoWidth,
    videoRef.current && videoRef.current.videoHeight,
    container.width,
    container.height
  );

  if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
    videoRef.current.srcObject = mediaStream;
  }


  const capture = React.useCallback(async () => {
    if (videoRef.current && modelRef.current) {
      const predictions = await modelRef.current.detect(videoRef.current);
      if (predictions) {
        // console.log(predictions)
        predictionsRef.current = predictions;
        renderPredictions(predictions, boxRef, offsets);
      }

    }
  
    requestRef.current = requestAnimationFrame(capture);
  }, [videoRef, offsets]);

  React.useEffect(() => {
    const load = async () => {
      modelRef.current = await cocoSsd.load();
    };

    load();
  }, [capture]);

  function handleResize(contentRect) {
    setContainer({
      width: contentRect.bounds.width,
      height: Math.round(contentRect.bounds.width / aspectRatio)
    });
  }

  async function handleCanPlay() {
    calculateRatio(videoRef.current.videoHeight, videoRef.current.videoWidth);
    setIsVideoPlaying(true);
    videoRef.current.play();
  }

  function handleCapture() {
    const context = canvasRef.current.getContext("2d");

    context.drawImage(
      videoRef.current,
      offsets.x,
      offsets.y,
      container.width,
      container.height,
      0,
      0,
      container.width,
      container.height
    );

    canvasRef.current.toBlob(blob => onCapture(blob), "image/jpeg", 1);
    setIsCanvasEmpty(false);
    setIsFlashing(true);
  }

  function handleClear() {
    const context = canvasRef.current.getContext("2d");
    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    setIsCanvasEmpty(true);
    onClear();
  }

  function handleObjectDetection() {
    // setIsObjectDetection(!isObjectDetection);
    requestRef.current = requestAnimationFrame(capture);
  }

  // async function handleSwitchFacingMode() {
  //   if(facingMode==="user") {
  //     setFacingMode("environment");
  //   } else {
  //     setFacingMode("user");
  //   }
  // }

  if (!mediaStream) {
    return null;
  }

  return (
    <Measure bounds onResize={handleResize}>
      {({ measureRef }) => (
        <Wrapper>
          <Container
            ref={measureRef}
            maxHeight={videoRef.current && videoRef.current.videoHeight}
            maxWidth={videoRef.current && videoRef.current.videoWidth}
            style={{
              height: `${container.height}px`
            }}
          >
            <Video
              ref={videoRef}
              hidden={!isVideoPlaying}
              onCanPlay={handleCanPlay}
              autoPlay
              playsInline
              muted
              style={{
                top: `-${offsets.y}px`,
                left: `-${offsets.x}px`
              }}
            />

            <Overlay hidden={!isVideoPlaying} />

            <Canvas
              ref={canvasRef}
              width={container.width}
              height={container.height}
            />

            <Box
              ref={boxRef}
              width={container.width}
              height={container.height}
            />

            <Flash
              flash={isFlashing}
              onAnimationEnd={() => setIsFlashing(false)}
            />
          </Container>

          {isVideoPlaying && (
            <Footer>
              <Button
                onClick={isCanvasEmpty ? handleCapture : handleClear}
                variant="contained"
                color="primary"
              >
                {isCanvasEmpty ? "Take a picture" : "Take another picture"}
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleObjectDetection}
              >
                {isObjectDetection ? "Stop Detection" : "Object Detection"}
              </Button>
              {/* <Button
                variant="contained"
                color="primary"
                onClick={handleSwitchFacingMode}
              >
                {facingMode==="user" ? "User" : "Environment"}
              </Button> */}
            </Footer>
          )}
        </Wrapper>
      )}
    </Measure>
  );
}
