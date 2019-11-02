import Section from './Section';
import utils from '../utils';
import sectionManager from '../sectionManager';
//
class DelayedTapSection extends Section {
    constructor(){
        super();
    }
    init(){
        this.interval = 10;
        this.n = "delayedTap";
        this.startTime ="";
        this.ctx = _App.context;
        //
        this.game = {
            isActive:false,
            targetTime:3000,
            curTime:0,
            elapsedTime:0,
            pctComplete:0,
            result:0,
            timer:{}
        }
        this.timerbar = {
            width:_App.w*0.75,
            maxWidth:375,
            height:10,
            x:0,
            y:0,
            pctBarWidth:0,
            tap1DisplayValue:"–",
            tap2DisplayValue:"–"
        }
        
    }
    start(){
        // let div = document.querySelector('#instructions');
        // div.classList.toggle('show');
        this.timerbar.width = Math.min(_App.w*0.75, this.timerbar.maxWidth);
        this.binder = this.clickHandler.bind(this);
        _App.context.canvas.addEventListener(_App.eventType, this.binder, true);
        this.update();
    }
    
    update(){
        this.updateUI();
        this.drawGame();
        this.timer = requestAnimationFrame(this.update.bind(this));
    }
    updateUI(){
        let ctx = _App.context;
        ctx.fillStyle = utils.getColors().light; 
        ctx.beginPath();
        this.timerbar.x = (_App.w/2)-(this.timerbar.width/2);
        this.timerbar.y = (_App.h/2)-(this.timerbar.height);
        ctx.rect(this.timerbar.x,
        this.timerbar.y,this.timerbar.width,this.timerbar.height);
        ctx.fill();
        
    }
    updateGame(){
        // console.log("STATUS: updateGame()", this);
        let d = new Date();
        this.game.elapsedTime = d-this.startTime;
        this.game.pctComplete = (this.game.elapsedTime/this.game.targetTime);
        this.timerbar.pctBarWidth = this.timerbar.width*this.game.pctComplete;
        //
        if(this.game.pctComplete>=1){
           this.endGame(false);
        }
    }

    drawGame(){
        let gradient = this.ctx.createLinearGradient(this.timerbar.x, this.timerbar.y, this.timerbar.x+this.timerbar.width, this.timerbar.y);
            gradient.addColorStop("0", utils.getGrad().a);
            gradient.addColorStop("1", utils.getGrad().b);
            this.ctx.fillStyle = gradient;
            this.ctx.fillRect((_App.w/2)-(this.timerbar.pctBarWidth/2), this.timerbar.y, this.timerbar.width*this.game.pctComplete, this.timerbar.height)
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
                this.game.timer = setInterval(this.gameBinder, this.interval)
        
            }
    }

    endGame(clicked){
        this.game.isActive=false;
        clearInterval(this.game.timer)
        if(clicked){
            this.game.result = this.game.elapsedTime/1000;
            if((this.game.targetTime/1000)-this.game.result < 0.5){
                console.log("close enough");
                
                sectionManager.proceed();
            }
        }else{
            this.game.elapsedTime = this.game.targetTime;
            this.timerbar.tap2DisplayValue = this.game.elapsedTime/1000+" sec"
            console.log('you waited too long');
        }
    }

    clickHandler(e){
        e.preventDefault();
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
            this.startGame();
        }
    }

    checkIfClicked(mouse, circle){
        return Math.sqrt((mouse.x-circle.x) ** 2 + (mouse.y - circle.y) ** 2) < circle.radius;
    }

    kill(){
        cancelAnimationFrame(this.timer);    
        _App.context.canvas.removeEventListener(_App.eventType, this.binder, true);
       console.log('removing delayedTapSection');
    }

    drawTextLabels(){
        if(this.game.isActive){
            this.timerbar.tap1DisplayValue="0 sec";
            this.timerbar.tap2DisplayValue=this.game.elapsedTime/1000+" sec";
        }
        //timer layers
        this.ctx.fillStyle = utils.getColors().light;
        this.ctx.font = "300 20px Roboto"; 
        
        this.ctx.save();
        let str = "1st tap:";
        this.ctx.textAlign="right";
        this.ctx.fillText(str,_App.w/2-10, this.timerbar.y-40);

        str = "2nd tap:";
        this.ctx.fillText(str,_App.w/2-10, this.timerbar.y-20);
        this.ctx.restore();
        
        this.ctx.save();
        this.ctx.textAlign="left";
        this.ctx.fillText(this.timerbar.tap1DisplayValue,_App.w/2+10, this.timerbar.y-40);
        this.ctx.fillText(this.timerbar.tap2DisplayValue,_App.w/2+10, this.timerbar.y-20);
        this.ctx.restore();



        this.ctx.fillStyle = utils.getColors().lessBright;
        // this.ctx.fillStyle = utils.getColors().light;
        this.ctx.font = "700 40px Roboto"; 
        //  str = this.game.elapsedTime/1000+ " seconds elapsed";
        // this.ctx.save();
        // this.ctx.textAlign = "center";
         str = this.game.elapsedTime/1000;
        this.ctx.fillText(str,_App.w/2-50, this.timerbar.y+60);
        // this.ctx.restore();
        
        }
    }
   
export default DelayedTapSection