// npm --version
// Local install for a project
// npm i <packagename>
// For global, (this is not common)
// npm i -g <packagename> 
// Install on Mac requires sudo

//package.json - manifest file that stores important information about the project/package
//3 ways to create package.json
//1. Manual - create in the root folder with properties
//2. npm init (step by step hitting Enter to skip)
//3. npm init -y (everything default)

// package.json is needed to track metadata/information about the project such as the name, author, dependencies etc

const _ = require('lodash')
const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)