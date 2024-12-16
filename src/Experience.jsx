import { TransformControls, OrbitControls, PivotControls, Html, Text, Float, MeshReflectorMaterial } from '@react-three/drei';
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
            <mesh position-x={-2} castShadow>
                <sphereGeometry />
                <meshStandardMaterial color="orange" />
            </mesh>
            <mesh position-x={2} castShadow>
                <boxGeometry />
                <meshStandardMaterial color="mediumpurple" roughness={0.5} metalness={0.5} />
            </mesh>

        </group>

        {/* <ambientLight intensity={0.5} castShadow /> */}
        {/* <directionalLight color="white" position={[0, 0, 5]} /> */}
        <PivotControls>
            <directionalLight
                position={[3.3, 1.0, 4.4]}
                castShadow
                intensity={Math.PI * 2}
            />
        </PivotControls>


        <mesh position-y={-1} position-z={-5} rotation-z={-Math.PI * 0.5} scale={10} receiveShadow>
            <planeGeometry />
            {/* <meshBasicMaterial color={"greenyellow"} /> */}
            <MeshReflectorMaterial mirror={0} resolution={512} blur={[1000, 1000]} mixBlur={1} color={"greenyellow"} />
        </mesh>

        <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10} receiveShadow>
            <planeGeometry />
            {/* <meshBasicMaterial color={"greenyellow"} /> */}
            <MeshReflectorMaterial mirror={0} resolution={512} blur={[1000, 1000]} mixBlur={1} />
        </mesh>

        <Float speed={5} floatIntensity={2}>
            <Text
                //font="https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxP.ttf" // URL to the font file
                font='/black-han-sans-v23-latin/black-han-sans-v23-latin-regular.woff'
                fontSize={2}
                color="salmon"
                position={[0, 2, 0]}
                maxWidth={3}
                anchorX="center"
                anchorY="middle"
            >I LOVE R3F</Text>

        </Float>
        {/*Se puede agregar a cualquier elemento que venga de Object3D */}
        <Html>
            Test
        </Html>
    </>
}

export default Experience