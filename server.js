const express = require('express')
var cors = require('cors')
const app = express()       //익스프레스에 만든 서버를 앱에
const port = 3000

app.use(cors())     //앱에서 cors 사용. 인자에 넣어서 조건 만들 수 있다.

app.get('/', (req, res) => {
    res.send('Hello World!!')
});

app.get('/sound/:name', (req, res) => {
    // const p = req.params;
    // p.name으로만 값을 꺼내올 수 있었음. 이를 아래 코드처럼 단축할 수 있음

    const { name } = req.params;

    console.log('이름 : ' + name);

    switch(name){
        case 'dog':
            console.log('hello');
            res.json({'sound' : '멍멍'});
            break;
        case 'cat':
            res.json({'sound' : '야옹'});
            return;
        case 'pig':
            res.json({'sound' : '꿀꿀'});
            return;
        default:
            // console.log('끝');
    }
    // res.json(name)
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})