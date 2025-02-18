const http = require("http");
const app = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})
    if(req.url === '/'){
        res.end("root");
    } else if (req.url === '/login') {
        res.end("로그인 화면");
    }
});

app.listen(3001, () => {
    console.log("http");
})



// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//     res.send("root");
// })

// app.get("/login", (req, res) => {
//     res.send("로그인 화면");
// })

// app.listen(3000, function (){
//     console.log("서버가동");
// });