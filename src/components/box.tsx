import { MeshProps, Color, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

interface Props extends MeshProps {
  color: Color
}

function useMouseposition() {
  const [positions, setPositions] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    window.addEventListener('mousemove', e => {
      setPositions({
        x: e.clientX / window.innerWidth - 0.5,
        y: -(e.clientY / window.innerHeight - 0.5)
      })
    })
  }, [])

  return positions
}

export function Box ({ color, ...props }: Props) {
  const mesh = useRef<MeshProps>()
  const { camera } = useThree()
  const cursor = useMouseposition()

  useEffect(() => {
    camera.position.y = cursor.y * 5
    camera.position.x = cursor.x * 3
    // @ts-ignore
    camera.lookAt(mesh.current.position)
  }, [cursor]) // eslint-disable-line

  return (
    <mesh {...props} ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}
