import ReactDOM from 'react-dom'
import React, { Suspense, useState } from 'react'
import { Canvas, useLoader } from 'react-three-fiber'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


export default function Model(props) {
  const gltf = useLoader(GLTFLoader, "Samples/lieutenantHead.gltf");
  return <primitive object={gltf.scene} dispose={null} />
}
