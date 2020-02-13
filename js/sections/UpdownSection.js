import Section from './Section';
import sectionManager from '../sectionManager';
import tweenFunctions from '../tweenFunctions';
import utils from '../utils';

//
class UpdownSection extends Section {
    constructor() {
        super();
        this.colors = {
            white: "#FFFFFF",
            bright:"#f4844c",
            light: "#bbe5f4",
            med:"#65a644",
            meddark:"#3d7337",
            dark:"#345725",
            
        }
    }
    init(i) {
        super.init(i);
        this.n = "updown";
        
        this.game = {
            isActive:false,
            over:false,
            startTime:0,
            elapsedTime:0,
            targetTime:1100,
            totalMoves: 3,
            btnsArr: [],
            curGuessPos:0,
            correctGuesses:0,
            maxWidth: 300,
            minWidth: 110,
            width: 0,
            height: 0,
            x: 0,
            y: 0,
            totalHeight:0,
            numBtns:4,
            userChoice:null,
            computerChoice:null,
            buttons: {
                margin:10,
                w:200,
                h:100,
                strokeWidth:40,
                colorList: [this.colors.light, this.colors.bright, this.colors.med, this.colors.meddark]
            }

        };
        
        this.timerbar = {
            width:_App.w*0.5,
            maxWidth:375,
            height:10,
            x:0,
            y:0,
            pctBarWidth:0,
            pctComplete:0,
            elapsedTime:0,
            targetTime:0,

        }
        
        

    }

    initButtons() {
        
        for (let i = 0; i < this.game.numBtns; i++) {
            const itm = {
                i:i,
                iteration:0,
                totalIterations:24,
                hitArea:{
                    x:0,
                    y:0,
                    width:0,
                    height:0
                }
                
            };
            this.game.btnsArr.push(itm);
        }
    }
            

    start() {
        super.start();
        super.addCanvasClick();
        this.initButtons();
    }

    showCanvas(){
        super.showCanvas();
        // this.initGame();
    }

    clickHandler(e) {
        // console.log("clicked");
        if(!this.game.isActive){
            this.startGame();
            return;
        }
        super.clickHandler(e);
        this.game.btnsArr.forEach(itm => {
            if (this.checkIfClicked(this.mouse, itm.hitArea)) {
                this.game.userChoice=itm.i+1;
                console.log("STATUS: clicked on button", itm.i, itm);
            }

        });
    }

    checkIfClicked(mouse, square) {
        if (mouse.x > square.x && mouse.x < square.x + square.width) {
            if (mouse.y > square.y && mouse.y < square.y + square.height) {
                return true;
            }
        }
        return false;
    }

    update() {
        // console.log("updating!! ", this.n);
        if(this.game.isActive){
            this.updateGame();
        }
        let x = _App.w / 2;
        let y = _App.h / 2; 
        
        
        if(!this.game.over){
            this.updateUI();
            this.timer = requestAnimationFrame(this.update.bind(this));
        }
    }

    updateUI() {
        let ctx = _App.context;
        
        ctx.strokeWidth = this.game.buttons.strokeWidth;
        for (let i = 0; i < this.game.btnsArr.length; i++) {
            let itm = this.game.btnsArr[i];
            itm.hitArea.x = _App.w/2-this.game.buttons.w/2;
            itm.hitArea.y = 20+(this.game.buttons.h+this.game.buttons.margin)*itm.i;
            itm.hitArea.width = this.game.buttons.w;
            itm.hitArea.height = this.game.buttons.h;
            ctx.beginPath();
            ctx.rect(itm.hitArea.x, itm.hitArea.y, itm.hitArea.width,itm.hitArea.height);
            ctx.strokeStyle=this.game.buttons.colorList[i];
            ctx.stroke();
            if(this.game.userChoice==(1+itm.i)){
                // console.log("chosen ",itm.i);
                ctx.beginPath();
                ctx.rect(itm.hitArea.x, itm.hitArea.y, itm.hitArea.width,itm.hitArea.height);
                ctx.save();
                ctx.globalAlpha=0.3;
                ctx.fillStyle=this.game.buttons.colorList[i];
                
                ctx.fill();
                ctx.restore();
                
            }

            
        }
        // if(this.game.isActive){
        //     let tmp = Math.floor(Math.random()*this.game.btnsArr.length);
        //     let t = this.game.btnsArr[tmp]; 
        //     ctx.strokeStyle=this.colors.white;
        //     ctx.beginPath();
        //     ctx.rect(t.hitArea.x, t.hitArea.y, t.hitArea.width,t.hitArea.height);
        //     ctx.stroke();
            
        //  }
        

        if(this.game.computerChoice!=null){
            let tgt = this.game.btnsArr[this.game.computerChoice-1];
            ctx.fillStyle = this.colors.white;
            ctx.beginPath();
            ctx.rect(tgt.hitArea.x+10,tgt.hitArea.y+10,tgt.hitArea.width-20,tgt.hitArea.height-20);
            ctx.fill();
            let msg = 'Computer: '+ this.game.computerChoice+" || You: "+this.game.userChoice;
            if(this.game.userChoice==null){
                msg = "Please make a selection before timer runs out."
            }
            this.showMessage(msg);

            if(this.game.computerChoice==this.game.userChoice){
                console.log("you wonnn", this.game.isActive);
                if(this.game.over==false){
                    this.game.over=true;
                    this.finished();
                }
                return false;
                
            }
        }
        this.updateTimerBar();

    }

    updateTimerBar(){
        let ctx = _App.context;
        ctx.fillStyle = this.colors.light; 
        ctx.beginPath();
        this.timerbar.x = (_App.w/2)-(this.timerbar.width/2);
        this.timerbar.y = (_App.h)-(this.timerbar.height)-100;
        ctx.rect(this.timerbar.x,
        this.timerbar.y,this.timerbar.width,this.timerbar.height);
        ctx.fill();
        if(this.game.isActive){
            ctx.fillStyle = this.colors.bright; 
            ctx.beginPath();
            ctx.rect(this.timerbar.x,this.timerbar.y,this.timerbar.width-this.timerbar.pctBarWidth,this.timerbar.height);
            ctx.fill();
        }
    }
    startGame(){
        console.log("STATUS: startGame()", this.game.isActive);
        this.game.computerChoice=null;
        this.game.userChoice=null;
        this.game.isActive=true;
        this.game.startTime = new Date();
        this.gameBinder = this.updateGame.bind(this);
        this.game.timer = setInterval(this.gameBinder, this.interval)
    }

    updateGame(){
        // console.log("STATUS: updateGame()", this);
        let d = new Date();
        this.game.elapsedTime = d-this.game.startTime;
        this.game.pctComplete = (this.game.elapsedTime/this.game.targetTime);
        this.timerbar.pctBarWidth = this.timerbar.width*this.game.pctComplete;
        // console.log(this.game.pctComplete);
        //
        if(this.game.pctComplete>=1){
           this.endRound(false);
        }
    }

    endRound(clicked){
        this.game.isActive=false;
        clearInterval(this.game.timer);
        this.game.computerChoice = Math.ceil(Math.random()*this.game.btnsArr.length);
        // console.log('i choose ', this.game.computerChoice);
       
    }

    // initGame() {
    //     // console.log('initGame', this.keyboardKeysArr);  
    // }

    kill(){
        // console.log("kill instance");
        
        super.kill();
        cancelAnimationFrame(this.timer)
        this.timer = null;

    }
    showMessage(msg){
            
            //timer layers
            _App.context.fillStyle = this.colors.light;
            _App.context.font = "300 14px Roboto"; 
            
            _App.context.save();
            _App.context.textAlign="center";
            _App.context.fillText(msg,_App.w/2, this.timerbar.y+30);
            _App.context.restore();        
    }
    
}
export default UpdownSection
//