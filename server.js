

var express = require('express'); // ExpressJS 모듈을 추가

var app = express();

var mongojs = require('mongojs'); // MongoDB 연결 해야되니 MongoJS 모듈도 추가

var db = mongojs('genie', ['member','count']); // 여기서 genie는 database 이름이고 member테이블을 사용할꺼라고 선언

var bodyParser = require('body-parser'); // json 형태로 파싱할꺼니까 모듈 추가



app.use(express.static(__dirname + '/public')); //public 폴더 안에 javascript 파일과 css파일을 모아둘 예정

app.use(bodyParser.json()); // body-parser 모듈을 사용해서 파싱 해줌

app.engine('html', require('ejs').__express);

app.set('views', __dirname + '/views'); // ejs 파일들을 저장하기 위해 경로 추가했음

app.set('view engine', 'html'); // ejs를 html로 바꿔주면 html로 파일 실행됩니다.



app.get('/', function(req, res) { // 웹에서 실행할 주소가 localhost:3000/ 이거일때를 선언

    res.render('main'); // join.ejs로 써도 되고 join만 써도 파일 실행을 해줍니다.

});



app.listen(3000); //server 구동 포트 localhost:3000 여기에 쓰입니다.

console.log("Server running on port 3000");// JavaScript Document