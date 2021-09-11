# Line Wave

"선을 이용하여 아름다움을 표현해보자" 라는 주제로 제작하였습니다.

플레인을 와이어 프레임 형태로 보이게 한 후 각 점들을 상하운동시켰습니다.

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


