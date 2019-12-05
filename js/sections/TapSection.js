import Section from './Section';
import eventTypeManager from '../eventTypeManager';
import utils from '../utils';
import tweenFunctions from '../tweenFunctions';
//
class TapSection extends Section {
    constructor(){
        super();
    }
    init(i){
        super.init(i);
        this.n = "tapper";
        this.finished=false;
        this.iteration=0;
        this.totalIterations=15;
        this.tgt=_App.w/2;
        this.curTgt=0;
        this.colors = {
            light: "#efefef",
            bright:"#C22A42",
            med:"#666",
            dark:"#31040E"
        }
        
        // console.log("init", this.n);
    }

    start(){
        super.start();
        // super.setBG();
    }

    showCanvas(){
        this.binder = this.clickHandler.bind(this);
        // console.log('***** adding click ahndleer', this.n);
        
        eventTypeManager.addEvent(_App.context.canvas, this.binder); 
        super.showCanvas();
        
    }

    clickHandler(e){
        this.finished=true;
    //    console.log(_App);
       
        super.clickHandler(e);
        // console.log("clickkkk from tapsection");
        
    }
    
    update(){
        console.log("updateee");
        
        if(!this.finished){
            this.context.fillStyle = this.colors.bright;
            this.context.fillRect(Math.random()*_App.w, Math.random()*_App.h, 20, 20);
            
            // console.log("updating!! ", this.n); 
            if(this.iteration>=this.totalIterations){
                return;
            }   
            
        }else{
            // super.finished();
            this.makePainting();
        }   
        this.timer = requestAnimationFrame(this.update.bind(this)); 
    }
    
    
    //
    makePainting(){
        // console.log("pnt", this.curTgt, this.iteration);
        super.erase(false);
        this.iteration++;  
        if (this.iteration < this.totalIterations) {
            
            this.curTgt = tweenFunctions.easeInSine(this.iteration, this.curTgt, this.tgt, this.totalIterations);
            this.curTgt = Math.round(this.curTgt*100)/100;
            _App.context.strokeStyle=this.colors.bright;
            _App.strokeWidth = Math.ceil(Math.random()*4);
            _App.context.beginPath();
            _App.context.arc(this.mouse.x,this.mouse.y, this.curTgt, 0, Math.PI*2);
            _App.context.stroke();
            
            // console.log(this.aaa, this.bbb);
        }else{
            super.erase(true);
            this.finished=!this.finished;
            cancelAnimationFrame(this.timer);
            this.kill();
            super.finished();
        }
        
    }
    kill(){
        super.kill();
        eventTypeManager.removeEvent(_App.context.canvas, this.binder);
        this.binder=null;
    }
    
   
}
export default TapSection