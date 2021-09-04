 const scene = new THREE.Scene();

 const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 100000);
 camera.position.set(0, 250, 1000)


 const renderer = new THREE.WebGLRenderer();
 renderer.shadowMap.enabled = true;
 renderer.setClearColor(0xcccccc, 1.0);
 renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
 renderer.setSize(window.innerWidth, window.innerHeight);
 document.body.appendChild(renderer.domElement);

 const controls = new THREE.OrbitControls(camera, renderer.domElement);
 controls.screenSpacePanning = true;
 const sceneMeshes = [];

 const axesHelper = new THREE.AxesHelper(1000);
 scene.add(axesHelper);
 axesHelper.position.y = 0

 const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
 scene.add(hemiLight);

 const shadowLight = new THREE.DirectionalLight(0xffffff, 0.8);

 // Set the direction of the light  
 shadowLight.position.set(0, 1000, 0);
 // Allow shadow casting 
 shadowLight.castShadow = true
 // define the visible area of the projected shadow
 shadowLight.shadow.camera.left = -400;
 shadowLight.shadow.camera.right = 400;
 shadowLight.shadow.camera.top = 400;
 shadowLight.shadow.camera.bottom = -400;
 shadowLight.shadow.camera.near = 1;
 shadowLight.shadow.camera.far = 10000;
 // define the resolution of the shadow; the higher the better, 
 // but also the more expensive and less performant
 shadowLight.shadow.mapSize.width = 2048;
 shadowLight.shadow.mapSize.height = 2048;
 // to activate the lights, just add them to the scene
 scene.add(shadowLight);

 //

 // Generate a terrain
 var xS = 63,
   yS = 63;
 terrainScene = THREE.Terrain({
   easing: THREE.Terrain.Linear,
   frequency: 2.5,
   heightmap: THREE.Terrain.DiamondSquare,
   material: new THREE.MeshLambertMaterial({
     color: 0x654321
   }),
   maxHeight: 100,
   minHeight: -100,
   steps: 1,
   xSegments: xS,
   xSize: 1024,
   ySegments: yS,
   ySize: 1024,
 });
 // Assuming you already have your global scene, add the terrain to it
 scene.add(terrainScene);


 const animate = function() {
   requestAnimationFrame(animate);
   renderer.render(scene, camera);
 };

 animate();