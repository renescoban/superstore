import Kitten from "@models/kitten";
import { connectToDB } from "@utils/db";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

const MONGODB_URI = "mongodb://127.0.0.1:27017/zerotohero"


export const POST = async (req, res) => {

  try {
    const conn = await mongoose.connect(MONGODB_URI)

    const data = await req.json()
    let _title = data.postData.title
    let _desc = data.postData.description

    //await connectToDB();

    console.log('Received data:', data,);

    
    const kitten = new Kitten({
       title: _title,
       content: _desc
     });
    await kitten.save();

    console.log("ARTICLE: " + kitten);

  } catch (error) {
    // Handle errors appropriately
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    // Close the database connection if opened
    mongoose.connection.close();
    return NextResponse.json({ data: "POST: Kitten static response" })
  }



}


export const GET = async (req, res) => {

  const conn = await mongoose.connect(MONGODB_URI)

  try {
    const result = await Kitten.find().exec();
    console.log(result);
    return NextResponse.json(result)
  } catch (error) {
    console.error(error);
  }

  return NextResponse.json(result)
}

