import utils from './utils';

let Cagent = "";
let Fagent = "";


exports.init=function(){
    // console.log("init from eventtypemgr");
    // Cagent = navigator.userAgent.toString().search('Chrome');
    // Fagent = navigator.userAgent.toString().search('Firefox');
    // // agent = window.clientInformation.userAgent.toString().search('Chrome');
    // if (Cagent>0 || Fagent>0){
    //   utils.setStatus('desktop');
    //   return utils.getStatus().event.desktop;

    // }else{
    //   utils.setStatus('mobile');
    //   return utils.getStatus().event.mobile;
    // }
    // console.log(navigator.userAgent);
    
    let mobArr =["/Android/i","/webOS/i","/iPhone/i","/iPad/i","/iPod/i","/BlackBerry/i","/Windows Phone/i"];
    
    mobArr.forEach(function(itm) {
      if (navigator.userAgent.match(itm)) {
          // console.log("mobillllee");
          
          utils.setStatus('mobile');
          return utils.getStatus().event.mobile;
      }
    });
    // console.log("deskkkktoppp");
    
    utils.setStatus('desktop');
    return utils.getStatus().event.desktop;
}

exports.addEvent = function(tgt, bind){
  tgt.addEventListener(_App.eventType, bind, true);
}
exports.removeEvent = function(tgt, bind){
  tgt.removeEventListener(_App.eventType, bind, true);
}



