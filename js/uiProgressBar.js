import utils from './utils';
let x=0;
let y=0;
let heightPercentage = 75; //0-100
let margin = 6; 
let navItemWidth = 10;
let fontSizeOrig = 12;
let fontSizeSm = 8;
let navItems = 10; 
let context = {};
let itmHeight = 0;
let topMargin = 30;
let itemsArr = [];
let xpos = 0;
let currentSection = 0;
//
exports.init = function(){
    context = _App.context;
    
    // console.log("progressBar.init() called", this);
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
exports.update = function(){
    // console.log(itmHeight);
    
    xpos = Math.min(_App.w*0.1, 30);
    // context.save();
    // context.globalAlpha=0.2;    
    for (let i = 0; i < itemsArr.length; i++) {
        let itm = itemsArr[i];
        context.fillStyle = itm.color;
        context.fillRect(xpos, itm.y, navItemWidth, itm.height); 
    }
    for (let itm in itemsArr) {
        context.fillStyle = itm.color;
        context.fillRect(xpos, itm.y, navItemWidth, itm.height); 
    }
    // context.restore();
    let s = fontSizeOrig;
    if(itmHeight<35){s=fontSizeSm}
    addTextLabels(s);
}

function buildNav(){
    itemsArr = [];
    let defaultColor = "";
    itmHeight = ((_App.h*(heightPercentage*0.01))/navItems)-margin;
    itmHeight = Math.max(itmHeight, 20);
    let c = utils.getColors();
    for (let i = 0; i < navItems; i++) {
        let sec = navItems-currentSection;
        
        if(i<sec)defaultColor=c.upcoming
        else if(i>sec)defaultColor=c.visited
        else defaultColor=c.brightGreen;
        let itm = {
            color: defaultColor,
            i: i+1,
            y: (itmHeight+margin)*i+topMargin, 
            height: itmHeight-margin
        }
        itemsArr.push(itm);   
    }   
}
function addTextLabels(s){
    context.fillStyle = utils.getColors().brightGreen;
    context.font = "300 "+s+"px Roboto";
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
