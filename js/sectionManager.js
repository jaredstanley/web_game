// import animation from './nameAnim';
import progressBar from './uiProgressBar';
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
import sectionComingsoon from './sections/ComingsoonSection';
//
import CanyonAnim from './animations/CanyonAnim';
import TetonAnim from './animations/TetonAnim';
import TouringAnim from './animations/TouringAnim';
import NihonAnim from './animations/NihonAnim';
import ParaglidingAnim from './animations/ParaglidingAnim';
import LostcoastAnim from './animations/LostcoastAnim';
import ComingsoonAnim from './animations/ComingsoonAnim';
//

// import permissionsMgr from './PermissionsMgr';

let popSection = new sectionPop();
let tapSection = new sectionTap();
let delayedTapSection = new sectionDelayedTap();
let keyboardSection = new sectionKeyboard();
let repeatSection = new sectionRepeat();
let updownSection = new sectionUpdown();
let comingsoonSection = new sectionComingsoon();
//
let canyonAnim = new CanyonAnim();
let tetonAnim = new TetonAnim();
let touringAnim = new TouringAnim();
let nihonAnim = new NihonAnim();
let paraglidingAnim = new ParaglidingAnim();
let lostcoastAnim = new LostcoastAnim();
let comingsoonAnim = new ComingsoonAnim();
//
// exports.getCanyonAnim=function(){
//     return canyonAnim;
// }
// exports.getTetonAnim=function(){
//     return tetonAnim;
// }

let curColorSet = {};
let curPos = 0;
let curSection = {name:"none"};
let gamesList = [
    
    {   pos:0,
        name:"tapper",
        title:"chapter one",
        verb:"tap",
        section:tapSection,
        instructions:"tap the screen",
        svgPatternID:"vertlines",
        chapter:canyonAnim
    },
    {   pos:1,
        name:"popper",
        title:"chapter two",
        verb:"pop",
        section:popSection,
        instructions:"pop the bubbles",
        svgPatternID:"vertlines",
        chapter:tetonAnim
    },
    {   pos:2,
        name:"delayedTap",
        title:"chapter three",
        verb:"delay",
        section:delayedTapSection,
        instructions:"tap 3 seconds apart",
        svgPatternID:"vertlines",
        chapter:touringAnim
    } 
    ,
    {   pos:3,
        name:"keyboard",
        title:"chapter four",
        verb:"melody",
        section:keyboardSection,
        instructions:"play the song",
        svgPatternID:"vertlines",
        chapter:nihonAnim
        
    },
    {   pos:4,
        name:"repeater",
        title:"chapter five",
        verb:"repeat",
        section:repeatSection,
        instructions:"repeat the sequence",
        svgPatternID:"vertlines",
        chapter:paraglidingAnim
    },
    {   pos:5,
        name:"updown",
        title:"chapter six",
        verb:"match",
        section:updownSection,
        instructions:"guess the spot",
        svgPatternID:"vertlines",
        chapter:lostcoastAnim
    },
    {   pos:6,
        name:"comingsoon",
        title:"chapter seven",
        verb:"coming soon",
        section:comingsoonSection,
        instructions:"coming soon",
        svgPatternID:"vertlines",
        chapter:comingsoonAnim
    }
]

//
exports.init = function(){
    for (let i = 0; i < gamesList.length; i++) {
        let element = gamesList[i].section;
        element.init(i);
        element = gamesList[i].chapter;
        if(element!=null){
            element.init();
        }
      }
    _App.eventType = eventTypeManager.init();
    this.erase=true;
    this.bgColor =utils.getColors().dark;
    this.instructions = new Instructions(); 
    // let element = gamesList[0].section;
    // element.init();        
   
    loadFirstSection();
}

exports.getSectionList=function(){
    return gamesList;
}

function loadFirstSection(){  
    
    // console.log("loading first section ");
    progressBar.nextSection();
    engageLoading();
}
exports.proceed = function(){
    nextSection();
}
exports.setInstructions=function(){
    let sec = gamesList.find(itm => itm.pos == curPos);
    // sec.section.chapter.anim.stop();
    // console.log(sec.section.chapter.anim.currentFrame);
    
    
    // sec.section.chapter.pauseMe();
    
    
    // console.log("sec", sec);
    
    this.instructions.show(sec.instructions, sec.section.colors.bright);
        
}
function nextSection(){
    
    curSection.kill();
    curPos++;
    progressBar.nextSection();
    engageLoading();    
}

function engageLoading(){
    
    let _game = gamesList.find(itm => itm.pos == curPos);

    console.log('section to load is: ', _game, curPos);
    curSection = _game.section;
    curColorSet= _game.section.colors;
    curSection.start(); 

    // console.log("sectionManager loading secrtion ", gamesList[curPos]);
    
}
exports.update=function(){
    // console.log(this.erase," &*&*");
    
    if(this.erase){
        utils.clearCanvas(_App, true, this.bgColor);
        // console.log(this.bgColor,"  <<<");
        
    }
    progressBar.update();
    // console.log('sectionManager Update()');   
    this.timer = requestAnimationFrame(this.update.bind(this)); 
}


