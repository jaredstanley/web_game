import sectionManager from './sectionManager';

let div = "";

exports.init=function(){
    this.div = document.getElementById('instructions');
}

exports.show=function(str){
    document.querySelector(".instructiontext").innerHTML=str;
    this.div.classList.add('show');
}
exports.remove=function(){
    this.div.classList.remove("cursor");
    this.div.classList.add("ignored");
}