import Section from './Section';
import tweenFunctions from '../tweenFunctions';

//
class RepeatSection extends Section {
    constructor() {
        super();
        this.colors = {
            white: "#FFFFFF",
            light: "#f9debd",
            yellow:"#fecc45",
            bright: "#fb970c",
            med: "#c46c14",
            ltbrown:"#c69c6d",
            gray:"#a89d83",
            dark: "#6c6555"
        };
    }
    init(i) {
        super.init(i);
        this.n = "repeater";
        this.piano = {
            maxWidth: 550,
            minWidth: 300,
            width: 0,
            height: 0,
            x: 0,
            y: 0,
            noteDiam: 66,
            noteRad: 33,
            noteMrgn: 11
        };
        this.colors.grad = {
                a: this.colors.light,
                b: this.colors.med
            };
        this.colors.notes = {
                a: this.colors.gray,
                b: this.colors.ltbrown,
                c: this.colors.med,
                d: this.colors.bright,
                e: this.colors.yellow,
                f: this.colors.light
        };
        this.game = {
            totalMoves: 6,
            answersArr: [],
            curGuessPos:0,
            correctGuesses:0,
            autoPB: {
                curPBPos: 0,
                playingBack: false,
                curPBItem:{}
            }

        },
        this.keyboardKeysArr = [];
        this.initNotes();

    }

    initNotes() {
        let i = 0;

        for (const key in this.colors.notes) {
            if (this.colors.notes.hasOwnProperty(key)) {
                const itm = {};
                itm.color = this.colors.notes[key];
                //   console.log(itm);

                itm.i = i;
                itm.rad = this.piano.noteRad;
                itm.origRad = this.piano.noteRad;
                itm.diam = this.piano.noteDiam;
                itm.iteration=0;
                itm.totalIterations=24;
                itm.hitArea = {
                    width: this.piano.noteDiam,
                    height: this.piano.noteDiam,
                }
                this.keyboardKeysArr.push(itm);
                this.piano.width += (this.piano.noteDiam + this.piano.noteMrgn);
                // console.log("idth ", this.piano.width);

            }
            i++;
        }
    }

    start() {
        super.start();
        super.addCanvasClick();
        
        // this.piano.width = Math.min(this.piano.maxWidth, _App.w*0.75);
        // this.piano.width = Math.max(this.piano.minWidth, this.piano.width);

    }

    showCanvas(){
        super.showCanvas();
        this.initGame();
    }

    clickHandler(e) {
        // console.log("clicked");

        super.clickHandler(e);
        this.keyboardKeysArr.forEach(itm => {
            if (this.checkIfClicked(this.mouse, itm.hitArea)) {
                itm.rad = itm.origRad/1.5;
                // this.scaleBtn(itm);
                console.log("STATUS: clicked on button", itm.i, itm);
                if(this.game.autoPB.playingBack == false){
                    this.checkClickGuess(itm);
                }

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

        this.updateUI();
        // let gradient = this.context.createLinearGradient(_App.w / 2 - 100, _App.h / 2 - 100, _App.w / 2 + 100, _App.h / 2 + 100);
        // gradient.addColorStop("0", this.colors.grad.a);
        // gradient.addColorStop("1", this.colors.grad.b);

        // this.context.fillStyle = gradient;
        // this.context.fillRect(0,0,50,50);
        // this.context.fill();

        let x = _App.w / 2;
        let y = _App.h / 2;
        // this.context.save();
        // this.context.textBaseline = "middle";
        // this.context.textAlign = "center";
        // this.context.font = "700 20px Roboto";
        // this.context.fillText(this.n.toUpperCase() + " section", x, y + 80);
        // this.context.restore();



        this.timer = requestAnimationFrame(this.update.bind(this));

    }

    updateUI() {
        this.keyboardKeysArr.forEach(itm => {
            this.scaleBtn(itm);
            let woff = _App.w / 2 - (this.piano.width);
            itm.x = (this.piano.noteMrgn / 2 + (this.piano.noteDiam + this.piano.noteMrgn) * itm.i) + (this.piano.noteRad) + _App.w / 2 - (this.piano.width / 2);
            itm.y = _App.h / 2;
            itm.hitArea.y = itm.y - this.piano.noteRad;
            itm.hitArea.x = itm.x - this.piano.noteRad;
            this.context.fillStyle = itm.color;
            // console.log("itm.color", itm.color);
            
            this.context.beginPath();
            this.context.arc(itm.x, itm.y, itm.rad, 0, Math.PI * 2);
            this.context.fill();
        });
        if (this.game.autoPB.playingBack) {
            this.drawActive();
        }
    }


    initGame() {
        // console.log('initGame', this.keyboardKeysArr);
        this.game.answersArr = [];
        for (let i = 0; i < this.game.totalMoves; i++) {
            this.game.correctGuesses = 0;
            let num = Math.floor(Math.random() * this.keyboardKeysArr.length);
            if(this.game.answersArr[i-1]==num)num++;
            this.game.answersArr.push(num);
        }
        console.log("game initted, here are the steps:", this.game.answersArr);
        // this.playBack();
        setTimeout(this.playBack.bind(this), 222);
        // this.addGameStep();

    }
    playBack() {
        this.game.curGuessPos=0;
        this.game.autoPB.playingBack = true;
        this.game.autoPB.curPBPos = 0;

        
        this.playNextStep();
        // setTimeout(this.playNextStep.bind(this), 111);

    }
    playNextStep() {
        // console.log("playnextStep", this.game.autoPB.curPBPos, this.game.answersArr[this.game.autoPB.curPBPos]);
        let _i = this.game.answersArr[this.game.autoPB.curPBPos];
        this.game.autoPB.curPBItem = this.keyboardKeysArr[_i];
        console.log("playing next", this.game.autoPB.curPBPos, this.game.correctGuesses);
        if (this.game.autoPB.curPBPos <= this.game.correctGuesses) {
            
            setTimeout(this.playNextStep.bind(this), 444);
            this.game.autoPB.curPBPos++;
        } else {
            console.log("autoplayback complete");
            this.game.autoPB.curPBPos = 0;
            this.game.autoPB.playingBack = false;
        }
    }

    checkClickGuess(itm){
        let clicked = itm.i;
        let tgt = this.game.answersArr[this.game.curGuessPos];
        if(clicked==tgt){
            
            this.game.curGuessPos++;
            // console.log('yes',this.game.curGuessPos,this.game.correctGuesses);
            if(this.game.curGuessPos<=this.game.correctGuesses){
                console.log("...and?");
                
            }else{
                this.game.correctGuesses++;
                if(this.game.correctGuesses==this.game.totalMoves){
                    console.log("you won!");
                    this.finished();
                }else{
                    // this.playBack();
                    setTimeout(this.playBack.bind(this), 222);
                }
            }

            // console.log('that\'s the correct btn',this.game.answersArr.length);
            // if(this.game.correctGuesses==this.game.answersArr.length){
            // if(this.game.correctGuesses<=this.game.answersArr.length){
            //     this.playBack();
            // }
            
        }else{
            console.log('thats wrong, ',clicked, tgt);
            
        }
       
        
        
    }

    drawActive() {
        this.context.beginPath();
        let tgt = this.game.autoPB.curPBItem;
        // console.log("drawing active", tgt);
        this.context.arc(tgt.x, tgt.y, tgt.rad + 10, 0, Math.PI * 2);
        this.context.strokeStyle = this.colors.white;
        this.context.lineWidth = 5;
        this.context.stroke();

    }

    scaleBtn(itm){  
        if(itm.rad<itm.origRad){
            itm.iteration++;  
            if (itm.iteration < itm.totalIterations) {
                // console.log(iteration, curH);
                itm.rad = tweenFunctions.easeInSine(itm.iteration, itm.rad, itm.origRad, itm.totalIterations);
                
                // console.log(curH,"<<");
                
            }else{
                itm.iteration=0;
                itm.rad = itm.origRad;
            } 
        }
           
    }

}
export default RepeatSection