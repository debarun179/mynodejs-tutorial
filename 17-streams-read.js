// readFileSync reads the whole file into a variable named first. However if the file is big, this will likely throw an error
// hence it is better to use Streams to read the file data

// lets first create a big file which we can then read using Streams
// const { writeFileSync } = require('fs');
// for (let i=0; i<100000; i++) {
//     writeFileSync('./bigfile.txt',`Got data from loop: ${i}`,{flag:'a'})
// }
const {createReadStream, createWriteStream} = require('fs');
// default chunks of 64 KB are emitted to the stream. last buffer is the remainder.
// highWaterMark = control size of the buffer
// const stream = createReadStream('./bigfile.txt',{highWaterMark:90000});
const stream = createReadStream('./bigfile.txt',{encoding:'utf8'});
//const stream = createReadStream('./bigfile.txt');
// stream.on('data',(result)=>{
//     console.log(result)
// })
const writeStream = createWriteStream('./bigfile2.txt',{encoding:'utf8'})
stream.on('open',()=>{
    console.log('Writing file...')
    stream.pipe(writeStream);
})

stream.on('end',()=>{
    console.log("End of file reached ..... Closing session !!")
})

stream.on('error',(err)=>{
    console.log(err)
})
