let ang = 0;
let amplitude = 11;
let speed = 0.045;
let waveLength = 3;
let lineWidth = 14;
let margin = 0;
let minHeight = 40;
let active = false;
let count = 0;
let fillStyle = "#ff0";
let strokeStyle = fillStyle;
let x=0;
let y=0;
let w = 0;
let h = 0;

let gradient = {};
let barObject = { 
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
    w = _App.w;
    h = _App.h;
    let i=0;
    // console.log("init called");
    
    count = Math.floor(w/(lineWidth+margin));
    for (const itm in barObject) {
        // console.log(itm);
        barObject[itm].index = i;
        i++;
        initLineSet(w,h, barObject[itm], i);            
    }
    // console.log("completed object: ",barObject);
}
//
exports.update = function(){
    let ctx = _App.context;
    count = Math.floor(w/(lineWidth+margin));
    // console.log(count);
    for (const key in barObject) {   
                
        const barFamily = barObject[key];
        // console.log("a fmaily is this: ",barFamily);
       
        for (const bar in barFamily.bars) {
            const b = barFamily.bars[bar];
            // console.log("this is next: ", b);
            
            b.ang-=b.speed;
            y = Math.cos(b.ang+(b.i/4))*b.height+minHeight;
            x = b.x;
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
    
    for (let i = 0; i < count; i++) {
        let offset = 0;
        
        let bar = {
            x: (w/count+margin) * i+offset,
            height: Math.random()*30+amplitude,
            ang:Math.random()*5,
            i: i,
            speed: Math.random()*0.05+0.01
        }
        if(Math.random()>0.9){
            bar.x+= lineWidth/2;
            bar.height+=minHeight;
        }
        if(Math.random()>=0.66){
            obj.bars[i] = bar;
        }
        
    }
}