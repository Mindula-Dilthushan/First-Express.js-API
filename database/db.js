var mysql = require('mysql')
var connection;

function db(){
    if(!connection){
        connection=mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '1023',
            database: 'kade'
          })
    }
    return connection
}

module.exports = db()