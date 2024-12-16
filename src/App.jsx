import './App.css'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import { SoftShadows } from '@react-three/drei'

function App() {


  return (
    <>
      <Canvas
        shadows
        // gl={{
        //   antialias: true
        // }}
        orthographic
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [3, 2, 6],
          zoom: 100
        }}>
        <SoftShadows />


        <Experience />

      </Canvas>

    </>
  )
}

export default App
