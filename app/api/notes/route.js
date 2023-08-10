import NoteSchema from '@models/note'
import { connectToDB } from "@utils/db";


export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            await connectToDB();

            const notes = await NoteSchema.find({});
            res.status(200).json(notes);
        } catch (error) {
            res.status(500).json({ message: 'Server error: Failed To GET Posts' });
        }
    } else if (req.method === 'POST') {
        try {
            await connectToDB();

            const { title, content } = req.body;
            const newNote = new NoteSchema({ title, content });
            await newNote.save();
            res.status(201).json(newNote);
        } catch (error) {
            res.status(500).json({ message: 'Server error: Failed To Post' });
        }
    } else {
        res.status(405).end(); // Method Not Allowed
    }
}