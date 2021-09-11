
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
    renderer.shadowMap.enabled = true;
    scene.fog = new THREE.Fog(0xffffff, 200, 500);


    //CAMERA--------
    camera.position.set(0, 10, 160);
    camera.lookAt(0, 0, 0);  

    //LIGHT-------------
    const DirecLight = new THREE.DirectionalLight( 0xffffff, 0.9);
    DirecLight.position.set(0, 2, 0.05);
    DirecLight.target.position.set(0, 0, 0);
    scene.add(DirecLight);

    var light = new THREE.SpotLight( 0xffffff, 0.1, 100, 2, 1, 0);
    light.position.set( 0, 50, 0 ); 	
    camera.lookAt(0, 0, 0); 	
    light.castShadow = true;           
    light.shadow.mapSize.width = 1000; 
    light.shadow.mapSize.height = 1000;
    scene.add( light );

    const groundGeo = new THREE.PlaneGeometry(1500, 1500, 1, 1);
    const groundMat = new THREE.MeshStandardMaterial({color : 0xf6fff7});
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.set(80, 0, 0);
    ground.position.set(0, -25, 0);
    ground.castShadow = true; //default is false
    ground.receiveShadow = true; //default 
    scene.add(ground);


    const geometry = new THREE.PlaneGeometry(200, 120, 10, 10);
    const material = new THREE.MeshStandardMaterial({
        color : 0xdcffc7,
        wireframe : true
    });
    const plane = new THREE.Mesh(geometry, material);
    plane.rotation.set(80, 0, 0);
    plane.position.set(0, 5, 0);
    plane.castShadow = true; //default is false
    plane.receiveShadow = true; //default 
    scene.add(plane);

    const geometry2 = new THREE.PlaneGeometry(140, 120, 10, 10);
    const material2 = new THREE.MeshStandardMaterial({
        color : 0xaaff75,
        wireframe : true
    });
    const plane2 = new THREE.Mesh(geometry2, material2);
    plane2.rotation.set(80, 0, 0);
    plane2.position.set(0, 5, 0);
    plane2.castShadow = true; //default is false
    plane2.receiveShadow = true; //default 
    scene.add(plane2);


	function updatePlane(geo, height) {
        for (var i = 0; i < geo.vertices.length; i++) {
            geo.vertices[i].z += Math.random() * height;
            geo.vertices[i]._myZ = geo.vertices[i].z
		}
    };
    updatePlane(geometry, 10);
    updatePlane(geometry2, 20);
    var count = 0
    function planeAni(geo, mesh){
        for (var i = 0; i < geo.vertices.length; i++) {
            var z = geo.vertices[i].z;
            geo.vertices[i].z = Math.sin(( i + count * 0.002)) * (geo.vertices[i]._myZ - (geo.vertices[i]._myZ* 0.6))
            mesh.geometry.verticesNeedUpdate = true;
            count += 0.1
        }
    }


    //RENDER-------------------------------------------------------------------------------
    var renderScene = new function renderScene() {
        requestAnimationFrame(renderScene);

        planeAni(geometry, plane);
        planeAni(geometry2, plane2);


        renderer.render(scene,camera);



    }   
}

threejs();
