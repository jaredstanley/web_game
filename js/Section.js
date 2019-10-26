
class Section {
    constructor(color){
        this.color = 'rgb('+Math.floor(Math.random()*255)+',111,11)';
        this.timer = "";
        this.n = ""
        // console.log('Section Class constructor');
        
    }
    init(){
        // console.log("Section SuperClass Initted");
        
    }


    kill(){
        console.log("killing ", this.n);
        
        cancelAnimationFrame(this.timer);
    }
}

export default Section