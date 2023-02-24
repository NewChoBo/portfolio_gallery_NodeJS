const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!!')
});

app.get('/user/:name', (req, res) => {
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
    res.json(name)
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})