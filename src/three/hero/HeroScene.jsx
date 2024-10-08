import { Suspense } from 'react';

import { Canvas, useThree } from '@react-three/fiber';

import { Text, Float } from '@react-three/drei';
import { motion } from 'framer-motion-3d';

import BalloonModel from './BalloonModel';
import Camera from '../reusable/MovableCamera';

import styled from 'styled-components';

const HeroText = ({ text, position }) => {
  return (
    <Text
      position={position}
      letterSpacing={-0.01}
      font="/fonts/HelveticaNeueCyr-Bold.woff"
      fontSize={12}
      color="rgb(192, 192, 192)"
      material-toneMapped={false}
      material-fog={false}
      anchorY="middle"
    >
      {text}
      <motion.meshStandardMaterial />
    </Text>
  );
};

const InnerContainer = ({ mouseX, mouseY }) => {
  const { viewport } = useThree();
  return (
    <>
      <Camera
        mouseX={mouseX}
        mouseY={mouseY}
        fov={50}
        cameraZ={200}
        smoothTransformX={-5}
        smoothTransformY={2}
        stiffness={100}
        damping={15}
      />
      <ambientLight intensity={1.55} />

      <group position={[0, 35, 0]} scale={viewport.width / 10.5}>
        <group>
          <HeroText
            text="Denis Bilurka"
            position={[-37, 0, 20]}
          />
          <HeroText
            text="Full Stack Developer."
            position={[0, -14, 20]}
          />
        </group>
        {/* left */}
        <Float speed={0.7} rotationIntensity={0.1} floatIntensity={10}>
          <BalloonModel
            scale={5.1}
            position={[-57, -10, -10]}
            rotation={[0, 0.2, -5.5]}
            animate='visible' 
          />
        </Float>
        {/* top */}
        <Float speed={1} rotationIntensity={0.5} floatIntensity={25}>
          <BalloonModel
            scale={7}
            position={[5, 5, -5.5]}
            rotation={[0, 0.2, -0.1]}
            animate='visible' 
          />
        </Float>
        {/* right */}
        <Float speed={0.5} rotationIntensity={0.1} floatIntensity={20}>
          <BalloonModel
            scale={5}
            position={[60, -25, -5]}
            rotation={[-0.1, 0.2, 5.9]}   
          />
        </Float>
        {/* bottom */}
        <Float speed={0.8} rotationIntensity={0.1} floatIntensity={25}>
          <BalloonModel
            scale={3.8}
            position={[0, -48, 30]}
            rotation={[0, 0, 0.45]}
          />
        </Float>
        {/* background balloons */}
        <Float speed={0.5} rotationIntensity={0.1} floatIntensity={25}>
          <BalloonModel
            scale={3}
            position={[80, -75, -20]}
            rotation={[-0.1, 0.2, 5.3]}
          />
        </Float>
        <Float speed={0.5} rotationIntensity={0.1} floatIntensity={25}>
          <BalloonModel
            scale={3}
            position={[-80, -65, -20]}
            rotation={[-0.1, 0.2, 0.5]}
          />
        </Float>
      </group>
    </>
  );
};

const HeroScene = ({ mouseX, mouseY }) => {
  return (
    <ShapesContainer>
      <Container>
        <Suspense fallback={null}>
          <Canvas dpr={1} resize={{ scroll: false, offsetSize: true }}>
            <InnerContainer mouseX={mouseX} mouseY={mouseY} />
          </Canvas>
        </Suspense>
      </Container>
    </ShapesContainer>
  );
};

const ShapesContainer = styled.div`
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 150vh;
  max-width: 1920px;
  canvas {
    width: 100%;
    height: 100%;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 1050px) {
    width: 100vw;
    transform: translateY(0px);
    height: 30vh;
  }
`;

export default HeroScene;
