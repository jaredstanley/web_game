
import eventTypeManager from './eventTypeManager';
import sectionManager from './sectionManager';
import utils from './utils';

class Instructions {
    constructor(){
        
        this.div = document.getElementById('instructions');
        
    }

    show(str, clr){
        let txt = document.querySelector(".instructiontext");
        txt.style.color = clr;
        txt.innerHTML=str;
        this.div.classList.add('show');
    }
    hide(){
     
        this.div.classList.add('hide');
    }
    remove(){
        this.div.classList.remove("cursor");
        this.div.classList.add("ignored");
    }

}

export default Instructions