import"./style.css";import*as THREE from"three";import{OrbitControls}from"three/examples/jsm/controls/OrbitControls";const scene=new THREE.Scene,camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,1e3),renderer=new THREE.WebGLRenderer({canvas:document.querySelector("#bg")});renderer.setPixelRatio(window.devicePixelRatio),renderer.setSize(window.innerWidth,window.innerHeight),camera.position.setZ(30),camera.position.setX(-3),renderer.render(scene,camera);const geometry=new THREE.TorusGeometry(10,3,16,100),material=new THREE.MeshStandardMaterial({color:16737095}),torus=new THREE.Mesh(geometry,material);scene.add(torus);const pointLight=new THREE.PointLight(16711935,10);pointLight.position.set(5,5,5);const ambientLight=new THREE.AmbientLight(51,10);scene.add(pointLight,ambientLight);const controls=new OrbitControls(camera,renderer.domElement),spaceTexture=(new THREE.TextureLoader).load("image2.jpg");function animate(){requestAnimationFrame(animate),torus.rotation.x+=.01,torus.rotation.y+=.005,torus.rotation.z+=.01,renderer.render(scene,camera)}function onWindowResize(){camera.aspect=window.innerWidth/window.innerHeight,camera.updateProjectionMatrix(),renderer.setSize(window.innerWidth,window.innerHeight)}scene.background=spaceTexture,animate(),window.addEventListener("resize",onWindowResize,!1),onWindowResize();