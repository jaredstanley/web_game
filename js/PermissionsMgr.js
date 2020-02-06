import accelerometer from './accelerometer';

let hasAsked=false;
let hasGranted = false

exports.init = function(){
    console.log("PermissionsMgr.init(), hasAsked = ",hasAsked);
    
};

exports.checkOrientation = function(){
    console.log("PermissionsMgr asking Orientation");
    if(typeof(DeviceOrientationEvent) !== 'undefined' && typeof (DeviceOrientationEvent.requestPermission) === 'function'){
        //ios13
        // console.log("it true");        
        return true;
    }else{
        // console.log("it flasee");
        // not ios13
        return false;
    }
}

exports.askOrientation = function(){
        console.log("lets askkk");
        DeviceOrientationEvent.requestPermission()
            .then(response => {
                if(response=='granted'){
                    hasGranted=true;
                }else{
                    hasGranted=false;
                }
                return hasGranted;
            })
            .catch(console.error)
} 

exports.checkPermission=function(){
    return hasGranted;
}

