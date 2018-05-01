// Three basic elements needed - Scene, Camera and Renderer
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
// (field of view in degrees, Aspect ratio,

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
// Last but not least, we add the renderer element to our HTML document.
// This is a <canvas> element the renderer uses to display the scene to us.
document.body.appendChild(renderer.domElement);

//--------------
// Making a cube
var geometry = new THREE.BoxGeometry(1,1,1);
var material = new THREE.MeshBasicMaterial({color : 0x00ff00});
// A mesh is an object that takes a geometry, and applies a material to it,
// which we then can insert to our scene, and move freely around.
var cube = new THREE.Mesh(geometry, material);

//--------------
// Add the cube to scene
scene.add(cube);
// The thing you add is added to coordinates 0,0,0 by default.
// But thats where the camera is. So move the camera a little bit
camera.position.z = 5;

//-------------
//Animate the cube - in a render loop!
// This will create a loop that causes the renderer
// to draw the scene every time the screen is refreshed
// (on a typical screen this means 60 times per second).
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.05;
  cube.rotation.y += 0.05;
  renderer.render(scene, camera);
}
animate();
