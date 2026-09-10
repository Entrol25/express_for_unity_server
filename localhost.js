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
      //ipServer: "168.222.142.14"// ipconfig 
    }// Ethernet adapter Ethernet: // 2-й средний
  ]))

  countConnect++

})

app.listen(PORT, () => console.log(
  `_ Express_for_Unity_Server started. Port ${PORT} _`))