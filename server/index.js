const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({path : "./.env"});

app.get("/",(req,res)=>{
    res.send("ok");
});

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`server is listening on PORT : ${PORT}`);
});
