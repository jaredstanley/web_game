import Section from './Section';
import eventTypeManager from '../eventTypeManager';
import utils from '../utils';
// import accel from '../accelerometer';
// import permissionsMgr from '../PermissionsMgr';
import sectionManager from '../sectionManager';
//
class ShakeSection extends Section {
    constructor(){
        super();
    }
    init(i){        
        super.init(i);
        this.n = "shaker"
        // console.log("tnit", this.n);
        // accel.init();
       
       
        
    }
    start(){
        super.start();
        super.addCanvasClick();
        console.log('start in ',this.n);
        // sectionManager.setInstructions();
        
        
    }

    clickHandler(e){
        e.preventDefault();
        // permissionsMgr.askOrientation();
          
    }

    update(){
        // console.log("updating!! ", this.n);
       let gradient = this.context.createLinearGradient(_App.w/2-100, _App.h/2-100, _App.w/2+100, _App.h/2+100);
        gradient.addColorStop("0", utils.getGrad().a);
        gradient.addColorStop("1", utils.getGrad().b);
       
        this.context.fillStyle=gradient;
        // this.context.fillRect(0,0,50,50);
        // this.context.fill();

        let x = _App.w/2;
        let y = _App.h/2;
        this.context.save();
        this.context.textBaseline = "middle";
        this.context.textAlign = "center";
        this.context.font = "700 20px Roboto"; 
        this.context.fillText(this.n.toUpperCase()+" section", x, y);
        this.context.restore();



        this.timer = requestAnimationFrame(this.update.bind(this));
        
    }
 
}
export default ShakeSection