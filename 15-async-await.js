// Use of async-await Pattern - Final Pattern
const { readFile, writeFile } = require('fs').promises;
const util = require('util');

const start = async() => {
    try{
        const first = await readFile('./demo1.txt','utf8')
        const second = await readFile('./demo2.txt','utf8')
        await writeFile('./myconcatfile_final.txt',`Async Await File: ${first} ${second}`,
        {flag: 'a'}
        )
        console.log(first,second)
    } catch (error) {
        console.log(error)
    }
}


// Use of async-await Pattern - Initial Pattern
// const { readFile, writeFile } = require('fs');
// const util = require('util');
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// const start = async() => {
//     try{
//         const first = await readFilePromise('./demo1.txt','utf8')
//         const second = await readFilePromise('./demo2.txt','utf8')
//         await writeFilePromise('./myconcatfile.txt',`Async Await File: ${first} ${second}`,
//         {flag: 'a'}
//         )
//         console.log(first,second)
//     } catch (error) {
//         console.log(error)
//     }
// }

start()