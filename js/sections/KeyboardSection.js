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
            maxWidth:350,
            maxHeight:425,
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
        
        
        
    }
    start(){
        // let div = document.querySelector('#instructions');
        // div.classList.toggle('show');
        // //
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
        this.piano.width = Math.min(this.piano.maxWidth, _App.w*0.75);
        this.piano.height = Math.min(this.piano.maxHeight, _App.h*0.75);
        
        console.log(this.n, ' started', this.piano);
        this.createKeys();  
        this.update();
    }
    
    update(){
        
        this.piano.width = Math.min(this.piano.maxWidth, _App.w*0.75);
        this.piano.height = Math.min(this.piano.maxHeight, _App.h*0.75);
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
        
        this.ctx.beginPath();
        this.ctx.fillStyle = utils.getColors().light;
        //background
        p.x = (_App.w/2)-(p.width/2);
        p.y = (_App.h/2)-(p.height/2);
        this.ctx.rect(p.x,p.y,p.width,p.height);
        this.ctx.fill();
        //piano keys
        p.ivories.forEach(itm => {
            this.ctx.beginPath();
            let gradient = "";
            gradient = this.ctx.createLinearGradient(p.x, p.y, p.x+p.width, p.y+p.height);
            gradient.addColorStop("0", itm.gradient.a);
            gradient.addColorStop("1", itm.gradient.b);
            this.ctx.fillStyle = gradient;
            
            this.ctx.fillRect(itm.x, itm.y, itm.width, itm.height);
            this.drawTextLabels(itm);
        })        
        //lyrics
        this.ctx.save();
        this.ctx.font = "700 20px Roboto"; 
        this.ctx.textBaseline = "middle";
        this.ctx.textAlign = "center";
                
        
        let y = this.piano.y+this.piano.height+30;
            
        for (let i = 0; i < this.song.lyrics.length; i++) {
            let x = this.piano.x+this.piano.margin;
            const str = this.song.lyrics[i];
            x+=(60*i);    
            if(i<this.song.curPos){
               this.ctx.fillStyle = utils.getColors().white;
            }else{
                this.ctx.fillStyle = utils.getColors().upcoming;
            }
            this.ctx.fillText(str,x, y);
            
        }
        this.ctx.restore();
            

        
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
        p.ivories.forEach(itm => {
            itm.i=i;
            itm.gradObj="";


            i++;
        });
    }

    clickHandler(e){
        // console.log("keyboardSection clickHandler called", e);
        let tgt = "";
        if (utils.getStatus().type=="mobile"){
            // console.log('checking mobiel click', e.targetTouches[0]);
            tgt = e.targetTouches[0];
        }else{
            tgt = e;
        }
        let _mouse = {
            x:tgt.clientX,
            y:tgt.clientY
        }    
        this.piano.ivories.forEach(itm => {
            if(this.checkIfClicked(_mouse, itm)){
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
        cancelAnimationFrame(this.timer);    
        _App.context.canvas.addEventListener(eventType, this.binder, true);
       console.log('removing KeyboardSection');
        
    }

    drawTextLabels(itm){
        //piano key note labels
        this.ctx.save();
        this.ctx.fillStyle = utils.getColors().white;
        this.ctx.font = "700 20px Roboto"; 
        let str = itm.note;
        let x = itm.x+itm.width/2;
        let y = itm.y+itm.height/2;
        this.ctx.textBaseline = "middle";
        this.ctx.textAlign = "center";
        this.ctx.fillText(str,x, y);
        //lyrics
        
        this.ctx.restore();
        
    }

}
   
export default KeyboardSection