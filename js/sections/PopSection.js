import Section from './Section';
import Bubble from './Bubble';
import utils from '../utils'
//
class PopSection extends Section {
    constructor(){
        // console.log("PopSection Constructor ");
        
        super();
    }
    init(){
        this.canvas = _App.context.canvas;
        this.bubblesObj = {};
        this.bubbleCount = 15;
        this.n = "popper";
        this.colorArr = [
            {   hex:'#009474'
            },
            {   hex:'#FFF'
            },
            {   hex:'#acc800'
            }
        ],
        this.initBubbles();
        console.log("PopSection Initted");
        
    }
    start(){
        console.log(this.n, ' started');
        this.binder = this.clickHandler.bind(this);
        let status = utils.getStatus().type;
        let eventType = "";
        if(status=="mobile"){
            eventType = utils.getStatus().event.mobile;
        }else{
            eventType = utils.getStatus().event.desktop;
        }
       _App.context.canvas.addEventListener(eventType, this.binder, true);
       
    //    _App.context.canvas.addEventListener('click', this.binder, true);
        this.update();
    }
    
    update(){
        // console.log('update() ', this.n);
        
        let ctx = _App.context;
        for (const key in this.bubblesObj) {   
                    
            const bubb = this.bubblesObj[key];
            bubb.updatePosition();
            // console.log("a fmaily is this: ",barFamily);
           ctx.fillStyle=bubb.color;
           ctx.beginPath();
           ctx.arc(bubb.x, bubb.y, bubb.radius,0,Math.PI*2);
           ctx.fill();
           //
           

        }
        this.timer = requestAnimationFrame(this.update.bind(this));
    }
    clickHandler(e){
        console.log("clickHandler called", e);
        let _mouse = {
            x:e.clientX,
            y:e.clientY
        }
        
        for (const key in this.bubblesObj) {   
                    
            let bubb = this.bubblesObj[key];
            if (this.checkIfClicked(_mouse, bubb)){
                console.log('clicked', bubb.pos);
                delete this.bubblesObj[key];
                bubb = "";
                
                
                break;
            }
        //    console.log(bubb.x);
    
        }
    }
    //

    initBubbles(){
        let count = this.colorArr.length;
        for (let i = 0; i < this.bubbleCount; i++) {
            let x = Math.random()*_App.w;
            let y = Math.random()*_App.h;
            let color = this.colorArr[i%count].hex;
            const element = new Bubble(i, x, y, color);
            this.bubblesObj[i] = element;
            
        }
        // console.log("bibb;esObj ", this.bubblesObj);
        
    }

    checkIfClicked(mouse, circle){
            return Math.sqrt((mouse.x-circle.x) ** 2 + (mouse.y - circle.y) ** 2) < circle.radius;
    }
    kill(){
        cancelAnimationFrame(this.timer);
        delete this.bubblesObj;
        
        _App.context.canvas.removeEventListener('click', this.binder, true);
       console.log('removing popSection');
        
    }
   
}
export default PopSection