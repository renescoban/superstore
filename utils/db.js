
/*
import mongoose from 'mongoose'

// process.env.DB_URI

const MONGODB_URI = "mongodb://localhost:27017"

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