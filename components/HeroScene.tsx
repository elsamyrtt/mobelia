"use client";

import { Canvas, useLoader, useThree } from "@react-three/fiber";
import type { GLProps } from "@react-three/fiber";
import { Suspense, useCallback, useEffect, useMemo, useState } from "react";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js";
import styles from "@/styles/Hero.module.css";

const MODEL_BASE = "/3d/";
const MODEL_WIDTH = 3.8;
type RendererFactory = Extract<GLProps, (...args: never[]) => unknown>;
type RendererOptions = Parameters<RendererFactory>[0];

function Sofa() {
    const viewportWidth = useThree((state) => state.viewport.width);
    const materials = useLoader(MTLLoader, `${MODEL_BASE}sofa.mtl`, (loader) => {
        loader.setResourcePath(MODEL_BASE);
    });
    const obj = useLoader(OBJLoader, `${MODEL_BASE}sofa.obj`, (loader) => {
        materials.preload();
        loader.setMaterials(materials);
    });

    const model = useMemo(() => {
        const clone = obj.clone(true);

        clone.traverse((object) => {
            if (!(object instanceof THREE.Mesh)) return;
            if (!object.geometry.attributes.normal) object.geometry.computeVertexNormals();

            const updateMaterial = (source: THREE.Material) => {
                if (!(source instanceof THREE.MeshPhongMaterial)) {
                    return new THREE.MeshStandardMaterial({
                        color: "#c4b39b",
                        roughness: 0.76,
                        metalness: 0,
                    });
                }
                if (source.map) source.map.colorSpace = THREE.SRGBColorSpace;
                return new THREE.MeshStandardMaterial({
                    color: source.color.clone(),
                    map: source.map,
                    normalMap: source.normalMap,
                    roughness: 0.68,
                    metalness: 0,
                });
            };

            object.material = Array.isArray(object.material)
                ? object.material.map(updateMaterial)
                : updateMaterial(object.material);
        });

        const bounds = new THREE.Box3().setFromObject(clone);
        const size = bounds.getSize(new THREE.Vector3());
        const largestDimension = Math.max(size.x, size.z);
        const modelWidth = Math.min(MODEL_WIDTH, viewportWidth * 0.6);
        if (largestDimension > 0) clone.scale.setScalar(modelWidth / largestDimension);

        const normalizedBounds = new THREE.Box3().setFromObject(clone);
        const center = normalizedBounds.getCenter(new THREE.Vector3());
        clone.position.set(-center.x, -normalizedBounds.min.y, -center.z);
        return clone;
    }, [obj, viewportWidth]);

    return (
        <group position={[viewportWidth > 5.2 ? viewportWidth * 0.12 : 0, 0, 0]} rotation={[0, -0.55, 0]}>
            <primitive object={model} />
        </group>
    );
}

function Ready({ onReady }: { onReady: () => void }) {
    useEffect(() => onReady(), [onReady]);
    return null;
}

function createRenderer(defaults: RendererOptions): THREE.WebGLRenderer {
    const renderer = new THREE.WebGLRenderer(defaults);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    return renderer;
}

export default function HeroScene(): React.JSX.Element {
    const [ready, setReady] = useState(false);
    const markReady = useCallback(() => setReady(true), []);

    return (
        <Canvas
            className={`${styles.webgl} ${ready ? styles.webglReady : ""}`}
            dpr={[1, 1.5]}
            frameloop="always"
            camera={{ fov: 0.4, position: [0, 1.6, 7.4], near: 0.1, far: 40 }}
            gl={createRenderer}
            style={{ pointerEvents: "none" }}
        >
            <Suspense fallback={null}>
                <ambientLight intensity={1.5} />
                <directionalLight position={[3, 6, 5]} intensity={2.4} />
                <directionalLight position={[-4, 3, -3]} intensity={1.2} color="#e6c89f" />
                <Sofa />
                <Ready onReady={markReady} />
            </Suspense>
        </Canvas>
    );
}
