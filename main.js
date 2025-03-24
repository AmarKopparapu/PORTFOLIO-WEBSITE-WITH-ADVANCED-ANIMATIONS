// GSAP Animation for page content
document.addEventListener("DOMContentLoaded", function () {
  // Animate the header coming from the top
  gsap.from("header", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power2.out",
  });

  // Animate each section with a slide-in effect
  gsap.from("section", {
    duration: 1,
    x: 100,
    opacity: 0,
    stagger: 0.3,
    ease: "power2.out",
  });
});

// THREE.JS Setup for a Rotating Cube on the Background
let scene, camera, renderer, cube;

function initThree() {
  // Create the scene
  scene = new THREE.Scene();

  // Setup the camera with fov, aspect ratio, near and far clipping planes
  const fov = 75;
  const aspect = window.innerWidth / window.innerHeight;
  const near = 0.1;
  const far = 1000;
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 5;

  // Setup the renderer and link it with our canvas element
  renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById("three-canvas"),
    antialias: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  // Create geometry and a material then combine to create a cube
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshNormalMaterial();
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // Adjust the scene on window resize
  window.addEventListener("resize", onWindowResize, false);
}

function onWindowResize() {
  // Update camera and renderer dimensions on window resize
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);

  // Rotate the cube on its axes for a dynamic effect
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

// Initialize THREE.JS and start the animation loop
initThree();
animate();

// Optional: Contact form submission handling (for demonstration purposes)
document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();
  // Here, you could add an AJAX call or other form handling code.
  alert("Thank you for your message!");
});
