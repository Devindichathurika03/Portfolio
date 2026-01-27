import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, OrbitControls, Preload, useTexture } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <mesh castShadow receiveShadow scale={2.75}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color="#fff8eb"
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading
      />
      <Decal
        position={[0, 0, 1]}
        rotation={[0, 0, 0]}
        scale={1}
        map={decal}
        flatShading
      />
    </mesh>
  );
};

const BallCanvas = ({ icon }) => (
  <Canvas frameloop="demand" dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls
        enableZoom={false}        // no zoom
        enablePan={false}         // no panning
        rotateSpeed={0.5}         // drag sensitivity
        minPolarAngle={Math.PI / 2} // lock vertical rotation
        maxPolarAngle={Math.PI / 2} // lock vertical rotation
      />
        {/* Lights */}
  <ambientLight intensity={0.7} />        {/* general soft light */}
  <directionalLight position={[2, 2, 2]} intensity={1} /> {/* strong directional light */}
  <pointLight position={[-2, -2, 2]} intensity={0.5} />  {/* optional fill light */}

      <Ball imgUrl={icon} />
    </Suspense>
    <Preload all />
  </Canvas>
);

export default BallCanvas;

