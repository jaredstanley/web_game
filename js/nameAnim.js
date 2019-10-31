
import lottie_web from 'lottie-web';
import sectionManager from './sectionManager';
//
let div = document.getElementById('logoAnim');    
let anim = "";  
let params = {x:0}; 
let animJSON = {}; 
let isPlaying = false;
let firstTime = true;
exports.init = function(){
  // console.log("anim.init() called");

  animJSON = {"v":"5.1.15","fr":23.9759979248047,"ip":0,"op":23.9999979227274,"w":800,"h":413,"nm":"main_v3","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[400,206.5,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":1,"k":[{"i":{"x":[0.833,0.833],"y":[0.833,0.833]},"o":{"x":[0.167,0.167],"y":[0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":0,"s":[4.77,238],"e":[456.77,238]},{"t":22.9999980092804}],"ix":2},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":0,"s":[-237,0],"e":[-8,0],"to":[38.1666679382324,0],"ti":[-38.1666679382324,0]},{"t":22.9999980092804}],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[7.838,0.613],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":23.9999979227274,"st":0,"bm":0}],"markers":[]}
  setup();
}   
//
function setup(){
  params = {
    container: div,
    renderer: 'svg',
    autoplay: false,
    loop: false,
    animationData: animJSON
  };
  anim = lottie_web.loadAnimation(params);
  anim.addEventListener('complete', function(){
    // console.log("animation is complete");
    isPlaying=false;
    if(firstTime){
      sectionManager.loadFirstSection();
      firstTime = false;
    }
  })
  div.addEventListener('mousedown', startAtStart, false);
  div.addEventListener('touchstart', startAtStart, false);
}
//
exports.getIsPlaying = function(){
  return isPlaying;
}
//
function startAtStart(){
  // console.log("startAtStart called, ", isPlaying);
  
  if(!isPlaying){
    anim.goToAndPlay(1,true);
    isPlaying=true;
    
  }
}
//
exports.begin = function(){
  startAtStart(); 
}
//
function loadSection(){
  // console.log('doing the thing after the animation now');
  
}