const http = require('http')
const fs = require('fs')

fs.readFile('x.txt' ,'utf-8' , (err , data)=>console.log(data))

fs.appendFile('x.txt' , 'hello ojas' , function (err){
    if(!err){
        console.log('saved')
    }
})

fs.open('y.txt' , 'w' , function (err , file){console.log('saved')})

http.createServer(function (req , res){
    res.writeHead(200)
    res.write("Hello world");
    res.end()
}).listen(8000)