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
        this.game = {
            isActive:false,
            targetTime:5000,
            curTime:0,
            elapsedTime:0,
            pctComplete:0,
            pctBarWidth:0,
            result:0,
            timer:{}
        }
        this.startTime ="";
        this.ctx = _App.context;
        // console.log("DelayedTapSection Initted");
        this.timerbar = {
            width:350,
            height:10,
            x:0,
            y:0
        }
        
    }
    start(){
        let div = document.querySelector('#instructions');
        div.classList.toggle('show');
       
        this.startBtn.x=_App.w/2;
        this.startBtn.y=_App.h/1.4;

        this.binder = this.clickHandler.bind(this);
        let status = utils.getStatus().type;
        let eventType = "";
        if(status=="mobile"){
            eventType = utils.getStatus().event.mobile;
        }else{
            eventType = utils.getStatus().event.desktop;
        }
       _App.context.canvas.addEventListener(eventType, this.binder, true);
       
       console.log(this.n, ' started');
         
       this.update();
    }
    
    update(){
        // console.log(this);
        
        // return false;
        
        // console.log("updating!! ", this.n);
        this.updateUI();
        // this.updateGame();
        // if(this.game.isActive){
        //    this.updateGame();
        // }
        this.drawGame();
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
        
        this.timerbar.x = (_App.w/2)-(this.timerbar.width/2);
        this.timerbar.y = (_App.h/2)-(this.timerbar.height);
        ctx.rect(this.timerbar.x,
            this.timerbar.y,this.timerbar.width,this.timerbar.height);
        ctx.fill();
        // console.log(ctx.fillStyle, _App.w/2-this.timerbar.width/2);
        
    }
    updateGame(){
        // console.log("STATUS: updateGame()", this);
        let d = new Date();
        this.game.elapsedTime = d-this.startTime;
        // console.log(elapsed);
        

        this.game.pctComplete = (this.game.elapsedTime/this.game.targetTime);
        this.game.pctBarWidth = this.timerbar.width*this.game.pctComplete;
        // console.log(this.game.pctComplete);
        
        if(this.game.pctComplete>=1){
           this.endGame();
        }
    }
    drawGame(){
        let gradient = this.ctx.createLinearGradient(this.timerbar.x, this.timerbar.y, this.timerbar.x+this.timerbar.width, this.timerbar.y);
            gradient.addColorStop("0", utils.getGrad().a);
            gradient.addColorStop("1", utils.getGrad().b);
            this.ctx.fillStyle = gradient;
            
            this.ctx.fillRect((_App.w/2)-(this.game.pctBarWidth/2), this.timerbar.y, this.timerbar.width*this.game.pctComplete, this.timerbar.height)
            // this.ctx.fillRect(this.timerbar.x, this.timerbar.y, this.timerbar.width*this.game.pctComplete, this.timerbar.height)
        //
        this.drawTextLabels();


    }
    startGame(){
        console.log("STATUS: startGame()");
        
            if(!this.game.isActive){
                this.game.curTime = 0;
                this.game.result = 0;
                this.game.isActive=true;
                this.startTime = new Date();
                this.gameBinder = this.updateGame.bind(this);
                this.game.timer = setInterval(this.gameBinder, 64)
        
            }
    }
    endGame(clicked){
        // console.log("STATUS: endGame()", this.game.elapsedTime);
        
        this.game.isActive=false;
        clearInterval(this.game.timer)
        if(clicked){
            this.game.result = this.game.elapsedTime/1000;
        
        }else{
            this.game.elapsedTime = this.game.targetTime;
            console.log('you waited too long');
        }
        
        
    }
    clickHandler(e){
        // console.log("DelayedTap Section clickHandler called", e);
        if(this.game.isActive){
            console.log('second click registered, stop timer and check if complete');
            this.endGame(true);
        }else{
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
            console.log("STATUS: clicked() ", _mouse.x, _mouse.y);
            if(this.checkIfClicked(_mouse, this.startBtn)){
                console.log("STATUS: clicked on button");
                
                this.startGame();
            }  


        }
        
        
    }
    checkIfClicked(mouse, circle){
        return Math.sqrt((mouse.x-circle.x) ** 2 + (mouse.y - circle.y) ** 2) < circle.radius;
    }
    kill(){
        cancelAnimationFrame(this.timer);
        
        _App.context.canvas.removeEventListener('touchstart', this.binder, true);
       console.log('removing delayedTapSection');
        
    }
    drawTextLabels(){
        // console.log("drawTextTLabels()");
        //timer layers
        this.ctx.fillStyle = utils.getColors().light;
        this.ctx.font = "300 20px Roboto"; 
        let str = "1st tap:   0 sec";
        this.ctx.fillText(str,this.timerbar.x, this.timerbar.y-40);
        str = "2nd tap:   "+this.game.result+" sec";
        this.ctx.fillText(str,this.timerbar.x, this.timerbar.y-20);




        this.ctx.fillStyle = utils.getColors().brightGreen;
        // this.ctx.fillStyle = utils.getColors().light;
        this.ctx.font = "300 40px Roboto"; 
        //  str = this.game.elapsedTime/1000+ " seconds elapsed";
         str = this.game.elapsedTime/1000;
        this.ctx.fillText(str,this.timerbar.x, this.timerbar.y+60);
        
        }
    }
   
export default DelayedTapSection