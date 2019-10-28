let status = {
  type:"mobile",
  event:{
    mobile: 'touchstart',
    desktop: 'click'
  }

}
let _seed = 0;
let count = 0;
let colors = {
  darkGreen: "#1d210d",
  brightGreen: "#00ff18", 
  upcoming: "#174d0f",
  visited: "#0ba615",
  light: "#dedede"
};
let grad1 = {
  b: "#009475", a:"#acc800"
}
let blendModeArr = ["source-over", "source-in", "source-out", "source-atop", "destination-over", "destination-in", "destination-out", "destination-atop", "lighter", "copy", "xor", "multiply", "screen", "overlay", "darken", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"];
exports.getColors = function(){
  return colors;
}
exports.getGrad = function(){
  return grad1;
}
exports.getStatus=function(){
  return status;
}
exports.debug= function(arr, clr, ctx){
    clr = "white";
    ctx.save();
    arr.forEach(function(e,i){
      ctx.globalCompositeOperation = "source-over";
      ctx.strokeStyle=clr;
      // ctx.lineWidth=1;
      // ctx.globalAlpha=0.34;
      ctx.beginPath();
      ctx.arc(e.x, e.y, 2, 0, Math.PI*2);
      ctx.stroke();
    });
    ctx.restore();
}

exports.getRandom = function(){
    return Math.random();
    return (newOne() - 1) / 2147483646;
}


exports.initSeed = function(s){
  _seed = s % 2147483647;
  if (_seed <= 0) _seed += 2147483646;
}

function newOne() {

  return _seed = _seed * 16807 % 2147483647;
}
