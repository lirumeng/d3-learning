var show = d3.select('#show');
var cc = document.getElementById('color');

show.transition()
.duration(2000)
.tween('number', function(){
  var i = d3.interpolateRound(0,1000);
  var c = d3.interpolateRgb('#555','#fa0');

  return function(t){
    this.textContent = i(t);
    d3.select(this).style('color',c(t));
    console.log(cc.textContent);
    cc.innerHTML = c(t);
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

console.log('-----------------d3.interpolate-----------------');
n.text(ni(0.3));
console.log('-----------------d3.interpolate-----------------');
s.text(si(0.3));
console.log('-----------------d3.interpolateRgb-----------------');
c.text(ci(0.6));
c.style({
  'background':ci(0.6)
});

console.log('-----------------d3.interpolateArray-----------------');
a.text(ai(0.5));

console.log('-----------------d3.interpolateObject-----------------');
console.log(oi(0.5));

console.log('-----------------d3.interpolateTransform-----------------');
var box = d3.select('#box');
box.transition()
.duration(2000).tween('move', function(){
  var start = d3.transform('translate(10,10)');
  var stop = d3.transform('translate(100,100)');
  var interpolate = d3.interpolateTransform(start, stop);
  return function(t){
    d3.select(this).attr('transform',interpolate(t));
  }
})
