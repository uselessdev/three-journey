import { useRef, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Box } from './components/box'

function App() {
  const cameraRef = useRef()

  return (
    <Suspense fallback={null}>
      <div id="canvas-container">
        <Canvas camera={{ fov: 75, position: [0, 0, 3] }}>
          <PerspectiveCamera ref={cameraRef} makeDefault fov={75} position={[0, 0, 3]} />

          {/* @ts-ignore */}
          <OrbitControls autoRotate camera={cameraRef.current} />

          <Box color="royalblue" position={[0, 0, 0]} />

          <ambientLight intensity={0.1} />
          <directionalLight castShadow />
        </Canvas>
      </div>
    </Suspense>
  )
}

export default App;
