import IMGskyblock from './skyblock.png'
import IMGcovid from './covid.png'
import IMGcalc from './calc.png'
import IMGblog from './blog.png'
import IMGrick from './rick_gen.png'
import IMGgamedle from './gamedle.png'
import * as THREE from 'three';


const loader = new THREE.TextureLoader();


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({antialias: true,alpha: true});
renderer.setSize( window.innerWidth, window.innerHeight );
console.log(window.innerHeight)
let canvasContainer = document.getElementById("canvas")
canvasContainer.appendChild( renderer.domElement );

// scene.background = new THREE.Color(0xffffff)

const materialIMG = [
    new THREE.MeshBasicMaterial({map: loader.load(IMGskyblock)}),
    new THREE.MeshBasicMaterial({map: loader.load(IMGgamedle)}),
    new THREE.MeshBasicMaterial({map: loader.load(IMGcovid)}),
    new THREE.MeshBasicMaterial({map: loader.load(IMGblog)}),
    new THREE.MeshBasicMaterial({map: loader.load(IMGcalc)}),
    new THREE.MeshBasicMaterial({map: loader.load(IMGrick)}),
]
const geo = new THREE.BoxGeometry(3,3,3)
const cubeIMG = new THREE.Mesh(geo,materialIMG)
scene.add(cubeIMG)

const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
dirLight.position.set(10, 10, 10); // x, y, z
scene.add(dirLight);

camera.position.z = 5 

window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
    cubeIMG.rotateX(0.01)
    cubeIMG.rotateY(0.008)
}
animate();
