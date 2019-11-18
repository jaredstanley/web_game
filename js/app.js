import utils from './utils';
// import lines from './uiLines';
// import progressBar from './uiProgressBar';
// import animation from './nameAnim';
import sectionManager from './sectionManager';
// import Chapter from './Chapter';
// import eventTypeManager from './eventTypeManager';


let _App = {
  init: function(){
    
    this.context = document.querySelector("#main").getContext("2d");
    
     
    this.updateSize();
    //
    // animation.init();
    sectionManager.init();
    // //
    
    // this.loop();
    // animation.begin();
    sectionManager.update();
  },

  loop: function(){
    
    // utils.clearCanvas(_App, true);
    

    // window.requestAnimationFrame(_App.loop);
  },
  //
  updateSize: function(){
    _App.context.canvas.width = document.documentElement.clientWidth;
    _App.context.canvas.height = document.documentElement.clientHeight;
    _App.w = _App.context.canvas.width;
    _App.h = _App.context.canvas.height;
    
  }
}
//
window.onload=function(){
  window._App = _App;
  window.addEventListener("resize", _App.updateSize);

  _App.init();
  
}


