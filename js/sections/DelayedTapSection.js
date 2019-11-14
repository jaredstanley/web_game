import Section from './Section';
import eventTypeManager from '../eventTypeManager';
import utils from '../utils';
//
class DelayedTapSection extends Section {
    constructor(){
        super();
    }
    init(i){
        super.init(i)
        this.n = "delayedTap";
        // console.log("init", this.n);  

        this.interval = 1;
        this.startTime ="";
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
            tap1DisplayValue:"0",
            tap2DisplayValue:"0.0",
            message:{
                cur:"",
                win:"you did it!",
                toolate:"you took too long",
                tooearly:"nope, too early",
            }
        }
        // this.msg = "tap "+this.game.targetTime/1000+" seconds apart to proceed";
       
        
        
    }
    start(){
        super.start();
        super.addCanvasClick();

        this.timerbar.width = Math.min(_App.w*0.75, this.timerbar.maxWidth);
        // super.showCanvas();
    }
    
    update(){
        console.log('upsRESD DELAYED TAP');
        
        this.updateUI();
        this.drawGame();
        this.timer = requestAnimationFrame(this.update.bind(this));
    }
    updateUI(){
        
        this.context.fillStyle = utils.getColors().light; 
        this.context.beginPath();
        this.timerbar.x = (_App.w/2)-(this.timerbar.width/2);
        this.timerbar.y = (_App.h/2)-(this.timerbar.height);
        this.context.rect(this.timerbar.x,
        this.timerbar.y,this.timerbar.width,this.timerbar.height);
        this.context.fill();
        
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
        let gradient = this.context.createLinearGradient(this.timerbar.x, this.timerbar.y, this.timerbar.x+this.timerbar.width, this.timerbar.y);
            gradient.addColorStop("0", utils.getGrad().a);
            gradient.addColorStop("1", utils.getGrad().b);
            this.context.fillStyle = gradient;
            this.context.fillRect((_App.w/2)-(this.timerbar.pctBarWidth/2), this.timerbar.y, this.timerbar.width*this.game.pctComplete, this.timerbar.height)
        //
        this.drawTextLabels();


    }
    startGame(){
        console.log("STATUS: startGame()", this.game.isActive);
            if(!this.game.isActive){
                this.timerbar.message.cur="";
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
                // console.log("close enough");
                this.timerbar.message.cur = this.timerbar.message.win;
                this.finished();
            }else{
                this.timerbar.message.cur = this.timerbar.message.tooearly;
            }
        }else{
            this.game.elapsedTime = this.game.targetTime;
            this.timerbar.tap2DisplayValue = this.game.elapsedTime/1000+" sec";
            this.timerbar.message.cur = this.timerbar.message.toolate;
            // console.log('you waited too long');
        }
    }

    clickHandler(e){
        super.clickHandler(e);
        if(this.game.isActive){
            this.endGame(true);
        }else{
            this.startGame();
        }
    }

    checkIfClicked(mouse, circle){
        return Math.sqrt((mouse.x-circle.x) ** 2 + (mouse.y - circle.y) ** 2) < circle.radius;
    }

    kill(){
        super.kill();
        clearInterval(this.game.timer);
       console.log('removing delayedTapSection');
    }

    drawTextLabels(){
        if(this.game.isActive){
            this.timerbar.tap1DisplayValue="0 sec";
            this.timerbar.tap2DisplayValue=this.game.elapsedTime/1000+" sec";
        }
        //timer layers
        this.context.fillStyle = utils.getColors().light;
        this.context.font = "300 20px Roboto"; 
        
        this.context.save();
        let str = "1st tap:";
        this.context.textAlign="right";
        this.context.fillText(str,_App.w/2-10, this.timerbar.y-40);

        str = "2nd tap:";
        this.context.fillText(str,_App.w/2-10, this.timerbar.y-20);
        this.context.restore();
        
        this.context.save();
        this.context.textAlign="left";
        this.context.fillText(this.timerbar.tap1DisplayValue,_App.w/2+10, this.timerbar.y-40);
        this.context.fillText(this.timerbar.tap2DisplayValue,_App.w/2+10, this.timerbar.y-20);
        this.context.restore();



        this.context.fillStyle = utils.getColors().lessBright;
        // this.context.fillStyle = utils.getColors().light;
        this.context.font = "700 40px Roboto"; 
        //  str = this.game.elapsedTime/1000+ " seconds elapsed";
        // this.context.save();
        this.context.textAlign = "center";
         str = this.timerbar.tap2DisplayValue;
         str=str.substr(0,3);
         this.context.fillText(str,_App.w/2, this.timerbar.y+60);
        // this.context.restore();

        this.context.font = "italic 200 14px Roboto"; 
        str = this.timerbar.message.cur;
        this.context.fillText(str,_App.w/2, this.timerbar.y-80);
        

        

        
        }

    }
   
export default DelayedTapSection