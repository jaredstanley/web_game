import ChapterAnim from './ChapterAnim';
import utils from '../utils';
//
class TetonAnim extends ChapterAnim {
    constructor(){
        super();
    }
    init(){
      super.init();
      let animJSON = {"v":"5.1.15","fr":30,"ip":0,"op":30,"w":900,"h":645,"nm":"tetons","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"tetons","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[491,325.5,0],"ix":2},"a":{"a":0,"k":[367,322.5,0],"ix":1},"s":{"a":0,"k":[90,90,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[117.497,4.658],[115.589,4.266],[116.437,6.019],[115.475,7.712],[117.404,7.447],[118.717,8.887],[119.06,6.969],[120.835,6.165],[119.118,5.246],[118.901,3.309]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-1.108,-4.783],[-3.016,-5.176],[-2.167,-3.423],[-3.13,-1.729],[-1.2,-1.996],[0.112,-0.556],[0.456,-2.473],[2.23,-3.277],[0.514,-4.197],[0.297,-6.132]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[96.668,-13.809],[94.76,-14.202],[95.608,-12.449],[94.645,-10.757],[96.575,-11.022],[97.889,-9.582],[98.232,-11.499],[100.007,-12.303],[98.289,-13.223],[98.073,-15.158]],"c":true},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ind":3,"ty":"sh","ix":4,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[33.24,49.208],[31.333,48.816],[32.182,50.569],[31.219,52.262],[33.148,51.997],[34.461,53.436],[34.805,51.518],[36.579,50.715],[34.862,49.796],[34.645,47.859]],"c":true},"ix":2},"nm":"Path 4","mn":"ADBE Vector Shape - Group","hd":false},{"ind":4,"ty":"sh","ix":5,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-34.37,-52.311],[-35.96,-53.436],[-35.886,-51.489],[-37.448,-50.325],[-35.574,-49.794],[-34.949,-47.949],[-33.864,-49.567],[-31.917,-49.592],[-33.12,-51.124],[-32.542,-52.983]],"c":true},"ix":2},"nm":"Path 5","mn":"ADBE Vector Shape - Group","hd":false},{"ind":5,"ty":"sh","ix":6,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-115.928,-20.717],[-116.507,-18.858],[-115.303,-17.325],[-117.251,-17.301],[-118.336,-15.684],[-118.96,-17.528],[-120.835,-18.059],[-119.273,-19.225],[-119.346,-21.171],[-117.756,-20.046]],"c":true},"ix":2},"nm":"Path 6","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.6,0.889999988032,0.913999968884,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[360.668,93.97],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":7,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-12.209,-2.359],[-1.994,0.161],[-1.962,10.15],[-9.823,0.795],[2.06,0.398],[2.359,-12.21]],"o":[[2.06,0.398],[-8.82,-4.398],[1.961,-10.149],[-1.789,-0.893],[-12.209,-2.359],[-2.36,12.209]],"v":[[2.932,23.038],[9.032,23.372],[-3.017,-1.044],[17.261,-19.212],[11.476,-21.174],[-14.902,-3.34]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.6,0.889999988032,0.913999968884,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[154.677,81.471],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-2.359,12.209],[-12.209,-2.36],[2.359,-12.209],[12.209,2.36]],"o":[[2.359,-12.209],[12.21,2.359],[-2.359,12.209],[-12.209,-2.359]],"v":[[-22.106,-4.272],[4.272,-22.106],[22.107,4.272],[-4.272,22.106]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.6,0.889999988032,0.913999968884,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[161.881,82.402],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":33,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[7.163,3.589],[2.254,6.94],[-3.012,-0.377],[-5.248,-3.248],[-0.952,-3.659]],"o":[[-6.754,-3.384],[3.407,0.256],[6.191,0.775],[3.342,2.068],[-7.022,1.905]],"v":[[47.371,-71.189],[34.624,-86.947],[44.096,-86.21],[61.533,-80.79],[68.356,-72.426]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[1.105,-0.206],[2.719,-0.867],[4.193,-1.376],[9.17,-2.763],[5.672,-1.325],[0.942,0.216],[0.021,0.588],[1.881,2.416],[5.78,-1.044],[7.61,-3.532],[1.136,1.43],[2.08,2.601],[0.37,0.566],[-1.881,3.472],[-0.659,0.847],[-6.062,6.804],[-10.1,4.019],[-3.85,1.875],[-1.782,1.333],[0.163,0.33],[3.097,-0.684],[11.155,-7.327],[4.314,-5.147],[1.048,-1.179],[2.718,-2.786],[5.238,-0.086],[7.012,0.212],[-1.182,0.961],[-4.34,5.676],[-3.138,3.267],[-3.43,1.928],[-7.468,0.512],[-4.473,0.73],[-1.669,0.534],[3.082,0.073],[4.405,-0.528],[5.451,-1.218],[1.73,-0.586],[5.95,-7.732],[3.6,-3.798],[5.185,-1.915],[-6.086,2.594],[-1.867,0.801],[-1.004,2.358],[2.003,0.134],[1.485,-0.373],[5.226,-5.35],[-3.392,-7.247],[4.851,0.918],[1.746,3.277],[-0.465,0.792],[-6.213,4.021],[-1.407,1.755],[2.842,0.377],[2.637,-2.135],[3.472,-3.487],[2.64,-3.025],[-0.338,5.362],[-13.321,9.333],[-0.73,1.321],[0.246,0.292],[2.497,-1.216],[3.4,-10.41],[1.37,-5.225],[0.726,-0.63],[0.822,4.866],[0.382,2.058],[-3.47,2.221],[-2.87,1.897],[-2.01,1.758],[-0.7,1.526],[7.489,-4.185],[-3.584,3.204],[-1.852,4.644],[-0.172,0.637],[0,0],[7.253,-8.833],[-0.511,-6.675],[-0.634,-5.495],[0.007,-0.745],[5.372,-0.213],[4.069,-2.235],[3.196,1.08],[6.364,0.201],[4.35,1.303],[7.579,2.332],[2.716,0.138],[0.552,-0.678],[1.593,-2.089],[-0.803,-0.927],[-2.42,-2.8],[1.122,-0.001],[0.434,-2.391],[-0.187,-2.275],[-2.796,-1.204],[-1.498,-0.401],[-2.337,-2.464],[-3.338,-5.85],[-2.328,-2.227],[0.596,-4.643],[0,-3.164],[-2.035,1.044],[2.62,-0.49],[1.711,-0.93],[-2.112,-0.295],[0,-0.164],[2.191,-0.768],[-3.299,-1.584],[2.063,-0.378],[-2.452,-0.381],[1.272,-0.839],[-0.101,-0.225],[0,0],[1.849,-1.491],[-0.095,-0.216],[-2.259,0.29],[2.185,-0.663],[-0.016,-0.427],[-0.465,-0.507],[-0.007,-0.188],[-1.842,-1.27],[1.957,-1.874],[-1.416,-0.14],[1.345,-1.319],[0,0],[0.451,-1.478],[-1.657,-0.173],[0.918,-2.697],[-0.855,0.372],[-2.269,-1.226],[0.452,-2.591],[-1.729,0.705],[0.351,-1.78],[-0.624,0.09],[0.208,-2.745],[0.345,-3.871],[-3.65,-8.803],[0.269,-8.526],[-2.308,-6.325],[-0.133,-9.808],[-0.668,-5.707],[-0.568,-8.34],[-0.147,-8.98],[-4.1,3.137],[-0.282,15.72],[-0.026,-0.429],[-0.11,-6.786],[0.014,-7.738],[-5.291,4.75],[-2.788,7.963],[1.944,5.163],[1.513,4.102],[-0.156,4.624],[-4.553,0.283],[-1.921,-1.282],[-0.01,-0.297],[-0.286,-9.243],[0.072,-0.816],[-0.152,-2.653],[-0.392,-5.435],[-7.555,9.347],[-1.343,2.02],[-1.374,11.733],[-3.914,4.965],[-1.234,15.976],[4.643,9.561],[1.809,8.643],[8.987,4.075],[4.221,1.519],[8.272,5.378],[2.535,1.743],[-1.504,0.889],[1.773,3.072],[2.112,2.394],[0.91,1.063],[-1.598,0.998],[-2.063,1.887],[-1.616,-0.333],[-9.564,-1.731],[-3.547,-0.013],[-2.984,-3.651],[-4.201,-12.619],[-2.661,-9.621],[3.206,-7.32],[1.355,-3.394],[-1.481,2.282],[2.342,12.535],[0.933,6.817],[-0.133,1.703],[-4.362,1.456],[-4.858,1.326],[-0.046,0.012],[-0.374,-0.448],[-2.44,-2.822],[0.16,-4.418],[-3.943,-12.893],[-1.437,-7.033],[4.072,-4.421],[0.897,-4.146],[-0.166,-0.177],[-1.677,1.501],[1.137,9.682],[1.868,7.79],[-0.807,7.725],[-0.007,8.59],[-1.77,0.732],[-10.877,4.554],[-7.711,3.433],[-1.777,1.523],[-0.473,1.184]],"o":[[-2.809,0.523],[-4.207,1.342],[-9.089,2.982],[-5.547,1.672],[-0.827,0.192],[9.476,-5.038],[-0.014,-0.439],[-1.881,-2.416],[-8.41,1.519],[-1.793,0.832],[-2.069,-2.607],[-0.473,-0.593],[-2.301,-3.516],[0.429,-0.793],[5.559,-7.149],[7.017,-7.878],[4.01,-1.595],[1.998,-0.974],[-0.161,-0.331],[-3.221,0.223],[-13.271,2.928],[-5.831,3.831],[-1.009,1.204],[-2.574,2.896],[-3.503,3.589],[-6.185,0.101],[1.568,-1.627],[5.713,-4.64],[2.721,-3.558],[2.854,-2.973],[5.911,-3.319],[4.523,-0.31],[1.748,-0.285],[-0.809,-2.955],[-4.449,-0.107],[-5.564,0.667],[-1.861,0.416],[-9.444,3.205],[-3.157,4.104],[-4.905,5.175],[-1.686,-5.979],[1.869,-0.797],[2.475,-1.061],[0.725,-1.702],[-1.537,-0.102],[-7.595,1.913],[-4.886,5.003],[-5.515,-0.528],[-4.183,-0.791],[-0.371,-0.696],[3.52,-5.989],[1.984,-1.283],[1.684,-2.1],[-3.687,-0.491],[-3.862,3.126],[-2.684,2.696],[-3.661,-4.967],[0.929,-14.748],[1.165,-0.816],[-0.246,-0.292],[-2.761,0.778],[-10.647,5.186],[-1.678,5.141],[-0.181,0.689],[-0.869,-4.86],[-0.35,-2.064],[-0.694,-3.751],[2.902,-1.857],[2.263,-1.496],[1.191,-1.043],[-9.185,0.542],[0.507,-4.938],[3.902,-3.49],[0.244,-0.614],[0,0],[-13.049,2.552],[-4.55,5.54],[0.423,5.507],[0.086,0.742],[-0.048,4.831],[-4.707,0.187],[-2.961,1.625],[-5.98,-2.022],[-4.52,-0.143],[-7.599,-2.277],[-2.538,-0.781],[-0.911,-0.046],[-1.662,2.04],[-0.792,1.038],[2.021,2.336],[-1.618,-1.501],[-2.701,0.001],[-0.409,2.252],[0.234,2.827],[1.416,0.609],[3.523,0.946],[4.77,5.03],[1.502,2.633],[3.523,3.373],[-0.367,2.848],[1.902,-0.976],[-0.364,2.239],[-1.165,0.218],[2.919,0.408],[-0.001,0.163],[-2.175,0.762],[0.43,3.547],[-2.035,0.373],[0.793,3.161],[-1.457,0.96],[0.102,0.224],[0,0],[-2.455,1.981],[0.096,0.217],[2.113,-0.27],[-0.879,1.957],[-0.557,0.168],[0.021,0.568],[0.239,0.262],[0.103,2.691],[1.686,1.162],[1.498,0.148],[-1.062,1.043],[0,0],[-0.47,1.539],[1.277,0.134],[-0.865,2.543],[1.541,-0.67],[2.139,1.156],[-0.299,1.717],[1.688,-0.689],[-0.346,1.752],[0.765,-0.134],[3.09,-0.444],[-0.294,3.874],[-0.836,9.374],[3.233,7.8],[-0.211,6.687],[3.351,9.176],[0.077,5.692],[0.974,8.31],[0.242,3.536],[4.252,-2.941],[-0.231,-15.718],[0.581,0.371],[0.42,6.782],[0.124,7.738],[5.6,-4.393],[0.727,-8.194],[1.757,-5.018],[-1.542,-4.094],[-1.673,-4.539],[2.611,-1.209],[4.553,-0.283],[-0.01,-0.13],[0.307,9.242],[0.026,0.816],[-0.232,2.673],[0.313,5.438],[8.543,-8.436],[0.441,-2.208],[6.82,-10.25],[0.731,-6.23],[10.344,-13.118],[0.812,-10.509],[-3.898,-8.029],[-1.869,-8.931],[-4.056,-1.839],[-9.382,-3.379],[-2.692,-1.75],[0.827,-0.488],[-4.13,-2.537],[-1.537,-2.662],[-0.761,-0.863],[1.93,-0.946],[2.435,-1.522],[1.266,-1.157],[9.51,1.962],[3.464,0.628],[5.127,0.019],[8.577,10.491],[3.161,9.496],[2.096,7.577],[-1.364,3.112],[3.343,0.107],[6.927,-10.673],[-1.265,-6.769],[-0.231,-1.693],[0.326,-4.189],[4.757,-1.587],[0.047,-0.013],[0.547,-0.15],[2.387,2.86],[3.07,3.551],[-0.492,13.622],[2.106,6.886],[1.11,5.433],[-2.979,3.234],[0.167,0.178],[1.951,-1.25],[7.64,-6.835],[-0.929,-7.907],[-1.801,-7.509],[0.891,-8.527],[0.002,-1.84],[10.9,-4.509],[7.8,-3.266],[2.197,-0.979],[0.903,-0.775],[-1.233,-0.357]],"v":[[165.812,-92.945],[157.558,-90.624],[144.991,-86.469],[117.695,-77.602],[100.723,-73.482],[98.055,-73.562],[128.653,-85.389],[128.527,-86.801],[111.03,-86.486],[87.025,-78.773],[83.247,-79.628],[76.603,-87.168],[72.343,-91.904],[72.642,-96.96],[76.261,-101.413],[93.583,-122.444],[120.256,-139.164],[132.161,-144.191],[137.547,-148.129],[137.062,-149.12],[127.415,-148.383],[90.346,-133.788],[75.791,-119.777],[72.7,-116.208],[64.734,-107.697],[51.349,-102.094],[31.959,-102.612],[35.65,-106.404],[50.235,-122.214],[59.038,-132.486],[68.478,-139.814],[88.59,-145.473],[102.08,-147.279],[107.151,-148.857],[101.734,-153.454],[88.374,-152.944],[71.815,-150.079],[66.437,-148.564],[43.523,-131.934],[33.326,-120.081],[15.066,-107.607],[23.117,-123.339],[28.773,-125.637],[34.205,-130.625],[32.25,-133.634],[27.592,-133.225],[8.206,-122.44],[4.683,-104.544],[-10.716,-106.124],[-18.837,-113.509],[-18.361,-116.25],[-4.261,-131.621],[1.148,-136.098],[-0.785,-139.628],[-10.506,-137.051],[-21.417,-127.003],[-29.077,-118.305],[-33.64,-133.81],[-13.576,-170.539],[-11.329,-174.435],[-12.067,-175.31],[-20.31,-172.911],[-41.307,-149.263],[-45.41,-133.59],[-46.693,-131.624],[-49.284,-146.207],[-50.105,-152.431],[-46.173,-161.465],[-37.374,-166.919],[-30.873,-171.746],[-28.245,-175.781],[-51.76,-166.086],[-45.154,-178.048],[-36.447,-190.145],[-35.922,-192.055],[-37.911,-192.055],[-65.8,-171.758],[-69.436,-152.466],[-67.552,-135.982],[-67.428,-133.745],[-73.745,-127.839],[-87.005,-124.544],[-96.311,-123.72],[-114.805,-126.474],[-128.256,-129.155],[-150.828,-136.592],[-158.915,-137.62],[-161.668,-136.389],[-166.236,-129.991],[-166.197,-127.19],[-157.736,-117.716],[-164.476,-120.216],[-168.949,-117.439],[-169.304,-110.565],[-164.315,-104.589],[-159.949,-102.996],[-152.024,-97.32],[-140.168,-80.979],[-133.487,-74.094],[-129.191,-62.194],[-129.259,-53.264],[-123.524,-56.206],[-127.199,-51.911],[-131.086,-49.87],[-123.944,-48.871],[-123.945,-48.38],[-130.485,-46.087],[-124.141,-39.177],[-130.274,-38.055],[-124.104,-35.878],[-128.104,-33.24],[-127.8,-32.566],[-118.053,-32.566],[-124.206,-27.603],[-123.92,-26.953],[-117.435,-27.784],[-121.902,-23.887],[-123.191,-22.609],[-122.071,-20.951],[-121.082,-20.4],[-116.548,-15.762],[-115.783,-11.458],[-111.597,-11.044],[-114.891,-7.814],[-105.775,-7.814],[-107.081,-3.538],[-102.968,-3.107],[-105.553,4.492],[-101.932,2.919],[-95.611,6.333],[-96.717,12.673],[-91.961,10.732],[-92.971,15.86],[-90.965,15.513],[-87.034,18.588],[-88.084,30.199],[-83.911,57.492],[-78.367,81.642],[-73.932,101.076],[-67.885,129.3],[-65.342,146.357],[-62.974,171.339],[-62.412,192.055],[-49.882,182.937],[-50.403,128.419],[-48.016,137.008],[-46.872,157.357],[-46.83,180.571],[-30.49,166.849],[-25.702,142.557],[-25.451,127.122],[-30.149,114.863],[-32.948,101.086],[-25.885,97.818],[-20.535,101.386],[-20.502,101.849],[-19.599,129.576],[-19.773,132.027],[-20.422,140.042],[-19.341,156.35],[4.828,129.656],[7.464,123.312],[19.315,90.115],[26.534,73.787],[43.313,29.909],[37.081,-0.18],[28.207,-25.029],[11.622,-44.577],[-0.88,-49.488],[-27.93,-61.586],[-35.754,-66.951],[-32.149,-69.08],[-40.619,-76.775],[-46.85,-84.001],[-49.258,-86.809],[-43.916,-89.467],[-36.924,-94.408],[-33.072,-95.427],[-4.489,-89.747],[6.137,-88.965],[18.355,-83.552],[38.993,-49.544],[47.71,-20.849],[45.919,1.581],[42.031,11.27],[49.098,7.986],[57.379,-26.493],[54.361,-46.917],[54.225,-52.055],[61.269,-60.753],[75.753,-64.99],[75.892,-65.029],[77.868,-64.328],[84.849,-55.626],[89.699,-43.646],[97.45,-4.361],[102.49,16.609],[98.371,31.536],[92.508,42.654],[93.007,43.186],[98.82,39.396],[109.363,14.522],[104.66,-9.009],[103.023,-31.654],[103.555,-57.41],[105.959,-61.087],[138.644,-74.643],[161.949,-84.624],[167.999,-88.487],[169.492,-91.967]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.6,0.889999988032,0.913999968884,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[564.179,391.343],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":4,"cix":2,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-13.302,34.665],[36.141,-10.999],[52.353,-21.384],[22.858,-4.424],[22.288,-16.278]],"o":[[23.806,-27.649],[-21.271,4.435],[-67.838,20.647],[-52.354,21.383],[-22.86,4.424],[0,0]],"v":[[128.568,44.789],[184.821,-49.292],[97.76,-28.927],[-3.997,-2.38],[-84.37,14.578],[-184.821,49.292]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.019999999626,0.573000021542,0.889999988032,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[434.026,483.885],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":2,"cix":2,"ix":5,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-34.75,-45.806],[0,0],[-9.764,21.212],[20.395,-1.477],[20.098,-7.084],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.513,0.294]],"o":[[0,0],[13.962,-18.404],[-9.715,7.452],[-30.849,2.235],[-20.098,7.083],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.528,-0.308],[5.916,60.376]],"v":[[-241.273,80.813],[268.897,80.813],[304.636,21.238],[256.109,42.028],[47.342,37.599],[1.758,32.853],[-39.018,26.849],[-61.156,27.676],[-73.529,19.803],[-117.869,-25.616],[-178.447,-33.544],[-230.365,-58.504],[-303.098,-79.934],[-304.636,-80.813]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.113999998803,0.451000019148,0.834999952129,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[306.188,432.398],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 6","np":2,"cix":2,"ix":6,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-7.863,54.863],[0,0],[0,0],[0,0],[30.012,-2.174],[16.519,1.72],[19.474,-2.679],[20.097,-7.083],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.627,0.357],[0,-9.303],[-40.73,-53.69],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[-30.848,2.235],[-32.591,-3.391],[-19.473,2.68],[-20.099,7.083],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.649,-0.378],[-0.778,9.101],[0,72.589],[0,0],[32.004,-42.188]],"v":[[318.362,-35.486],[316.656,-35.543],[311.494,-40.705],[299.696,-42.179],[243.935,-30.086],[161.217,-35.102],[94.271,-53.708],[35.169,-19.768],[-10.415,-24.514],[-51.191,-30.518],[-73.33,-29.691],[-85.702,-37.564],[-130.044,-75.609],[-171.361,-84.795],[-183.233,-92.831],[-190.622,-83.537],[-242.539,-86.376],[-284.374,-111.931],[-315.273,-107.806],[-317.164,-108.886],[-318.363,-81.28],[-253.448,111.931],[256.723,111.931]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.071000005685,0.325,0.681999954523,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[318.362,401.28],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 7","np":2,"cix":2,"ix":7,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-11.798,0],[0,0],[0,0],[0,0],[30.97,-47.191],[-3.81,-9.036],[-24.074,-6.083],[-7.135,15.697]],"o":[[11.797,0],[0,0],[0,0],[0,0],[-6.612,10.077],[21.553,11.19],[-13.714,-31.332],[7.374,-16.221]],"v":[[14.258,-43.63],[90.503,-58.165],[32.712,-58.664],[-20.4,-48.792],[-83.813,3.562],[-86.692,32.578],[-18.083,58.664],[-40.309,-18.56]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0.011999999776,0.169000004787,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[259.448,571.588],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 8","np":2,"cix":2,"ix":8,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,72.589],[8.67,29.043],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[1.499,-0.972],[0,0],[0,0],[0,0],[0,0],[6.637,-2.95],[0,0],[0,0],[5.162,0],[0,0],[1.475,3.687],[0,0],[0.738,0],[1.475,0],[0,0],[2.951,-2.212],[2.95,0],[7.374,8.111],[0,0],[2.212,5.899],[0,0],[1.475,5.161],[5.9,0.737],[0,0],[0,0],[0,0],[0,0],[0,0],[1.475,-5.899],[0,0],[0,0],[31.707,-11.061],[12.893,3.41],[0,-33.216],[-40.73,-53.69],[0,0]],"o":[[0,-31.862],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-1.5,0.971],[0,0],[0,0],[0,0],[0,0],[-6.637,2.949],[0,0],[0,0],[-5.161,0],[0,0],[-1.475,-3.686],[0,0],[-0.737,0],[-1.475,0],[0,0],[-2.949,2.213],[-2.949,0],[-7.374,-8.111],[0,0],[-2.212,-5.899],[0,0],[-1.475,-5.162],[-5.899,-0.738],[0,0],[0,0],[0,0],[0,0],[0,0],[-1.475,5.899],[0,0],[0,0],[-24.619,8.588],[-9.393,30.123],[0,72.589],[0,0],[40.73,-53.69]],"v":[[320,11.779],[306.651,-79.891],[306.17,-80.373],[294.372,-81.847],[283.642,-84.18],[279.624,-89.221],[273.519,-89.818],[270.038,-93.646],[265.614,-109.868],[251.604,-106.918],[244.968,-120.929],[236.856,-130.514],[230.958,-141.576],[225.059,-146.737],[213.998,-144.524],[206.624,-138.625],[199.251,-142.312],[189.665,-129.777],[183.028,-129.039],[170.493,-115.767],[165.356,-117.475],[162.189,-107.857],[155.008,-101.019],[147.635,-98.807],[137.312,-102.494],[121.089,-106.918],[114.452,-99.545],[90.856,-106.181],[82.745,-121.667],[73.897,-117.242],[31.13,-152.636],[11.221,-141.576],[0.897,-131.99],[-3.527,-137.888],[-12.375,-123.878],[-35.972,-125.353],[-43.345,-108.393],[-58.83,-129.777],[-83.163,-141.576],[-91.274,-159.272],[-96.436,-174.02],[-100.123,-195.404],[-111.921,-204.251],[-130.355,-200.565],[-151.001,-190.242],[-170.911,-172.544],[-173.123,-162.96],[-185.658,-157.797],[-195.244,-135.676],[-218.103,-118.716],[-222.526,-106.181],[-254.971,-92.908],[-305.544,-83.592],[-320,11.779],[-255.085,204.99],[255.086,204.99]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0.011999999776,0.169000004787,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[320,308.221],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 9","np":2,"cix":2,"ix":9,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[148.179,0],[36.41,-136.71],[0,0]],"o":[[-148.177,0],[0,0],[-36.41,-136.71]],"v":[[-0.001,-118.717],[-309.223,118.717],[309.223,118.717]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":1,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"g":{"p":5,"k":{"a":0,"k":[0.243,0.008,0.031,0.255,0.4,0.014,0.1,0.369,0.558,0.02,0.169,0.482,0.864,0.135,0.42,0.643,1,0.251,0.671,0.804],"ix":9}},"s":{"a":0,"k":[-51,-122],"ix":5},"e":{"a":0,"k":[-2,107],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[320,118.717],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 10","np":2,"cix":2,"ix":10,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-104.141,0],[-58.436,77.029]],"o":[[58.435,77.029],[104.143,0],[0,0]],"v":[[-255.085,-63.394],[-0.001,63.394],[255.086,-63.394]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":1,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"g":{"p":5,"k":{"a":0,"k":[0,0.063,0.361,0.82,0.265,0.049,0.541,0.88,0.53,0.035,0.722,0.941,0.765,0.329,0.824,0.9,1,0.624,0.925,0.859],"ix":9}},"s":{"a":0,"k":[5,-43],"ix":5},"e":{"a":0,"k":[20,64],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[320,576.605],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 11","np":2,"cix":2,"ix":11,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":30,"st":0,"bm":0}],"markers":[]}
      this.params.animationData = animJSON;
    }
    
 
}
export default TetonAnim