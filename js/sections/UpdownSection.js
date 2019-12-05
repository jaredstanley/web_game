import Section from './Section';
import eventTypeManager from '../eventTypeManager';
import utils from '../utils';
import Bubble from './sectionUtils/Bubble';
// import * as THREE from 'three';

//
class UpdownSection extends Section {
    constructor(){
        super();
    }
    init(i){
        super.init(i);
        this.n = "updaown";
        // console.log("init ", this.n);
        // this.scene = new THREE.Scene();
        // this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

        // this.renderer = new THREE.WebGLRenderer({ canvas: _App.context.canvas });
        // this.renderer.setSize( _App.w, _App.h );

        // this.geometry = new THREE.BoxGeometry( 1, 1, 1 );
        // this.material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        // this.cube = new THREE.Mesh( this.geometry, this.material );
        // this.scene.add( this.cube );

        // this.camera.position.z = 5;
        
    }
    start(){
        super.start();
        super.addCanvasClick();
        this.update();
    }
    
    update(){
        // this.cube.rotation.x += 0.01;
        // this.cube.rotation.y += 0.01;
        // this.renderer.render( this.scene, this.camera );
        this.timer = requestAnimationFrame(this.update.bind(this));
    }
    //
}
export default UpdownSection