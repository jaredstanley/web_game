import animation from './nameAnim';
import progressBar from './uiProgressBar';
import sectionShake from './ShakeSection';
import sectionTap from './TapSection';

let tapSection = new sectionTap();
let shakeSection = new sectionShake();

let curPos = 0;
let nextPos = 1;
let curSection = {name:"none"};
let sectionList = [
    {   pos:0,
        name:"tap",
        section:tapSection
    },
    {   pos:1,
        name:"shake",
        section:shakeSection
    },
    {   pos:2,
        name:"rotate",
        section:tapSection
    },
    {   pos:3,
        name:"shout",
        section:shakeSection
    }
]
let div = "";
//
exports.init = function(){
    div = document.getElementById('instructions');
    // div.addEventListener('click', nextSection, false);
    div.addEventListener('touchstart', nextSection, false);
    shakeSection.init();
    tapSection.init();
    

}
exports.loadFirstSection = function(){   
    // console.log("loading first section ");
    progressBar.nextSection();
    engageLoading();
}

function nextSection(){
    // console.log("next Section called, shouldnt change yet ", curPos);
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
        shrinkLogo();
    }
    let sec = sectionList.find(itm => itm.pos == curPos);

    // console.log('section to load is: ',sec.name);
    curSection = sec.section;
    curSection.update(); 
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
