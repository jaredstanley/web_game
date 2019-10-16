import utils from './utils';
let _App = {
  init: function(){
    this.context = document.querySelector("#main").getContext("2d");
    this.ang=0;
    this.updateSize();
    this.loop();
  },

  updateSize: function(){
    _App.context.canvas.width = document.documentElement.clientWidth;
    _App.context.canvas.height = document.documentElement.clientHeight;
    _App.w = _App.context.canvas.width;
    _App.h = _App.context.canvas.height;
    console.log("updateSize called");
    
  },
  loop: function(){
    var ctx = _App.context;
    ctx.clearRect(0,0,_App.w, _App.h);
    ctx.fillStyle = "#1d210d";
    ctx.fillRect(0,0,_App.w, _App.h);

    ctx.fillStyle = ctx.strokeStyle="#fff";
    ctx.lineWidth=2.5;
    let count = 50;

    _App.ang-=0.055;
    for (var i = 0; i < count; i++) {
      
      
      var y = Math.cos(_App.ang+i)*10+40;
      var x = (_App.w/count) * i + 2;
    
      ctx.beginPath();
      ctx.moveTo(x,0);
      ctx.lineTo(x,y);
      ctx.stroke();

    }//
    ctx.beginPath();
    ctx.fillStyle = ctx.strokeStyle="#fff";
    ctx.lineWidth=10;
    ctx.arc(_App.w/2,_App.h/2,120,0,2*Math.PI);
    ctx.stroke();
    
    ctx.font = "30px Avenir";
    ctx.fillText("This is the end",20,90);
    ctx.fillText("My only friend, the end.",20,130);

    window.requestAnimationFrame(_App.loop);
  }

}

window.onload=function(){
  window._App = _App;
  window.addEventListener("resize", _App.updateSize);

  _App.init();

}


