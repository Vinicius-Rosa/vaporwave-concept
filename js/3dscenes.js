// Setup Variables

let container;
let camera;
let renderer;
let scene;
let cloud1;
let cloud2;


function cloudsInit() {
    container = document.querySelector("#cloud-scene");

    // Create scene
    scene = new THREE.Scene();

    const fov = 35;
    const aspect = container.clientWidth / container.clientHeight;
    const near = 0.1;
    const far = 500;

    // Camera Setup
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(-80, 0, 350);

    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight)

    const light = new THREE.DirectionalLight(0x404040, 3);
    light.position.set(10, 10, 10);
    scene.add(light)

    //Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    container.appendChild(renderer.domElement);

    // Load Model
    let loader = new THREE.GLTFLoader();

    // Clouds
    loader.load("./assets/low_poly_cloud/scene.gltf", function (gltf) {
        scene.add(gltf.scene);
        cloud1 = gltf.scene.children[0];
    });

    loader.load("./assets/low_poly_cloud/scene.gltf", function (gltf) {
        scene.add(gltf.scene);
        cloud2 = gltf.scene.children[0];
        cloud2.position.y = 50;
        cloud2.position.x = -200;
        animate();
    })
}

function animate() {
    requestAnimationFrame(animate);
    cloud1.rotation.z += 0.001;
    cloud2.rotation.z -= 0.0005;

    renderer.render(scene, camera);
}

cloudsInit();