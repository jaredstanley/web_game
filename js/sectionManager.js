import animation from './nameAnim';
// import progressBar from './uiProgressBar';
// import utils from './utils';
import Instructions from './Instructions';
import eventTypeManager from './eventTypeManager';
//
import sectionTap from './sections/TapSection';
import sectionPop from './sections/PopSection';
import sectionDelayedTap from './sections/DelayedTapSection';
import sectionKeyboard from './sections/KeyboardSection';
import sectionShake from './sections/ShakeSection';
//
import canyonAnim from './canyonAnim';
import tetonAnim from './tetonAnim';
// import permissionsMgr from './PermissionsMgr';

let popSection = new sectionPop();
let tapSection = new sectionTap();
let delayedTapSection = new sectionDelayedTap();
let keyboardSection = new sectionKeyboard();
let shakeSection = new sectionShake();
//




let curPos = 0;
let curSection = {name:"none"};
let sectionList = [
    
    {   pos:0,
        name:"tap",
        section:tapSection,
        instructions:"tap to proceed",
        chapter:canyonAnim
    },
    {   pos:1,
        name:"pop",
        section:popSection,
        instructions:"pop to proceed",
        chapter:tetonAnim
        
    }
   ,
    {   pos:2,
        name:"delayedTap",
        section:delayedTapSection,
        instructions:"tap 3 seconds apart to proceed",
        chapter:null
    } 
    ,
    {   pos:3,
        name:"keyboard",
        section:keyboardSection,
        instructions:"play the song to proceed",
        chapter:null
        
    },
    {   pos:4,
        name:"shake",
        section:shakeSection,
        instructions:"coming soon",
        chapter:null
    }
]

//
exports.init = function(){
    for (let i = 0; i < sectionList.length; i++) {
        let element = sectionList[i].section;
        element.init();
        element = sectionList[i].chapter;
        if(element!=null){
            element.init();
        }
      }
    _App.eventType = eventTypeManager.init();
    
    this.instructions = new Instructions(); 
    // let element = sectionList[0].section;
    // element.init();

}
exports.loadFirstSection = function(){  
    
    console.log("loading first section ");
    // progressBar.nextSection();
    engageLoading();
}
exports.proceed = function(){
    nextSection();
}
exports.setInstructions=function(){
    let sec = sectionList.find(itm => itm.pos == curPos);
    // console.log(sec,"sdsds");
    
    
    this.instructions.show(sec.instructions);
        
}
function nextSection(){
    console.log("next Section called, time to remove this pos: ", curPos);
    
    if(animation.getIsPlaying()==true){
        console.log("mgr.nope");
        return;
    }
    if(curPos==0){
        animation.shrinkLogo();  
    }
    curSection.kill();
    curPos++;
    // progressBar.nextSection();
    engageLoading();    
}

function engageLoading(){
    
    let sec = sectionList.find(itm => itm.pos == curPos);

    console.log('section to load is: ',sec.name);
    curSection = sec.section;
    curSection.start(); 
    // console.log("sectionManager loading secrtion ", sectionList[curPos]);
    
}
exports.update=function(){
    // console.log('sectionManager Update()');    
}


