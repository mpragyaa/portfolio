import React, { useEffect, useRef, useState } from 'react';

export default function IntroSequence({ onComplete }) {
  const canvasRef = useRef(null);
  const [phase, setPhase] = useState(0); // 0: orb breathing, 1: orb opening/exploding light, 2: name reveal, 3: shrink to wordmark, 4: done
  const [isSkipped, setIsSkipped] = useState(false);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  // Handle immediate skip
  const handleSkip = () => {
    setIsSkipped(true);
    if (onComplete) onComplete();
  };

  useEffect(() => {
    // Check reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      handleSkip();
      return;
    }

    // Keydown listener to skip
    const onKeyDown = (e) => {
      handleSkip();
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  // WebGL Iridescent Pink-to-Blue Movexa Orb
  useEffect(() => {
    if (isSkipped) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl');
    if (!gl) return;

    const vsSource = `
      attribute vec2 a_position;
      varying vec2 v_uv;
      void main() {
        v_uv = (a_position + 1.0) * 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    // High quality fragment shader for iridescent pink-to-blue Movexa orb
    const fsSource = `
      precision highp float;
      varying vec2 v_uv;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      uniform float u_expand;
      uniform float u_dissolve;

      // Noise functions
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
      vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

      float snoise(vec3 v) {
        const vec2 C = vec2(1.0/6.0, 1.0/3.0);
        const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
        vec3 i  = floor(v + dot(v, C.yyy));
        vec3 x0 = v - i + dot(i, C.xxx);
        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min(g.xyz, l.zxy);
        vec3 i2 = max(g.xyz, l.zxy);
        vec3 x1 = x0 - i1 + C.xxx;
        vec3 x2 = x0 - i2 + C.yyy;
        vec3 x3 = x0 - D.yyy;
        i = mod289(i);
        vec4 p = permute(permute(permute(
                  i.z + vec4(0.0, i1.z, i2.z, 1.0))
                + i.y + vec4(0.0, i1.y, i2.y, 1.0))
                + i.x + vec4(0.0, i1.x, i2.x, 1.0));
        float n_ = 0.142857142857;
        vec3  ns = n_ * D.wyz - D.xzx;
        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_);
        vec4 x = x_ *ns.x + ns.yyyy;
        vec4 y = y_ *ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);
        vec4 b0 = vec4(x.xy, y.xy);
        vec4 b1 = vec4(x.zw, y.zw);
        vec4 s0 = floor(b0)*2.0 + 1.0;
        vec4 s1 = floor(b1)*2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));
        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
        vec3 p0 = vec3(a0.xy, h.x);
        vec3 p1 = vec3(a0.zw, h.y);
        vec3 p2 = vec3(a1.xy, h.z);
        vec3 p3 = vec3(a1.zw, h.w);
        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
        p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
      }

      void main() {
        vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.x, u_resolution.y);
        
        // Mouse tilt influence
        vec2 m = u_mouse * 0.15;
        uv -= m;

        float dist = length(uv);
        float baseRadius = 0.28 * (1.0 + u_expand * 4.5);

        // Fluid noise coordinates inside sphere
        vec3 noiseCoord = vec3(uv * 3.5, u_time * 0.65);
        float n1 = snoise(noiseCoord);
        float n2 = snoise(noiseCoord + vec3(4.2, 1.8, u_time * 0.4));
        float n3 = snoise(noiseCoord * 2.0 - vec3(u_time * 0.3));

        // Movexa Iridescent Palette:
        // Hot vibrant pink/magenta
        vec3 colPink = vec3(1.0, 0.22, 0.62);
        // Deep vibrant blue
        vec3 colBlue = vec3(0.12, 0.45, 1.0);
        // Soft lilac/lavender
        vec3 colLavender = vec3(0.68, 0.45, 0.98);
        // Luminous sky cyan
        vec3 colCyan = vec3(0.25, 0.85, 0.98);
        // Pure inner white specular core
        vec3 colWhite = vec3(1.0, 1.0, 1.0);

        // Gradient mesh blending
        float t1 = smoothstep(-1.0, 1.0, n1 + uv.x * 1.5);
        float t2 = smoothstep(-1.0, 1.0, n2 - uv.y * 1.5);
        float t3 = smoothstep(-0.8, 0.8, n3);

        vec3 orbColor = mix(colPink, colBlue, t1);
        orbColor = mix(orbColor, colLavender, t2 * 0.8);
        orbColor = mix(orbColor, colCyan, (1.0 - t1) * t3 * 0.6);

        // Sphere rim and Fresnel glow
        float sphereMask = smoothstep(baseRadius + 0.02, baseRadius - 0.02, dist);
        float rimGlow = pow(dist / (baseRadius + 0.001), 3.0) * sphereMask;
        float outerGlow = exp(-dist * 5.5) * 1.2;

        // Add specular highlight
        vec2 lightPos = vec2(-0.08, 0.1) + m * 0.5;
        float spec = exp(-length(uv - lightPos) * 8.0) * 0.85;

        // Final composite color
        vec3 finalCol = orbColor + rimGlow * colLavender * 0.8 + spec * colWhite;
        finalCol += outerGlow * mix(colPink, colBlue, 0.5) * 0.6;

        // Dissolve / Expand behavior
        float alpha = sphereMask + outerGlow * 0.4;
        if (u_dissolve > 0.0) {
          alpha *= (1.0 - u_dissolve);
          finalCol += vec3(u_dissolve * 1.5); // white flash expansion
        }

        // Add subtle filmic grain
        float grain = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
        finalCol += (grain - 0.5) * 0.04;

        gl_FragColor = vec4(finalCol, clamp(alpha, 0.0, 1.0));
      }
    `;

    function createShader(gl, type, source) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vs = createShader(gl, gl.VERTEX_SHADER, vsSource);
    const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const aPos = gl.getAttribLocation(program, 'a_position');
    const uTime = gl.getUniformLocation(program, 'u_time');
    const uRes = gl.getUniformLocation(program, 'u_resolution');
    const uMouse = gl.getUniformLocation(program, 'u_mouse');
    const uExpand = gl.getUniformLocation(program, 'u_expand');
    const uDissolve = gl.getUniformLocation(program, 'u_dissolve');

    let animId;
    let startTime = performance.now();

    const resize = () => {
      canvas.width = window.innerWidth * Math.min(window.devicePixelRatio, 2);
      canvas.height = window.innerHeight * Math.min(window.devicePixelRatio, 2);
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e) => {
      mouseRef.current.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.targetY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove);

    const render = () => {
      animId = requestAnimationFrame(render);
      const now = performance.now();
      const elapsed = (now - startTime) / 1000;

      // Mouse lerp
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.useProgram(program);
      gl.enableVertexAttribArray(aPos);
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

      gl.uniform1f(uTime, elapsed);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform2f(uMouse, mouseRef.current.x, mouseRef.current.y);

      // Sequence timeline:
      // 0 - 1.6s: Breathing orb
      // 1.6 - 2.6s: Expand / dissolve
      let expand = 0;
      let dissolve = 0;

      if (elapsed > 1.6) {
        expand = Math.min(1.0, (elapsed - 1.6) / 0.8);
      }
      if (elapsed > 2.2) {
        dissolve = Math.min(1.0, (elapsed - 2.2) / 0.7);
      }

      gl.uniform1f(uExpand, expand);
      gl.uniform1f(uDissolve, dissolve);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
    };

    render();

    // Timeline state updates
    const t1 = setTimeout(() => setPhase(1), 1600); // Orb opens / expands
    const t2 = setTimeout(() => setPhase(2), 2500); // Huge name reveals from core
    const t3 = setTimeout(() => setPhase(3), 3900); // Name shrinks into wordmark
    const t4 = setTimeout(() => {
      setPhase(4);
      if (onComplete) onComplete();
    }, 4900);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [isSkipped]);

  if (phase === 4 || isSkipped) return null;

  return (
    <div
      onClick={handleSkip}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#050505] transition-opacity duration-700 cursor-pointer select-none ${
        phase === 3 ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Movexa WebGL Orb Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          opacity: phase >= 2 ? 0.3 : 1,
          transition: 'opacity 0.6s ease',
        }}
      />

      {/* Huge PRAGYA MEHTA Reveal */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center px-4"
        style={{
          transform:
            phase === 3
              ? 'scale(0.14) translate(-42vw, -45vh)'
              : phase >= 2
              ? 'scale(1) translate(0, 0)'
              : 'scale(0.8) translate(0, 20px)',
          opacity: phase >= 2 ? 1 : 0,
          transition:
            phase === 3
              ? 'transform 0.9s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.7s ease'
              : 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease',
        }}
      >
        <h1
          className="font-headline font-black text-[12vw] sm:text-[10vw] tracking-tighter leading-none text-white uppercase select-none chrome-text whitespace-nowrap"
          style={{
            textShadow: '0 0 60px rgba(255,255,255,0.4)',
            letterSpacing: '-0.04em',
          }}
        >
          PRAGYA MEHTA.
        </h1>
        <p
          className={`font-mono text-xs sm:text-sm tracking-[0.3em] uppercase text-[#A1A1AA] mt-4 transition-opacity duration-500 ${
            phase === 2 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          CREATIVE DEVELOPER
        </p>
      </div>

      {/* Skip Prompt */}
      <div className="absolute bottom-8 right-8 z-20 flex items-center gap-2 font-mono text-[10px] tracking-widest text-[#71717A] uppercase bg-black/60 px-3 py-1.5 border border-white/10 rounded-full">
        <span>CLICK OR PRESS ANY KEY TO SKIP</span>
      </div>
    </div>
  );
}
