const fs = require('fs');  //database.json파일로부터 데베환경 설정 정보를 읽기 위해 fs변수로 파일에 접근할 수 있는 라이브러리 선언
const express = require('express');
const app = express();
const port = 3000;

const data = fs.readFileSync('./database.json'); //database.json 파일을 불러오기
const conf = JSON.parse(data); //data에 해당 횐경 설정파일을 파싱

const mysql = require('mysql'); //mysql라이브러리 선언

const connection = mysql.createConnection({ //실제 mysql에 연걸한 개체를 다룰 수 있도록 함
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
});

connection.connect();

app.get('/api/users', (req, res) => {   //Rest API를 구축

  connection.query(
    "SELECT * FROM CUSTOMER",
    (err, rows, fields) => {
      res.send(rows);  //query로 db테이블에서 가져온 데이터 rows변수에 저장
    }
  );
});

app.post('/api/customers', (req, res) => {  //post방식으로 고객정보 추가 됐을때 그 정보를 DB에 저장
  let sql = 'INSERT INTO CUSTOMER VALUES (?, ?, ?, ?, ?, ?)';
  let id = req.body.id;
  let name = req.body.name;
  let gender = req.body.gender; 
  let technic = req.body.technic;
  let career = req.body.career;
  let education = req.body.education;
  let params = [id, name, gender, technic, career, education];
  connection.query(sql,params,
    (err, rows, fields) => {
      res.send(rows);
    }
    );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});