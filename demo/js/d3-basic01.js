var data = [38, 69, 72, 42, 58,87,200];
console.log(d3.min(data))
console.log(d3.max(data))
console.log(d3.sum(data))
console.log(d3.extent(data))
console.log(d3.mean(data))
console.log(d3.shuffle(data))  //改变原数组

d3.select('.box')
.selectAll('div')
.data(data)
.enter()
.append('div')
.text(function(d){
  console.log(d);
  return d;
})
.style({
  color: function(d){
    return d<60?'red':'';
  },
  width: function(d){
    return d+'px';
  },
  margin: '2px 0',
  background: 'pink'
});

d3.selectAll('.box-p').text('ok');
console.log(d3.selectAll('.box-p'));

d3.select('body')
.append('svg')
.attr({
  width: 200,
  height: 300
});

d3.select('svg')
.append('circle')
.attr({
  cx:50,
  cy: 50,
  r: 30,
  fill: '#f90',
  stroke: '#c00',
  'stroke-width': 5
});
