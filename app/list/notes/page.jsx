'use client'

import React, { useState } from 'react';
import Note from '@components/notes/note';
import uniqid from 'uniqid';

const page = () => {

    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState({ title: '', content: '', id:"" });
  
    const handleAddNote = () => {
      if (newNote.title.trim() === '' || newNote.content.trim() === '') return;
      const noteWithId = { ...newNote, id: uniqid() };
      setNotes([...notes, noteWithId ]);
      setNewNote({ title: '', content: '' });
    };
  
    const handleDeleteNote = (id) => {
      const updatedNotes = notes.filter((note) => note.id !== id);
      setNotes(updatedNotes);
    };

    const handleEditNote = (id, editedTitle, editedContent) => {
        const updatedNotes = notes.map((note) =>
          note.id === id ? { ...note, title: editedTitle, content: editedContent } : note
        );
        setNotes(updatedNotes);
      };


console.log(uniqid());
  return (
    <div>
      <h1>Notes App {notes.id ? "var" : "yok"} </h1>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={newNote.title}
          onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
        />
        <textarea
          placeholder="Take a note..."
          value={newNote.content}
          onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
        />
        <button onClick={handleAddNote}>Add Note</button>
      </div>
      <div className="notes-list">
        {notes.map((note) => (
          <Note key={note.id} note={note} onDelete={handleDeleteNote} onEdit={handleEditNote} />
        ))}
      </div>
    </div>
  )
}

export default page