var data = [
  {x:0, y:38, z:28},
  {x:20, y:27, z:15},
  {x:40, y:56, z:39},
  {x:60, y:34, z:45},
  {x:80, y:41, z:88},
  {x:100, y:35, z:74},
  {x:120, y:100, z:55},
  {x:140, y:57, z:75},
  {x:160, y:36, z:44},
  {x:180, y:41, z:30}
];

var width = 240,height=140;

var s = d3.select('#s');

s.attr({
  width: 300,
  height: 190
}).style({
  border: '1px dotted #aaa'
});


var scaleX = d3.scale.linear()
  .range([0, width])
  .domain([0, 180]);

var scaleY = d3.scale.linear()
  .range([height, 0])
  .domain([0, 100]);

var axisX = d3.svg.axis()
  .scale(scaleX)
  .orient('bottom')
  .ticks(10)

var axisY = d3.svg.axis()
  .scale(scaleY)
  .orient('left')
  .ticks(5)

s.append('g')
  .call(axisX)
  .attr({
    'fill': 'none',
    'stroke': '#000',
    'transform': 'translate(35,' + (height + 20) + ')'
  })
  .selectAll('text')
  .attr({
    fill: '#000',
    stroke: 'none'
  }).style({
    'font-size': '12px'
  });

s.append('g')
  .call(axisY)
  .attr({
    'fill': 'none',
    'stroke': '#000',
    'transform': 'translate(35,20)'
  }).selectAll('text')
  .attr({
    fill: '#000',
    stroke: 'none'
  }).style({
    'font-size': '12px'
  });

  var axisXGrid = d3.svg.axis()
  .scale(scaleX)
  .orient('bottom')
  .ticks(10)
  .tickFormat("")
  .tickSize(-height, 0);

  var axisYGrid = d3.svg.axis()
  .scale(scaleY)
  .orient('left')
  .ticks(10)
  .tickFormat("")
  .tickSize(-width, 0);

  s.append('g')
  .call(axisXGrid)
  .attr({
    fill: 'none',
    stroke: 'rgba(0,0,0,.1)',
    'transform':'translate(35,'+(height+20)+')'
  });

  s.append('g')
  .call(axisYGrid)
  .attr({
    fill: 'none',
    stroke: 'rgba(0,0,0,.1)',
    'transform':'translate(35,20)'
  });

// line
var line1 = d3.svg.line()
.x(function(d){return scaleX(d.x)})
.y(function(d){return scaleY(d.y)});

var area1 = d3.svg.area()
.x(function(d){return scaleX(d.x)})
.y0(height)
.y1(function(d){return scaleY(d.y)});

var line2 = d3.svg.line()
.x(function(d){return scaleX(d.x)})
.y(function(d){return scaleY(d.z)});

var area2 = d3.svg.area()
.x(function(d){return scaleX(d.x)})
.y0(height)
.y1(function(d){return scaleY(d.z)});

s.append('path')
.attr({
  d: line1(data),
  stroke: '#06c',
  'fill': 'none',
  transform: 'translate(35,20)'
});

s.append('path')
.attr({
  d: area1(data),
  'fill': 'rgba(0,150,255, .2)',
  stroke: 'none',
  transform: 'translate(35,20)'
});

s.append('path')
.attr({
  d: line2(data),
  stroke: '#c00',
  'fill': 'none',
  transform: 'translate(35,20)'
});

s.append('path')
.attr({
  d: area2(data),
  'fill': 'rgba(255,0,0,.1)',
  stroke: 'none',
  transform: 'translate(35,20)'
});
