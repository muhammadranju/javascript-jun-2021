
const { createPool } = require('mysql')
const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database:"nodejsdatabase"

})
pool.query(`SELECT * FROM node_user`, (err, res, fields) => {
    if (err) {
        return console.log(err);
    }
    return console.log(res);
})