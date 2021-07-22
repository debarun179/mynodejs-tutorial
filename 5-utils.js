const sayHi = (name) => {
    console.log(`Hi ${name}`)
}
//module.exports.sayHi = sayHi

const sayHello = (name) => {
    console.log(`Well now we say hello ${name}`)
}

//module.exports.sayHello = sayHello -- this is another way of exporting
module.exports = {sayHi,sayHello}
//console.log(module)