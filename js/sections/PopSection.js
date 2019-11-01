import Section from './Section';
import Bubble from './Bubble';
import utils from '../utils';
import sectionManager from '../sectionManager';
//
class PopSection extends Section {
    constructor(){
        // console.log("PopSection Constructor ");
        
        super();
    }
    init(){
        this.canvas = _App.context.canvas;
        this.bubblesObj = {};
        this.bubbleCount = 1;
        this.n = "popper";
        this.eventType="none whatsover";
        this.colorArr = [
            {   hex:'#009474'
            },
            {   hex:'#FFF'
            },
            {   hex:'#acc800'
            }
        ],
        this.initBubbles();
        // console.log("PopSection Initted");
        
    }
    start(){
        console.log(this.n, ' started');
        let div = document.querySelector('#instructions');
        div.classList.toggle('show');
       
        let status = utils.getStatus().type;
        
        if(status=="mobile"){
            this.eventType = utils.getStatus().event.mobile;
        }else{
            this.eventType = utils.getStatus().event.desktop;
        }
        //
        this.binder = this.clickHandler.bind(this);
       _App.context.canvas.addEventListener(this.eventType, this.binder, true);
       
    //    _App.context.canvas.addEventListener('click', this.binder, true);
        this.update();
    }
    
    update(){
        console.log('update() ', this.n);
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
        
        _App.context.canvas.removeEventListener(this.eventType, this.binder, true);
        // _App.context.canvas.removeEventListener('click', this.binder, true);
       console.log('killing popSection');
        
    }
   
}
export default PopSection