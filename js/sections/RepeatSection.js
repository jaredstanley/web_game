import Section from './Section';
import eventTypeManager from '../eventTypeManager';
import utils from '../utils';
// import accel from '../accelerometer';
// import permissionsMgr from '../PermissionsMgr';
import sectionManager from '../sectionManager';
//
class RepeatSection extends Section {
    constructor(){
        super();
    }
    init(i){        
        super.init(i);
        this.n = "repeater"
        this.noteDiam=44;
        this.noteRad=this.noteDiam/2;

        this.noteMrgn=22;
        // console.log("tnit", this.n);
        // accel.init();
        this.piano = {
            maxWidth:450,
            minWidth:300,
            width:0,
            height:0,
            x:0,
            y:0,
            keyHeight:0,
            totalKeys:0
        };
        this.colors = {
            light: "#fecc45",
            bright:"#fb970c",
            med:"#6c6555",
            dark:"#6c6555",
            grad:{
                a:"#f9debd",
                b:"#c46c14"
            },
            notes:{
                a:"#f9debd",
                b:"#fecc45",
                c:"#fb970c",
                d:"#c46c14",
                e:"#c69c6d",
                f:"#a89d83"
            }
        }
        this.notesArr =[];
        this.createNotes();
       
    }

    createNotes(){
        let i=0;
        
        for (const key in this.colors.notes) {
            if (this.colors.notes.hasOwnProperty(key)) {
                const itm = {};
                itm.color = this.colors.notes[key];
                // console.log(itm);
                
                itm.i = i;
                itm.rad = this.noteRad;
                itm.diam = this.noteDiam;
                itm.hitArea={
                    width:this.noteDiam,
                    height:this.noteDiam,
                }
                this.notesArr.push(itm);
                this.piano.width+=(this.noteDiam+this.noteMrgn);
                // console.log("idth ", this.piano.width);
                
            }
            i++;
        }
    }

    start(){
        super.start();
        super.addCanvasClick();
        // console.log('start in ',this.n);
        // sectionManager.setInstructions();
        // this.piano.width = Math.min(this.piano.maxWidth, _App.w*0.75);
        // this.piano.width = Math.max(this.piano.minWidth, this.piano.width);
        
    }

    clickHandler(e){
        console.log("clicked");
        
        super.clickHandler(e);
        this.notesArr.forEach(itm => {
            if(this.checkIfClicked(this.mouse, itm.hitArea)){
                
                console.log("STATUS: clicked on button", itm.i, itm.note);
                
            }
            
        });  
    }

    update(){
        // console.log("updating!! ", this.n);

        this.updateUI();
       let gradient = this.context.createLinearGradient(_App.w/2-100, _App.h/2-100, _App.w/2+100, _App.h/2+100);
        gradient.addColorStop("0", this.colors.grad.a);
        gradient.addColorStop("1", this.colors.grad.b);
       
        this.context.fillStyle=gradient;
        // this.context.fillRect(0,0,50,50);
        // this.context.fill();

        let x = _App.w/2;
        let y = _App.h/2;
        this.context.save();
        this.context.textBaseline = "middle";
        this.context.textAlign = "center";
        this.context.font = "700 20px Roboto"; 
        this.context.fillText(this.n.toUpperCase()+" section", x, y+80);
        this.context.restore();
       


        this.timer = requestAnimationFrame(this.update.bind(this));
        
    }

    updateUI(){
        // console.log(this.piano.width);
        
        // let wOffset = _App.w/2-(this.piano.width/2);
        // this.context.fillStyle="#bada55";
        // this.context.beginPath();
        
        // this.context.fillRect(wOffset, _App.h/2, this.piano.width, 100);
        this.notesArr.forEach(itm => {
            let woff = _App.w/2-(this.piano.width);
            itm.x=(this.noteMrgn/2+(this.noteDiam+this.noteMrgn)*itm.i)+(this.noteRad)+_App.w/2-(this.piano.width/2);
            itm.y = _App.h/2;
            itm.hitArea.y=itm.y-this.noteRad;
            itm.hitArea.x=itm.x-this.noteRad;
            this.context.fillStyle =itm.color;
            this.context.beginPath();
            this.context.arc(itm.x, itm.y, itm.rad, 0, Math.PI*2);
            this.context.fill();
    
            
        });
    }

    checkIfClicked(mouse, square){
        if(mouse.x>square.x && mouse.x<square.x+square.width){
            if(mouse.y>square.y && mouse.y<square.y+square.height){
                return true;
            }
        }
        return false;
    }
 
}
export default RepeatSection