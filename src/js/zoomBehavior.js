var svg = d3.select("svg"),
  w = +svg.attr("width"),
  h = +svg.attr("height"),
  g = svg.append("g");

var data = [{
    'cx': 150,
    'cy': 210,
    'r': 50,
    'fill': '#ff0000'
  },
  {
    'cx': 75,
    'cy': 55,
    'r': 40,
    'fill': '#00cc00'
  },
  {
    'cx': 200,
    'cy': 30,
    'r': 30,
    'fill': '#0000ff'
  },
  {
    'cx': 650,
    'cy': 190,
    'r': 70,
    'fill': '#0099cc'
  },
  {
    'cx': 300,
    'cy': 200,
    'r': 30,
    'fill': '#ff9900'
  }
];

g.append('g')
  .selectAll('line')
  .data(d3.range(0, w, 30))
  .enter()
  .append('line')
  .attr({
    'x1': function(d) {
      return d;
    },
    'y1': 0,
    'x2': function(d) {
      return d;
    },
    'y2': h,
    'stroke': '#ddd',
    'fill': 'none'
  });

g.append('g')
  .selectAll('line')
  .data(d3.range(0, h, 30))
  .enter()
  .append('line')
  .attr({
    'x1': 0,
    'y1': function(d) {
      return d;
    },
    'x2': w,
    'y2': function(d) {
      return d;
    },
    'stroke': '#ddd',
    'fill': 'none'
  });


var x, y, s;

var zoom = d3.behavior.zoom()
  .translate([0, 0])
  .scaleExtent([1, 10])
  .scale(1)
  .on('zoom', zoomed);

function zoomed() {
  // console.log(d3.event);
  x = d3.event.translate[0];
  y = d3.event.translate[1];
  s = d3.event.scale;
  g.attr('transform', 'translate(' + d3.event.translate + ') scale(' + d3.event.scale + ')');
}
svg.call(zoom);

d3.select('#reset')
  .on('click', function() {
    d3.transition().duration(250).tween('zoom', function() {
      var si = d3.interpolate(s, 1);
      var xi = d3.interpolate(x, 0);
      var yi = d3.interpolate(y, 0);

      return function(t) {
        svg.call(zoom.translate([xi(t), yi(t)]).scale(si(t)).event);
      }
    });
  });

g.append("g")
  .selectAll('circle')
  .data(data)
  .enter()
  .append('circle')
  .attr({
    'cx': function(d) {
      return d.cx;
    },
    'cy': function(d) {
      return d.cy;
    },
    'r': function(d) {
      return d.r;
    },
    'fill': function(d) {
      return d.fill;
    }
  })
  .style({
    'cursor': 'pointer'
  })
  .on('click', function() {
    var $this = $(this);
    var circle = d3.select(this);
    circle.transition().duration(250).tween('zoom', function() {
      // console.log("s:"+s)  //1
      // console.log("x:"+x)   //0
      // console.log("y:"+y)   //0
      var r = $this.attr("r") * 1;
      var cx = $this.attr("cx") * 1;
      var cy = $this.attr("cy") * 1;
      var si = d3.interpolate(s, 4);
      var xi = d3.interpolate(x, (w - r) / 2 - 4 * cx);
      // console.log(typeof xi)   //function
      // console.log(w)
      // console.log(r)
      // console.log((w-r)/2 - 4*cx)
      var yi = d3.interpolate(y, (h - r) / 2 - 4 * cy);

      return function(t) {
        svg.call(zoom.translate([xi(t), yi(t)]).scale(si(t)).event)
        // console.log(xi(t))
        // console.log(yi(t))
        // console.log(si(t))
      }
    });
  });

svg.call(zoom.event);
