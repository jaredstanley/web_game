import accelerometer from './accelerometer';

let hasAsked=false;

exports.init = function(){
    console.log("has asked is = to ",hasAsked);
    
};

exports.askOrientation = function(){
    console.log("PermissionsMgr asking Orientation");
    if (typeof DeviceOrientationEvent.requestPermission === 'function') {
        console.log("requestPermission needed, gonna ask");
        DeviceOrientationEvent.requestPermission()
            .then(permissionState => {
            if (permissionState === 'granted') {
                console.log("requestPermission GRANTED BRO");
                accelerometer.init();
            }
            })
            .catch(console.error);
    } else {
        console.log("hey this is requestPermission not available");
        
    // handle regular non iOS 13+ devices
    }
}

