import React, { useRef, useState } from 'react';
import { Canvas, extend, useFrame, useThree } from 'react-three-fiber';
import Controls from './Components/Controls';
import Box from './Components/Elements/Box';


const ThreeDElem = ({
	props,
	Children
}) => {
	return (
		<Canvas style={{height: '100%', minHeight: '500px'}}>
			<ambientLight />
			<pointLight position={[10, 10, 10]} />
			<Box position={[-1.2, 0, 0]} />
			<Box position={[1.2, 0, 0]} />
			<Box position={[1.2, 0, 1.2]} />
			<Box position={[1.2, 1.2, 0]} />
			{Children}
			<Controls />
		</Canvas>
	);
};

export default ThreeDElem;
