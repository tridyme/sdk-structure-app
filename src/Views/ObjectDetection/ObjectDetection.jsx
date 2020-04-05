import React, { useRef, useEffect, useState } from "react";

import * as cocoSsd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";

const ObjectDetection = () => {
  const [records, setRecords] = useState([]);

  const videoElement = useRef(null);
  const canvasRef = useRef(null);
  const startButtonElement = useRef(null);
  const stopButtonElement = useRef(null);

  const shouldRecordRef = useRef(false);
  const modelRef = useRef(null);
  const recordingRef = useRef(false);
  const lastDetectionsRef = useRef([]);
  const recorderRef = useRef(null);

  useEffect(() => {
    async function prepare() {
      startButtonElement.current.setAttribute("disabled", true);
      stopButtonElement.current.setAttribute("disabled", true);
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true
          });
          window.stream = stream;
          videoElement.current.srcObject = stream;
          const model = await cocoSsd.load();
          modelRef.current = model;
          startButtonElement.current.removeAttribute("disabled");
        } catch (error) {
          console.error(error);
        }
      }
    }
    prepare();
  }, []);

  async function detectFrame() {
    if (!shouldRecordRef.current) {
      stopRecording();
      return;
    }

    const predictions = await modelRef.current.detect(videoElement.current);
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    const font = "16px sans-serif";
    ctx.font = font;
    ctx.textBaseline = "top";
    predictions.forEach(prediction => {
      // console.log('BOOOX', prediction.bbox[0])
      // setBoxContainer({
      //   x: prediction.bbox[0],
      //   y: prediction.bbox[1],
      //   width: prediction.bbox[2],
      //   height: prediction.bbox[3]
      // })
      const x = prediction.bbox[0];
      const y = prediction.bbox[1];
      const width = prediction.bbox[2];
      const height = prediction.bbox[3];
      // Draw the bounding box.
      ctx.strokeStyle = "#00FFFF";
      ctx.lineWidth = 2;
      ctx.strokeRect(x, y, width, height);
      // Draw the label background.
      ctx.fillStyle = "#00FFFF";
      const textWidth = ctx.measureText(prediction.class).width;
      const textHeight = parseInt(font, 10); // base 10
      ctx.fillRect(x, y, textWidth + 4, textHeight + 4);
    });

    let foundPerson = false;
    predictions.forEach(prediction => {
      const x = prediction.bbox[0];
      const y = prediction.bbox[1];
      // Draw the text last to ensure it's on top.
      ctx.fillStyle = "#000000";
      ctx.fillText(prediction.class, x, y);
    });
    for (let i = 0; i < predictions.length; i++) {
      if (predictions[i].class === "person") {
        foundPerson = true;
      }
    }

    if (foundPerson) {
      startRecording();
      lastDetectionsRef.current.push(true);
    } else if (lastDetectionsRef.current.filter(Boolean).length) {
      startRecording();
      lastDetectionsRef.current.push(false);
    } else {
      stopRecording();
    }

    lastDetectionsRef.current = lastDetectionsRef.current.slice(
      Math.max(lastDetectionsRef.current.length - 10, 0)
    );

    requestAnimationFrame(() => {
      detectFrame();
    });
  }

  function startRecording() {
    if (recordingRef.current) {
      return;
    }

    recordingRef.current = true;
    console.log("start recording");

    recorderRef.current = new MediaRecorder(window.stream);

    recorderRef.current.ondataavailable = function(e) {
      const title = new Date() + "";
      const href = URL.createObjectURL(e.data);
      setRecords(previousRecords => {
        return [...previousRecords, { href, title }];
      });
    };

    recorderRef.current.start();
  }

  function stopRecording() {
    if (!recordingRef.current) {
      return;
    }

    recordingRef.current = false;
    recorderRef.current.stop();
    console.log("stopped recording");
    lastDetectionsRef.current = [];
  }

  return (
    <div className="p-3">
      <div>
        <video
          autoPlay
          playsInline
          muted
          ref={videoElement}
          style={{
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
        />
        <canvas
          ref={canvasRef}
          style={{
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
        />
      </div>
      <div>
        <div className="btn-toolbar" role="toolbar">
          <div className="btn-group mr-2" role="group">
            <button
              className="btn btn-success"
              onClick={() => {
                shouldRecordRef.current = true;
                stopButtonElement.current.removeAttribute("disabled");
                startButtonElement.current.setAttribute("disabled", true);
                detectFrame();
              }}
              ref={startButtonElement}
            >
              Start
            </button>
          </div>
          <div className="btn-group mr-2" role="group">
            <button
              className="btn btn-danger"
              onClick={() => {
                shouldRecordRef.current = false;
                startButtonElement.current.removeAttribute("disabled");
                stopButtonElement.current.setAttribute("disabled", true);
                stopRecording();
              }}
              ref={stopButtonElement}
            >
              Stop
            </button>
          </div>
        </div>
        <div className="row p-3">
          <h3>Records:</h3>
          {!records.length
            ? null
            : records.map(record => {
                return (
                  <div className="card mt-3 w-100" key={record.title}>
                    <div className="card-body">
                      <h5 className="card-title">{record.title}</h5>
                      <video
                        id="playerVideo"
                        width="450px"
                        height="338px"
                        controls
                        src={record.href}
                      />
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default ObjectDetection;
