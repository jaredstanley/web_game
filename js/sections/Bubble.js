
class Bubble {
    constructor(pos, x, y, color){
        this.pos = pos;
        this.color = color;
        this.radius = 25;
        this.direction = Math.random()*Math.PI*2;
        this.speed = Math.random()*2+1;
        this.n = "bubble"+pos;
        this.x = x
        this.y = y
        // console.log('Bubble Class constructor');
        
    }
    init(){
        console.log("Bubble SuperClass Initted");
        
    }
    updatePosition(){
        this.x += Math.cos(this.direction)*this.speed;
        this.y += Math.sin(this.direction)*this.speed;

        if(this.x-this.radius<=0){
            this.x = this.radius;
            this.direction = Math.atan2(Math.sin(this.direction), Math.cos(this.direction)*-1 );
        }else if(this.x+this.radius>=_App.w){
            this.x = _App.w-this.radius;
            this.direction = Math.atan2(Math.sin(this.direction), Math.cos(this.direction)*-1 );
        }

        if (this.y-this.radius<=0) {
            this.y=this.radius;
            this.direction = Math.atan2(Math.sin(this.direction)*-1, Math.cos(this.direction));
            
        }else if(this.y+this.radius>=_App.h){
            this.y = _App.h-this.radius;
            this.direction = Math.atan2(Math.sin(this.direction)* -1, Math.cos(this.direction));
        }
    }

}

export default Bubble