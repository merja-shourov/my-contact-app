import mongoose from "mongoose";

const dbConnection = async ()=>{
    try{
       const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
       console.log(`Connection Stablish || Host is ${connectionInstance.connection.host} || DB Name: ${connectionInstance.connection.name}`);
       
    }catch( err ){
        console.log("Mongodb connection errer", err);
        process.exit(1);
       
    }
}

export default dbConnection;