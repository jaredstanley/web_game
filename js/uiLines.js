let ang = 0;
let amplitude = 11;
let speed = 0.045;
let waveLength = 30;
let lineWidth = 14;
let margin = 0;
let minHeight = 22;
let numItems = 0;
let fillStyle = "#ff0";
let x=0;
let y=0;
let w = 0;
let h = 0;
let isGenerated = false;

let gradient = {};
let barObject = {};
let barObjectOrig = { 
    one: {
        bars:{},
        colors:{b: "#0f6100", a:"#459b2e"}

    },
    two: {
        bars:{},
        colors:{b: "#268d2a", a:"#69ce7d"}        
             
    },
    three: {
        bars:{},
        colors:{b: "#009475", a:"#acc800"}         


    }    
};
//
exports.init = function(){
    // console.log("lines.init() called");
    w = _App.w;
    h = _App.h;
    
    if(isGenerated==false){
        generateItems();
        isGenerated = true;
    }
    // console.log("completed object: ",barObject);
}
//
exports.update = function(){
    let ctx = _App.context;
    // console.log(numItems);
    for (const key in barObject) {   
                
        const barFamily = barObject[key];
        // console.log("a fmaily is this: ",barFamily);
       
        for (const bar in barFamily.bars) {
            const b = barFamily.bars[bar];
            // console.log("this is next: ", b);
            
            b.ang-=b.speed;
            y = Math.cos(b.ang+(b.i/4))*b.height+minHeight;        
            x = (w/numItems+margin) * b.i+b.offset;
            // console.log(">> ",x);
            
            ctx.beginPath();
            ctx.moveTo(x,h);
            
            ctx.lineTo(x,h-y);
            
            gradient = ctx.createLinearGradient(x, h-y, x, h);
            gradient.addColorStop("0", barFamily.colors.a);
            gradient.addColorStop("1", barFamily.colors.b);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = lineWidth;
            ctx.stroke();
        }
    }
}

function newOne() {
  return _seed = _seed * 16807 % 2147483647;
}

function initLineSet(w,h, obj, grad){    
    
    for (let i = 0; i < numItems; i++) {
        let offset = 0;
        let bar = {
            x: 0,
            height: Math.random()*waveLength+amplitude+minHeight,
            ang:Math.random()*5,
            i: i,
            speed: Math.random()*speed+0.01,
            offset: offset

        }
        if(Math.random()>0.25){
            bar.offset = lineWidth/3;
            
        }
        if(Math.random()>=0.66){
            obj.bars[i] = bar;
        }
        
    }
}
function generateItems(){
    barObject = JSON.parse(JSON.stringify(barObjectOrig));
    let i=0;
    numItems = Math.floor(w/(lineWidth+margin));
    for (const itm in barObject) {
        i++;
        barObject[itm].index = i;
        
        initLineSet(w,h, barObject[itm], i);            
    }
}