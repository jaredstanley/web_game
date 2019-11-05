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
        this.div = document.getElementById('instructions'); 
        // console.log("TapSection Initted");
        
    }
    start(){
        sectionManager.setInstructions();
        
        eventTypeManager.addEvent(this.div, this.binder); 
        this.div.classList.add('show');
        this.update();
    }
    
    finished(e){
        e.preventDefault();
        console.log("finished");
        
        sectionManager.proceed();
    }
    kill(){
        console.log("kill ", this.n);
        
        eventTypeManager.removeEvent(this.div, this.binder);
        this.div.classList.remove("cursor");
        this.div.classList.add("ignored");
    }

    update(){
        return false;
        console.log("updating!! ", this.n);
    }
   
}
export default TapSection