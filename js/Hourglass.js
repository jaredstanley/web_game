import utils from './utils';

class Hourglass {
    constructor(alignment){
        // console.log(alignment);
        
        this.alignment = alignment.toLowerCase(); //left, center, right
    }
    init(x,y,w,h,baseColor, progColor){
        this.maxW=350;
        
        this.baseParams={
            x:x,
            y:y,
            w:w,
            h:h,
            color:baseColor
        }
        this.progParams={
            x:x,
            y:y,
            w:w,
            h:h,
            color:progColor
        }
        console.log(this.baseParams);
        

    }
    getParams(){
        return this.baseParams;
    }
    update(pct){
        this.updateBase();
        this.updateProgBar(pct);
        this.draw();
    }
    //
    updateBase(){
        this.baseParams.w = Math.min(_App.w*0.75, this.maxW);
        this.baseParams.x = _App.w/2-this.baseParams.w/2;
        this.baseParams.y = this.baseParams.y;
    }
    //
    updateProgBar(pct){
         this.progParams.w = this.baseParams.w*pct;


        if(this.alignment=="left"){
            this.progParams.x = this.baseParams.x;
        }else if(this.alignment=="right"){
            this.progParams.x = (this.baseParams.x+this.baseParams.w)-this.progParams.w;
        }else if(this.alignment=="center"){
            this.progParams.x = (this.baseParams.x+this.baseParams.w/2)-(this.progParams.w/2);
        }

        this.progParams.y = this.baseParams.y;
    }
    //
    draw(){
       
        let ctx = _App.context;
       
        ctx.fillStyle = this.baseParams.color;
        ctx.fillRect(this.baseParams.x, this.baseParams.y, this.baseParams.w, this.baseParams.h);

        ctx.fillStyle = this.progParams.color;
        ctx.fillRect(this.progParams.x, this.progParams.y, this.progParams.w, this.progParams.h);
        
    }
}

export default Hourglass