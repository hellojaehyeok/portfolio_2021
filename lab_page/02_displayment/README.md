# 3D Image

2D 이미지를 3D로 표현하여 더욱 입체적으로 보여주고자 제작하였습니다.   

    geometry = new THREE.PlaneGeometry(30, 30, 300, 300);
    const material = new THREE.MeshPhongMaterial()
    const img_texture = new THREE.TextureLoader().load("./img/img.png")
    material.displacementMap = img_texture
    material.side = THREE.DoubleSide;
    material.wireframe = true;
    material.map = img_texture
    var plane = new THREE.Mesh( geometry, material);
    scene.add(plane);

플레인을 제작 후 이미지를 TextureLoader를 통하여 맵핑하였습니다.   
displacementMap로 이미지의 음영에 따라 굴곡을 주었고,   
더 잘 보이게 하기 위하여 DoubleSide와 wireframe 을 적용시켰습니다.   