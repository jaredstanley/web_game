import Section from './Section';
import eventTypeManager from '../eventTypeManager';
import utils from '../utils';
import sectionManager from '../sectionManager';

//
class KeyboardSection extends Section {
    constructor(){
        super();
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
            maxWidth:350,
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
        
        this.piano.width = Math.min(this.piano.maxWidth, _App.w*0.75);
        this.piano.height = Math.min(this.piano.maxHeight, _App.h*0.55);
      
        this.createKeys();  
      
    }
    
    update(){
        
        this.piano.width = Math.min(this.piano.maxWidth, _App.w*0.75);
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
        this.context.fillStyle = utils.getColors().light;
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
            gradient.addColorStop("0", itm.gradient.a);
            gradient.addColorStop("1", itm.gradient.b);
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
            
        for (let i = 0; i < this.song.lyrics.length; i++) {
            let x = this.piano.x+this.piano.margin;
            const str = this.song.lyrics[i];
            x+=(60*i);    
            if(i<this.song.curPos){
               this.context.fillStyle = utils.getColors().white;
            }else{
                this.context.fillStyle = utils.getColors().upcoming;
            }
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
        
        this.piano.ivories.forEach(itm => {
            if(this.checkIfClicked(this.mouse, itm)){
                // console.log("STATUS: clicked on button", itm.i, itm.note);
                this.checkIfCorrect(itm);
            }
            
        });  
    }

    checkIfCorrect(itm){
        // console.log(itm.note, this.song.curPos, this.song.notes[this.song.curPos]);
        
        if(itm.note===this.song.notes[this.song.curPos]){
            console.log("correct note at position ", this.song.curPos);
            this.song.curPos++;
            if(this.song.curPos>this.song.notes.length){
                this.song.curPos = 0;
                return;
            }
            if(this.song.curPos==this.song.notes.length){
                console.log('you won!');
                sectionManager.proceed();
                
            }
        }else{
            console.log("sry wrong note, start again");
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
       console.log('removing KeyboardSection');       
    }

    drawTextLabels(itm){
        //piano key note labels
        this.context.save();
        this.context.fillStyle = utils.getColors().white;
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