const express = require("express")
const server = express()
const routes = require("./routes")
const path = require("path")


//Filtro de JS no html
server.set('view engine', 'ejs')

//Mudar a localização da pasta view
server.set('views', path.join(__dirname, 'views'))

//habilitar diretório público
server.use(express.static('public'))

//habilitar req.body nas rotas
server.use(express.urlencoded( { extended: true } ))

//Usar rotas 
server.use(routes)

server.listen(3000, () => console.log('rodando'))

