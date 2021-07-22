// 2 file modes - Sync - blocking mode ..... Async - non blocking mode

//using readFileSync method to read
const {readFileSync,writeFileSync} = require('fs');

//same as 
const fs = require('fs');
console.log('Starting first...');

const fstfile = readFileSync('./demo1.txt','utf8')
console.log(fstfile) //print the contents of fstfile
const secfile = readFileSync('./demo2.txt','utf8')
console.log(secfile) //print the contents of fstfile

//flag a appends
writeFileSync('./result.txt','Here is the result',{flag:'a'})
console.log('Done....');
console.log('Starting next task...');