const { DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME } = process.env;
const types = require('pg').types;
types.setTypeParser(types.builtins.INT8, (value) => {
return parseInt(value, 10);
});
module.exports = require('knex')({
client: 'pg',
connection: {
host: DB_HOST || 'localhost',
port: DB_PORT || '5432',
user: DB_USER || 'postgres',
password: DB_PASS || 'nqZB9Mex',
database: DB_NAME || 'ct313h_project',
},
pool: { min: 0, max: 10 },
});