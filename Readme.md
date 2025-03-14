# Node.js

## 환경 세팅 

- `npm install ejs -s` -> ejs를 활용해서 html을 대신하기<br/>
- `nodemon app.js` -> 자동 새로고침 <br/>
- `express`를 사용해서 서버 만들기 <br/>
- `express router`를 사용해서 효율적인 라우팅 관리 -> app.use를 사용해서 미들웨어 가져오기<br/>
- `npm init -y` 로 package.json 파일 생성 -> scripts에서 명령어 npm start로 변경 <br/>

## DOM 구조 <br/>

- DOM을 활용하여 로그인 정보를 가져와 조작하기" <br/>
- `defer` 속성을 사용하여 HTML 파싱 후 스크립트 실행 <br/>

## 데이터 전송 <br/>

- fetch를 통해 응답 데이터를 JSON 형식으로 변환하여 전달 <br/>
- Restful API의 post 방식 <br/>
- bodypaser를 사용해서 req.body에 접근 `npm i body-parser -s`

## 로그인 <br/>

- 로그인 성공시 루트경로로 이동 실패시 메세지 도출<br/>
- 로그인 프로세스 실패시 catch문으로 에러 검출 <br/>

## MVC <br/>

- 컨트롤러 분리 & app.listen 모듈화 -> `nodemon ./bin/www.js`로 실행<br/>
- `express.static`를 사용하여 정적 파일 가져오기 <br/>
- models에서 회원정보 데이터 설정 (데이터 은닉화 후 메소드로 받아오기) -> reduce를 사용 <br/>
- user 인스턴스를 만들어서 body의 정보를 갖게 하기 constructor로 받음 <br/>

## 회원 가입 <br/>
- 회원가입 라우팅 및 등록 메소드 생성


