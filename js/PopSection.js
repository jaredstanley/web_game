import Section from './Section';
import Bubble from './Bubble';
//
class PopSection extends Section {
    constructor(){
        // console.log("PopSection Constructor ");
        
        super();
    }
    init(){
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
        // console.log("PopSection Initted");
        
    }
    
    update(){
        // console.log('update() ', this.n);
        
        let ctx = _App.context;
        for (const key in this.bubblesObj) {   
                    
            const bubb = this.bubblesObj[key];
            // console.log("a fmaily is this: ",barFamily);
           ctx.fillStyle=bubb.color;
           ctx.beginPath();
           ctx.arc(bubb.x, bubb.y, bubb.radius,0,Math.PI*2);
           ctx.fill();
           //
           

        }
        this.timer = requestAnimationFrame(this.update.bind(this));
    }
    //

    initBubbles(){
        let count = this.colorArr.length;
        for (let i = 0; i < this.bubbleCount; i++) {
            
            let color = this.colorArr[i%count].hex;
            const element = new Bubble(i, color);
            this.bubblesObj[i] = element;
            
        }
        // console.log("bibb;esObj ", this.bubblesObj);
        
    }
   
}
export default PopSection