import Section from './Section';
import eventTypeManager from '../eventTypeManager';
import utils from '../utils';
//
class TapSection extends Section {
    constructor(){
        super();
    }
    init(i){
        super.init(i);
        this.n = "tapper";
        
        // console.log("init", this.n);
    }

    showCanvas(){
        this.binder = this.clickHandler.bind(this);
        // console.log('***** adding click ahndleer', this.n);
        
        eventTypeManager.addEvent(_App.context.canvas, this.binder); 
        super.showCanvas();
        
    }

    clickHandler(e){
    
        // super.clickHandler(e);
        
        // console.log("clickkkk from tapsection");
        super.finished();   
       
        // console.log(this.deadBubblesArr);
    }

    update(){
        // return false;
        this.context.fillStyle = utils.getColors().brightGreen;
        this.context.fillRect(Math.random()*_App.w, Math.random()*_App.h, 20, 20);
        // console.log("updating!! ", this.n);    
        this.timer = requestAnimationFrame(this.update.bind(this));
    
    }
    
   
}
export default TapSection