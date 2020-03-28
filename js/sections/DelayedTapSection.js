import Section from './Section';
import eventTypeManager from '../eventTypeManager';
import utils from '../utils';
import Hourglass from '../Hourglass';
//
class DelayedTapSection extends Section {
    constructor(){
        super();
        this.colors = {
            light: "#b55bfc",
            bright:"#ff0082",
            med:"#700089",
            dark:"#181546"
        }
    }
    init(i){
        super.init(i)
        this.n = "delayedTap";
        console.log("init", this.n);  

        this.interval = 1;
        this.startTime ="";
        //
        this.game = {
            isActive:false,
            targetTime:utils.getDevConfig().targetTime,
            tolerance:utils.getDevConfig().tolerance,
            curTime:0,
            elapsedTime:0,
            pctComplete:0,
            result:0,
            timer:{}
        }
        this.tb = {
            width:_App.w*0.75,
            maxWidth:375,
            height:10,
            x:0,
            y:0,
            // pctBarWidth:0,
            tap1DisplayValue:"0",
            tap2DisplayValue:"0.0",
            message:{
                cur:"",
                win:"you did it!",
                toolate:"you took too long",
                tooearly:"nope, too early",
            }
        };
        this.hourglass = new Hourglass("center");
        this.gradient = _App.context.createLinearGradient(_App.w*0.25,0,_App.w*0.75,0);
            this.gradient.addColorStop("0", this.colors.bright);
            this.gradient.addColorStop("1", this.colors.med);
        
        // this.msg = "tap "+this.game.targetTime/1000+" seconds apart to proceed";
       
        
        
    }
    start(){
        this.hourglass.init(this.tb.x, _App.h/2, 
            this.tb.width, this.tb.height, 
            this.colors.light, this.gradient);
        super.start();
        super.addCanvasClick();
        // super.setBG();
        this.tb.width = Math.min(_App.w*0.75, this.tb.maxWidth);
        // super.showCanvas();
    }
    
    update(){
        // console.log('upsRESD DELAYED TAP');
        
        this.updateUI();
        this.drawGame();
        this.timer = requestAnimationFrame(this.update.bind(this));
    }
    updateUI(){
        this.hourglass.update(this.game.pctComplete);
        // this.context.fillStyle = this.colors.light; 
        // this.context.beginPath();
        // this.tb.x = (_App.w/2)-(this.tb.width/2);
        // this.tb.y = (_App.h/2)-(this.tb.height);
        // this.context.rect(this.tb.x,
        // this.tb.y,this.tb.width,this.tb.height);
        // this.context.fill();
        
    }
    updateGame(){
        // console.log("STATUS: updateGame()", this);
        let d = new Date();
        this.game.elapsedTime = d-this.startTime;
        this.game.pctComplete = (this.game.elapsedTime/this.game.targetTime);
        // this.tb.pctBarWidth = this.tb.width*this.game.pctComplete;
        //
        if(this.game.pctComplete>=1){
           this.endGame(false);
        }
    }

    drawGame(){
            // this.context.fillStyle = this.gradient;
            // this.context.fillRect((_App.w/2)-(this.tb.pctBarWidth/2), this.tb.y, this.tb.width*this.game.pctComplete, this.tb.height)
        //
        this.drawTextLabels();


    }
    startGame(){
        // console.log("STATUS: startGame()", this.game.isActive);
            if(!this.game.isActive){
                this.tb.message.cur="";
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
            if((this.game.targetTime/1000)-this.game.result < this.game.tolerance){
                // console.log("close enough");
                this.tb.message.cur = this.tb.message.win;
                this.finished();
            }else{
                this.tb.message.cur = this.tb.message.tooearly;
            }
        }else{
            this.game.elapsedTime = this.game.targetTime;
            this.tb.tap2DisplayValue = this.game.elapsedTime/1000+" sec";
            this.tb.message.cur = this.tb.message.toolate;
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
    //    console.log('removing delayedTapSection');
    }

    drawTextLabels(){
        let tgtY = this.hourglass.getParams().y;
        if(this.game.isActive){
            this.tb.tap1DisplayValue="0 sec";
            this.tb.tap2DisplayValue=this.game.elapsedTime/1000+" sec";
        }
        //timer layers
        this.context.fillStyle = this.colors.light;
        this.context.font = "300 20px Roboto"; 
        
        this.context.save();
        let str = "1st tap:";
        this.context.textAlign="right";
        this.context.fillText(str,_App.w/2-10, tgtY-40);

        str = "2nd tap:";
        this.context.fillText(str,_App.w/2-10, tgtY-20);
        this.context.restore();
        
        this.context.save();
        this.context.textAlign="left";
        this.context.fillText(this.tb.tap1DisplayValue,_App.w/2+10, tgtY-40);
        this.context.fillText(this.tb.tap2DisplayValue,_App.w/2+10, tgtY-20);
        this.context.restore();



        this.context.fillStyle = this.colors.bright;
        // this.context.fillStyle = utils.getColors().light;
        this.context.font = "700 40px Roboto"; 
        //  str = this.game.elapsedTime/1000+ " seconds elapsed";
        // this.context.save();
        this.context.textAlign = "center";
         str = this.tb.tap2DisplayValue;
         str=str.substr(0,3);
         this.context.fillText(str,_App.w/2, tgtY+60);
        // this.context.restore();

        this.context.font = "italic 200 14px Roboto"; 
        str = this.tb.message.cur;
        this.context.fillText(str,_App.w/2, tgtY-80);
        

        

        
        }

    }
   
export default DelayedTapSection