
class Bubble {
    constructor(pos, color){
        this.pos = pos;
        this.color = color;
        this.radius = 25;
        this.n = "bubble"+pos;
        this.x = Math.random()*_App.w;
        this.y = Math.random()*_App.h;
        // console.log('Bubble Class constructor');
        
    }
    init(){
        console.log("Bubble SuperClass Initted");
        
    }

}

export default Bubble