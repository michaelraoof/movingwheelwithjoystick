import "./app.css";

import { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas ,useFrame} from '@react-three/fiber'
import { Html, useProgress ,useGLTF,OrbitControls} from '@react-three/drei'
import { useGamepads } from 'react-gamepads';
const buttonLabels = [
  "A",
  "B",
  "X",
  "Y",
  "L1",
  "R1",
  "L2",
  "R2",
  "Back",
  "Start",
  "L3",
  "R3",
  "UP",
  "DOWN",
  "LEFT",
  "RIGHT",
  "XBOX",
]

const axesLabels = [
  "LX",
  "LY",
  "RX",
  "RY",
]

function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}
function Model(props) {
  const wheel = useRef();
  const one = useRef();
  const sec = useRef();
  const third = useRef();
    const forth = useRef();
  const { nodes, materials } = useGLTF('/scene.gltf')
  useEffect(() => {
   /* const v3 = third.current.position;
    const v4 = forth.current.position;
    const w = wheel.current.position;
    console.log(third.current.position);
    third.current.geometry.center()
    forth.current.geometry.center()
    wheel.current.geometry.center()
  
wheel.current.geometry.rotateX(50);
    console.log(third.current.position);
    third.current.position.set(v3.x,v3.y,v3.z);
    forth.current.position.set(v4.x,v4.y,v4.z); 
    wheel.current.position.set(w.x,w.y,w.z);*/

  })
  useFrame(() => {
 //  console.log( wheel.current.geometry)
    wheel.current.geometry.center()
    wheel.current.position.set(15, 90, 0)
    console.log(props.direct)
    if (props.direct === -0.003921568393707275) {
      wheel.current.rotation.x -= 0;
    }
    else {
      wheel.current.rotation.x -= (0.1*props.direct);
    }
    })
  return (
    <group {...props} dispose={null} >
      <group rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
           <mesh ref={one} geometry={nodes.defaultMaterial.geometry} material={materials.Wheel_Ring_1001}/>
          <mesh ref={sec} geometry={nodes.defaultMaterial_1.geometry} material={materials.Mat_3_1001} />
   
    
       
         

          <mesh ref={third} geometry={nodes.defaultMaterial_2.geometry} material={materials.Mat_1001} />
          <mesh  ref={wheel} geometry={nodes.defaultMaterial_3.geometry} material={materials.Spokes_Wood_1001} />
            <mesh  ref={forth}  geometry={nodes.defaultMaterial_4.geometry} material={materials.Wheel_Ring_1001} />
   
  </group></group>

    </group>
  )
}
function App() {
  const [gamepads, setGamepads] = useState({});

  useGamepads(_gamepads => setGamepads(Object.values(_gamepads)));
  const [direct, setDirect] = useState(0.01);
  
  useEffect(() => {
    if (gamepads) {
 if(gamepads[0]!==undefined)
   setDirect(gamepads[0].axes[0]);
      //console.log(gamepads[0].buttons[0])
  }


},[gamepads[0]!==undefined?gamepads[0].axes[0]:[]])
  
  if (!gamepads) return "";
  
  return (
    <div className="product-canvas">   
          
 
      {
        /* 
        gamepads.length && gamepads.map((gp, gpindex) => {
        return (
          <div key={gpindex}>
            <div><span>ID:</span>{gp.id}</div>
            {gp.buttons.map((button, index) => {
              return (
                <div key={index}><span>{buttonLabels[index]}:</span><span>{button.value}</span></div>
              )
            })}
            {gp.axes.map((stick, index) => {
              return (
                <div key={index}><span>{index}:</span><span>{stick}</span></div>
              )
            })}
          </div>
        )
    })
      */
      }
  
          
    <Canvas >
      <Suspense  fallback={null} Loader={<Loader></Loader>}>
    <ambientLight />
        <spotLight intensity={0.9} 
                                     angle={0.1} 
                                     penumbra={1} 
                                     position={[10,15,10]}
            castShadow />
          <Model direct={direct}></Model>
    
        <OrbitControls enablePan={true}
                                         enableZoom={true}
                                         enableRotate={true}/>
    
    </Suspense>
    </Canvas>
</div>      );
}

export default App;
