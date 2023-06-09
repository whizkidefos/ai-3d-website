import React, { useRef } from 'react';
import { easing } from 'maath';
import { useFrame } from '@react-three/fiber';
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';

import state from '../store';

const Backdrop = () => {
  const shadows = useRef();

  return (
    <AccumulativeShadows 
      position={[0, 0, -0.14]}
      ref={shadows}
      opacity={0.2}
      frames={60}
      alphatest={0.85}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
    >
      <RandomizedLight 
        amount={4}
        radius={9}
        intensity={0.5}
        ambient={0.25}
        position={[5, 5, -10]} 
      />
    </AccumulativeShadows>
  )
}

export default Backdrop;