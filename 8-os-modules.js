// OS Related Build Ins
const os = require('os');
//info on current OS network interfaces
//console.log(os.networkInterfaces())
// info on user
// console.log(os.userInfo());
console.log(os.freemem())

//method returns the system uptime in seconds
console.log(`System Uptime: ${os.uptime/3600} hours`)

const myOS = {
    name: os.type(),
    userInfo: os.userInfo().username,
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(myOS)

