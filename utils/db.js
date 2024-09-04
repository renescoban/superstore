import mongoose from "mongoose";

const MONGODB_URI = "mongodb://127.0.0.1:27017/zerotohero"

let isConnected = false;


export const connectToDB = async () => {

    if (isConnected) {
      console.log("MongoDB connection already established");
      return;
    }

    try {
        await mongoose.connect( MONGODB_URI )
    
        isConnected = true;
    
        console.log('MongoDB connected')
      } catch (error) {
        console.log(error);
      }
}

export default connectToDB;