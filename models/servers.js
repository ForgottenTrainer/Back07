const express = require('express')
const cors = require('cors')

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.usuariosPath = '/api/usuarios'

        //Middlewares
        this.middlewares()

        //rutas app
        this.routes()
    }

    middlewares() {
        //cors
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use(express.json());

        //Directorio public
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.use('/api/usuarios', require('../routes/usuarios'))
    }

    listen(){
        this.app.listen(this.port)
    }
}

module.exports = Server;