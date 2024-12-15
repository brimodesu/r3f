import './App.css'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'

function App() {


  return (
    <>
      <Canvas
        
        gl={{
          antialias: true
        }}
        orthographic
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [3, 2, 6],
          zoom: 100
        }}>
        <ambientLight intensity={0.5} />
        <directionalLight color="white" position={[0, 0, 5]} />
        <Experience />

      </Canvas>

    </>
  )
}

export default App
