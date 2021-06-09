import { Canvas } from '@react-three/fiber'

function App() {
  return (
    <div id="canvas-container">
      {/* position is: x, y, z */}
      <Canvas camera={{ fov: 75, position: [0, 0, 3] }}>
        {/* <ambientLight intensity={0.1} /> */}
        {/* <directionalLight color="red" position={[0,0,4]} /> */}

        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial color={0x00ff00} />
        </mesh>
      </Canvas>
    </div>
  )
}

export default App;
