var show = d3.select('#show');

show.transition()
.duration(1500)
.tween('number', function(){
  var i = d3.interpolateRound(0,100);
  return function(t){
    this.textContent = i(t);
  }
});

var n = d3.select('#number');
var s = d3.select('#string');
var c = d3.select('#color');
var a = d3.select('#array');
var o = d3.select('#object');

var ni = d3.interpolate(0, 200);
var si = d3.interpolate('Apple1','Apple5');
var ci = d3.interpolateRgb('#f00', '#39e');
var ai = d3.interpolateArray([0,1], [1,50,100]);
var oi = d3.interpolateObject({x:0,y:1},{x:1,y:50,z:100});

n.text(ni(0.3));
s.text(si(0.3));
c.text(ci(0.6));
c.style({
  'background':ci(0.6)
});
a.text(ai(0.5));
console.log(oi(0.5));
