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
let noteValsArr = [
    { note: "C", freq: "261.6" },
    { note: "D", freq: "293.7" },
    { note: "E", freq: "329.6" },
    { note: "F", freq: "349.2" },
    { note: "G", freq: "392" },
    { note: "A", freq: "440" },
    { note: "B", freq: "493.9" }];

exports.init = function () {
    noteValsArr.reverse();
    let AudioContext = window.AudioContext || window.webkitAudioContext;
    audCtx = new AudioContext();
    
    //
    masterGainNode = audCtx.createGain();
}
exports.playSound = function (i) {
    let val = noteValsArr[i].freq;
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


