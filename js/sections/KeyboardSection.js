import Section from './Section';
import sectionManager from '../sectionManager';
import toneGenerator from './sectionUtils/toneGenerator';
import utils from '../utils';

//
class KeyboardSection extends Section {
    constructor(){
        super();
        this.colors = {
            light: "#f5e5d5",
            bright:"#ff0076",
            med:"#f564b8",
            dark:"#744957",
            grad:{
                a:"#fcd4cb",
                b:"#fb3a8b"
            }
        }
    }
    init(i){
        super.init(i);
        this.n = "keyboard";
        // console.log('init', this.n);
        
        this.game = {
            isActive:false,
            timer:{}
        }
        this.startTime ="";
        this.piano = {
            maxWidth:450,
            minWidth:200,
            maxHeight:325,
            maxKeyHeight:40,
            width:0,
            height:0,
            x:0,
            y:0,
            keyHeight:0,
            totalKeys:0,
            ivories:[
                {
                    note:"C",
                    freq:"261.6"
                },
                {
                    note:"D",
                    freq:"293.7"
                },
                {
                    note:"E",
                    freq:"329.6"
                },
                {
                    note:"F",
                    freq:"349.2"
                },
                {
                    note:"G",
                    freq:"392"
                },
                {
                    note:"A",
                    freq:"440"
                },
                {
                    note:"B",
                    freq:"493.9"
                }
            ]
        };
        this.song = {
            
            notes:["C", "C", "D","C", "F", "E"],
            lyrics:["Hap", "-py", "Birth","-day", "to", "you,"],
            curPos:0
        }
        this.piano.totalKeys = this.piano.ivories.length;
        
        
        // this.msg = "play 'Happy Birthday' to proceed";
    }

    start(){
        super.start();
        super.addCanvasClick();
        toneGenerator.init();
        this.piano.width = Math.min(this.piano.maxWidth, _App.w*0.75);
        this.piano.width = Math.max(this.piano.minWidth, this.piano.width);
        this.piano.height = Math.min(this.piano.maxHeight, _App.h*0.55);
      
        this.createKeys();  
      
    }
    
    update(){
        
        this.piano.width = Math.min(this.piano.maxWidth, _App.w*0.75);
        this.piano.width = Math.max(this.piano.minWidth, this.piano.width);
        
        this.piano.height = Math.min(this.piano.maxHeight, _App.h*0.55);
        this.piano.keyHeight = Math.min(this.piano.maxKeyHeight, this.piano.height*0.1);
        let keyHeightTotal = (this.piano.keyHeight*this.piano.totalKeys);
        let leftOvers = this.piano.height-keyHeightTotal;
        this.piano.margin = leftOvers/(this.piano.totalKeys+1);
        this.updateKeys();
        this.updateUI();
        
        this.timer = requestAnimationFrame(this.update.bind(this));
        
    }
    updateUI(){
        
        let p = this.piano;
        
        this.context.beginPath();
        this.context.fillStyle = this.colors.light;
        //background
        p.x = (_App.w/2)-(p.width/2);
        p.y = (_App.h/2)-(p.height/2)-40;
        this.context.rect(p.x,p.y,p.width,p.height);
        this.context.fill();
        //piano keys
        p.ivories.forEach(itm => {
            this.context.beginPath();
            let gradient = "";
            gradient = this.context.createLinearGradient(p.x, p.y, p.x+p.width, p.y+p.height);
            gradient.addColorStop("0", this.colors.grad.a);
            gradient.addColorStop("1", this.colors.grad.b);
            this.context.fillStyle = gradient;
            
            this.context.fillRect(itm.x, itm.y, itm.width, itm.height);
            this.drawTextLabels(itm);
        })        
        //lyrics
        this.context.save();
        this.context.font = "700 20px Roboto"; 
        this.context.textBaseline = "middle";
        this.context.textAlign = "center";
                
        
        let y = this.piano.y+this.piano.height+30;
        let totalmsgw = 0;
        let totalmsgspace = 0;
        let mgn=0;
        for (let i = 0; i < this.song.lyrics.length; i++) {
            totalmsgw +=this.context.measureText(this.song.lyrics[i]).width; 
        }    
        totalmsgspace = this.piano.width-totalmsgw;
        mgn=totalmsgspace/(this.song.lyrics.length+2);

        // console.log(totalmsgw);
        
        for (let i = 0; i < this.song.lyrics.length; i++) {
            let x = this.piano.x+this.piano.margin+mgn;
            const str = this.song.lyrics[i];
            x+=((mgn+(totalmsgw/this.song.lyrics.length))*i);    
            if(i<this.song.curPos){
               this.context.fillStyle = this.colors.light;
            }else{
                this.context.fillStyle = this.colors.bright;
            }
            // console.log(this.context.measureText(str).width);
            // console.log(this.piano.width);
            
            this.context.fillText(str,x, y);
            
        }
        this.context.restore();
            

        
    }
    updateKeys(){
        let p = this.piano;
        p.ivories.forEach(itm => {
            itm.x = p.x+p.margin;
            itm.y = p.y+((p.keyHeight+p.margin)*itm.i)+p.margin;
            itm.width = p.width-(p.margin*2);
            itm.height = p.keyHeight;
        });
    }

    createKeys(){
        let i=0;
        let p = this.piano;
        p.ivories.reverse().forEach(itm => {
            itm.i=i;
            
            
            itm.gradObj="";


            i++;
        });
    }

    clickHandler(e){
        super.clickHandler(e);
        if(utils.getDevConfig().skipKeyboard){
            sectionManager.proceed();
            return;
        }
        this.piano.ivories.forEach(itm => {
            if(this.checkIfClicked(this.mouse, itm)){
                this.playNote(itm);
                // console.log("STATUS: clicked on button", itm.i, itm.note);
                this.checkIfCorrect(itm);
            }
            
        });  
    }

    playNote(itm){
        // let osc = toneGenerator.getNote(itm.i);
        // console.log(itm,"<<<");
        
        toneGenerator.playSound(itm.i, itm.freq);
        setTimeout(toneGenerator.stopSound.bind(null, itm.i), 222);
    }

    checkIfCorrect(itm){
        // console.log(itm.note, this.song.curPos, this.song.notes[this.song.curPos]);
        
        if(itm.note===this.song.notes[this.song.curPos]){
            // console.log("correct note at position ", this.song.curPos);
            this.song.curPos++;
            if(this.song.curPos>this.song.notes.length){
                this.song.curPos = 0;
                return;
            }
            if(this.song.curPos==this.song.notes.length){
                // console.log('you won!');
                sectionManager.proceed();
                
            }
        }else{
            // console.log("sry wrong note, start again");
            this.song.curPos = 0;
            
        }
    }
        

    checkIfClicked(mouse, square){
        if(mouse.x>square.x && mouse.x<square.x+square.width){
            if(mouse.y>square.y && mouse.y<square.y+square.height){
                return true;
            }
        }
        return false;
    }

    kill(){
        super.kill();
    //    console.log('removing KeyboardSection');       
    }

    drawTextLabels(itm){
        //piano key note labels
        this.context.save();
        this.context.fillStyle = this.colors.light;
        this.context.font = "700 20px Roboto"; 
        let str = itm.note;
        let x = itm.x+itm.width/2;
        let y = itm.y+itm.height/2;
        this.context.textBaseline = "middle";
        this.context.textAlign = "center";
        this.context.fillText(str,x, y);
        //lyrics
        
        this.context.restore();
        
    }

}
   
export default KeyboardSection