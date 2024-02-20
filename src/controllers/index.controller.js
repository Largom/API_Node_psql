
const {Pool} = require('pg');

// const connUrl = postgres://{username}:{passoword}@{endpoint}:{port}/{database} 

const pool = new Pool({
    host: 'dbteam24proyect.cfkqgu0uqs4g.us-east-1.rds.amazonaws.com',
    user: 'team2424',
    password: 'team2424',
    database: 'DBProduction',
    port: '5432',
    ssl: {
        rejectUnauthorized: false
    }
});
const getUsers = async (req,res)=>{
    const response = await pool.query('select * from carowner');
    res.json(response.rows);
}

module.exports = {getUsers}