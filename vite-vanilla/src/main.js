import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// Get the canvas element
const canvas = document.getElementById("canvas");

// 1. Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color("#f0f0f0");

// 2. Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.z = 5;

// 3. Objects
const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshLambertMaterial({ color: "#468585", emissive: '#468585' });  // with MeshBasicMaterial we don't need emissive
const dodecahedron = new THREE.Mesh(geometry, material);

const boxGeometry = new THREE.BoxGeometry(2, 0.1, 2);
const boxMaterial = new THREE.MeshStandardMaterial({ color: "#b4b4b3", emissive: '#b4b4b3' });
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.y = -1.5;

scene.add(dodecahedron);
scene.add(box);

// 4. Light
const light = new THREE.SpotLight(0x006769, 100);
light.position.set(1, 1, 1);
scene.add(light);

// 5. Renderer
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.setPixelRatio(window.devicePixelRatio); // used for mobile dvice so the control work there as well

// 6. orbir controlls
// used to interact or move the shapes

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // make control smoother
controls.dampingFactor = 0.05;
controls.enableZoom = true;
controls.enablePan = true;

// 7. add animation
function animate() {
  requestAnimationFrame(animate);
  dodecahedron.rotation.x += 0.01;
  dodecahedron.rotation.y += 0.01;

  box.rotation.y += 0.005;

  controls.update();

  // Render the scene
  renderer.render(scene, camera);
}



// 8. Handle window resizing even if the user resizes the window
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();  // this is used to resets the camera position
  renderer.setSize(window.innerWidth, window.innerHeight);
})



animate();
