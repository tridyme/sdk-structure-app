import React, { Suspense, useRef, useState } from 'react';
import { Canvas, extend, useFrame, useThree } from 'react-three-fiber';
import Controls from './Components/Controls';
import Box from './Components/Elements/Box';
import Node from './Components/Elements/Node';
import Line from './Components/Elements/Line';
import Model from './Components/Elements/Model';
import Arrow from './Components/Elements/Arrow';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const listnodes = [
	{ name: 'A', X: 0, Y: 0, Z: 0 },
	{ name: 'B', X: 3, Y: 3, Z: 0 },	
	{ name: 'C', X: -3, Y: 3, Z: 0 },
]

const ThreeDElem = ({
	props,
	Children
}) => {
	const [ listNodes, setListNodes ] = useState(listnodes);


	
	return (
		<Canvas
			//orthographic
			style={{height: '100%', minHeight: '500px'}}
		>
			<ambientLight />
			<pointLight position={[10, 10, 10]} />
			<axesHelper />
			<gridHelper size={100} divisions={100}/>
			{listNodes.map((item, index) => {
				return (
					<Node position={[item.X, item.Y, item.Z]} key={index}/>
				)
			})}
			<Line />
			{/*			<Suspense fallback={null}>
        <Model />
		</Suspense>*/}
			{Children}
			<Controls />
		</Canvas>
	);
};

export default ThreeDElem;
