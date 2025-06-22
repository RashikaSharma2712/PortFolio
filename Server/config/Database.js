const mongoose =require("mongoose");

require("dotenv").config();

const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>console.log("Db Connected Successfully"))
    .catch((err)=>{
        console.log("Db Connection Failed")
        console.log(err);
        process.exit(1);
        
    })
}
module.exports = dbConnect;