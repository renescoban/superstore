import mongoose from "mongoose";


const kittySchema = new mongoose.Schema({
  title: String,
  content: String,
  author: { type: String, default: "guest" },
  createdAt: { type: Date, default: Date.now },
  });
/*

const commentSchema = new mongoose.Schema({
  text: { type: String,  },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User',  },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.models.User || mongoose.model('User', userSchema);
const Comment = mongoose.models.Comment || mongoose.model('Comment', commentSchema);
*/
const Kitten = mongoose.models.Kitten || mongoose.model('Kitten', kittySchema);
module.exports = Kitten