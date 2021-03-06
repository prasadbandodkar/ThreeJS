// workaround for chrome bug: http://code.google.com/p/chromium/issues/detail?id=35980#c12
if ( window.innerWidth === 0 ) { window.innerWidth = parent.innerWidth; window.innerHeight = parent.innerHeight; }


var scene, perspectiveRenderer, orthographicRenderer, perspectiveCamera, orthographicCamera;

init();
animate();

function init() {
  var w = window.innerWidth, h = window.innerHeight;

  scene = new THREE.Scene();

  perspectiveCamera = new THREE.PerspectiveCamera(85, w/(h/2), 1, 10000);
  perspectiveCamera.position.set(200, 300, 150);
  perspectiveCamera.lookAt(scene.position);
  perspectiveCamera.rotation.z -=0.4;
  orthographicCamera = new THREE.OrthographicCamera(w / -2, w / 2, h / 4, h / -4, 1, 1000);
  orthographicCamera.position.set(200, 300, 150);
  orthographicCamera.lookAt(scene.position);
  orthographicCamera.rotation.z -= 0.4;
  orthographicCamera.position.set(150, 300, 100);
  perspectiveCamera.position.set(150, 300, 100);

  var mesh = new THREE.Mesh(
    new THREE.CubeGeometry( 150, 150, 250 ),
    new THREE.MeshBasicMaterial( { color: 0xFF0000, wireframe: true, wireframeLinewidth: 2 } )
  );
  mesh.position.x = -150;
  mesh.position.z = -100;
  scene.add( mesh );

  mesh = new THREE.Mesh(
    new THREE.CubeGeometry( 150, 150, 250 ),
    new THREE.MeshBasicMaterial( { color: 0x0000FF, wireframe: true, wireframeLinewidth: 2 } )
  );
  mesh.position.x = 150;
  mesh.position.z = -100;
  scene.add( mesh );

  perspectiveRenderer = new THREE.CanvasRenderer();
  perspectiveRenderer.setSize( w, h / 2 );
  document.body.appendChild( perspectiveRenderer.domElement );

  orthographicRenderer = new THREE.CanvasRenderer();
  orthographicRenderer.setSize( w, h / 2 );
  document.body.appendChild( orthographicRenderer.domElement );

}
function animate() {

  requestAnimationFrame( animate );

  perspectiveRenderer.render( scene, perspectiveCamera );
  orthographicRenderer.render( scene, orthographicCamera );

}
