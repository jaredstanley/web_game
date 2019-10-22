import Section from './Section';
import utils from './utils';
import accel from './accelerometer';
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
        // console.log("ShakeSection Initted");
        
    }
    update(){
        // console.log("updating!! ", this.n);
       let gradient = this.ctx.createLinearGradient(0, 100, 0, 900);
        gradient.addColorStop("0", utils.getGrad().a);
        gradient.addColorStop("1", utils.getGrad().b);
       
        this.ctx.fillStyle=gradient
        // this.ctx.fillRect(0,0,50,50);
        // this.ctx.fill();
        this.ctx.font = "30px Arial";
        this.ctx.fillText(accel.getData().x, 100, 300);
        



        this.timer = requestAnimationFrame(this.update.bind(this));
        
    }
 
}
export default ShakeSection