var svg = d3.select("svg"),
  width = +svg.attr("width"),
  height = +svg.attr("height");

var data = [{
    cx: 210,
    cy: 210,
    r: 50,
    fill: '#f00'
  }, {
    cx: 75,
    cy: 75,
    r: 40,
    fill: '#0c0'
  }, {
    cx: 200,
    cy: 30,
    r: 30,
    fill: '#00f'
  }, {
    'cx': 80,
    'cy': 190,
    'r': 80,
    'fill': '#0099cc'
  },
  {
    'cx': 100,
    'cy': 100,
    'r': 30,
    'fill': '#ff9900'
  }
];

var drag = d3.behavior.drag()
  .on('dragstart', function(d) {
    d3.select(this).attr({
      fill: 'black'
    });
  })
  .on('drag', function(d) {
    d3.select(this).attr({
      cx: d.x = d3.event.x,
      cy: d.y = d3.event.y
    });
  })
  .on('dragend', function(d) {
    d3.select(this)
      .attr('fill', d.fill);
  });

svg.selectAll('circle')
  .data(data)
  .enter()
  .append('circle')
  .attr({
    cx: function(d) {
      return d.cx;
    },
    cy: function(d) {
      return d.cy;
    },
    r: function(d) {
      return d.r;
    },
    fill: function(d) {
      return d.fill;
    }
  })
  .call(drag);
