const express = require('express')
const app = express()
const port = 3000


app.get('/api/users', (req, res) => {   //Rest API를 구축하여 유저들의 정보를 서버에
                                        //json파일로 보내기(DB에 연결 되어 있지 않는 상태)
  res.send([
    {
      'id': 'kanado',
      'name': '이윤빈',
      'gender': '남자',
      'technic': "python",
      'career': "무",
      'education': "대학교4년제"
    },
    {
      'id': 'odanak',
      'name': '홍길동',
      'gender': '남자',
      'technic': "c++",
      'career': "유",
      'education': "고등학교졸업"
    }
    
  ])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})