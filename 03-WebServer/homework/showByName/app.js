var fs  = require("fs")
var http  = require("http")

// Escribí acá tu servidor

http
.createServer((req,res)=>{
    
    if(req.url === "/arcoiris_doge"){
        let img = fs.readFileSync('./images/arcoiris_doge.jpg');
        res.writeHead(200, {'Content-Type': 'image/jpeg' });
        res.end(img, "binary");
    }
    if(req.url === "/badboy_doge"){
        let img = fs.readFileSync('./images/badboy_doge.jpg');
        res.writeHead(200, {'Content-Type': 'image/jpeg' });
        res.end(img, "binary");
    }
    if(req.url === "/code_doge"){
        let img = fs.readFileSync('./images/code_doge.jpg');
        res.writeHead(200, {'Content-Type': 'image/jpeg' });
        res.end(img, "binary");
    }
    if(req.url === "/resaca_doge"){
        let img = fs.readFileSync('./images/resaca_doge.jpg');
        res.writeHead(200, {'Content-Type': 'image/jpeg' });
        res.end(img, "binary");
    }
    if(req.url === "/retrato_doge"){
        let img = fs.readFileSync('./images/retrato_doge.jpg');
        res.writeHead(200, {'Content-Type': 'image/jpeg' });
        res.end(img, "binary");
    }
    if(req.url === "/sexy_doge"){
        let img = fs.readFileSync('./images/sexy_doge.jpg');
        res.writeHead(200, {'Content-Type': 'image/jpeg' });
        res.end(img, "binary");
    }

    else{
        res.writeHead(404,{"Content-type": "text/plain"});
        res.end("Error")
    }
})
.listen(3002, "localhost");