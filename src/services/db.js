require('dotenv').config()

async function connect() {
    // Verifica se está conectado com a var global
    if(global.connection && global.connection.state !== 'disconnected') 
        return global.connection
    
    const mysql = require('mysql2/promise')
    const connection = await mysql.createConnection(process.env.DATABASE_URL)
    global.connection = connection

    console.log('Conexão criada')
    return connection
}

async function selectBiblio() {
    const conn = await connect()
    const [rows] = await conn.query('select bibid as code, title as title, author as author, topic1 as theme from biblio limit 500;')
    return [rows]
}

module.exports = { connect, selectBiblio }