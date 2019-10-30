import Section from './Section';
import utils from '../utils';
//
class KeyboardSection extends Section {
    constructor(){
        // console.log("KeyboardSection Constructor ");
        
        super();
    }
    init(){
        this.ctx = _App.context;
        this.n = "keyboard";
        this.color = 'rgb(111,0,111)';
        this.game = {
            isActive:false,
            timer:{}
        }
        this.startTime ="";
        // console.log("KeyboardSection Initted");
        this.piano = {
            width:350,
            height:425,
            x:0,
            y:0,
            keyHeight:40,
            totalKeys:0,
            ivories:[
                {
                    note:"C",
                    gradient: utils.getGrad()
                },
                {
                    note:"D",
                    gradient: utils.getGrad()
                },
                {
                    note:"E",
                    gradient: utils.getGrad()
                },
                {
                    note:"F",
                    gradient: utils.getGrad()
                },
                {
                    note:"G",
                    gradient: utils.getGrad()
                },
                {
                    note:"A",
                    gradient: utils.getGrad()
                },
                {
                    note:"B",
                    gradient: utils.getGrad()
                }
            ]
        };
        this.piano.totalKeys = this.piano.ivories.length;
        let keyHeightTotal = (this.piano.keyHeight*this.piano.totalKeys);
        let leftOvers = this.piano.height-keyHeightTotal;
        this.piano.marginHeight = leftOvers/(this.piano.totalKeys+1);
       
        
    }
    start(){
        let div = document.querySelector('#instructions');
        div.classList.toggle('show');
        //
        this.binder = this.clickHandler.bind(this);
        let status = utils.getStatus().type;
        let eventType = "";
        if(status=="mobile"){
            eventType = utils.getStatus().event.mobile;
        }else{
            eventType = utils.getStatus().event.desktop;
        }
       _App.context.canvas.addEventListener(eventType, this.binder, true);
       //
       console.log(this.n, ' started');
         
       this.update();
    }
    
    update(){
        // console.log(this);
        
        // return false;
        
        // console.log("updating!! ", this.n);
        this.updateUI();
        
        this.timer = requestAnimationFrame(this.update.bind(this));
        
    }
    updateUI(){
        
        let p = this.piano;
        
        this.ctx.beginPath();
        this.ctx.fillStyle = utils.getColors().light;
        
        p.x = (_App.w/2)-(p.width/2);
        p.y = (_App.h/2)-(p.height/2);
        this.ctx.rect(p.x,p.y,p.width,p.height);
        this.ctx.fill();
        
        for (let i = 0; i < p.ivories.length; i++) {
            let gradient = "";
            const pKey = p.ivories[i];
            this.ctx.beginPath();
            gradient = this.ctx.createLinearGradient(p.x, p.y, p.x+p.width, p.y+p.height);
            gradient.addColorStop("0", pKey.gradient.a);
            gradient.addColorStop("1", pKey.gradient.b);
            this.ctx.fillStyle = gradient;

            this.ctx.fillRect(p.x+p.marginHeight, p.y+p.marginHeight+(p.keyHeight+p.marginHeight)*i, p.width-(p.marginHeight*2), p.keyHeight);
            this.drawTextLabels(i);
            
        }
        
    }
    
    clickHandler(e){
        console.log("keyboardSection clickHandler called", e);
            console.log("STATUS: clicked() ", _mouse.x, _mouse.y);
            // if(this.checkIfClicked(_mouse, this.startBtn)){
            //     console.log("STATUS: clicked on button");
            // }  
    }
        

    checkIfClicked(mouse, circle){
        return Math.sqrt((mouse.x-circle.x) ** 2 + (mouse.y - circle.y) ** 2) < circle.radius;
    }

    kill(){
        cancelAnimationFrame(this.timer);    
        _App.context.canvas.addEventListener(eventType, this.binder, true);
       console.log('removing KeyboardSection');
        
    }
    drawTextLabels(pos){
        this.ctx.fillStyle = utils.getColors().white;
        this.ctx.font = "300 20px Roboto"; 
        let str = this.piano.ivories[pos].note;
        let x = this.piano.x+this.piano.width/2;
        let y = this.piano.y+((this.piano.keyHeight+this.piano.marginHeight)*pos)+this.piano.marginHeight+(this.piano.keyHeight/2)+5;
        this.ctx.fillText(str,x, y);
        // console.log(y);
        



        this.ctx.fillStyle = utils.getColors().lessBright;
        // this.ctx.fillStyle = utils.getColors().light;
        this.ctx.font = "300 40px Roboto"; 
        //  str = this.game.elapsedTime/1000+ " seconds elapsed";
         str = "hbd"
        this.ctx.fillText(str,this.piano.x, this.piano.y+60);
        
        }
    }
   
export default KeyboardSection