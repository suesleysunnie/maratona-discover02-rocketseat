const express = require("express")
const server = express()
const routes = require("./routes")

//Filtro de JS no html
server.set('view engine', 'ejs')

//habilitar diretório público
server.use(express.static('public'))

//habilitar req.body nas rotas
server.use(express.urlencoded( { extended: true } ))

//Usar rotas 
server.use(routes)

server.listen(3000, () => console.log('rodando'))

