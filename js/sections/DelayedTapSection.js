import Section from './Section';
import utils from '../utils';
//
class DelayedTapSection extends Section {
    constructor(){
        // console.log("DelayedTapSection Constructor ");
        
        super();
    }
    init(){
        this.startBtn = {x:200, y:200, radius:33};
        this.n = "delayedTap";
        this.color = 'rgb(111,0,111)';
        console.log("DelayedTapSection Initted");
        this.timerbar = {
            width:200,
            height:20
        }
        
    }
    start(){
        let div = document.querySelector('#instructions');
        div.classList.toggle('show');
       
        this.startBtn.x=_App.w/2;
        this.startBtn.y=_App.h/1.4;

        this.binder = this.clickHandler.bind(this);
       _App.context.canvas.addEventListener('click', this.binder, true);
       
       console.log(this.n, ' started');
         
       this.update();
    }
    
    update(){
        // console.log(this);
        
        // return false;
        
        console.log("updating!! ", this.n);
        this.updateUI();
        this.timer = requestAnimationFrame(this.update.bind(this));
        
    }
    updateUI(){
        let s = this.startBtn;
        let ctx = _App.context;
        ctx.beginPath();
        ctx.fillStyle=this.color;
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI*2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = utils.getColors().light;
        
        
        ctx.rect(_App.w/2-this.timerbar.width/2, _App.h/2+this.timerbar.h/2, this.timerbar.width, this.timerbar.height)
        ctx.fill();
        console.log(ctx.fillStyle, _App.w/2-this.timerbar.width/2);
        
    }
    clickHandler(e){
        // console.log("clickHandler called", e);
        let _mouse = {
            x:e.clientX,
            y:e.clientY
        }
        if(this.checkIfClicked(_mouse, this.startBtn)){
            console.log('clicked');
            
        }
        
    }
    checkIfClicked(mouse, circle){
        return Math.sqrt((mouse.x-circle.x) ** 2 + (mouse.y - circle.y) ** 2) < circle.radius;
    }
    kill(){
        cancelAnimationFrame(this.timer);
        
        _App.context.canvas.removeEventListener('click', this.binder, true);
       console.log('removing delayedTapSection');
        
    }
   
}
export default DelayedTapSection