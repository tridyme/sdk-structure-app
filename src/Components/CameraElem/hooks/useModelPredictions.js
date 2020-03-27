import { useState, useEffect } from "react";
import * as cocoSsd from "@tensorflow-models/coco-ssd";

export function useModelPredictions() {
  const [model, setModel] = useState(null);

  useEffect(() => {
    async function loadModel() {
      try {
        const modelLoaded = await cocoSsd.load();
        setModel(modelLoaded);
        console.log('LOAD MODEL');
      } catch(err) {
        // Removed for brevity
      }
    }
    loadModel();

	}, []);
	

  return model;
}
