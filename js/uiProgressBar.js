import utils from './utils';
import highlightBar from './uiHighlightBar';
import sectionManager from './sectionManager';
let x=0;
let y=0;
let heightPercentage = 75; //0-100
let margin = 6; 
let navItemWidth = 10;
let fontSizeOrig = 12;
let fontSizeSm = 8;
let sections = 6; 
let context = "";
let itmHeight = 0;
let itmMaxHeight = 20;
let topMargin = 60;
let itemsArr = [];
let xpos = 0;
let currentSection = 0;

//
exports.init = function(){
    // console.log("init progbar");
    
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
        
        if(i<sec){defaultColor=c.light;}
        else if(i>sec){defaultColor=c.med}
        else {defaultColor=c.dark;
        }
        
        let itm = {
            color: "#FFFFFF",
            i: i+1,
            y: (itmHeight+margin)*i+topMargin, 
            height: itmHeight-margin
        }
        // console.log(itm.i, itm.y);
        
        itemsArr.push(itm); 
        
    }   
    highlightBar.reset();
}
//
exports.update = function(){
    console.log(itmHeight);
    
    xpos = Math.min(_App.w*0.1, 30);
    if(_App.w<480){
        xpos=5;
    }
   itemsArr.forEach(itm =>{
        context.fillStyle = utils.getColors().light;
        context.fillRect(xpos, itm.y, navItemWidth, itm.height); 
    })

    let s = fontSizeOrig;
    if(itmHeight<35){s=fontSizeSm}
    addTextLabels(s);

    let curSec;
    curSec = sections-currentSection;
    if(currentSection==0){
        return;
    }
    highlightBar.checkIfNeedsUpdate(itemsArr[curSec], xpos, margin);   
}

function addTextLabels(s){
    context.fillStyle = utils.getColors().bright;
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
