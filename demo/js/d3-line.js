var data = [
  {x:10,y:10},
  {x: 50,y:100},
  {x: 60, y:50},
  {x:100,y:30}
];

var svg = d3.select('#s')
.attr({
  width: 800,
  height: 400
}).style({
  border:'1px dotted #aaa'
});

var typeArr = [
  {type:'linear(默认)',pos: [0,0]},
  {type:'linear-closed',pos:[130,0]},
  {type:'step',pos:[260,0]},
  {type:'step-before',pos:[390,0]},
  {type:'step-after',pos:[520,0]},
  {type:'basis',pos:[650,0]},
  {type:'basis-closed',pos:[0,130]},
  {type:'bundle',pos:[130,130]},
  {type:'cardinal',pos:[260,130]},
  {type:'cardinal-open',pos:[390,130]},
  {type:'cardinal-closed',pos:[520,130]},
  {type:'monotone',pos:[650,130]},
  {type:'basis-open',pos:[0,260]}
];

$(typeArr).each(function(idx,ele){
  var line = d3.svg.line()
  .x(function(d){return d.x})
  .y(function(d){return d.y})
  .interpolate(ele.type)
  // .tension(2);

  var g = svg.append('g')
  .attr({
    transform: 'translate('+ele.pos[0]+','+ele.pos[1]+')'
  });
  g.append('path')
  .attr({
    d: line(data),
    stroke: '#000',
    'stroke-width': '4px',
    fill:'none'
  });
  g.append('text')
  .attr({
    fill:'#000',
    stroke:'none',
    transform: 'translate(10,120)'
  })
  .text(ele.type);

});
