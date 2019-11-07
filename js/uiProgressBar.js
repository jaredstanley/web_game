import utils from './utils';
import tweenFunctions from './tweenFunctions';
let x=0;
let y=0;
let heightPercentage = 75; //0-100
let margin = 6; 
let navItemWidth = 10;
let fontSizeOrig = 12;
let fontSizeSm = 8;
let sections = 7; 
let context = "";
let itmHeight = 0;
let itmMaxHeight = 20;
let topMargin = 60;
let itemsArr = [];
let xpos = 0;
let currentSection = 0;
let hl = {
    needsUpdate:false,
    iteration:0,
    totalIterations:100,
    x:0,y:0,w:0,h:0,
    curH:0
}
//
exports.init = function(){
    context = _App.context;
    buildNav();
}
//
exports.nextSection = function(){
    // console.log('current section is now ', currentSection);
    currentSection++;
    buildNav();
    // console.log('current section is now ', currentSection);
}
//
function buildNav(){
    
    itemsArr = [];
    let defaultColor = "";
    itmHeight = ((_App.h*(heightPercentage*0.01))/sections)-margin;
    itmHeight = Math.max(itmHeight, itmMaxHeight);
    let c = utils.getColors();
    // console.log(`heyyo ${currentSection}`);
    
    for (let i = 0; i < sections; i++) {
        let sec = sections-currentSection;
        
        if(i<sec){defaultColor=c.upcoming;}
        else if(i>sec){defaultColor=c.visited}
        else {defaultColor=c.upcoming;
        }
        
        let itm = {
            color: defaultColor,
            i: i+1,
            y: (itmHeight+margin)*i+topMargin, 
            height: itmHeight-margin
        }
        // console.log(itm.i, itm.y);
        
        itemsArr.push(itm); 
        
    }   
    hl.needsUpdate=true;
    hl.h=0;
    hl.curH=0;
}
//
exports.update = function(){
    // console.log(itmHeight);
    
    xpos = Math.min(_App.w*0.1, 30);
    if(_App.w<480){
        xpos=5;
    }
   itemsArr.forEach(itm =>{
        context.fillStyle = itm.color;
        context.fillRect(xpos, itm.y, navItemWidth, itm.height); 
    })

    let s = fontSizeOrig;
    if(itmHeight<35){s=fontSizeSm}
    addTextLabels(s);

    let curSec;
    if(currentSection==0){
        return;
    }
    if(hl.needsUpdate){
        updateHighlightBar();
    }
    curSec = sections-currentSection;
    // console.log(currentSection, curSec);
    // console.log(`val2 is ${curSec}`);
    context.fillStyle=utils.getColors().brightGreen;
    let _y = itemsArr[curSec].y+itemsArr[curSec].height-hl.curH;
    context.fillRect(xpos,_y, 10, hl.curH);
}


function updateHighlightBar(){
    hl.iteration++;  
    if (hl.iteration < hl.totalIterations) {
        // console.log(hl.iteration, hl.curH);
        
        hl.h = tweenFunctions.easeInOutSine(hl.iteration, hl.curH, itemsArr[0].height, hl.totalIterations);
        // hl.y = tweenFunctions.easeInOutQuart(hl.iteration, hl.curSpot.y, hl.tgt.y-hl.curSpot.y, hl.totalIterations);
        hl.curH = hl.h;

    }else{
        hl.iteration=0;
        hl.needsUpdate=false;
        // console.log(itemsArr);
        
    }

    
}





function addTextLabels(s){
    context.fillStyle = utils.getColors().brightGreen;
    context.font = "300 "+s+"px Roboto";
    context.textAlign = "left";
    for (let i = 1; i <= itemsArr.length; i++) {
        let itm = itemsArr[i-1];
        let twoDigit = "";
        // console.log(itm.i, itm.i.toString(), itm.i.toString().length);
        let pos = itemsArr.length-itm.i +1;
        if (pos.toString().length<=1){
            twoDigit = "0"
        }

        let str = "."+twoDigit+pos;
        context.fillText(str,xpos+navItemWidth+margin/2,itm.height+itm.y);
    }
}
