import { useRef } from "react";
import { MeshProps, Color } from "@react-three/fiber";
import { useSpring, a, config } from '@react-spring/three'
import { useControls, button } from 'leva'
import * as THREE from 'three'
import { useTexture } from "@react-three/drei";
import image from '../images/minecraft.png'

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
const [{ rotation }, setRotation] = useSpring(() => ({
    rotation: [0, 0, 0],
  }))

  const teste = useTexture(image)
  teste.magFilter = THREE.NearestFilter

  const control = useControls({
    position: {
      value: { x: 0, y: 0, z: 0 },
      step: 0.1,
      min: -3,
      max: 3,
    },
    // color,
    rotation: button(() => {
      setRotation({
        // @ts-ignore
         rotation: [0, mesh.current?.rotation.y + Math.random() * 3, 0],
         config: config.wobbly,
       })
     })
  })

  return (
    <a.mesh
      {...props}
      position={[
        control.position.x,
        control.position.y,
        control.position.z,
      ]}
      ref={mesh}
      // @ts-ignore
      rotation={rotation}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial map={teste} />
    </a.mesh>
  )
}
