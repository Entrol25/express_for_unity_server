import express from 'express'

const app = express()

const PORT = 3000

let countConnect = 0;

//let ipServer = "127.0.0.1"// dev
//let ipServer = "0.0.0.0"// prod

app.get('/', (req, res) => {

  res.send(JSON.stringify([
    {
      countConnect: countConnect,
      ipServer: "127.0.0.1"// ipconfig 
    }// Ethernet adapter Ethernet: // 2-й средний
  ]))

  countConnect++

})
// https://www.8host.com/blog/kak-rabotaet-obekt-req-v-express/
// https://expressjs.com/en/5x/api/request/
// GET https://example.com/id{userid}
app.get('/id:userid', (req, res) => {
  res.send(req.params.userid)
  //console.log(req.params.userid) // "1"
})
// GET https://example.com/search?keyword=great-white
app.get('/search', (req, res) => {
  res.send(req.query.keyword)
  //console.log(req.query.keyword) // "great-white"
})

// POST https://example.com/login
//
//      {
//        "email": "user@example.com",
//        "password": "helloworld"
//      }

//app.post('/login', (req, res) => {
//  console.log(req.body.email) // "user@example.com"
//  console.log(req.body.password) // "helloworld"
//})
/*
Когда пользователь вводит свой адрес электронной почты и пароль 
на стороне клиента, объект req.body сохраняет эту информацию и 
отправляет ее на сервер Express. Регистрация объекта req.body в 
консоли приводит к получению адреса электронной почты и пароля пользователя.
*/

app.listen(PORT, () => console.log(
  `_ Express_for_Unity_Server started. Port ${PORT} _`))