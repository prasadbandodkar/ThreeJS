if ( window.innerWidth === 0 ) { window.innerWidth = parent.innerWidth; window.innerHeight = parent.innerHeight; }

var camera, scene, renderer;
var geometry, material, mesh;

init();
animate();

function init() {

  camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 1, 1000);
  camera.position.z = 500;

  scene = new THREE.Scene();

  geometry = new THREE.IcosahedronGeometry ( 200, 1);
  material = new THREE.MeshBasicMaterial ({color: 0x000000, wireframe : true, wireframeLinewidth : 2});

  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  renderer = new THREE.CanvasRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

}

function animate () {
  requestAnimationFrame (animate);

  mesh.rotation.x = Date.now() * 0.00005;
  mesh.rotation.y = Date.now() * 0.0001;

  renderer.render (scene, camera);
}
