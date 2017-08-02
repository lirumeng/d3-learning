var data = [
  {name:'Rock'  , score:59, type:'class2' , sex:'man'},
  {name:'Tom'   , score:98, type:'class1' , sex:'man'},
  {name:'Jack'  , score:72, type:'class2' , sex:'man'},
  {name:'Owen'  , score:93, type:'class3' , sex:'man'},
  {name:'Mark'  , score:41, type:'class4' , sex:'man'},
  {name:'Marry' , score:67, type:'class4' , sex:'woman'},
  {name:'Jason' , score:83, type:'class1' , sex:'man'},
  {name:'Peter' , score:47, type:'class3' , sex:'man'},
  {name:'Cherry', score:53, type:'class1' , sex:'woman'},
  {name:'Jean'  , score:68, type:'class4' , sex:'woman'}
];

var k = d3.nest()   //类似于linq的GroupBy
.key(function(d){ return d.type; })
.entries(data);
console.log("按type分组：↓");
console.log(k);

var k2 = d3.nest()   //类似于linq的GroupBy
.key(function(d){ return d.type; })
.key(function(d){ return d.sex; })
.entries(data);
console.log("按type分组，每组中再根据sex分组：↓");
console.log(k2);

var k3 = d3.nest()   //类似于linq的GroupBy
.key(function(d){ return d.score>=60?'及格':'不及格'; })
.entries(data);
console.log("按分数分为‘及格’和‘不及格’：↓");
console.log(k3);


console.log('-------------------------------');
console.log('----------------nest.sortKeys ↓↓---------------');
// nest.sortKeys(comparator)
var desc = d3.nest()
.key(function(d){return d.score})
.sortKeys(d3.descending)
.entries(data);
console.log("按分数降序排列：↓");
console.log(desc);

var asc = d3.nest()
.key(function(d){return d.score})
.sortKeys(d3.ascending)
.entries(data);
console.log("按分数升序排列：↓");
console.log(asc);


var desc1 = d3.nest()
.key(function(d){return d.type})
.key(function(d){return d.score})
.sortKeys(d3.descending)
.entries(data);
console.log("按type分组后，每组内分数降序排列：↓");
console.log(desc1);

var asc1 = d3.nest()
.key(function(d){return d.type})
.key(function(d){return d.score})
.sortKeys(d3.ascending)
.entries(data);
console.log("按type分组后，每组内分数升序排列：↓");
console.log(asc1);

var desc2 = d3.nest()
.key(function(d){return d.score})
.sortKeys(function(d){return d<60;})
.entries(data);
console.log("把分数<60的排在上边：↓");
console.log(desc2);

var asc2 = d3.nest()
.key(function(d){return d.score})
.sortKeys(function(d){return d>60;})
.entries(data);
console.log("把分数>60的排在下边：↓");
console.log(asc2);

// nest.sortValues(comparator)
console.log('----------------nest.sortValues ↓↓---------------');
var e = d3.nest()
.key(function(d){return d.type})
.sortValues(function(i,j){return i.score > j.score;})
.entries(data);
console.log("先按照type分组，每组中再分数升序排列：↓");
console.log(e);

var ee = d3.nest()
.key(function(d){return d.type})
.sortValues(function(i,j){return i.score < j.score;})
.entries(data);
console.log("先按照type分组，每组中再分数降序排列：↓");
console.log(ee);

// nest.rollup(comparator)
console.log('----------------nest.rollup ↓↓---------------');
var r = d3.nest()
.key(function(d){return d.type})
.sortKeys(d3.ascending)
.rollup(function(d){return d.length})
.entries(data);
console.log("先按照type分组并按升序排列，返回每组的个数：↓");
console.log(r);

var rsum = d3.nest()
.key(function(d){return d.type})
.sortKeys(d3.ascending)
.rollup(function(d){
  return {
    desc: '总分数',
    value: d3.sum(d, function(dd){
      return dd.score;
    })
  }
})
.entries(data);
console.log("先按照type分组并按升序排列，返回每组分数总和：↓");
console.log(rsum);

// nest.map(comparator)
console.log('----------------nest.map ↓↓---------------');
var en = d3.nest()
.key(function(d){return d.sex})
.key(function(d){return d.type})
.entries(data);
console.log("nest.entries返回一个队列：↓");
console.log(en);

var m = d3.nest()
.key(function(d){return d.sex})
.key(function(d){return d.type})
.map(data);
console.log("nest.map返回一个对象：↓");
console.log(m);
