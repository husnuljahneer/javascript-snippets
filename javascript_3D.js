//create 3D scene
var scene = new THREE.Scene();
//create 3D camera
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//create 3D renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
//create 3D cube
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);
//create 3D light
var light = new THREE.PointLight(0xffffff);
light.position.set(10, 10, 10);
scene.add(light);
//create 3D camera position
camera.position.z = 5;
//render 3D scene
function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}
render();
//create 3D cube position
var animate = function() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
};
animate();
//# sourceMappingURL=app.js.map