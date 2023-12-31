import * as THREE from 'three'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 40, (innerWidth - 20) / 170, 0.1, 1000 )

const renderer = new THREE.WebGLRenderer()

renderer.setSize( (innerWidth - 20), 170 )
renderer.setPixelRatio(devicePixelRatio)
renderer.setClearColor( 0x000000 )
document.body.prepend( renderer.domElement )

renderer.domElement.id = 'header-canvas';

const planeGeometry = new THREE.PlaneGeometry( 100, 10, 100, 10 )
const planeMaterial = new THREE.MeshPhongMaterial	({
  vertexColors: true,
  side: THREE.DoubleSide,
  flatShading: true,
  shininess: 100,
})
const planeMesh = new THREE.Mesh( planeGeometry, planeMaterial )

const light = new THREE.DirectionalLight( 0xffffff, 2 )
light.position.set(0, 0, 1)

const backLight = new THREE.DirectionalLight( 0xffffff, 2 )
backLight.position.set(0, 0, -1)

scene.add( planeMesh )
scene.add( light )
scene.add( backLight )

camera.position.z = 5

const {array} = planeMesh.geometry.attributes.position
const randomValues = []

for (let i = 0; i < array.length; i ++) {
  if (i % 3 === 0) {
    const x = array[i]
    const y = array[i + 1]
    const z = array[i + 2]
  
    array[i] = x + (Math.random() - 0.5)
    array[i + 1] = y + (Math.random() - 0.5)
    array[i + 2] = z + Math.random()
  }

  randomValues.push(Math.random() - 0.5)
}

planeMesh.geometry.attributes.position.randomValues = randomValues
planeMesh.geometry.attributes.position.originalPosition = planeMesh.geometry.attributes.position.array

const mouse = {
  x: undefined,
  y: undefined
}

const colors = []
for (let i = 0; i < planeMesh.geometry.attributes.position.count; i++) {
  colors.push(0.05, 0.05, 0.05)
}
planeMesh.geometry.setAttribute('color', new THREE.BufferAttribute(new Float32Array(colors), 3))

let frame = 0
function animate() {
	requestAnimationFrame( animate )
  frame += 0.01
  
  const {array, originalPosition, randomValues } = planeMesh.geometry.attributes.position
  for (let i = 0; i < array.length; i += 3) {
    array[i] = originalPosition[i] + Math.cos(frame + randomValues[i]) * 0.002
    array[i + 1] = originalPosition[i + 1] + Math.sin(frame + randomValues[i + 1]) * 0.002
  }

  planeMesh.geometry.attributes.position.needsUpdate = true

  renderer.render( scene, camera )
}

animate()

addEventListener('resize', () => {
  const newWidth = (innerWidth - 20)
  const newHeight = 170

  camera.aspect = newWidth / 170
  camera.updateProjectionMatrix()

  renderer.setSize(newWidth, 170)
})

addEventListener('mousemove', (event) => {
  mouse.x = (event.clientX / (innerWidth - 20)) * 2 - 1
  mouse.y = -(event.clientY / 170) * 2 + 1
})