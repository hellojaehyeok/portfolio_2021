


const txt = document.querySelector("#txt");

function enterKey(){
    if(window.event.keyCode === 13){
        event.preventDefault();
        // if(txt.value === "yes"){
        //         console.log("yes");
        // }else if(txt.value === "no"){
        //     console.log("no");
        // }else{
        //     console.log("what?")
        // }
    }
}


function three(){
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    document.getElementById("obj").appendChild(renderer.domElement);

    renderer.setSize(window.innerWidth, window.innerHeight);
    window.addEventListener("resize", function(){
        const width = window.innerWidth;
        const height = window.innerHeight;
        renderer.setSize(width, height);
        camera.aspect = width/height;
        camera.updateProjectionMatrix();
    })
    renderer.setClearColor( 0xffffff, 0 );

    camera.position.set(4, 0, 2);
    camera.lookAt(0, 0, 0);

    const DirecLight = new THREE.DirectionalLight( 0xffffff, 1);
    const DirecLight2 = new THREE.DirectionalLight( 0xffffff, 0.5);
    DirecLight.position.set(-1, 2, 4);
    DirecLight2.position.set(2, 1, 0);
    scene.add(DirecLight);
    scene.add(DirecLight2);

    const geometry = new THREE.IcosahedronGeometry(1,0);
    const material = new THREE.MeshPhongMaterial({color: 0xffffff});
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    
    let arrow = "up";
    let matColor;
    console.log(Math.random() * 100);
    const renderScene = new function renderScene() {
        requestAnimationFrame(renderScene);
        camera.lookAt(0, 0, 0);  

        // let r = 250, g = 250, b = 250;       
        // if(txt.value === "red"){
        //     r = 250, g = 126, b = 112;
        // }else if(txt.value === "green"){
        //     r = 192, g = 250, b = 112;
        // }else if(txt.value === "blue"){
        //     r = 112, g = 160, b = 250;
        // }
        // matColor = "rgb("+ r +", " + g +", "+ b +")";
        matColor = txt.value;

        cube.material.color.set(matColor);

        cube.rotation.x += 0.005;
        cube.rotation.y += 0.005;        
        if(cube.position.y < 0.5 && arrow ==="up" && txt.value === "yes"){
            cube.position.y += 0.005;
        }
        if(cube.position.y > -0.5 && arrow ==="down" && txt.value === "yes"){
            cube.position.y -= 0.005;
        }
        if(cube.position.y > 0.5){
            arrow = "down"
        }else if(cube.position.y <-0.5){
            arrow = "up"
        }


        renderer.render(scene,camera);
    }  
    
}
three();




