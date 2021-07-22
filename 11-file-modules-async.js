//Asynchronous file sync - start a task, offload it and start the next one
const {readFile, writeFile} = require('fs')

//Callbacks - run the callback when we are done
console.log("Starting read");
readFile('./demo1.txt','utf8',(err, result)=>{
    if (err){
        console.log(err)
        return
    }
    const first = result
    // console.log("starting second read....")
    readFile('./demo2.txt','utf8',(err,result)=>{
        if (err){
            console.log(err)
            return
        }
        const second = result     
        writeFile('./result-async.txt','Here is the result: ${first},${second}',(err,result)=>{
            if (err){
                console.log(err)
                return
            }
            console.log("Done with writing....")
        })   
    })

})

console.log('Starting next task....!!!!!')
