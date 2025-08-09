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

  return (
    <div className="app">
      <h1>QuickNotes</h1>
      <div className="columns">
        <NoteForm onAdd={addNote} />
        <NoteList notes={notes} />
      </div>
    </div>
  );
}

export default App;
