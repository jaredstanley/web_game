
import Section from './Section';
import tweenFunctions from '../tweenFunctions';
import toneGenerator from './sectionUtils/toneGenerator';
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
            startTime:0,
            elapsedTime:0,
            targetTime:600,
            totalMoves: 3,
            keysArr: [],
            curGuessPos:0,
            correctGuesses:0,
            maxWidth: 400,
            minWidth: 200,
            width: 0,
            height: 0,
            x: 0,
            y: 0,
            totalHeight:0,
            numKeys:4,
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
            message:{
                cur:"",
                win:"you did it!",
                toolate:"you took too long",
                tooearly:"nope, too early",
            }
        }
        
        this.initButtons();

    }

    initButtons() {
        
        for (let i = 0; i < this.game.numKeys; i++) {
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
            this.game.keysArr.push(itm);
        }
    }
            

    start() {
        super.start();
        super.addCanvasClick();

    }

    showCanvas(){
        super.showCanvas();
        this.initGame();
    }

    clickHandler(e) {
        // console.log("clicked");
        if(!this.game.isActive){
            this.startGame();
            return;
        }
        super.clickHandler(e);
        this.game.keysArr.forEach(itm => {
            if (this.checkIfClicked(this.mouse, itm.hitArea)) {

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
        this.updateUI();
       
        let x = _App.w / 2;
        let y = _App.h / 2;
       

        this.timer = requestAnimationFrame(this.update.bind(this));

    }

    updateUI() {
        _App.context.strokeWidth = this.game.buttons.strokeWidth;
        for (let i = 0; i < this.game.keysArr.length; i++) {
            let itm = this.game.keysArr[i];
            itm.hitArea.x = _App.w/2-this.game.buttons.w/2;
            itm.hitArea.y = (this.game.buttons.h+this.game.buttons.margin)*itm.i;
            itm.hitArea.width = this.game.buttons.w;
            itm.hitArea.height = this.game.buttons.h;
            _App.context.beginPath();
            _App.context.rect(itm.hitArea.x, itm.hitArea.y, itm.hitArea.width,itm.hitArea.height);
            _App.context.strokeStyle=this.game.buttons.colorList[i];
            _App.context.stroke();
            
        }
        this.updateTimerBar();
    }

    updateTimerBar(){
        _App.context.fillStyle = this.colors.light; 
        _App.context.beginPath();
        this.timerbar.x = (_App.w/2)-(this.timerbar.width/2);
        this.timerbar.y = (_App.h)-(this.timerbar.height)-100;
        _App.context.rect(this.timerbar.x,
        this.timerbar.y,this.timerbar.width,this.timerbar.height);
        _App.context.fill();

        _App.context.fillStyle = this.colors.bright; 
        _App.context.beginPath();
        _App.context.rect(this.timerbar.x,this.timerbar.y,this.timerbar.width-this.timerbar.pctBarWidth,this.timerbar.height);
        _App.context.fill();
    }
    startGame(){
        console.log("STATUS: startGame()", this.game.isActive);
                this.timerbar.message.cur="";
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
        console.log(this.game.pctComplete);
        
       


        //
        if(this.game.pctComplete>=1){
           this.endGame(false);
        }
    }

    endGame(clicked){
        this.game.isActive=false;
        clearInterval(this.game.timer);
        console.log('i choose ', Math.ceil(Math.random()*this.game.keysArr.length));
    }

    initGame() {
        // console.log('initGame', this.keyboardKeysArr);
        
    }
    
   


}
export default UpdownSection
//