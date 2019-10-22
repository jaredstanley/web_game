let x = 0; 
let y = 0;
let vx = 0;
let vy = 0;

let count = 0;
let bool = 0;
let total = 0;
let scoresArr = [];
let moveData = {
        alpha:0,
        beta:0,
        gamma:0,
        x:12345,
        y:0,
        z:0
    };

exports.getData=function(){
    return moveData;
}
exports.init=function(){	
	console.log("accelerometer is ready");
	
	// if (window.DeviceMotionEvent != undefined) {
		window.addEventListener("devicemotion", handleMotion, true); 
           

		// }
		
	// } else{
        // console.log("hmm dont see accelleromerter");

        
    // }

}
function handleMotion(e){
    moveData.x = e.accelerationIncludingGravity.x;
    moveData.y = e.accelerationIncludingGravity.y;
    moveData.z = e.accelerationIncludingGravity.z;

}


