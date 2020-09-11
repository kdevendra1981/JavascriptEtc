const http = require("http");
const fs = require("fs")

const hostname = "127.0.0.1";
const port = 3000;
const home = fs.readFileSync("index.html")
const service = fs.readFileSync("services.html")
const about = fs.readFileSync("about.html")
const contact = fs.readFileSync("contact.html")

const server = http.createServer((req,res)=>{
    console.log(req.url);
    url = req.url
    res.statusCode = 200;
    res.setHeader("content-type","text/html");
    if(url == '/index.html'){
        res.end(home);
    }
    else if (url =='/services.html'){
        res.end(service)
    }
    else if (url =='/about.html'){
        res.end(about)
    }
    else if (url =='/contact.html'){
        res.end(contact)
    }
    else{
        res.statusCode =404
        res.end("<h1>404 not found<h1>")
    }
})

server.listen(port, hostname,()=>{
    console.log(`server is running at http://${hostname}:${port}`);
})
