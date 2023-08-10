import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title: String,
    content: String,
  });
  
  const NoteSchema = mongoose.model('Note', noteSchema);
  module.exports = NoteSchema