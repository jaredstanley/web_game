import Section from './Section';
import eventTypeManager from '../eventTypeManager';
import tweenFunctions from '../tweenFunctions';
import PermissionsMgr from '../PermissionsMgr';
import accelerometer from '../accelerometer';

//
class UpdownSection extends Section {
    constructor(){
        super();
    }
    init(i){
        super.init(i);
        PermissionsMgr.init();
        this.n = "updaown";
        this.finished=false;
        this.iteration=0;
        this.totalIterations=115;
        this.tgt=_App.w/2;
        this.curTgt=0;
        this.colors = {
            light: "#bada55",
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
    //    console.log(_App);
       
        super.clickHandler(e);
        if(PermissionsMgr.checkOrientation()){
            //ios13
            this.colors.bright = '#116600';
            if(PermissionsMgr.askOrientation()){
                this.colors.bright = '#00ff00';
                accelerometer.init();
            }else{
                this.colors.bright = '#222222';
            };

            
        }else{
            this.colors.bright = '#ff0000';

        }
        // console.log("clickkkk from tapsection");
        
    }
    
    update(){
        // console.log("updateee");
        accelerometer.getData();
        if(!this.finished){
            this.context.fillStyle = this.colors.bright;
            this.context.fillRect(0, 0, _App.w/2, _App.h/2);
            
            if(this.iteration>=this.totalIterations){
                return;
            }   
            
        }
        this.timer = requestAnimationFrame(this.update.bind(this)); 
    }
    //
    
    kill(){
        super.kill();
        eventTypeManager.removeEvent(_App.context.canvas, this.binder);
        this.binder=null;
    }
}
export default UpdownSection