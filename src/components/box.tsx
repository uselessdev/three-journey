import { MeshProps, Color } from "@react-three/fiber";
import { useRef } from "react";

interface Props extends MeshProps {
  color: Color
}

export function Box ({ color, ...props }: Props) {
  const mesh = useRef<MeshProps>()

  return (
    <mesh {...props} ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}
