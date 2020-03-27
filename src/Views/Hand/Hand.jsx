import React from "react";
// import "./styles.css";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import { Canvas, useFrame } from "react-three-fiber";

const scale = point => -(point - 70) / 50;

const Finger = ({ predictionsRef, fingerName }) => {
  const jointBottom = React.useRef();
  const jointMiddleBottom = React.useRef();
  const jointMiddleTop = React.useRef();
  const jointTop = React.useRef();

  const updateJoint = (point, thumb) => {
    thumb.current.position.x = scale(point[0]);
    thumb.current.position.y = scale(point[1]);
    thumb.current.position.z = scale(point[2]);
  };

  useFrame(() => {
    if (predictionsRef.current.length) {
      updateJoint(
        predictionsRef.current[0].annotations[fingerName][0],
        jointBottom
      );
      updateJoint(
        predictionsRef.current[0].annotations[fingerName][1],
        jointMiddleBottom
      );
      updateJoint(
        predictionsRef.current[0].annotations[fingerName][2],
        jointMiddleTop
      );
      updateJoint(
        predictionsRef.current[0].annotations[fingerName][3],
        jointTop
      );
    }
  });

  return (
    <>
      <mesh castShadow receiveShadow ref={jointBottom} scale={[1, 1, 1]}>
        <sphereBufferGeometry attach="geometry" args={[0.1, 32, 32]} />
        <meshStandardMaterial attach="material" color="white" />
      </mesh>
      <mesh castShadow receiveShadow ref={jointMiddleBottom} scale={[1, 1, 1]}>
        <sphereBufferGeometry attach="geometry" args={[0.1, 32, 32]} />
        <meshStandardMaterial attach="material" color="white" />
      </mesh>
      <mesh castShadow receiveShadow ref={jointMiddleTop} scale={[1, 1, 1]}>
        <sphereBufferGeometry attach="geometry" args={[0.1, 32, 32]} />
        <meshStandardMaterial attach="material" color="white" />
      </mesh>
      <mesh castShadow receiveShadow ref={jointTop} scale={[1, 1, 1]}>
        <sphereBufferGeometry attach="geometry" args={[0.1, 32, 32]} />
        <meshStandardMaterial attach="material" color="#eb3b5a" />
      </mesh>
    </>
  );
};

const Hand = ({ predictionsRef }) => {
  const palm = React.useRef();

  useFrame(() => {
    if (predictionsRef.current.length) {
      const point = predictionsRef.current[0].annotations.palmBase[0];
      palm.current.position.x = scale(point[0]);
      palm.current.position.y = scale(point[1]);
      palm.current.position.z = scale(point[2]);
    }
  });

  return (
    <>
      <mesh castShadow receiveShadow ref={palm} scale={[1, 1, 1]}>
        <sphereBufferGeometry attach="geometry" args={[0.1, 32, 32]} />
        <meshStandardMaterial attach="material" color="#3867d6" />
      </mesh>
      <Finger predictionsRef={predictionsRef} fingerName="thumb" />
      <Finger predictionsRef={predictionsRef} fingerName="ringFinger" />
      <Finger predictionsRef={predictionsRef} fingerName="middleFinger" />
      <Finger predictionsRef={predictionsRef} fingerName="indexFinger" />
      <Finger predictionsRef={predictionsRef} fingerName="pinky" />
    </>
  );
};

export default function App() {
  const webcamRef = React.useRef(null);
  const modelRef = React.useRef(null);
  const requestRef = React.useRef(null);
  const predictionsRef = React.useRef(null);
  const [ready, setReady] = React.useState(false);

  const capture = React.useCallback(async () => {
    if (webcamRef.current && modelRef.current) {
      const predictions = await modelRef.current.estimateHands(
        webcamRef.current.getCanvas(),
        true
      );

      if (predictions) {
        predictionsRef.current = predictions;
      }

      if (!ready) {
        setReady(true);
      }
    }

    requestRef.current = requestAnimationFrame(capture);
  }, [webcamRef, ready]);

  React.useEffect(() => {
    const load = async () => {
      modelRef.current = await handpose.load();
    };

    load();
  }, [capture]);

  return (
    <>
      <Canvas shadowMap sRGB camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.4} />
        <spotLight
          position={[3, 0, 11]}
          angle={0.6}
          penumbra={1}
          intensity={0.2}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-bias={-0.0001}
        />
        <mesh position={[0, 0, -10]} receiveShadow castShadow>
          <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
          <meshPhongMaterial attach="material" color="#00010a" />
        </mesh>
        {ready && <Hand predictionsRef={predictionsRef} />}
      </Canvas>
      <div
        style={{
          position: "absolute",
          right: 10,
          top: 10
        }}
      >
        <Webcam
          width="200"
          height="113"
          mirrored
          id="webcam"
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
        />
      </div>
      {!ready && (
        <div
          style={{
            backgroundColor: "rgba(23,32,23,0.3)",
            position: "absolute",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            right: 0,
            top: 0,
            left: 0,
            bottom: 0
          }}
        >
          <button
            onClick={() => {
              requestRef.current = requestAnimationFrame(capture);
            }}
          >
            Start hand tracking{" "}
            <span role="img" aria-label="Start">
              🖐
            </span>
          </button>
        </div>
      )}
    </>
  );
}
