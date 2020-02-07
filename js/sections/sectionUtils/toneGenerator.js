import utils from '../../utils';

let oscC = {};
let oscD = {};
let oscE = {};
let oscF = {};
let oscG = {};
let oscA = {};
let oscB = {};
let mainOsc = {};
let notesArr = [];
let audCtx = {};
let buffSrc = {};
let masterGainNode={};
let isConnected=false;
let vol = {};


exports.init = function () {
    // noteValsArr.reverse();
    let AudioContext = window.AudioContext || window.webkitAudioContext;
    audCtx = new AudioContext();
    
    //
    masterGainNode = audCtx.createGain();
}
exports.playSound = function (i, freq) {
    let val = freq;
    // let val = noteValsArr[i].freq;
    if(isConnected){
        mainOsc.disconnect();
        mainOsc.stop();
        isConnected=false;
    }
    
    masterGainNode.connect(audCtx.destination);
    masterGainNode.gain.value = 0.008;
    mainOsc = audCtx.createOscillator();
    mainOsc.connect(masterGainNode);
    mainOsc.frequency.value=val;
    mainOsc.start();
    isConnected=true;
    // setTimeout(this.stopSound(osc), 500);
}
//
exports.stopSound = function (i) {
    if(isConnected){
        mainOsc.disconnect();
        mainOsc.stop();
        isConnected=false;
    }
}
exports.getNote = function (i) {
    return notesArr[i];
}
exports.getAudCtx = function () {
    return audCtx;
}


