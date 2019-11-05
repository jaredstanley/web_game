import utils from './utils';
import lines from './uiLines';
import progressBar from './uiProgressBar';
import animation from './nameAnim';
import sectionManager from './sectionManager';
import eventTypeManager from './eventTypeManager';


let _App = {
  init: function(){
    this.eventType = eventTypeManager.init();

    this.context = document.querySelector("#main").getContext("2d");
    this.context.imageSmoothingEnabled = true;
    this.context.textBaseline = "top";
    
     
    this.updateSize();
    //
    animation.init();
    sectionManager.init();
    //
    this.loop();
    this.binder = this.blocker.bind(this);
    eventTypeManager.addEvent(_App.context.canvas, this.binder);
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
  blocker: function(e){
    console.log("blocking");
    
    e.preventDefault();
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


