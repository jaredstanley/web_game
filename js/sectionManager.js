import animation from './nameAnim';
import progressBar from './uiProgressBar';
import sectionShake from './ShakeSection';
import sectionTap from './TapSection';

let tapSection = new sectionTap();
let shakeSection = new sectionShake();

let curPos = 0;
let curSection = {x:0};
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
    div.addEventListener('click', nextSection, false);
    div.addEventListener('touchstart', nextSection, false);
    shakeSection.init();
    tapSection.init();
    

}
exports.loadSection = function(){   
    console.log("loading section ",curPos);
    
    nextSection();
}

function nextSection(){
    // console.log("next Section called ", curPos);
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

    console.log(sec.name);
    curSection = sec.section;
    curSection.build(); 

    // console.log("sectionManager loading secrtion ", sectionList[curPos]);
   
    
    curPos++;
}
exports.update=function(){


}

function shrinkLogo(){
    let logo = document.querySelector('#logoAnim');
    // console.log(document, logo);
    logo.classList.toggle('sm');
}
