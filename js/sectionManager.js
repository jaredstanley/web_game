import animation from './nameAnim';
import progressBar from './uiProgressBar';
import utils from './utils';
//
import sectionShake from './sections/ShakeSection';
import sectionTap from './sections/TapSection';
import sectionPop from './sections/PopSection';
import sectionDelayedTap from './sections/DelayedTapSection';
import sectionKeyboard from './sections/KeyboardSection';
//
import permissionsMgr from './PermissionsMgr';

let popSection = new sectionPop();
let tapSection = new sectionTap();
let shakeSection = new sectionShake();
let delayedTapSection = new sectionDelayedTap();
let keyboardSection = new sectionKeyboard();



let curPos = 0;
let nextPos = 1;
let curSection = {name:"none"};
let sectionList = [
    {   pos:0,
        name:"tap",
        section:tapSection,
        instructions:"tap to proceed"
    },
    {   pos:1,
        name:"pop",
        section:popSection,
        instructions:"pop the bubbles to proceed"
    },
    {   pos:2,
        name:"delayedTap",
        section:delayedTapSection,
        instructions:"tap 3 seconds apart to proceed"
    },
    {   pos:3,
        name:"keyboard",
        section:keyboardSection,
        instructions:"play the song to proceed"
        
    },
    {   pos:4,
        name:"shake",
        section:shakeSection,
        instructions:"coming soon"
    }
]
let div = "";
//
exports.init = function(){
    div = document.getElementById('instructions');
        
    div.addEventListener(_App.eventType, nextSection, false);
    for (let i = 0; i < sectionList.length; i++) {
        let element = sectionList[i].section;
        element.init();
      }
    

}
exports.loadFirstSection = function(){   
    console.log("loading first section ");
    progressBar.nextSection();
    engageLoading();
}
exports.proceed = function(){
    nextSection();
}
exports.setInstructions=function(){
    let sec = sectionList.find(itm => itm.pos == curPos);
    // console.log(sec,"sdsds");
    
    document.querySelector(".instructiontext").innerHTML=sec.instructions;
        
}
function nextSection(){
    console.log("next Section called, time to remove this pos: ", curPos);
    div.removeEventListener(_App.eventType, nextSection, false);
    div.classList.remove("cursor");
    div.classList.add("ignored");
    curSection.kill();
    // return;
    curPos++;
    
    if(animation.getIsPlaying()==true){
        console.log("mgr.nope");
        return;
    }
    progressBar.nextSection();
    engageLoading();    
}

function engageLoading(){
    if(curPos==0){
        div.classList.toggle('show');
    }
    if(curPos==1){
        // permissionsMgr.askOrientation();
        animation.shrinkLogo();
    }
    let sec = sectionList.find(itm => itm.pos == curPos);

    console.log('section to load is: ',sec.name);
    curSection = sec.section;
    curSection.start(); 
    nextPos++;

    // console.log("sectionManager loading secrtion ", sectionList[curPos]);
   
    
    
}
exports.update=function(){
    // console.log('sectionManager Update()');
    // console.log(curSection);
    // if(curSection.name=="none"){
    //     return;
    // }
    // curSection.update();
    
    
}


