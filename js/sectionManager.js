import animation from './nameAnim';
import progressBar from './uiProgressBar';

let x = Math.random();
let curSection = 0;
let sectionList = [
    {   pos:1,
        name:"shake"
    },
    {   pos:2,
        name:"rotate"
    },
    {   pos:3,
        name:"shout"
    }
]
let div = "";
//
exports.init = function(){
    div = document.getElementById('instructions');
    div.addEventListener('mousedown', nextSection, false);
    div.addEventListener('touchstart', nextSection, false);

}
exports.loadSection = function(){   
    console.log("loading section ",curSection);
    
    nextSection();
}

function engageLoading(){
    // if(sectionList[curSection].pos==1){shrinkLogo();}
    if(curSection==0){
        div.classList.toggle('show');
    }
    if(curSection==1){shrinkLogo();}

    console.log("sectionManager loading secrtion ", sectionList[curSection]);
    
    curSection++;
}

function nextSection(){
    // console.log("next Section called ", curSection, animation.getIsPlaying());
    if(animation.getIsPlaying()==true){
        console.log("mgr.nope");
        return;
    }
    progressBar.nextSection();
    engageLoading();    
}

function shrinkLogo(){
    let logo = document.querySelector('#logoAnim');
    // console.log(document, logo);
    logo.classList.toggle('sm');
}
