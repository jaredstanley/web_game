import Section from './Section';
import Bubble from './Bubble';
import utils from '../utils';
import sectionManager from '../sectionManager';
import eventTypeManager from '../eventTypeManager';
import animation from '../nameAnim';
//
class PopSection extends Section {
    constructor(){
        super();
    }
    init(){
        this.msg = "pop the bubbles to proceed";
        this.canvas = _App.context.canvas;
        this.bubblesObj = {};
        this.bubbleCount = 5;
        this.n = "popper";
        this.bubbleColorsArr = [
            {   hex:'#009474'
            },
            {   hex:'#FFF'
            },
            {   hex:'#acc800'
            }
        ],
        this.initBubbles();
    }
    start(){
        console.log(this.n, ' started');
        animation.shrinkLogo();
        sectionManager.setInstructions();
        this.binder = this.clickHandler.bind(this);
        eventTypeManager.addEvent(_App.context.canvas, this.binder);
        this.update();
    }
    
    update(){
        // console.log('update() ', this.n);
        let count = 0;
        let ctx = _App.context;
        for (const key in this.bubblesObj) {   
            count++;        
            const bubb = this.bubblesObj[key];
            bubb.updatePosition();
            // console.log("a fmaily is this: ",barFamily);
           ctx.fillStyle=bubb.color;
           ctx.beginPath();
           ctx.arc(bubb.x, bubb.y, bubb.radius,0,Math.PI*2);
           ctx.fill();
           //
           

        }
        // console.log(count);
        
        if(count<=0){
            this.endGame();
            return;
        }

        // console.log(count," << bubbles left");
        
        this.timer = requestAnimationFrame(this.update.bind(this));
        // console.log(this.timer);
        
    }
    clickHandler(e){
        e.preventDefault();
        console.log("clickHandler called from popSection");
        let tgt = "";
        if (utils.getStatus().type=="mobile"){
            // console.log('checking mobiel click', e.targetTouches[0]);
            tgt = e.targetTouches[0]
        }else{
            tgt = e;
        }
        let _mouse = {
            x:tgt.clientX,
            y:tgt.clientY
        }
        
        for (const key in this.bubblesObj) {   
                    
            let bubb = this.bubblesObj[key];
            if (this.checkIfClicked(_mouse, bubb)){
                // console.log('clicked', bubb.pos);
                delete this.bubblesObj[key];
                bubb = "";
                break;
            }
        }
    }
    //

    initBubbles(){
        let count = this.bubbleColorsArr.length;
        for (let i = 0; i < this.bubbleCount; i++) {
            let x = Math.random()*_App.w;
            let y = Math.random()*_App.h;
            let color = this.bubbleColorsArr[i%count].hex;
            const element = new Bubble(i, x, y, color);
            this.bubblesObj[i] = element;
            
        }
        // console.log("bibb;esObj ", this.bubblesObj);
        
    }
    endGame(){
        sectionManager.proceed();
    }
    checkIfClicked(mouse, circle){
            return Math.sqrt((mouse.x-circle.x) ** 2 + (mouse.y - circle.y) ** 2) < circle.radius;
    }
    kill(){
        // console.log("kill kill kill")
        cancelAnimationFrame(this.timer);
        this.timer = null;
        delete this.bubblesObj;
        
        eventTypeManager.removeEvent(_App.context.canvas, this.binder);
        // _App.context.canvas.removeEventListener('click', this.binder, true);
       console.log('killing popSection');
        
    }
   
}
export default PopSection