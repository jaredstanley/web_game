import utils from './utils';
import lines from './uiLines';
import progressBar from './uiProgressBar';
import animation from './nameAnim';
import sectionManager from './sectionManager';


let _App = {
  init: function(){
    // console.log(window.clientInformation.userAgent);
    this.agent = window.clientInformation.userAgent.toString().search('Chrome');
    if (this.agent>0){
      utils.setStatus('desktop');
    }else{
      utils.setStatus('mobile');
    }
    

    this.context = document.querySelector("#main").getContext("2d");
    this.context.imageSmoothingEnabled = true;
    this.updateSize();
    //
    lines.init();
    progressBar.init();
    animation.init();
    sectionManager.init();
    //
    
    
    //
    _App.context.fillRect(0,0,_App.w, _App.h);
    this.loop();
    
    // console.log(animation);
    animation.begin();
  },
  loop: function(){
    var ctx = _App.context;
    
    // ctx.clearRect(0,0,_App.w, _App.h);
    ctx.fillStyle = utils.getColors().darkGreen;
    ctx.fillRect(0,0,_App.w, _App.h);

    _App.update();
    window.requestAnimationFrame(_App.loop);
  },
  //
  update: function(){
    
    lines.update();
    progressBar.update();
    sectionManager.update();
    
  },
  //
  updateSize: function(){
    _App.context.canvas.width = document.documentElement.clientWidth;
    _App.context.canvas.height = document.documentElement.clientHeight;
    _App.w = _App.context.canvas.width;
    _App.h = _App.context.canvas.height;
    progressBar.init();
    lines.init();
    // console.log("updateSize called");
    
  }
}
//
window.onload=function(){
  window._App = _App;
  window.addEventListener("resize", _App.updateSize);

  _App.init();
  
}


