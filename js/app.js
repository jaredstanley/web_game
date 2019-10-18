import utils from './utils';
import lines from './uiLines';
import progressBar from './uiProgressBar';
import lottie_web from 'lottie-web';
import animation from './lottieAnim';

let _App = {
  init: function(){
    this.context = document.querySelector("#main").getContext("2d");
    this.context.imageSmoothingEnabled = true;
    this.updateSize();
    lines.init();
    progressBar.init(_App.w, _App.h);
    this.createAnimation();
    this.loop();
  },
  loop: function(){
    var ctx = _App.context;
    
    // ctx.clearRect(0,0,_App.w, _App.h);
    ctx.fillStyle = utils.getColors().darkGreen;
    ctx.fillRect(0,0,_App.w, _App.h);

    _App.update();
    
    // ctx.beginPath();
    // ctx.fillStyle = ctx.strokeStyle="#fff";
    // ctx.lineWidth=10;
    // ctx.arc(_App.w/2,_App.h/2,120,0,2*Math.PI);
    // ctx.stroke();

    window.requestAnimationFrame(_App.loop);
  },
  update: function(){
    lines.update();
    progressBar.update();
  },
  updateSize: function(){
    _App.context.canvas.width = document.documentElement.clientWidth;
    _App.context.canvas.height = document.documentElement.clientHeight;
    _App.w = _App.context.canvas.width;
    _App.h = _App.context.canvas.height;
    progressBar.init();
    lines.init();
    console.log("updateSize called");
    
  },
  createAnimation: function(){
    var params = {
      container: document.getElementById('logoAnim'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: lottie_web.animationData
    };
    animation.init();
    var anim = lottie_web.loadAnimation(animation.params);
  }

}

window.onload=function(){
  window._App = _App;
  window.addEventListener("resize", _App.updateSize);

  _App.init();
  
}


