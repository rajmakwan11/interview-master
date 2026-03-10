const mongoose = require('mongoose');

async function connectDB(){
   try{
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("Connected to DB Successfully")
   }
   catch(err){
      console.log("ERROR ",err)
   }
}

module.exports = connectDB