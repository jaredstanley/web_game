import Section from './Section';
import eventTypeManager from '../eventTypeManager';
import tweenFunctions from '../tweenFunctions';
import perlin from '../perlin';
import utils from '../utils';
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
        this.totalIterations=65;
        this.tgt=_App.w/2;
        this.curTgt=0;
        this.colors = {
            light: "#bada55",
            bright:"#C22A42",
            med:"#666",
            dark:"#31040E"
        }
        this.lastSectionSwitch=true;
        this.points=[];
        this.numPoints=100;
        this.velocity=0.1;
        this.z=0;

        this.createPoints();
        perlin.seed(0);
    }
    //
    start(){
        super.start();
        
    }
    //
    showCanvas(){
        this.binder = this.clickHandler.bind(this);
        eventTypeManager.addEvent(_App.context.canvas, this.binder); 
        super.showCanvas();
    }
    //
    clickHandler(e){
        this.finished=true;
        super.clickHandler(e);
    }
    //
    update(){
        if(!this.finished){
            // this.context.fillStyle = this.colors.bright;
            this.drawLines();
            // this.context.fillRect(Math.random()*_App.w, Math.random()*_App.h, 20, 20);
            if(this.iteration>=this.totalIterations){
                return;
            }   
            
        }else{
            if(this.lastSectionSwitch){
                utils.clearCanvas(_App,true,this.colors.dark);
                this.lastSectionSwitch=false;
            }
            // super.finished();
            this.makePainting();
        }   
        this.timer = requestAnimationFrame(this.update.bind(this)); 
    }
    //
    drawLines(){
        // _App.context.globalCompositeOperation = "screen";
        super.erase(false);
        let points = this.points;
        for(var i = 0; i < points.length; i++) {
              
            var p = points[i];
            var value = perlin.getValue(p.x, p.y);
            p.vx += Math.cos(value) * this.velocity;
            p.vy += Math.sin(value) * this.velocity;
            // move to current position
            _App.context.beginPath();
            _App.context.moveTo(p.x, p.y);
        
            // add velocity to position and line to new position
            p.x += p.vx;
            p.y += p.vy;
            _App.context.lineTo(p.x, p.y);
            _App.context.strokeStyle=p.clr;
            _App.context.lineWidth=p.lw;
            _App.context.stroke();
        
            // apply some friction so point doesn't speed up too much
            p.vx *= 0.99;
            p.vy *= 0.99;
            
            // wrap around edges of screen
            if(p.x > _App.w) p.x = 0;
            if(p.y > _App.h) p.y = 0;
            if(p.x < 0) p.x = _App.w;
            if(p.y < 0) p.y = _App.h;

        }
        this.z+=0.01;
    }
    //
    makePainting(){
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
        }else{
            super.erase(true);
            this.finished=!this.finished;
            cancelAnimationFrame(this.timer);
            this.kill();
            super.finished();
        }
        
    }
    createPoints(){
        for(let p = 0; p < this.numPoints; p ++) {
            let r = Math.round(Math.random()*255)+50;
            let g = Math.round(Math.random()*1);
            let b = Math.round(Math.random()*133);
            let a = Math.random()+0.01;
            let clr="rgba("+r+","+g+","+b+","+a+")";
            let lw = Math.random()*1;
            
        this.points.push(
            {
                x: Math.random()*_App.w,
                y:_App.h/2,
                vx: Math.random()-Math.random()-Math.random(),
                vy: Math.random()-Math.random()-Math.random(),
                clr:clr,
                lw:lw
            }
        )
        };
    }
    //
    kill(){
        super.kill();
        eventTypeManager.removeEvent(_App.context.canvas, this.binder);
        this.binder=null;
    }
    
   
}
export default TapSection