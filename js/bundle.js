!function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var i=n(1),a=(o(i),n(2)),r=o(a),c={init:function(){this.context=document.querySelector("#main").getContext("2d"),this.context.imageSmoothingEnabled=!0,this.updateSize(),this.loop()},updateSize:function(){c.context.canvas.width=document.documentElement.clientWidth,c.context.canvas.height=document.documentElement.clientHeight,c.w=c.context.canvas.width,c.h=c.context.canvas.height,console.log("updateSize called")},loop:function(){var t=c.context;t.clearRect(0,0,c.w,c.h),t.fillStyle="#1d210d",t.fillRect(0,0,c.w,c.h),r.default.update(t,c.w,c.h),t.beginPath(),t.fillStyle=t.strokeStyle="#fff",t.lineWidth=10,t.arc(c.w/2,c.h/2,120,0,2*Math.PI),t.stroke(),t.font="30px Avenir",t.fillText("This is the end",20,90),t.fillText("My only friend, the end.",20,130),window.requestAnimationFrame(c.loop)}};window.onload=function(){window._App=c,window.addEventListener("resize",c.updateSize),c.init()}},function(t,e,n){"use strict";var o=0,i=0;e.createNewPoint=function(t,e,n){var o={},a=(t.x+e.x)/2,r=(t.y+e.y)/2,c=this.getRandom()+this.getRandom()+this.getRandom()+this.getRandom()+this.getRandom()+this.getRandom()-1;for(c*=Math.min(Math.pow(c,c),3.5*c),c*=2;i<100;)console.log(c),i++;var u=c*(2*Math.PI),d=a+c*Math.cos(u),l=r+c*Math.sin(u);return o.x=d,o.y=l,o},e.debug=function(t,e,n){e="white",n.save(),t.forEach(function(t,o){n.globalCompositeOperation="source-over",n.strokeStyle=e,n.beginPath(),n.arc(t.x,t.y,2,0,2*Math.PI),n.stroke()}),n.restore()},e.getRandom=function(){return Math.random()},e.initSeed=function(t){(o=t%2147483647)<=0&&(o+=2147483646)}},function(t,e,n){"use strict";var o=0,i=150,a={},r={one:{a:"#009475",b:"#acc800"},two:{a:"#0f6100",b:"#459b2e"}},c=0,u=0;e.update=function(t,e,n){i=Math.floor(e/13),o-=.045;for(var d=0;d<i;d++)u=11*Math.sin(o+d/4)+40,c=(_App.w/i+2)*d,t.beginPath(),t.moveTo(c,n),t.lineTo(c,n-u),a=t.createLinearGradient(c,n-u,c,n),a.addColorStop("0",r.one.a),a.addColorStop("1",r.one.b),t.strokeStyle=a,t.lineWidth=11,t.stroke()}}]);