
import eventTypeManager from '../eventTypeManager';
import sectionManager from '../sectionManager';
import utils from '../utils';
import Chapter from '../Chapter';

class Section {
    constructor(color) {

    }

    init(i) {
        this.pos = i;
        this.chapter = new Chapter();
        // console.log("Section SuperClass Initted");
        this.context = _App.context;
        this.canvas = _App.context.canvas;
        this.chapterDiv = document.getElementById('chapterHeader');
        this.labelDiv = this.chapterDiv.getElementsByClassName('label')[0];
        this.instructionsDiv = document.getElementById('instructions');
        this.instructionTextDiv = this.instructionsDiv.getElementsByClassName('instructiontext')[0];
        this.colors = {
            light: "#efefef",
            med: "#666",
            dark: "#31040E"
        }
        this.setBG();

    }
    start() {
        // console.log("GHJHGFHJHG ",this.binder);

        this.chapter.show(this);
        this.showCanvasBinder = this.showCanvas.bind(this);
        eventTypeManager.addEvent(this.chapterDiv, this.showCanvasBinder);



        // sectionManager.setInstructions();

    }
    setBG() {        
        sectionManager.bgColor = this.colors.dark;
    }
    addCanvasClick() {
        this.binder = this.clickHandler.bind(this);
        eventTypeManager.addEvent(_App.context.canvas, this.binder);
    }

    showCanvas(e) {
        // console.log("chapterDiv Clicked, show it!!!, ",this.n);
        this.setBG();
        this.chapterDiv.classList.remove('show');
        this.chapterDiv.classList.add('hide');
        this.instructionsDiv.classList.remove('hide');
        this.instructionsDiv.classList.add('show');
        //
        eventTypeManager.removeEvent(this.chapterDiv, this.showCanvasBinder);
        sectionManager.setInstructions();
        this.update();
    }

    clickHandler(e) {
        // console.log("canvas clicked CLICKCLICKCLICKCLICKCLICKCLICK",this.n);

        e.preventDefault();
        let tgt = "";
        if (utils.getStatus().type == "mobile") {
            // console.log('checking mobiel click', e.targetTouches[0]);
            tgt = e.targetTouches[0]
        } else {
            tgt = e;
        }
        this.mouse = {
            x: tgt.clientX,
            y: tgt.clientY
        }
    }

    finished(e) {
        // console.log("finished ", this.n);
        this.kill();
        sectionManager.proceed();
    }
    erase(bool) {
        sectionManager.erase = bool;
    }

    kill() {
        // delete sectionManager.getCanyonAnim();
        // delete sectionManager.getTetonAnim();
        // delete sectionManager.getSectionList()[this.pos].section;
        // console.log(sectionManager.getSectionList());
        // console.log(sectionManager);

        // console.log("kill ", sectionManager.getSectionList()[this.pos].section=null);    
        eventTypeManager.removeEvent(_App.context.canvas, this.binder);

        cancelAnimationFrame(this.timer);
        this.timer = null;
    }
}

export default Section