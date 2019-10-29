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
    start(){
        this.update();
    }
    
    update(){
        return false;
        console.log("updating!! ", this.n);
    }
   
}
export default TapSection