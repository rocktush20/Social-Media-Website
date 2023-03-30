const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({path : "./.env"});
const mainRouter = require("./routers/index");
const dbConnect = require("./dbConnect");
app.use(express.json());

app.use("/api",mainRouter);

const PORT = process.env.PORT;
dbConnect();
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
});
