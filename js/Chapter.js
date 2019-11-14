
import eventTypeManager from './eventTypeManager';
import sectionManager from './sectionManager';
import utils from './utils';

class Chapter {
    constructor(color){
        
        this.timer = "";
        this.n = ""
        this.context = _App.context;
        this.canvas = _App.context.canvas;
        this.instructionsDiv = document.getElementById('instructions');
        this.chapterDiv=document.getElementById('chapterHeader');
        this.labelDiv = this.chapterDiv.getElementsByClassName('label')[0];
        // console.log('Chapter Class constructor');
        
    }

    start(){
        // console.log("GHJHGFHJHG ",this.binder);
        this.showChapterHeader();
        this.showCanvasBinder = this.showCanvas.bind(this);
        eventTypeManager.addEvent(this.chapterDiv, this.showCanvasBinder); 
        sectionManager.setInstructions();
        
       
        // sectionManager.setInstructions();
       
    }
    addCanvasClick(){
        this.binder = this.clickHandler.bind(this);
        eventTypeManager.addEvent(_App.context.canvas, this.binder);
    }
    
    showCanvas(e){
        this.chapterDiv.classList.remove('show');
        this.chapterDiv.classList.add('hide');
        this.instructionsDiv.classList.remove('hide');
        this.instructionsDiv.classList.add('show');
        //
        this.update();
    }

    clickHandler(e){
        e.preventDefault();
        let tgt = "";
        if (utils.getStatus().type=="mobile"){
            // console.log('checking mobiel click', e.targetTouches[0]);
            tgt = e.targetTouches[0]
        }else{
            tgt = e;
        }
        this.mouse = {
            x:tgt.clientX,
            y:tgt.clientY
        }
    }
    
    showChapterHeader(){
        this.labelDiv.innerHTML = this.n;
        
        this.chapterDiv.classList.remove('hide');
        this.chapterDiv.classList.add('show');
      
        this.instructionsDiv.classList.remove('show');
        this.instructionsDiv.classList.add('hide');
        
        
    }

    finished(e){
        console.log("finished ", this.n);
        this.kill();   
        sectionManager.proceed();
    }

    kill(){
        console.log("kill ", this.n);    
        eventTypeManager.removeEvent(_App.context.canvas, this.binder);
        eventTypeManager.removeEvent(this.chapterDiv, this.showCanvasBinder); 
        cancelAnimationFrame(this.timer);
        this.timer = null;
    }
}

export default Chapter