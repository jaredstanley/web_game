import utils from './utils';
import tweenFunctions from './tweenFunctions';

let needsUpdate=false;
let iteration=0;
let totalIterations=50;
let margin=0;
let xpos=0;
let x=0;
let y=0;
let w=0;
let h=0;
let curH=0;
let c = utils.getColors().brightGreen; 
let dir="grow"; //"shrink"

exports.reset=function(){
    // console.log("needs updatedddd");
    
    needsUpdate=true;
    // h=0;
    // curH=0;

}

function growTheBar(itm){
    // console.log("grow ",curH);
    iteration++;  
    if (iteration < totalIterations) {
        // console.log(iteration, curH);
        h = tweenFunctions.easeOutSine(iteration, curH, itm.height, totalIterations);
        curH = h;

    }else{
        iteration=0;
        needsUpdate=false;
        dir="shrink";
        
        
    }    
}

function shrinkTheBar(itm){
    // console.log("shrink ",curH);
    
    iteration++;  
    if (iteration < totalIterations) {
        // console.log(iteration, curH);
        h = tweenFunctions.easeInSine(iteration, curH, 0, totalIterations);
        curH = h;
        // console.log(curH,"<<");
        
    }else{
        iteration=0;
        dir="grow";
    }    
}

exports.checkIfNeedsUpdate=function(itm, _x, _m){
    if(needsUpdate){
        console.log("udpaet");
        
        margin=_m;
        xpos = _x;
        if(dir=="grow"){
            growTheBar(itm);
            y = itm.y+itm.height-curH;
        }else{
            shrinkTheBar(itm);
            y = itm.y+itm.height+margin+margin;
        }
    }

    
    // console.log(curH);
    _App.context.fillStyle=c;
    _App.context.fillRect(xpos,y, 10, curH);
}