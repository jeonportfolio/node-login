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
const bodyParser = require("body-parser");
const app = express();

// 라우팅
const home = require("./src/routes/home");

//앱세팅 

app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // 한글 공백 문자가 제대로 처리되지 않는 문제 해결 


app.use("/", home);

module.exports = app;