import sectionManager from './sectionManager';


let _App = {
  init: function(){
    
    this.primaryCTX = document.querySelector("#primary").getContext("2d");
    // this.secondaryCTX = document.querySelector("#secondary").getContext("experimental-webgl");
    this.context = this.primaryCTX;
    
     
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
  updateSize: function(e){
    e = e || window.event;

    _App.primaryCTX.canvas.width = document.documentElement.clientWidth;
    _App.primaryCTX.canvas.height = document.documentElement.clientHeight;
    
     _App.w = _App.context.canvas.width;
    _App.h = _App.context.canvas.height;
    
  }
}
//
window.onload=function(){
  
  // e = e || window.event;
  // console.log(window);
  
  window._App = _App;
  window.addEventListener("resize", _App.updateSize);

  _App.init();
  
}


