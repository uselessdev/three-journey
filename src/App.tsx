import { Canvas } from '@react-three/fiber'
import { Box } from './components/box'

function App() {
  return (
    <div id="canvas-container">
      <Canvas camera={{ fov: 75, position: [0, 0, 3], far: 75 }}>
        <group position={[0, 0.25, 0]} rotation={[0, 1, 0]}>
          <Box color={0xff0000} position={[-2, 0, 0]} />
          <Box color={0x00ff00} position={[0, 0, 0]} />
          <Box color={0x0000ff} position={[2, 0, 0]} />
        </group>
      </Canvas>
    </div>
  )
}

export default App;
