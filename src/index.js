const fs = require('fs');
const path = require("path");
const express = require('express');


//middlewares
const http = require('http');
const cors = require('cors');

//build config
const app = express();
app.use(cors());
app.use(require('./routes/index'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//start http server
const httpServer = http.createServer(app);
const port = 18000
httpServer.listen(port);
console.log('http server listening at port ${port}');

app.get('/', function(request, response){
    response.sendFile(__dirname +'/views/index.html');
 })
 
module.exports = {app};

//app.listen(18000);
//console.log('Server on port 18000');