// enter 就是多出來的，update 就是相等，exit 就是少掉的
var data = [1,2,3,4,5];

var d = d3.select('body')
.selectAll('div');

var update = d.data(data);
console.log(update);
update.append('div')
.text(function(d){return 'update:'+d;})

var enter = update.enter();
console.log(enter);
enter.append('div')
.text(function(d){return 'enter:'+d;})

var exit = update.exit();
console.log(exit);
exit.append('div')
.text(function(d){return 'exit:'+d;})
//
// var exit = update.exit();
// console.log(exit);
