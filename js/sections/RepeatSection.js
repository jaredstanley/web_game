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
        this.noteRad=44;
        this.noteMrgn=11;
        // console.log("tnit", this.n);
        // accel.init();
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
       
       
        
    }
    start(){
        super.start();
        super.addCanvasClick();
        console.log('start in ',this.n);
        // sectionManager.setInstructions();
        
        
    }

    clickHandler(e){
        e.preventDefault();
        // permissionsMgr.askOrientation();
          
    }

    update(){
        // console.log("updating!! ", this.n);
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
        this.context.fillText(this.n.toUpperCase()+" section", x, y);
        this.context.restore();
        let i=0;
        let itmw = (this.noteRad+this.noteMrgn);
        for (const key in this.colors.notes) {
            if (this.colors.notes.hasOwnProperty(key)) {
                const element = this.colors.notes[key];
                // console.log(element);
                let xpos = x+(itmw*i);

                this.context.fillStyle =element;
                this.context.beginPath();
                this.context.arc(xpos, y, this.noteRad, 0, Math.PI*2);
                this.context.fill();
                
                
            }
            i++
        }


        this.timer = requestAnimationFrame(this.update.bind(this));
        
    }
 
}
export default RepeatSection