import { MeshProps, Color } from "@react-three/fiber";
import { useRef } from "react";

interface Props extends MeshProps {
  color: Color
}

const sizes = 50 * 3 * 3
const positions = new Float32Array(sizes)

for (let i in positions) {
  positions[i] = Math.random() - 0.5
}

export function Box ({ color, ...props }: Props) {
  const mesh = useRef<MeshProps>()

  return (
    <mesh {...props} ref={mesh}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attachObject={['attributes', 'position']}
          array={positions}
          itemSize={3}
          count={positions.length / 3}
        />
      </bufferGeometry>

      <meshBasicMaterial attach="material" color={color} wireframe />
    </mesh>
  )
}
