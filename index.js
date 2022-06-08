const express = require("express")
const app = express()

app.listen(3000, () => { // 1
  console.log("Server on")
})

app.use(express.static("assets")) // 2

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

// 3
app.get("/abracadabra/usuarios", (req, res) => {
  res.send(usuario)
})
const usuario = { 
  usuarios: ["Juan", "Pedro", "Maria", "José", "Astrid", "Javier", "Brian"]
}

// 4 falta
app.use("/abracadabra/juego/:usuario", (req, res, next) => {
  const AuthUsuario = usuario.usuarios.find(
    usuario => usuario === req.params.usuario
  )
  AuthUsuario 
  ? next() 
  : res.redirect("./who.jpeg") //imagen “who.jpeg”
})

// 5
app.get("/abracadabra/conejo/:n", (req, res) => {
  const n = Math.floor(Math.random() * (5 - 1)) + 1
  const numero = req.params.n
  numero == n
    ? res.redirect("./conejito.jpg") 
    : res.redirect("./voldemort.jpeg")
})

// 6
app.get("*", (req, res) => {
  res.send("<center><h1>Esta página no existe...</h1></center>")
})
