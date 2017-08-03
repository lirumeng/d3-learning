d3.csv('../data/svg-d3-13-csv.csv', function(d){
  console.log(d);
  return {
    '性别': d.sex,
    '姓名': d.name,
    '分数': +d.score
  };
}, function(error, rows){
  if(error){
    console.log('oh no');
  }else{
    console.log(rows);
  }
});

d3.text('../data/svg-d3-13-csv2.csv', function(data){
  console.log(data);
  var parsedCSV = d3.csv.parseRows(data);
  console.log(parsedCSV);
  var a = parsedCSV.map(function(d){
    return {
      name: d[1],
      score: d[3],
      sex: d[5]
    }
  });
  console.log(a);
});


d3.csv('../data/svg-d3-13-csv2.csv', function(data){
  console.log('-------------以上可以用下边的替换↓↓↓-------------');
  console.log(data);
  var f = d3.csv.format(data);
  console.log(f);
  var parsedCSV = d3.csv.parseRows(f);
  console.log(parsedCSV);
  var a = parsedCSV.map(function(d){
    return {
      name: d[1],
      score: d[3],
      sex: d[5]
    }
  });
  console.log(a);
});

console.log(d3.csv.format([
  {name:"Bill",score:'80',sex:'male'},
  {name:"Jean",score:'78',sex:'female'},
  {name:"Owen",score:'92',sex:'male'}
]));
// name,score,sex
// Bill,80,male
// Jean,78,female
// Owen,92,male

console.log(d3.csv.formatRows([
  ["Bill",'80','male'],
  ["Jean",'78','female'],
  ["Owen",'92','male']
]));
// Bill,80,male
// Jean,78,female
// Owen,92,male
