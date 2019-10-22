
class Section {
    constructor(color){
        this.color = 'rgb('+Math.floor(Math.random()*255)+',111,11)'
        // console.log('Section Class constructor');
        
    }
    init(){
        // console.log("Section SuperClass Initted");
        
    }

    build(){
            
        console.log("building app ", this.color);
        this.update();

    }
    
    kill(){
        
    }
}

export default Section