import { TransformControls, OrbitControls, PivotControls, Html } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react'

function Experience() {

    const sphere = useRef()
    const torusRef = useRef()
    const cubeRef = useRef()
    const groupRef = useRef()

    useFrame((state, delta) => {

        //console.log("hello");
        cubeRef.current.rotation.y += 1 * delta
        groupRef.current.rotation.y += 0.5 * delta

        const angle = state.clock.elapsedTime
        //const angle = state.clock.getElapsedTime()

        // state.camera.position.x = Math.sin(angle) * 8 
        // state.camera.position.z = Math.cos(angle) * 8
        // state.camera.lookAt(0,0,0)

    })

    return <>

        <OrbitControls makeDefault />
        <mesh ref={cubeRef}>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>


        <PivotControls anchor={[0, 0, 0]} depthTest={false} lineWidth={3} scale={100} fixed>
            <mesh ref={sphere} position-x={-3}>
                <sphereGeometry />
                < meshStandardMaterial color={"orange"} />
                <Html position={[0, 1.2, 0]} wrapperClass='label' center distanceFactor={0.01} occlude={[sphere, cubeRef]}>That's a sphere 🙌</Html>
            </mesh>
        </PivotControls>
        <mesh position={[5, 0, 0]} ref={torusRef}>
            <torusKnotGeometry />
            <meshStandardMaterial />
        </mesh>
        {/* <TransformControls mode="translate" object={torusRef}/>   */}


        <mesh position={[0, 0, 0]} position-x={-1} scale={[1, 2, 1]}>
            <sphereGeometry args={
                [1.5, 32, 32]
            } />
            <meshStandardMaterial color={"red"} wireframe />
        </mesh>


        <group ref={groupRef}>
            <mesh position-x={-2}>
                <sphereGeometry />
                <meshStandardMaterial color="orange" />
            </mesh>
            <mesh position-x={2}>
                <boxGeometry />
                <meshStandardMaterial color="mediumpurple" />
            </mesh>

        </group>

        <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
            <planeGeometry />
            <meshBasicMaterial color={"greenyellow"} />
        </mesh>


        {/*Se puede agregar a cualquier elemento que venga de Object3D */}
        <Html>
            Test
        </Html>
    </>
}

export default Experience