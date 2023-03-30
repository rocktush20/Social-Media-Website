const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({path:'./.env'});
const dbConnect = async ()=>{
    try{
        const mongoUri = process.env.mongoUri;
        const connect = await mongoose.connect(mongoUri,{ useNewUrlParser: true, useUnifiedTopology: true});
        console.log("MongoDb connected");
    }
    catch(e)
    {
        console.log(e);
    }
}

module.exports = dbConnect;