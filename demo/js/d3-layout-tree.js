var svg = d3.select("svg"),
  width = +svg.attr("width"),
  height = +svg.attr("height"),
  g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var tree = d3.layout.tree()
  .size([2 * Math.PI, 500])
  .separation(function(a, b) {
    return (a.parent == b.parent ? 1 : 2) / a.depth;
  });

d3.csv("../data/flare.csv", function(data) {
  console.log(data);
  console.log(tree);
});
