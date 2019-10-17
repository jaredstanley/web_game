import utils from './utils';
let lineWidth = 14;
let x=0;
let y=0;
let margin = 6;
let navItemWidth = 10;
let navItems = 10;
let context = {};
let itmHeight = 0;
let topMargin = 30;
let itemsArr = [];
let xpos = 0;
let currentSection = 4;
//
exports.init = function(){
    context = _App.context;
    let i=0;
    itmHeight = ((_App.h*0.75)/navItems)-margin;
    // console.log("progressBar.init() called", this);
    buildNav();
}
//
exports.update = function(){
    xpos = Math.min(_App.w*0.1, 30);
    // context.save();
    // context.globalAlpha=0.2;    
    for (let i = 0; i < itemsArr.length; i++) {
        let itm = itemsArr[i];
        context.fillStyle = itm.color;
        context.fillRect(xpos, itm.y, navItemWidth, itm.height); 
    }
    // context.restore();
    addTextLabels();
}

function buildNav(){
    let defaultColor = "";
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
function addTextLabels(){
    context.fillStyle = utils.getColors().brightGreen;
    context.font = "300 12px Roboto";
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
