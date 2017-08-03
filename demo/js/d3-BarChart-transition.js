var data = [
  {x:1,w: Math.floor(Math.random()*200)},
  {x:2,w: Math.floor(Math.random()*200)},
  {x:3,w: Math.floor(Math.random()*200)},
  {x:4,w: Math.floor(Math.random()*200)},
  {x:5,w: Math.floor(Math.random()*200)}
];

var zeroQueue = [0,0,0,0,0];

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
  width: 0,
  height: 30,
  x: 0,
  y: function(d){return (d.x-1) * 35}
})
.transition()
.duration(1500)
.attr({
  width: function(d){return d.w;}
});

s.selectAll('text')
.data(data)
.enter()
.append('text')
.text(function(d){return 0;})
.attr({
  fill:'#000',
  x: 3,
  y: function(d){return d.x*35-13}
})
.transition()
.duration(1500)
.attr({
  x: function(d){return d.w+3}
})
.tween('number', function(d){
  var i = d3.interpolateRound(zeroQueue[d.x-1], d.w);
  zeroQueue[d.x-1] = d.w;
  return function(t){
    this.textContent = i(t);
  }
});


var btn = d3.select('#btn')
.on('click', function(){
  for(var i=0;i<5;i++){
    data[i].w = Math.floor(Math.random()*200);
  }
  _transition(data);
});

var btn = d3.select('#zero')
.on('click', function(){
  for(var i=0;i<5;i++){
    data[i].w = 0;
  }
  _transition(data);
});

function _transition(){
  s.selectAll('rect')
  .data(data)
  .transition()
  .duration(1500)
  .attr({
    width: function(d){return d.w}
  });

  s.selectAll('text')
  .data(data)
  .transition()
  .duration(1500)
  .attr({
    x: function(d){return d.w + 3;}
  })
  .tween('number', function(d){
    var i = d3.interpolateRound(zeroQueue[d.x-1], d.w);
    zeroQueue[d.x-1] = d.w;
    return function(t){
      this.textContent = i(t);
    }
  })
}
