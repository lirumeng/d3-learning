var data = [{
    x: 0,
    y: 1.89
  },
  {
    x: 1,
    y: 2.77
  },
  {
    x: 2,
    y: 0.86
  },
  {
    x: 3,
    y: 3.45
  },
  {
    x: 4,
    y: 4.14
  },
  {
    x: 5,
    y: 3.59
  },
  {
    x: 6,
    y: 2.33
  },
  {
    x: 7,
    y: 3.79
  },
  {
    x: 8,
    y: 2.61
  },
  {
    x: 9,
    y: 2.15
  }
];

var width = 240,
  height = 120;

var s = d3.select('#s');

s.attr({
  width: 300,
  height: 180
}).style({
  border: '1px dotted #aaa'
});

var scaleX = d3.scale.linear()
  .range([0, width])
  .domain([0, 9]);

var scaleY = d3.scale.linear()
  .range([height, 0])
  .domain([0, 5]);

var line = d3.svg.line()
  .x(function(d) {
    return scaleX(d.x);
  })
  .y(function(d) {
    return scaleY(d.y);
  });

var axisX = d3.svg.axis()
  .scale(scaleX)
  .orient('bottom')
  .ticks(10)
  .tickFormat(function(d){ return d+ 'n';})
  // .tickPadding(-20);
  // .tickFormat(d3.format(",%"));
  // .tickFormat("")
  // .tickSize(-height,0)

var axisY = d3.svg.axis()
  .scale(scaleY)
  .orient('left')
  .ticks(5)
  .tickFormat(function(d){ return d+ '%';})
  // .tickPadding(15);
  // .tickFormat("")

s.append('path')
  .attr({
    d: line(data),
    stroke: '#09c',
    fill: 'none',
    transform: 'translate(35, 20)'
  });

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
