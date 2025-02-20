// const http = require("http");
// const app = http.createServer((req, res) => {
//     res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})
//     if(req.url === '/'){
//         res.end("root");
//     } else if (req.url === '/login') {
//         res.end("로그인 화면");
//     }
// });

// app.listen(3001, () => {
//     console.log("http");
// })

// 모듈
const express = require("express");
const app = express();

// 라우팅
const home = require("./routes/home");

//앱세팅 

app.set("views", "./views");
app.set("view engine", "ejs");


app.use("/", home);

module.exports = app;