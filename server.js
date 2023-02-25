const express = require('express')
var cors = require('cors')
const app = express()       //익스프레스에 만든 서버를 앱에
const port = 3000

app.use(cors())     //앱에서 cors 사용. 인자에 넣어서 조건 만들 수 있다.

app.get('/', (req, res) => {
    res.send('')
});

app.get('/portfolios', (req, res) => {
    // const { id } = req.params;    
    res.json(
        [
        {'userID':'aaa', 'portfolioID':'001', 'thum':'https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg'}, 
        {'userID':'bbb', 'portfolioID':'002', 'thum':'https://i.pinimg.com/236x/44/af/03/44af0390dab474bbb62a266c0232d31a.jpg'},
        {'userID':'ccc', 'portfolioID':'001', 'thum':'https://m.jungle.co.kr/image/89a947214133b7e4fc201025'}, 
        {'userID':'dddd', 'portfolioID':'002', 'thum':'https://i.pinimg.com/564x/fc/00/2c/fc002c18734bf9216477ca5359ca8d69.jpg'},
        {'userID':'ee', 'portfolioID':'001', 'thum':'https://t1.daumcdn.net/cfile/tistory/117A8433516D5BF70E'}, 
        {'userID':'fff', 'portfolioID':'002', 'thum':'https://mblogthumb-phinf.pstatic.net/MjAxNjExMjVfMTM4/MDAxNDgwMDg0MDQ2NTU0.K5BVEWt2gK2tHm1ibBIohf9y1MKPpZCDPMah5DwFcMUg.i0-Ikbh0kdknu55sejzN02fPQwp2JCYXgvOpgCSiPtMg.JPEG.knicjin/021.jpg?type=w800'},
        {'userID':'ggg', 'portfolioID':'001', 'thum':'https://t1.daumcdn.net/cfile/tistory/99B634495AA0EC0310'}, 
        {'userID':'hhh', 'portfolioID':'002', 'thum':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL_BtRrE_V_kluwvyYEcZ0tyzEX7AZbvA7_g&usqp=CAU'}
    ]);
});

app.get('/*', (req, res) => {
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})