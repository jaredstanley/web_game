let _seed = 0;
let count = 0;
let blendModeArr = ["source-over", "source-in", "source-out", "source-atop", "destination-over", "destination-in", "destination-out", "destination-atop", "lighter", "copy", "xor", "multiply", "screen", "overlay", "darken", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"];
exports.createNewPoint = function(p1, p2, iter){
      // console.log(this);
      var p = {};
      var xx =(p1.x+p2.x) / 2;
      var yy = (p1.y+p2.y) / 2;
      var rnd = ((this.getRandom()+this.getRandom()+this.getRandom()+this.getRandom()+this.getRandom()+this.getRandom())-3/3);
      // console.log(rnd);

      rnd*=Math.min(Math.pow(rnd, rnd), rnd*3.5);
      rnd*=2;
      while (count<100) {
        console.log(rnd);
        count++


      }
      // console.log(iter, rnd);
      var ang =rnd*(2*Math.PI);

      var x = xx+rnd*Math.cos(ang);
      var y = yy+rnd*Math.sin(ang);
      p.x = x;
      p.y = y;
      return p;
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
