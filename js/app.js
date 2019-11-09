import utils from './utils';
// import lines from './uiLines';
// import progressBar from './uiProgressBar';
import animation from './nameAnim';
import sectionManager from './sectionManager';
// import eventTypeManager from './eventTypeManager';
// import instructions from './instructions';


let _App = {
  init: function(){
    
    this.context = document.querySelector("#main").getContext("2d");
    
     
    this.updateSize();
    //
    animation.init();
    sectionManager.init();
    // instructions.init();
    // //
    this.loop();
    animation.begin();
  },

  loop: function(){
    var ctx = _App.context;
    // console.log('updateeeed');
    
  //   // ctx.clearRect(0,0,_App.w, _App.h);
    ctx.fillStyle = utils.getColors().darkGreen;
    ctx.fillRect(0,0,_App.w, _App.h);

  //   _App.update();
    window.requestAnimationFrame(_App.loop);
  },
  // blocker: function(e){
  //   console.log("blocking");
    
  //   e.preventDefault();
  // },
  //
  // update: function(){
    
  //   sectionManager.update();
  //   lines.update();
  //   progressBar.update();
    
    
  // },
  //
  updateSize: function(){
    _App.context.canvas.width = document.documentElement.clientWidth;
    _App.context.canvas.height = document.documentElement.clientHeight;
    _App.w = _App.context.canvas.width;
    _App.h = _App.context.canvas.height;
    // progressBar.init();
    // lines.init();
    // console.log("updateSize called");
    
  }
}
//
window.onload=function(){
  window._App = _App;
  window.addEventListener("resize", _App.updateSize);

  _App.init();
  
}


