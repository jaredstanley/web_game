
let hasAsked=false;

exports.init = function(){
    console.log("has asked is = to ",hasAsked);
    
};

exports.askOrientation = function(){
    console.log("PermissionsMgr asking Orientation");
    if (typeof DeviceOrientationEvent.requestPermission === 'function') {
        DeviceOrientationEvent.requestPermission()
            .then(permissionState => {
            if (permissionState === 'granted') {
                window.addEventListener('deviceorientation', () => {});
            }
            })
            .catch(console.error);
    } else {
    // handle regular non iOS 13+ devices
    }
}

