const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const route = require("./server/router/router");
const database = require("./server/database/connection");
dotenv.config({path:"config.env"});
const PORT = process.env.port  || 8080;

database();
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine',"ejs");

app.use("/",route);
app.listen(PORT,()=>{
    console.log(`Server is running on http:/localhost:${PORT}`);
})