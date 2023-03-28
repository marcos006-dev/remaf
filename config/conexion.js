const mysql = require('mysql2');
const conexion = mysql.createConnection({
    user: 'root',
    password: 'ZoRrWX89bW40pxFWbKRc',
    host: 'containers-us-west-97.railway.app',
    database: 'railway',
    port: 6714,
});

conexion.connect((err)=>{
    if (err) {
        console.log('ha ocurrido un error'+ err)
    } else {
        console.log('la base de datos se conecto')
    }
});

module.exports = conexion;