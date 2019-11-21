import utils from './utils';

let oscC = {};
let oscD = {};
let oscE = {};
let oscF = {};
let oscG = {};
let oscA = {};
let oscB = {};
let notesArr = [];
let audCtx = {};
let vol = {};


exports.init = function () {
    let AudioContext = window.AudioContext || window.webkitAudioContext;
    audCtx = new AudioContext();
    vol = audCtx.createGain();
    const gainNode = audCtx.createGain();
    console.log(`gainnode`, gainNode.gain.defaultValue);
    oscC = audCtx.createOscillator();
    oscD = audCtx.createOscillator();
    oscE = audCtx.createOscillator();
    oscF = audCtx.createOscillator();
    oscG = audCtx.createOscillator();
    oscA = audCtx.createOscillator();
    oscB = audCtx.createOscillator();
    
	gainNode.gain.value = 0.1;
    
    oscC.frequency.value = 261.6;
    oscD.frequency.value = 293.7;
    oscE.frequency.value = 329.6;
    oscF.frequency.value = 349.2;
    oscG.frequency.value = 392;
    oscA.frequency.value = 440;
    oscB.frequency.value = 493.9;


    notesArr = [oscB, oscA, oscG, oscF, oscE, oscD, oscC];

    notesArr.forEach((osc, i) => {
        // note.connect(audCtx.destination);
        osc.start();
    })

}
exports.playSound = function (osc) {
    osc.connect(audCtx.destination);
    // setTimeout(this.stopSound(osc), 500);
}
//
exports.stopSound = function (osc) {
    osc.disconnect();
}
exports.getNote = function (i) {
    return notesArr[i];
}
exports.getAudCtx = function () {
    return audCtx;
}


