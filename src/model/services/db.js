const dotenv = require('dotenv').config()

async function connect() {
    // Verifica se está conectado com a var global
    if(global.connection && global.connection.state !== 'disconnected') 
        return global.connection

    const mysql = require('mysql2/promise')
    const connection = await createConnection(dotenv.DATABASE_URL)
    global.connection = connection

    return connection
}

module.exports = connect