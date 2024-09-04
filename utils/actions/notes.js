"use server"
import Note from "@models/note";
import { connectToDB } from "@utils/db";

export async function saveNote(title, content) {
  try {
    await connectToDB();

    const note = new Note({ title, content });
    await note.save();

    console.log("Save Success");
    return "Success"
  } catch (error) {
    console.error("Error saving note:", error);
  }
}

