import animation from './nameAnim';
import progressBar from './uiProgressBar';
import utils from './utils';
//
import sectionShake from './sections/ShakeSection';
import sectionTap from './sections/TapSection';
import sectionPop from './sections/PopSection';
import sectionDelayedTap from './sections/DelayedTapSection';
//
import permissionsMgr from './PermissionsMgr';

let popSection = new sectionPop();
let tapSection = new sectionTap();
let shakeSection = new sectionShake();
let delayedTapSection = new sectionDelayedTap();


let curPos = 0;
let nextPos = 1;
let curSection = {name:"none"};
let sectionList = [
    {   pos:0,
        name:"tap",
        section:tapSection
    },
    {   pos:1,
        name:"pop",
        section:popSection
    },
    {   pos:2,
        name:"delayedTap",
        section:delayedTapSection
    },
    {   pos:3,
        name:"shout",
        section:shakeSection
    },
    {   pos:4,
        name:"shake",
        section:shakeSection
    }
]
let div = "";
//
exports.init = function(){
    div = document.getElementById('instructions');
        let status = utils.getStatus().type;
        let eventType = "";
        if(status=="mobile"){
            eventType = utils.getStatus().event.mobile;
        }else{
            eventType = utils.getStatus().event.desktop;
        }
       div.addEventListener(eventType, nextSection, false);
    // div.addEventListener('touchstart', nextSection, false);
    shakeSection.init();
    tapSection.init();
    popSection.init();
    delayedTapSection.init();
    

}
exports.loadFirstSection = function(){   
    console.log("loading first section ");
    progressBar.nextSection();
    engageLoading();
}
exports.proceed = function(){
    nextSection();
}
function nextSection(){
    console.log("next Section called, shouldnt change yet ", curPos);
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
        shrinkLogo();
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

function shrinkLogo(){
    let logo = document.querySelector('#logoAnim');
    // console.log(document, logo);
    logo.classList.toggle('sm');
}
