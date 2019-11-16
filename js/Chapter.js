
import sectionManager from './sectionManager';
import lottie_web from 'lottie-web';

class Chapter {
    constructor(color){
        
        this.timer = "";
        this.n = ""
        this.context = _App.context;
        this.canvas = _App.context.canvas;
        this.instructionsDiv = document.getElementById('instructions');
        this.chapterDiv=document.getElementById('chapterHeader');
        this.chapterDiv=document.getElementById('chapterHeader');
        this.labelDiv = this.chapterDiv.getElementsByClassName('label')[0];
        this.titleDiv = this.chapterDiv.getElementsByClassName('title')[0];
        this.animDiv = this.chapterDiv.getElementsByClassName('anim')[0];
        // console.log('Chapter Class constructor');
        
    }    
    show(itm){
        let list = sectionManager.getSectionList();
        list = list[itm.pos];
        let params = list.chapter.getParams();
        // console.log(list);
        
        this.removeExisting();
         lottie_web.loadAnimation(params);
        
        this.titleDiv.innerHTML = list.title.toUpperCase();
        this.labelDiv.innerHTML = list.verb;
        
        this.chapterDiv.classList.remove('hide');
        this.chapterDiv.classList.add('show');
      
        this.instructionsDiv.classList.remove('show');
        this.instructionsDiv.classList.add('hide');
        
        
    }

    removeExisting(){
        let element = this.animDiv.querySelector('svg');
        
        
        // var element = document.getElementById(elementId);
        if(element){
            element.parentNode.removeChild(element);
        }
    }
}

export default Chapter