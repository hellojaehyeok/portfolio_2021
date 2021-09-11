# Change Color By Text

아이들의 영어공부에 도움을 주기 위하여 제작하였습니다.   

색의 변화를 직관적으로 보여주기위하여 3D 오브젝트를 생성하였습니다.

    const geometry = new THREE.IcosahedronGeometry(1,0);
    const material = new THREE.MeshPhongMaterial({color: 0xffffff});
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

HTML에서 input 창을 만든 후 위 오브젝트에 색을 적용합니다.   

    const txt = document.querySelector("#txt");
    .
    .
    .
    matColor = txt.value;
    cube.material.color.set(matColor);


동적인 느낌을 주기 위하여 애니메이션을 넣었습니다.

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
    

