import Section from './Section';
import Bubble from './sectionUtils/Bubble';

//
class ComingsoonSection extends Section {
    constructor(){
        super();
        this.colors = {
            white:"#ffffff",
            bright:"#878787",
            light: "#dedede",
            med:"#666666",
            meddark:'#333333',
            dark:"#242424"
        }
    }
    init(i){
        super.init(i);
        this.n = "popper";
        // console.log("init ", this.n);
        
        this.bubblesObj = {};
        this.bubbleCount = 55;
        this.bubbleColorsArr = [
            {   hex:'#cccccc'
            },
            {   hex:'#878787'
            },
            {   hex:'#666666'
            },
            {   hex:'#333333'
            }
        ];
        
        this.bubblesAllGone = false;
        this.alph=1;
        this.deadBubblesArr = [];
        
        this.initBubbles();

    }
    start(){
        super.start();
        super.addCanvasClick();
        
    }
    
    update(){
        if(this.bubblesAllGone){
            this.finished();
            return false;
        }
        // console.log('update() ', this.n);
        this.drawDeadBubbles();
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
        
        if(count<=0){
            this.initBubbles();
            //this.bubblesAllGone = true;
            // this.endGame();
            // return;
        }
        // console.log("going");
        

        // console.log(count," << bubbles left");
        
        this.timer = requestAnimationFrame(this.update.bind(this));
        // console.log(this.timer);        
    }
    //
    drawDeadBubbles(){
        let ctx = _App.context;

        this.deadBubblesArr.forEach((bubb, i) => {
            ctx.strokeStyle = bubb.color;
            ctx.lineWidth = 4;
            // console.log(bubb);
            ctx.beginPath();    
            ctx.arc(bubb.x, bubb.y, bubb.radius,0,Math.PI*2);
            ctx.stroke();
        });
    }
    //
    clickHandler(e){
        super.clickHandler(e);
        
        for (const key in this.bubblesObj) {   
                    
            let bubb = this.bubblesObj[key];
            if (this.checkIfClicked(this.mouse, bubb)){
                // console.log('clicked', bubb.pos);
                this.deadBubblesArr.push(Object.create(bubb));
                delete this.bubblesObj[key];
                bubb = "";
                break;
            }
        }
        // console.log(this.deadBubblesArr);
        
    }
    //

    initBubbles(){
        let colorTotal=Object.keys(this.colors).length-1;
        
        
        this.bubblesObj={};
        let count = this.bubbleColorsArr.length-1;
        for (let i = 0; i < this.bubbleCount; i++) {
            let x = Math.random()*_App.w;
            let y = Math.random()*_App.h;
            let color = Object.values(this.colors)[i%colorTotal];
            // let color = this.bubbleColorsArr[i%count].hex;
            const element = new Bubble(i, x, y, color);
            element.radius=22;
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
        super.kill();
        // console.log("kill kill kill")
        delete this.bubblesObj;
        
        // _App.context.canvas.removeEventListener('click', this.binder, true);
        
    }
   
}
export default ComingsoonSection;