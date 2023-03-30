const mongoose = require("mongoose");

const dbConnect = async ()=>{
    try{
        const mongoUri = "mongodb+srv://rocktush20:Tushar12@mydb.jtsxkg8.mongodb.net/Social-Media?retryWrites=true&w=majority";
        const connect = await mongoose.connect(mongoUri,{ useNewUrlParser: true, useUnifiedTopology: true});
        console.log("MongoDb connected");
    }
    catch(e)
    {
        console.log(e);
    }
}

module.exports = dbConnect;