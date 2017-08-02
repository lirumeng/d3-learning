var data = [
  {x:1,w: Math.floor(Math.random()*200)},
  {x:2,w: Math.floor(Math.random()*200)},
  {x:3,w: Math.floor(Math.random()*200)},
  {x:4,w: Math.floor(Math.random()*200)},
  {x:5,w: Math.floor(Math.random()*200)}
];
var s = d3.select('#s')
.attr({
  width: 300,
  height: 300
});

s.selectAll('rect')
.data(data)
.enter()
.append('rect')
.attr({
  fill: '#09c',
  width: function(d){return d.w},
  height: 30,
  x: 0,
  y: function(d){return (d.x-1) * 35}
});

s.selectAll('text')
.data(data)
.enter()
.append('text')
.text(function(d){return d.w})
.attr({
  fill:'#000',
  x: function(d){return d.w + 3},
  y: function(d){return d.x*35-13}
})
