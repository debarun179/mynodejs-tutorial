// Path related Built Ins
const path = require('path')
console.log(path.sep);

// normalize a file path using the string components of the path. Note that the \\ is normalized in the output
const filePath = path.join('temp','parquet')
console.log(filePath);

const basePath = path.basename(filePath) 
console.log(basePath);

//Get the absolute path to a resource in different environments
const absPath = path.resolve(__dirname)
console.log(absPath);