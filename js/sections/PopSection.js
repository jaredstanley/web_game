import Section from './Section';
import Bubble from './sectionUtils/Bubble';
//
class PopSection extends Section {
    constructor(){
        super();
        this.colors = {
            white: "#FFFFFF",
            light: "#c1f8d7",
            bright: "#1D73D3",
            med: "#99e3e9",
            dark: "#00032b",
            
        };
    }
    init(i){
        super.init(i);
        this.n = "popper";
        this.bubblesObj = {};
        // this.bubbleCount = 1;
        this.bubbleCount = 8;
        this.bubbleColorsArr = [
            {   hex:'#1D73D3'
            },
            {   hex:'#c1f8d7'
            },
            {   hex:'#99e3e9'
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
    //
    update(){
        super.erase(true);
        if(this.bubblesAllGone){
            this.finished();
            return false;
        }
        this.drawDeadBubbles();
        let count = 0;
        let ctx = _App.context;
        for (const key in this.bubblesObj) {   
            count++;        
            const bubb = this.bubblesObj[key];
            bubb.updatePosition();
           ctx.fillStyle=bubb.color;
           ctx.beginPath();
           ctx.arc(bubb.x, bubb.y, bubb.radius,0,Math.PI*2);
           ctx.fill();
        }
        if(count<=0)this.bubblesAllGone = true;
        this.timer = requestAnimationFrame(this.update.bind(this));     
    }
    //
    drawDeadBubbles(){
        let ctx = _App.context;
        this.deadBubblesArr.forEach((bubb, i) => {
            ctx.strokeStyle = bubb.color;
            ctx.lineWidth = 4;
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
    }
    endGame(){
        sectionManager.proceed();
    }
    checkIfClicked(mouse, circle){
            return Math.sqrt((mouse.x-circle.x) ** 2 + (mouse.y - circle.y) ** 2) < circle.radius;
    }
    kill(){
        super.kill();
        delete this.bubblesObj;      
    }
}
//
export default PopSection