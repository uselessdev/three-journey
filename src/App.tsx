import { Canvas } from '@react-three/fiber'
import { Box } from './components/box'

function App() {
  return (
    <div id="canvas-container">
      <Canvas camera={{ fov: 75, position: [-3, 3, 3] }}>
        <Box color="royalblue" position={[0, 0, 0]} />

        <ambientLight intensity={0.1} />
        <directionalLight castShadow />
      </Canvas>
    </div>
  )
}

export default App;
