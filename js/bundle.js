!function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){"use strict";var o=n(1),i=(function(t){t&&t.__esModule}(o),{init:function(){this.context=document.querySelector("#main").getContext("2d"),this.ang=0,this.updateSize(),this.loop()},updateSize:function(){i.context.canvas.width=document.documentElement.clientWidth,i.context.canvas.height=document.documentElement.clientHeight,i.w=i.context.canvas.width,i.h=i.context.canvas.height,console.log("updateSize called")},loop:function(){var t=i.context;t.clearRect(0,0,i.w,i.h),t.fillStyle="#1d210d",t.fillRect(0,0,i.w,i.h),t.fillStyle=t.strokeStyle="#fff",t.lineWidth=2.5;i.ang-=.055;for(var e=0;e<50;e++){var n=10*Math.cos(i.ang+e)+40,o=i.w/50*e+2;t.beginPath(),t.moveTo(o,0),t.lineTo(o,n),t.stroke()}t.beginPath(),t.fillStyle=t.strokeStyle="#fff",t.lineWidth=10,t.arc(i.w/2,i.h/2,120,0,2*Math.PI),t.stroke(),t.font="30px Avenir",t.fillText("This is the end",20,90),t.fillText("My only friend, the end.",20,130),window.requestAnimationFrame(i.loop)}});window.onload=function(){window._App=i,window.addEventListener("resize",i.updateSize),i.init()}},function(t,e,n){"use strict";var o=0,i=0;e.createNewPoint=function(t,e,n){var o={},r=(t.x+e.x)/2,a=(t.y+e.y)/2,c=this.getRandom()+this.getRandom()+this.getRandom()+this.getRandom()+this.getRandom()+this.getRandom()-1;for(c*=Math.min(Math.pow(c,c),3.5*c),c*=2;i<100;)console.log(c),i++;var l=c*(2*Math.PI),s=r+c*Math.cos(l),u=a+c*Math.sin(l);return o.x=s,o.y=u,o},e.debug=function(t,e,n){e="white",n.save(),t.forEach(function(t,o){n.globalCompositeOperation="source-over",n.strokeStyle=e,n.beginPath(),n.arc(t.x,t.y,2,0,2*Math.PI),n.stroke()}),n.restore()},e.getRandom=function(){return Math.random()},e.initSeed=function(t){(o=t%2147483647)<=0&&(o+=2147483646)}}]);