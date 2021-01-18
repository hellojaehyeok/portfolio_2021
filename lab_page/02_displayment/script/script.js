function threejs() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer({ alpha: true });
    document.getElementById("threejs").appendChild(renderer.domElement);
    control = new THREE.OrbitControls(camera, renderer.domElement);

    //SIZE ---------
    renderer.setSize(window.innerWidth, window.innerHeight);
    window.addEventListener("resize", function(){
        var width = window.innerWidth;
        var height = window.innerHeight;
        renderer.setSize(width, height);
        camera.aspect = width/height;
        camera.updateProjectionMatrix();
    })
    renderer.setClearColor( 0x000000, 0 );

    //CAMERA--------
    camera.position.set(2, 0, 2);
    camera.lookAt(scene.position);  

    //LIGHT-------------
    var ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);

    
    geometry = new THREE.PlaneGeometry(30, 30, 300, 300);
    const material = new THREE.MeshPhongMaterial()
    const img_texture = new THREE.TextureLoader().load("./img/img.png")
    material.displacementMap = img_texture
    material.side = THREE.DoubleSide;
    material.wireframe = true;
    material.map = img_texture
    var plane = new THREE.Mesh( geometry, material);
    scene.add(plane);



    //RENDER-------------------------------------------------------------------------------
    var renderScene = new function renderScene() {
        requestAnimationFrame(renderScene);

        renderer.render(scene,camera);
    }   
}
window.onload = threejs();

