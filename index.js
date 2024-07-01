const http = require("http");
const fs=require("fs")


const PORT = 3000;
const hostname = "localhost";

const home =fs.readFileSync("./index.html");
const about =fs.readFileSync("./about.html");
const contact =fs.readFileSync("./contact.html");

const server = http.createServer((req, res)=>{
   
    if(req.url === "/"){
       return res.end(home);
    }
    if(req.url === "/home"){
        return res.end(home);
     }
    if(req.url === "/about"){
        return  res.end(about);
    }
    if(req.url === "/contact"){
        return res.end(contact);
    }
    else{
        return  res.end("<h1>404 Page Not Found</h1>");
    }
    
})

server.listen(PORT, hostname, () =>{
    console.log(`Server is working on http://${hostname}:${PORT}`); 
})