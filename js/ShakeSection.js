import Section from './Section';
//
class ShakeSection extends Section {
    constructor(){
        // console.log("shakeSection Constructor ");
        
        super();
    }
    init(){
        this.color = 'rgb('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+',11)';
        console.log("ShakeSection Initted");
        
    }
    update(){
        let ctx = _App.context;
        ctx.fillStyle=this.color;
        ctx.fillRect(0,0,300,300);
        ctx.fill();
    }
}
export default ShakeSection