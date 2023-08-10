
/*
import mongoose from 'mongoose'

// process.env.DB_URI

const MONGODB_URI = "mongodb://localhost:27017/zerotohero"

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable'
  )
}

let isConnected = false;

export const connectToDB = async () => {
  try {
    const { connection } = await mongoose.connect(MONGODB_URI)

    if (connection.readyState === 1){
      return Promise.resolve(true)
    }
  }catch(error){
    return Promise.reject(error)
  }
}

*/
import mongoose from 'mongoose'

const MONGODB_URI = "mongodb://127.0.0.1:27017/zerotohero"
let isConnected = false;


export const connectToDB = async () => {
    mongoose.set('strictQuery', true);


    try {
        await mongoose.connect( MONGODB_URI, {
          // useNewUrlParser: true,
          // useUnifiedTopology: true,
        })
    
        isConnected = true;
    
        console.log('MongoDB connected')
      } catch (error) {
        console.log(error);
      }


}