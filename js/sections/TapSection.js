import Section from './Section';
import sectionManager from '../sectionManager';
import eventTypeManager from '../eventTypeManager';
//
class TapSection extends Section {
    constructor(){
        // console.log("TapSection Constructor ");
        
        super();
    }
    init(){
        this.n = "tapper";
        this.color = 'rgb(111,0,111)';
        this.binder = this.finished.bind(this);
        // console.log("TapSection Initted");
        
    }
    start(){
        
        eventTypeManager.addEvent(_App.context.canvas, this.binder); 
        
        sectionManager.setInstructions();
        this.update();
    }
    
    finished(e){
        e.preventDefault();
        console.log("finished");
        
        sectionManager.proceed();
    }
    kill(){
        console.log("kill ", this.n);
        
        eventTypeManager.removeEvent(_App.context.canvas, this.binder);
        
    }

    update(){
        return false;
        console.log("updating!! ", this.n);
    }
   
}
export default TapSection