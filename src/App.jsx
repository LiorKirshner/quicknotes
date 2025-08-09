import { useState } from "react";
import "./App.css";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList.jsx";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => [
      ...prevNotes,
      { id: crypto.randomUUID(), ...newNote },
    ]);
  }
  function deleteNote(noteId) {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
  }

  return (
    <div className="app">
      <h1>QuickNotes</h1>
      <div className="columns">
        <NoteForm onAdd={addNote} />
        <NoteList notes={notes} onDelete={deleteNote} />
      </div>
    </div>
  );
}

export default App;
