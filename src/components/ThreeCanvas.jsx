import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeCanvas({ scrollProgress = 0, activeSection = 'hero' }) {
  const mountRef = useRef(null);
  const stateRef = useRef({
    scrollProgress: 0,
    mouseX: 0,
    mouseY: 0,
    targetMouseX: 0,
    targetMouseY: 0,
  });

  useEffect(() => {
    stateRef.current.scrollProgress = scrollProgress;
  }, [scrollProgress]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Scene
    const scene = new THREE.Scene();

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 7.0);

    // 3. High-Performance WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      powerPreference: 'high-performance',
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // 4. Generate Crisp Circular Dot Texture (Prevents blocky square particles)
    const createCircleTexture = () => {
      const c = document.createElement('canvas');
      c.width = 64;
      c.height = 64;
      const ctx = c.getContext('2d');
      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 30);
      grad.addColorStop(0, 'rgba(255,255,255,1)');
      grad.addColorStop(0.5, 'rgba(255,255,255,0.85)');
      grad.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(32, 32, 30, 0, Math.PI * 2);
      ctx.fill();
      const tex = new THREE.CanvasTexture(c);
      return tex;
    };
    const circleTexture = createCircleTexture();

    // 5. Sparse 3-Depth-Layer Particle System (Tied strictly to Scroll)
    // Helper to generate distributed positions
    const createLayerGeometry = (count, xSpread, ySpread, zMin, zMax) => {
      const geo = new THREE.BufferGeometry();
      const positions = new Float32Array(count * 3);
      for (let i = 0; i < count * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * xSpread;
        positions[i + 1] = (Math.random() - 0.5) * ySpread;
        positions[i + 2] = zMin + Math.random() * (zMax - zMin);
      }
      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      return geo;
    };

    // Layer 1: Background Layer (Slow, subtle movement, soft-grey, deep in Z)
    const bgCount = prefersReducedMotion ? 60 : 180;
    const bgGeo = createLayerGeometry(bgCount, 32, 55, -16, -10);
    const bgMat = new THREE.PointsMaterial({
      color: 0x64748b, // Soft muted grey
      size: 0.12,
      map: circleTexture,
      transparent: true,
      opacity: 0.45,
      depthWrite: false,
    });
    const bgLayer = new THREE.Points(bgGeo, bgMat);
    scene.add(bgLayer);

    // Layer 2: Middle Layer (Moderate movement, silver-grey, mid Z)
    const midCount = prefersReducedMotion ? 40 : 120;
    const midGeo = createLayerGeometry(midCount, 26, 48, -9, -4);
    const midMat = new THREE.PointsMaterial({
      color: 0x94a3b8, // Light silver-grey
      size: 0.16,
      map: circleTexture,
      transparent: true,
      opacity: 0.65,
      depthWrite: false,
    });
    const midLayer = new THREE.Points(midGeo, midMat);
    scene.add(midLayer);

    // Layer 3: Foreground Layer (More pronounced movement, crisp white, near Z)
    const fgCount = prefersReducedMotion ? 25 : 70;
    const fgGeo = createLayerGeometry(fgCount, 22, 42, -3, 2);
    const fgMat = new THREE.PointsMaterial({
      color: 0xf8fafc, // Crisp white
      size: 0.22,
      map: circleTexture,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
    });
    const fgLayer = new THREE.Points(fgGeo, fgMat);
    scene.add(fgLayer);

    // Mouse listeners for subtle parallax damping on desktop
    const handleMouseMove = (e) => {
      stateRef.current.targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      stateRef.current.targetMouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Resize listener
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener('resize', handleResize, { passive: true });

    let animationFrameId;

    // Animation Loop: Smooth Scroll-Driven Parallax
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const s = stateRef.current;
      s.mouseX += (s.targetMouseX - s.mouseX) * 0.05;
      s.mouseY += (s.targetMouseY - s.mouseY) * 0.05;

      const p = s.scrollProgress; // 0 (Hero) to 1 (Contact)

      // 3 Distinct Depth Rates tied continuously to scroll position:
      // Background layer moves slowly
      const bgTargetY = p * 4.5;
      bgLayer.position.y += (bgTargetY - bgLayer.position.y) * 0.08;
      bgLayer.position.x = s.mouseX * 0.15;

      // Middle layer moves at moderate rate
      const midTargetY = p * 9.5;
      midLayer.position.y += (midTargetY - midLayer.position.y) * 0.08;
      midLayer.position.x = s.mouseX * 0.35;

      // Foreground layer moves with pronounced rate
      const fgTargetY = p * 16.0;
      fgLayer.position.y += (fgTargetY - fgLayer.position.y) * 0.08;
      fgLayer.position.x = s.mouseX * 0.65;

      // Camera subtle tracking
      camera.position.x += (s.mouseX * 0.25 - camera.position.x) * 0.05;
      camera.position.y += (s.mouseY * 0.25 - camera.position.y) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      bgGeo.dispose();
      bgMat.dispose();
      midGeo.dispose();
      midMat.dispose();
      fgGeo.dispose();
      fgMat.dispose();
      circleTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      id="canvas-container"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
      aria-hidden="true"
    />
  );
}
