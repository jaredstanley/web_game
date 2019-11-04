import utils from './utils';

let agent = "";


exports.init=function(){
    console.log("init from eventtypemgr");
    agent = window.clientInformation.userAgent.toString().search('Chrome');
    if (agent>0){
      utils.setStatus('desktop');
      return utils.getStatus().event.desktop;

    }else{
      utils.setStatus('mobile');
      return utils.getStatus().event.mobile;
    }
}
exports.addEvent = function(tgt, bind){
  tgt.addEventListener(_App.eventType, bind, true);
}
exports.removeEvent = function(tgt, bind){
  tgt.removeEventListener(_App.eventType, bind, true);
}



