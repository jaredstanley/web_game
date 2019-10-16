import utils from './utils';
let lineWidth = 14;
let x=0;
let y=0;
let margin = 8;
let navItemWidth = 10;
let navItems = 10;
let context = {};
let itmHeight = 0;
let topMargin = 30;
let itemsArr = [];
let xpos = 0;
//
exports.init = function(){
    context = _App.context;
    let i=0;
    itmHeight = ((_App.h*0.8)/navItems)-margin;
    // console.log("progressBar.init() called", this);
    buildNav();
}
//
exports.update = function(){
    xpos = Math.min(_App.w*0.1, 30);
    context.save();
    context.globalAlpha=0.2;    
    for (let i = 0; i < itemsArr.length; i++) {
        let itm = itemsArr[i];
        context.fillStyle = itm.color;
        context.fillRect(xpos, itm.y, navItemWidth, itm.height); 
    }
    context.restore();
    context.fillStyle = utils.getColors().brightGreen;
    context.font = "12px Aaux Next";
    for (let i = 1; i <= itemsArr.length; i++) {
        let itm = itemsArr[i-1];
        let twoDigit = "";
        console.log(itm.i, itm.i.toString(), itm.i.toString().length);
        
        if (itm.i.toString().length<=1){
            twoDigit = "0"
        }

        let str = "."+twoDigit+itm.i;
        context.fillText(str,xpos+navItemWidth+margin/2,itm.height+itm.y);
    }
}

function buildNav(){
    let defaultColor = utils.getColors().brightGreen;
    for (let i = 0; i < navItems; i++) {
        let itm = {
            color: defaultColor,
            i: i+1,
            y: (itmHeight+margin)*i+topMargin, 
            height: itmHeight-margin
        }
        itemsArr.push(itm);
    
        
    }
    // console.log(_App.h);

    
        
}
