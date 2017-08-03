// d3.map([object][, key])
// map.has(key)
// map.get(key)
// map.set(key, value)
// map.remove(key)
// map.keys()
// map.values()
// map.size()
// map.empty()
// map.forEach(function)

var data = [
  {name:'Tom'   , type:['a','b','c']},
  {name:'Jack'  , type:['b,c']},
  {name:'Owen'  , type:['c','d','e']},
  {name:'Mark'  , type:['a','c']},
  {name:'Marry' , type:['a','b','c','d']},
  {name:'Rock'  , type:['a','c']},
  {name:'Jason' , type:['b','c']},
  {name:'Peter' , type:['a','b','c']},
  {name:'Cherry', type:['c','d']},
  {name:'Jean'  , type:['a','c','d']}
];

console.log('----------------d3.map----------------');

var i = d3.map(data, function(d){
  return d.name;
})
var j = d3.map(data, function(d){
  return d.type;
});
console.log(i);
console.log(j);

console.log(i.has('Tom'))
console.log(i.has('lirm'))

console.log(i.get('Tom'));
console.log(i.get('Rock'));
console.log(i.get('Lirm'));

console.log(i.set('Tom','hello world?!'));
console.log(i);
console.log(data);

console.log(i.remove('Tom'));
console.log(i);
console.log(data);
console.log(i.remove('Tom'));

var k = i.keys();
console.log(k);

var v = i.values();
console.log(v);

console.log(i.size());

var m = i.forEach(function(n){console.log(n);})
