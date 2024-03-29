
const {Pool} = require('pg');
const { GetObjectCommand, S3Client } = require("@aws-sdk/client-s3");

const pool = new Pool({
    //host: 'dbteam24proyect.cfkqgu0uqs4g.us-east-1.rds.amazonaws.com',
    //user: 'team2424',
    //password: 'team2424',
    //database: 'DBProduction',
    //port: '5432',
    user: 'javi',
    host: 'connectedcarinstance.cxpfpf5cvaud.us-east-1.rds.amazonaws.com',
    database: 'connectedcardb',
    password: 'javijavi',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
});
//const AWS = require('aws-sdk');
const client = new S3Client({region:"us-east-1"});


const getCars = async (req,res)=>{
    const response = await pool.query('select * from carowner');
    res.json(response.rows);
}

const getCarById = async (req,res)=>{
    const response = await pool.query('select * from carowner where carid = $1', [req.params.id]);
    res.json(response.rows);
}

const getId2 = async (req,res)=>{
    const response = await pool.query('select * from carowner where s3name = $1', [req.query.id]);
    res.json(response.rows);
}


const getBucketId = async (req,res)=>{
     const command = new GetObjectCommand({
       Bucket: "connected-car-mybucket-qf0ovqdou67a",
       Key: req.query.id
      });
    
      try {
        const response = await client.send(command);
        // The Body object also has 'transformToByteArray' and 'transformToWebStream' methods.
        const str = await response.Body.transformToString();
        res.json(str);
        console.log(str);
      } catch (err) {
        console.error(err);
      }; 
}
module.exports = {getCars, getCarById, getBucketId, getId2}
