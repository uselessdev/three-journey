import { MeshProps, Color } from "@react-three/fiber";
import { useRef, useState } from "react";
import { useSpring, animated, config } from '@react-spring/three'

interface Props extends MeshProps {
  color: Color
}

export function Box ({ color, ...props }: Props) {
  const [status, setStatus] = useState(0)
  const mesh = useRef<MeshProps>()
  const { spring } = useSpring({ spring: status, config: config.wobbly })

  const rotation = spring.to([0, 1], [0, Math.PI])

  return (
    <animated.mesh position-x={rotation} {...props} ref={mesh} onClick={() => setStatus(Number(!status))}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </animated.mesh>
  )
}
