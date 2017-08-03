// 定义色彩  -----  基础篇
console.log('-------------定义色彩  -----  基础篇-----------------');
var d = d3.selectAll('div'),
r = d3.select('#red'),
g = d3.select('#green'),
y = d3.select('#yellow'),
b = d3.select('#blue')
red1 = d3.select('#r1'),
red2 = d3.select('#r2'),
red3 = d3.select('#r3'),
red4 = d3.select('#r4'),
red5 = d3.select('#r5');
var d1 = d3.select('#div1'),
d2 = d3.select('#div2'),
di3 = d3.select('#div3'),
d4 = d3.select('#div4'),
d5 = d3.select('#div5'),
d6 = d3.select('#div6'),
d7 = d3.select('#div7'),
d8 = d3.select('#div8'),
d9 = d3.select('#div9'),
d10 = d3.select('#div10');

d.style({
  width: '50px',
  height: '50px',
  'line-height': '50px',
  'text-align': 'center',
  color: '#fff',
  display:'inline-block',
  margin: '3px'
});

var red = d3.rgb(255,0,0);
var green = d3.rgb(0,255,0);
var yellow = d3.rgb(255,255,0);
var blue = d3.rgb(0,0,255);

r.style('background',red);
g.style('background',green);
y.style('background',yellow);
b.style('background',blue);

console.log(green.hsl());
console.log(green.toString());

red1.style('background',red.darker(0));
red2.style('background',red.darker(1));
red3.style('background',red.darker(2));
red4.style('background',red.darker(3));
red5.style('background',red.darker(4));


// 定义色彩  -----  应用篇
console.log('-------------定义色彩  -----  应用篇-----------------');
var color = d3.scale
            .linear()
            .domain([1,10])
            .range(['#f00','#00f']);

var color = d3.scale
            .category20b();  //category10  category20  category20b  category20c

d1.style('background', color(1));
d2.style('background', color(2));
di3.style('background', color(3));
d4.style('background', color(4));
d5.style('background', color(5));
d6.style('background', color(6));
d7.style('background', color(7));
d8.style('background', color(8));
d9.style('background', color(9));
d10.style('background', color(10));
