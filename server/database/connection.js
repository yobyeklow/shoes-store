const mongoose = require("mongoose");

const database = async function(){
    try{
        const connect = await mongoose.connect(process.env.MONGO_URl,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })

        console.log(`MongoDB connected:${connect.connection.host}`);
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = database;