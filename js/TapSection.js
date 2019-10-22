import Section from './Section';
//
class TapSection extends Section {
    constructor(){
        // console.log("TapSection Constructor ");
        
        super();
    }
    init(){
        this.color = 'rgb('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+',11)';
        console.log("TapSection Initted");
        
    }
    update(){
        let ctx = _App.context;
        ctx.fillStyle=this.color;
        ctx.fillRect(0,0,300,300);
        ctx.fill();
    }
}
export default TapSection