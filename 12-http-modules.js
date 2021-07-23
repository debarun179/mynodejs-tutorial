const http = require('http')

const server = http.createServer((req,res)=>{
    console.log(req.url)
    if (req.url==='/')
        res.end('<font color="red">welcome to our home page</font>')
    else if (req.url==='/about')
        res.end('There\'s a lot more to us than in this About section')
    else if (req.url==='/contact')
        res.end('contact Debarun !!')
    else res.end(`<h1>We cant seem to find the page you are looking for. Click <a href="/"> Here </a> to go back.</h1>`)
})
server.listen(5000);