import sectionManager from './sectionManager';
import progressBar from './uiProgressBar';


let _App = {
  init: function(){
    
    this.primaryCTX = document.querySelector("#primary").getContext("2d");
    // this.secondaryCTX = document.querySelector("#secondary").getContext("experimental-webgl");
    this.context = this.primaryCTX;
    
     
    this.updateSize();
    //
    // animation.init();
    sectionManager.init();
    progressBar.init();
    // //
    sectionManager.update();
    progressBar.update();
    
    // this.loop();
    // animation.begin();
    
  },

  loop: function(){
    // utils.clearCanvas(_App, true);
    // window.requestAnimationFrame(_App.loop);
  },
  //
  updateSize: function(e){
    e = e || window.event;

    _App.primaryCTX.canvas.width = document.documentElement.clientWidth;
    _App.primaryCTX.canvas.height = document.documentElement.clientHeight;
    
     _App.w = _App.context.canvas.width;
    _App.h = _App.context.canvas.height;
    progressBar.init();
    
  }
}
//
window.onload=function(){

  window._App = _App;
  window.addEventListener("resize", _App.updateSize);

  _App.init();
  
}


