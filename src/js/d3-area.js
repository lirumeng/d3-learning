// area.x
// area.x0
// area.x1
// area.y
// area.y0
// area.y1
// area.interpolate
// area.tension
// area.defined
var data = [
  {x:0, y:13},
  {x:20, y:20},
  {x:40, y:56},
  {x:60, y:34},
  {x:80, y:41},
  {x:100, y:35},
  {x:120, y:100},
  {x:140, y:37},
  {x:160, y:26},
  {x:180, y:21}
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
//
// var line = d3.svg.line()
//   .x(function(d) {
//     return scaleX(d.x);
//   })
//   .y(function(d) {
//     return scaleY(d.y);
//   });

var axisX = d3.svg.axis()
  .scale(scaleX)
  .orient('bottom')
  .ticks(10)
  // .tickFormat(function(d){ return d+ 'n';})

var axisY = d3.svg.axis()
  .scale(scaleY)
  .orient('left')
  .ticks(5)
  // .tickFormat(function(d){ return d+ '%';})
//


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


//
var line = d3.svg.line()
  .x(function(d) {
    return scaleX(d.x);
  })
  .y(function(d) {
    return scaleY(d.y);
  });
//
s.append('path')
.attr({
  d: line(data),
  stroke: 'rgb(200,0,0)',
  fill: 'none',
  transform: 'translate(35, 20)'
});

// 对照组
var area1 = d3.svg.area()
.x(function(d){ return scaleX(d.x) })
.y0(height)
.y1(function(d){ return scaleY(d.y) });
//
// // 实验组
// var area2 = d3.svg.area()
// .x(function(d){ return d.x })
// .y0(0)
// .y1(function(d){ return d.y })
// .interpolate('bundle');
//
// // 实验组2
// var area3 = d3.svg.area()
// .x(function(d){ return d.x })
// .y0(0)
// .y1(function(d){ return d.y })
// .defined(function(d){ return d.x%3!=0;})

s.append('path')
.attr({
  d: area1(data),
  stroke: 'none',
  fill: 'rgba(200,0,0,.2)',
  transform: 'translate(35,20)'
})
// s.append('path')
// .attr({
//   d: area2(data),
//   stroke: '#c00',
//   fill: 'rgba(255,0,0,.3)',
//   transform: 'translate(2,2)'
// })
// s.append('path')
// .attr({
//   d: area3(data),
//   stroke: '#c00',
//   fill: 'rgba(255,255,0,.3)',
//   transform: 'translate(2,2)'
// })
