/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: stefan.andolf (https://sketchfab.com/stefan.andolf)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/ships-wheel-118d0fa6d01947b7823878769834bfd8
title: Ship's Wheel
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.defaultMaterial.geometry} material={materials.Wheel_Ring_1001} />
          <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials.Mat_3_1001} />
          <mesh geometry={nodes.defaultMaterial_2.geometry} material={materials.Mat_1001} />
          <mesh geometry={nodes.defaultMaterial_3.geometry} material={materials.Spokes_Wood_1001} />
          <mesh geometry={nodes.defaultMaterial_4.geometry} material={materials.Wheel_Ring_1001} />
        </group>
      </group>
    </group>
  )
}


useGLTF.preload('/scene.gltf')