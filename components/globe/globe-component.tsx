"use client";

import { useEffect, forwardRef } from 'react';
import ReactGlobe from 'react-globe.gl';
import * as THREE from 'three';

interface GlobeProps {
  globeRef: any;
  [key: string]: any;
}

const GlobeComponent = forwardRef<any, GlobeProps>(({ globeRef, ...props }, _ref) => {
  useEffect(() => {
    if (globeRef?.current) {
      const scene = globeRef.current.scene();
      const controls = globeRef.current.controls();

      // Enhanced lighting
      const ambientLight = new THREE.AmbientLight(0xbbbbbb, 0.3);
      scene.add(ambientLight);
      
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(1, 1, 1);
      scene.add(directionalLight);

      const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.2);
      scene.add(hemisphereLight);

      // Configure controls
      if (controls) {
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.rotateSpeed = 0.5;
        controls.zoomSpeed = 0.8;
        controls.minDistance = 120;
        controls.maxDistance = 500;
        controls.enablePan = true;
        controls.panSpeed = 0.5;
        controls.autoRotate = false;
      }

      // Animation loop
      let animationFrame: number;
      const animate = () => {
        animationFrame = requestAnimationFrame(animate);
        controls.update();
      };
      animate();

      return () => {
        cancelAnimationFrame(animationFrame);
      };
    }
  }, [globeRef]);

  return <ReactGlobe ref={globeRef} {...props} />;
});

GlobeComponent.displayName = 'GlobeComponent';

export default GlobeComponent;