import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import * as THREE from 'three';
import { Fog } from 'three';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})

export class ThreeComponent implements OnInit {

  @ViewChild('container') container!: ElementRef<HTMLDivElement>;

  scene: any;
  geometry: any;
  fog: any;
  material: any;
  mesh: any;
  ambientLight: any;
  directionalLight: any;
  renderer: any;
  width: number;
  height: number;
  camera: any;

  constructor(private rendererTwo: Renderer2) {
    
    
    
    //cube
    this.scene = new THREE.Scene();   
    
    this.geometry = new THREE.BoxGeometry(5, 8, 5); // width, height, depth
    this.material = new THREE.MeshLambertMaterial({ color: 0x818cf8 });
    
    this.mesh = new THREE.Mesh(this.geometry, this.material);    
    this.scene.add(this.mesh);

    //lights
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    this.scene.add(this.ambientLight);

    this.directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    this.directionalLight.position.set(10, 20, 0); // x, y, z
    this.scene.add(this.directionalLight);

    //camera
    this.width = 10;
    this.height = this.width * (2);
    this.camera = new THREE.OrthographicCamera(
      this.width / -2, // left
      this.width / 2, // right
      this.height / 3, // top
      this.height / -2, // bottom
      1, // near
      100 // far
    );
    this.camera.position.set(4, 4, 4);
    this.camera.lookAt(0, 0, 0);

    //renderer  
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(400, 400);
    this.renderer.render(this.scene, this.camera)
    this.renderer.setClearColor(0x000000, 0)
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.rendererTwo.appendChild(this.container.nativeElement, this.renderer.domElement)   
  }

}
