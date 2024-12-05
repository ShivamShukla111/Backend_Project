import mongoose from "mongoose";
import { DATABASE_NAME } from "../constants.js";

const ConnectDatabase = async () => {
     try {
      const DatabaseConnection =   await mongoose.connect(`${process.env.MONGODB_URI}/${DATABASE_NAME}`)
      console.log(`\n MONGODB CONNECTED !!! DB HOST : ${DatabaseConnection.connection.host}`);
      
     } catch (error) {
        console.log("MONGODB CONNECTION FAILED: ", error);
        process.exit(1);
        
     }
}

export default ConnectDatabase;