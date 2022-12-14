import "./style.css";
import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */

// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);
//position

// mesh.position.x = 0.7;
// mesh.position.y = -0.6;
// mesh.position.z = 1;

// mesh.position.set(0.7, -0.6, 1); // short for positioning objects in 3D

//Scale

// mesh.scale.x = 2;
// mesh.scale.y = 0.5;
// mesh.scale.z = 0.5;

// mesh.scale.set(2, 0.5, 0.5); // shorthand for scaling

//rotation

// mesh.rotation.reorder("YXZ");
// mesh.rotation.y = Math.PI;
// mesh.rotation.y = 3.14159;
// mesh.rotation.x = Math.PI * 0.25;
// mesh.rotation.y = Math.PI * 0.25;

const group = new THREE.Group();

group.position.y = 1;
group.scale.y = 2;
group.rotation.y = 1;

scene.add(group);

const cub1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);

group.add(cub1);

const cub2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);

cub2.position.x = -2;

group.add(cub2);

const cub3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x0000ff })
);

cub3.position.x = 2;

group.add(cub3);

// AXES HELPER

const axesHelper = new THREE.AxesHelper(3);

scene.add(axesHelper);

// console.log(mesh.position.length());
// mesh.position.normalize(); // reduces the length of the vector to 1
// console.log(mesh.position.length());
/**
 * Sizes
 */

const sizes = {
  width: 800,
  height: 600,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
// camera.position.y = 1;
// camera.position.x = 1;
scene.add(camera);

// make camera look at the center of the object

// camera.lookAt(mesh.position);

// console.log(
//   "distance btn camera and object",
//   mesh.position.distanceTo(camera.position)
// );

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
