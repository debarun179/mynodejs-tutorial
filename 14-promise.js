const {readFile} = require('fs');

// This was the async code which tends to get nested
readFile('./demo1.txt','utf8',(err,result)=>{
    if(err) {
        return;
    } else {
        console.log(result);
    }
});

// Promise - no more nested async
const getText = (path) => {
    return new Promise((resolve,reject) => {
        readFile(path,'utf8',(err,data) => {
            if(err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

getText('./demo1.txt')
                    .then((result) => console.log(result))
                    .catch((err) => console.log(err));

getText('./demo2.txt')
                    .then((result) => console.log(result))
                    .catch((err) => console.log(err));