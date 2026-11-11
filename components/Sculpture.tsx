"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { usePathname } from "next/navigation";
import * as THREE from "three";

/**
 * The centrepiece: a liquid form that travels with the scroll. Raven body,
 * powder-blue rim light, poppy-red heat in the folds that builds toward the
 * contact section. Colours mirror the tokens in app/globals.css.
 */

// 3D simplex noise — Ian McEwan / Ashima Arts, MIT licence.
const NOISE = /* glsl */ `
vec4 permute(vec4 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod(i, 289.0);
  vec4 p = permute(permute(permute(
    i.z + vec4(0.0, i1.z, i2.z, 1.0)) +
    i.y + vec4(0.0, i1.y, i2.y, 1.0)) +
    i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 1.0 / 7.0;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}
`;

const vertexShader = /* glsl */ `
uniform float uTime;
uniform float uAmp;
varying vec3 vNormal;
varying vec3 vView;
varying float vDisp;
${NOISE}

float field(vec3 n) {
  vec3 flow = vec3(0.0, uTime * 0.16, uTime * 0.09);
  return snoise(n * 1.15 + flow) * 0.7 + snoise(n * 2.6 - flow * 1.4) * 0.22;
}

vec3 displaced(vec3 n) {
  return n * (1.0 + field(n) * uAmp);
}

void main() {
  vec3 n = normalize(position);
  float d = field(n);
  vec3 p = n * (1.0 + d * uAmp);

  // Re-derive the normal from two displaced neighbours on the tangent plane.
  vec3 helper = abs(n.y) > 0.99 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
  vec3 t = normalize(cross(n, helper));
  vec3 b = cross(n, t);
  float e = 0.012;
  vec3 pt = displaced(normalize(n + t * e));
  vec3 pb = displaced(normalize(n + b * e));
  vec3 dn = normalize(cross(pt - p, pb - p));

  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  vNormal = normalize(normalMatrix * dn);
  vView = -mv.xyz;
  vDisp = d;
  gl_Position = projectionMatrix * mv;
}
`;

const fragmentShader = /* glsl */ `
uniform vec3 uBase;
uniform vec3 uRim;
uniform vec3 uHot;
uniform float uHeat;
varying vec3 vNormal;
varying vec3 vView;
varying float vDisp;

void main() {
  vec3 n = normalize(vNormal);
  vec3 v = normalize(vView);
  vec3 l = normalize(vec3(-0.55, 0.8, 0.6));

  float fres = pow(1.0 - max(dot(n, v), 0.0), 2.4);
  float diff = max(dot(n, l), 0.0);
  float spec = pow(max(dot(n, normalize(l + v)), 0.0), 70.0);
  // Heat pools in the valleys of the displacement field.
  float fold = smoothstep(0.08, -0.6, vDisp);

  vec3 col = uBase * (0.3 + 1.1 * diff);
  col += uRim * (fres * 0.9 + spec * 0.7);
  col = mix(col, uHot, fold * (0.3 + 0.7 * uHeat) * (0.55 + 0.45 * fres));

  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
}
`;

// Where the form sits. x / y are fractions of the visible width / height
// (0 = centre); s is relative size.
type Pose = { x: number; y: number; s: number; heat: number; amp: number };

const HERO: Pose = { x: 0, y: 0.02, s: 0.92, heat: 0.1, amp: 0.2 };
const STATEMENT: Pose = { x: 0.36, y: -0.05, s: 0.6, heat: 0.15, amp: 0.26 };
const WORK_IN: Pose = { x: 0.38, y: -0.34, s: 0.45, heat: 0.25, amp: 0.3 };
const WORK_OUT: Pose = { x: -0.38, y: 0.34, s: 0.45, heat: 0.4, amp: 0.3 };
const ABOUT: Pose = { x: 0.56, y: 0.3, s: 0.5, heat: 0.5, amp: 0.24 };
const CONTACT: Pose = { x: 0.3, y: -0.86, s: 1.2, heat: 1, amp: 0.34 };
// Case studies and 404: parked top-right, out of the reading column.
const ELSEWHERE: Pose = { x: 0.4, y: 0.3, s: 0.42, heat: 0.35, amp: 0.26 };

const KEYS = ["x", "y", "s", "heat", "amp"] as const;

/**
 * Pose for the current scroll position on the home page, plus overall
 * progress (0 → 1) for rotation. Stops are measured from the real sections,
 * so the choreography holds at any viewport or content length.
 */
function homePose(): { pose: Pose; progress: number } {
  const y = window.scrollY;
  const vh = window.innerHeight;
  const [work, about, contact] = ["work", "about", "contact"].map((id) =>
    document.getElementById(id),
  );
  if (!work || !about || !contact) return { pose: HERO, progress: 0 };

  const top = (el: HTMLElement) => el.getBoundingClientRect().top + y;
  const stops: [number, Pose][] = [
    [0, HERO],
    [top(work) - vh * 0.6, STATEMENT],
    [top(work), WORK_IN],
    [top(work) + work.offsetHeight - vh, WORK_OUT],
    [top(about), ABOUT],
    [top(contact), CONTACT],
  ];

  // Past the last stop (footer): hold the final pose.
  const next = stops.findIndex(([at]) => at >= y);
  const i = next === -1 ? stops.length - 1 : Math.max(1, next);
  const [from, a] = stops[i - 1];
  const [to, b] = stops[i];
  const t = THREE.MathUtils.smoothstep(y, from, to);
  const pose = { ...a };
  for (const k of KEYS) pose[k] = THREE.MathUtils.lerp(a[k], b[k], t);
  return { pose, progress: Math.min(1, y / Math.max(1, top(contact))) };
}

function Form({ still, detail }: { still: boolean; detail: number }) {
  const mesh = useRef<THREE.Mesh>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const home = usePathname() === "/";
  const invalidate = useThree((s) => s.invalidate);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uAmp: { value: 0.2 },
      uHeat: { value: 0.1 },
      uBase: { value: new THREE.Color("#1a1e28") },
      uRim: { value: new THREE.Color("#b3d4ea") },
      uHot: { value: new THREE.Color("#e8402f") },
    }),
    [],
  );

  // The canvas ignores pointer events (it sits behind the page), so listen
  // on the window instead of using R3F's pointer state.
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  // Reduced motion renders on demand; repaint when the route changes pose.
  useEffect(() => invalidate(), [home, invalidate]);

  useFrame((state, delta) => {
    const m = mesh.current;
    if (!m) return;
    const { width, height } = state.viewport;
    const { pose: target, progress: p } =
      home && !still ? homePose() : { pose: home ? HERO : ELSEWHERE, progress: 0 };
    // Narrow screens: keep the form near the middle so it never leaves frame.
    const reach = width < height ? 0.45 : 1;
    const size = Math.min(width, height * 1.25) * 0.3 * target.s;
    // Snap on the first frame and under reduced motion; ease otherwise.
    const k = still || uniforms.uTime.value === 0 ? 1 : 1 - Math.exp(-delta * 4);

    m.position.x += (target.x * width * reach + pointer.current.x * 0.08 - m.position.x) * k;
    m.position.y += (target.y * height - pointer.current.y * 0.08 - m.position.y) * k;
    m.scale.setScalar(m.scale.x + (size - m.scale.x) * k);
    uniforms.uAmp.value += (target.amp - uniforms.uAmp.value) * k;
    uniforms.uHeat.value += (target.heat - uniforms.uHeat.value) * k;

    if (still) return;
    uniforms.uTime.value += delta;
    m.rotation.y = uniforms.uTime.value * 0.07 + p * 5 + pointer.current.x * 0.3;
    m.rotation.x = p * 1.6 + pointer.current.y * 0.2;
  });

  return (
    <mesh ref={mesh} scale={0.001}>
      <icosahedronGeometry args={[1, detail]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
}

export default function Sculpture() {
  // Read once at mount: this component is client-only (see Backdrop).
  const still = useMemo(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );
  const detail = useMemo(() => (window.innerWidth < 768 ? 28 : 56), []);

  return (
    <Canvas
      flat
      dpr={[1, 1.75]}
      frameloop={still ? "demand" : "always"}
      camera={{ position: [0, 0, 6], fov: 35 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ pointerEvents: "none" }}
    >
      <Form still={still} detail={detail} />
    </Canvas>
  );
}
