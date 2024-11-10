import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const SpiralCircle: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(30, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(0, 0, 40);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.autoRotate = true;

    const ambientLight = new THREE.AmbientLight('white', 0.5);
    scene.add(ambientLight);

    const light = new THREE.DirectionalLight('white', 2);
    light.position.set(1, 1, 1);
    scene.add(light);

    const spiral = new THREE.Group();

    for (let i = 0; i < 50; i++) {
      const geometry = new THREE.TorusGeometry(8 + i * 0.2, 0.15, 16, 100);
      const material = new THREE.MeshStandardMaterial({
        color: 0x87ceeb,
        transparent: true,
        opacity: 0.7,
      });

      const ring = new THREE.Mesh(geometry, material);
      ring.rotation.x = Math.PI / 2;
      ring.rotation.z = i * 0.1;
      spiral.add(ring);
    }

    scene.add(spiral);

    const animationLoop = () => {
      spiral.rotation.z += 0.005;

      controls.update();
      renderer.render(scene, camera);
    };

    renderer.setAnimationLoop(animationLoop);

    return () => {
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '100vh' }} />;
};

export default SpiralCircle;
