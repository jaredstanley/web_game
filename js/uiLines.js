let ang = 0;
let amplitude = 11;
let speed = 0.045;
let waveLength = 3;
let lineWidth = 11;
let margin = 2;
let count = 150;
let fillStyle = "#ff0";
let strokeStyle = fillStyle;
let gradient = {};
let gradientColors = { 
    one: {a: "#009475", b:"#acc800"},
    two: {a: "#0f6100", b:"#459b2e"} 
};
//
let x = 0;
let y = 0;
exports.update = function(ctx, w, h){
    count = Math.floor(w/(lineWidth+margin));
    // console.log(count);
    ang-=speed;
    for (var i = 0; i < count; i++) {
      y = Math.sin(ang+(i/4))*amplitude+40;
      x = (_App.w/count+margin) * i;
      ctx.beginPath();
      ctx.moveTo(x,h);
      ctx.lineTo(x,h-y);
      gradient = ctx.createLinearGradient(x, h-y, x, h);
      gradient.addColorStop("0", gradientColors.one.a);
      gradient.addColorStop("1", gradientColors.one.b);
      ctx.strokeStyle = gradient;
      ctx.lineWidth = lineWidth;
      ctx.stroke();
    }
}

function newOne() {
  return _seed = _seed * 16807 % 2147483647;
}
