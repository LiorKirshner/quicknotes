import { useState } from "react";

export default function NoteForm({ onAdd }) {
  const [noteText, setNoteText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = noteText.trim();
    if (!text) return;

    const newNote = {
      text,
      createdAt: Date.now(),
    };

    onAdd(newNote);
    setNoteText("");
  };

  return (
    <div className="note-form">
      <h2>Add New Note</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Write your note here..."
          rows={4}
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          required
        />
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
}
