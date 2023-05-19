import * as THREE from "three";

export default function ThreeInit() {
  const uniforms = {
    u_time: { type: "f", value: 1.0 },
  };

  const geometry = new THREE.PlaneGeometry(10, 10, 25, 25);
  const material = new THREE.ShaderMaterial({
    vertexShader: `
    uniform float u_time;
      varying vec2 vUv;
      void main() {
        float newX = sin(u_time + position.x) * sin(u_time + position.y);
        vec3 newPosition = vec3(newX, position.y, position.z);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 0.2);
      }
    `,
    fragmentShader: `
      varying vec2 vUv;
      uniform float u_time;
      uniform vec3 color;
      void main() {
        vec3 newColor = vec3(1.0-0.5*sin(u_time), 1.0-0.5*sin(u_time*2.0), 1.0-0.5*sin(u_time*3.0 ));
        gl_FragColor = vec4(newColor, 1.0);
        // gl_FragColor = vec4(newColor * vUv.x * vUv.y, 1.0);
        // gl_FragColor = vec4(1.0,0.5,0.3,0.5);
      }
    `,
    wireframe: true,
    uniforms: uniforms,
  });

  const mesh = new THREE.Mesh(geometry, material);
  mesh.rotateZ(20);
  const clock = new THREE.Clock();

  function animate() {
    uniforms.u_time.value = clock.getElapsedTime();
    requestAnimationFrame(animate);
  }

  const scene = new THREE.Scene();
  scene.add(mesh);

  // scale down so that more wirefrmes are visible
  scene.scale.set(0.5, 0.5, 0.5);
  animate();

  return (
    <mesh>
      <primitive object={scene} />
    </mesh>
  );
}
