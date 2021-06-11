import { MeshProps, Color } from "@react-three/fiber";

interface Props extends MeshProps {
  color: Color
}

export function Box ({ color, ...props }: Props) {
  return (
    <mesh {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color={color} />
    </mesh>
  )
}
