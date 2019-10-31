import Section from './Section';
import utils from '../utils';
import accel from '../accelerometer';
//
class ShakeSection extends Section {
    constructor(){
        // console.log("shakeSection Constructor ");
        
        super();
    }
    init(){
        this.ctx = _App.context;
        this.color = 'rgb(0,0,155)';
        this.n = "shaker"
        accel.init();
        console.log("ShakeSection Initted");
        
    }
    start(){
        console.log('start in ',this.n);
        
        this.update();
        
    }
    update(){
        // console.log("updating!! ", this.n);
       let gradient = this.ctx.createLinearGradient(_App.w/2-100, _App.h/2-100, _App.w/2+100, _App.h/2+100);
        gradient.addColorStop("0", utils.getGrad().a);
        gradient.addColorStop("1", utils.getGrad().b);
       
        this.ctx.fillStyle=gradient;
        // this.ctx.fillRect(0,0,50,50);
        // this.ctx.fill();

        let x = _App.w/2;
        let y = _App.h/2;
        this.ctx.textBaseline = "middle";
        this.ctx.textAlign = "center";
        this.ctx.font = "700 80px Roboto"; 
        this.ctx.fillText(this.n.toUpperCase()+" section", x, y);
        



        this.timer = requestAnimationFrame(this.update.bind(this));
        
    }
 
}
export default ShakeSection