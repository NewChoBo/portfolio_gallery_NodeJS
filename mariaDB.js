const conn = require('./private/db_info.js');
const mysql = require('mysql');  // mysql 모듈 로드
// const conn = {
//     host : '???.??.?',
//     port : '????',
//     user : '?????????',
//     password : '???????????????',
//     database : '???????????'
// };

const connection = mysql.createConnection(conn);
connection.connect(function(err) {
    if (err) {
      console.error('Error connecting: ' + err.stack);
      return;
    }
  
    console.log('Connected as id ' + connection.threadId);
  }
);
  
// 사용이 끝나면 연결 해제
// connection.end();

module.exports = connection;