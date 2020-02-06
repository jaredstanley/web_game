// import animation from './nameAnim';
// import progressBar from './uiProgressBar';
import utils from './utils';
import Instructions from './Instructions';
import eventTypeManager from './eventTypeManager';
//
import sectionTap from './sections/TapSection';
import sectionPop from './sections/PopSection';
import sectionDelayedTap from './sections/DelayedTapSection';
import sectionKeyboard from './sections/KeyboardSection';
import sectionRepeat from './sections/RepeatSection';
import sectionUpdown from './sections/UpdownSection';
//
import CanyonAnim from './animations/CanyonAnim';
import TetonAnim from './animations/TetonAnim';
import TouringAnim from './animations/TouringAnim';
import NihonAnim from './animations/NihonAnim';
import ParaglidingAnim from './animations/ParaglidingAnim';
import LostcoastAnim from './animations/LostcoastAnim';
//

// import permissionsMgr from './PermissionsMgr';

let popSection = new sectionPop();
let tapSection = new sectionTap();
let delayedTapSection = new sectionDelayedTap();
let keyboardSection = new sectionKeyboard();
let repeatSection = new sectionRepeat();
let updownSection = new sectionUpdown();
//
let canyonAnim = new CanyonAnim();
let tetonAnim = new TetonAnim();
let touringAnim = new TouringAnim();
let nihonAnim = new NihonAnim();
let paraglidingAnim = new ParaglidingAnim();
let lostcoastAnim = new LostcoastAnim();
//
// exports.getCanyonAnim=function(){
//     return canyonAnim;
// }
// exports.getTetonAnim=function(){
//     return tetonAnim;
// }


let curPos = 0;
let curSection = {name:"none"};
let sectionList = [
    
    {   pos:0,
        name:"tapper",
        title:"chapter one",
        verb:"tap",
        section:tapSection,
        instructions:"tap the screen",
        txtColor:"#C22A42",
        svgPatternID:"vertlines",
        chapter:canyonAnim
    },
    {   pos:1,
        name:"popper",
        title:"chapter two",
        verb:"pop",
        section:popSection,
        instructions:"pop the bubbles",
        txtColor:"#1D73D3",
        svgPatternID:"vertlines",
        chapter:tetonAnim
    },
    {   pos:2,
        name:"delayedTap",
        title:"chapter three",
        verb:"wait",
        section:delayedTapSection,
        instructions:"tap 3 seconds apart",
        txtColor:"#ff0082",
        svgPatternID:"vertlines",
        chapter:touringAnim
    } 
    ,
    {   pos:3,
        name:"keyboard",
        title:"chapter four",
        verb:"keyboard",
        section:keyboardSection,
        instructions:"play the song",
        txtColor:"#ff0076",
        svgPatternID:"vertlines",
        chapter:nihonAnim
        
    },
    {   pos:4,
        name:"repeater",
        title:"chapter five",
        verb:"repeat",
        section:repeatSection,
        instructions:"repeat the sequence",
        txtColor:"#fb970c",
        svgPatternID:"vertlines",
        chapter:paraglidingAnim
    },
    {   pos:5,
        name:"updown",
        title:"chapter six",
        verb:"coming soon",
        section:updownSection,
        instructions:"coming soon",
        txtColor:"#bada41",
        svgPatternID:"vertlines",
        chapter:lostcoastAnim
    }
]

//
exports.init = function(){
    for (let i = 0; i < sectionList.length; i++) {
        let element = sectionList[i].section;
        element.init(i);
        element = sectionList[i].chapter;
        if(element!=null){
            element.init();
        }
      }
    _App.eventType = eventTypeManager.init();
    this.erase=true;
    this.bgColor =utils.getColors().dark;
    this.instructions = new Instructions(); 
    // let element = sectionList[0].section;
    // element.init();        

    loadFirstSection();

}

exports.getSectionList=function(){
    return sectionList;
}

function loadFirstSection(){  
    
    // console.log("loading first section ");
    // progressBar.nextSection();
    engageLoading();
}
exports.proceed = function(){
    nextSection();
}
exports.setInstructions=function(){
    let sec = sectionList.find(itm => itm.pos == curPos);
    // sec.section.chapter.anim.stop();
    // console.log(sec.section.chapter.anim.currentFrame);
    
    
    // sec.section.chapter.pauseMe();
    
    
    
    this.instructions.show(sec.instructions, sec.txtColor);
        
}
function nextSection(){
    
    curSection.kill();
    curPos++;
    // progressBar.nextSection();
    engageLoading();    
}

function engageLoading(){
    
    let sec = sectionList.find(itm => itm.pos == curPos);

    // console.log('section to load is: ',sec.name);
    curSection = sec.section;
    curSection.start(); 
    // console.log("sectionManager loading secrtion ", sectionList[curPos]);
    
}
exports.update=function(){
    // console.log(this.erase," &*&*");
    
    if(this.erase){
        utils.clearCanvas(_App, true, this.bgColor);
        // console.log(this.bgColor,"  <<<");
        
    }
    // console.log('sectionManager Update()');   
    this.timer = requestAnimationFrame(this.update.bind(this)); 
}


