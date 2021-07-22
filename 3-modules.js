const names = require('./4-names');
console.log(names)
const funcdata = require('./5-utils');

require('./7-mind-grenade')

console.log(funcdata)
funcdata.sayHi(names.john)
funcdata.sayHello(names.peter)

funcdata.sayHi('Debarun')
const myname = 'Troyee'
funcdata.sayHello(myname)