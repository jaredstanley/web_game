import Section from './Section';
//
class TapSection extends Section {
    constructor(){
        // console.log("TapSection Constructor ");
        
        super();
    }
    init(){
        this.n = "tapper";
        this.color = 'rgb(111,0,111)';
        // console.log("TapSection Initted");
        
    }
    
    update(){
        return false;
        // console.log("updating!! ", this.n);
        
        // let ctx = _App.context;
        // ctx.fillStyle=this.color;
        // ctx.fillRect(0,0,300,300);
        // ctx.fill();
        // this.timer = requestAnimationFrame(this.update.bind(this));
        
    }
   
}
export default TapSection