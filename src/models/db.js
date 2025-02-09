const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'quantaviz-db.c92usc8as5uf.us-east-2.rds.amazonaws.com', // Endpoint do RDS (ex: quantaviz-db.xxxxxxxxxxxx.us-east-1.rds.amazonaws.com)
    user: 'admin', // Nome de usuário do banco de dados
    password: '932802*Db#', // Senha do banco de dados
    database: 'quantaviz_db' // Nome do banco de dados
});
module.exports = connection;
