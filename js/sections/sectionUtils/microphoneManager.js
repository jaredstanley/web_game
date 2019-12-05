import utils from '../../utils';

let audioContext = null;
let meter = null;
let mediaStreamSource = null;
let vol = 0;
let constraints = {audio:true, video:false};



exports.init=function() {
	console.log("initAudioContext");
	window.AudioContext = window.AudioContext || window.webkitAudioContext;
	audioContext = new AudioContext();
	console.log(navigator);
    
	navigator.mediaDevices.getUserMedia(constraints)
	.then(function(stream) {
	  gotStream(stream);
	})
	.catch(function(err) { 
        console.log(err.name + ": " + err.message); 
    });
}

function gotStream(stream) {
	mediaStreamSource = audioContext.createMediaStreamSource(stream);

	meter = createAudioMeter(audioContext);
	mediaStreamSource.connect(meter);

	// initTimer();
}

function createAudioMeter(audioContext, clipLevel, averaging, clipLag) {
	var processor = audioContext.createScriptProcessor(512);
	processor.onaudioprocess = new volumeAudioProcess();
	processor.clipping = false;
	processor.lastClip = 0;
	processor.volume = 0;
	processor.clipLevel = clipLevel || 0.98;
	processor.averaging = averaging || 0.95;
	processor.clipLag = clipLag || 750;

	//Chrome bug workaround
	processor.connect(audioContext.destination);

	processor.checkClipping = function() {
		if (!this.clipping) return false;
		if (this.lastClip + this.clipLag < window.performance.now())
			this.clipping = false;
		return this.clipping;
	};

	processor.shutdown = function() {
		this.disconnect();
		this.onaudioprocess = null;
	};

	return processor;
}

class volumeAudioProcess {
    constructor(event) {
        var buf = event.inputBuffer.getChannelData(0);
        var bufLength = buf.length;
        var sum = 0;
        var x;
        // Do a root-mean-square on the samples: sum up the squares...
        for (var i = 0; i < bufLength; i++) {
            x = buf[i];
            if (Math.abs(x) >= this.clipLevel) {
                this.clipping = true;
                this.lastClip = window.performance.now();
            }
            sum += x * x;
        }
        var rms = Math.sqrt(sum / bufLength);
        this.volume = rms;
    }
}

