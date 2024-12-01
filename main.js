import * as THREE from 'three';

// 1. create a scene 
const scene = new THREE.Scene();
scene.background = new THREE.Color('#f0f0f0');

// 2. add a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); // needs 4 parameters: fov, aspect ratio, near, far

// giving aspect ration as window.innerWidth / window.innerHeight will make the aspect ratio same as our window

camera.position.z = 5;

// 3. create and add a cube object
const geometry = new THREE.BoxGeometry();
// useing material
const material = new THREE.MeshLambertMaterial({ color: '#468585', emissive: '#468585' })

const cube = new THREE.Mesh(geometry, material);
// adding cude to the scene
scene.add(cube);

// 4. add lighting
const light = new THREE.DirectionalLight(0x9CDBA6, 10); // needs two properties color and intensity

// setting the light positioning
light.position.set(1, 1, 1);  // takes three parameter x-axis, y and z

// adding light to the scene
scene.add(light);

// 5. set up render
const renderer = new THREE.WebGLRenderer();

// setting the size of the renderer
renderer.setSize(window.innerWidth, innerHeight);

// adding the renderer to the body of the html ( adding to the DOM tree )
document.body.appendChild(renderer.domElement);

// 6. animate the scene
function animate () {
    requestAnimationFrame(animate);

    // define what the animation will do
    cube.rotation.x += 0.01; 
    cube.rotation.y += 0.01; 
    renderer.render(scene, camera);
}

animate();