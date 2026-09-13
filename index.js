import express from "express"
import config from "config"

const app = express()

const PORT = config.get("port") || 3030

let countConnect = 0;

app.get('/api', (req, res) => {

  try {

    if (req.query.pass == config.get("UnityServerPass")
      && req.query.id == -1) {
      res.send(JSON.stringify([
        {
          countConnect: countConnect,
          ipServer: "127.0.0.1"// ipconfig 
        }// Ethernet adapter Ethernet: // 2-й средний
      ]))

      countConnect++
    }
    else if (req.query.pass == config.get("AdminPass")) {

      countConnect = req.query.id;

      res.send(JSON.stringify([
        {
          countConnect: countConnect,
          ipServer: "127.0.0.1"// ipconfig 
        }// Ethernet adapter Ethernet: // 2-й средний
      ]))
    }
    else {
      console.log("/api = Error")
    }

  }
  catch {

  }
})

app.listen(PORT, () => console.log(
  `_ Express_for_Unity_Server started. Port ${PORT} _`))