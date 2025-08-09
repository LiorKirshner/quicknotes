import { useState } from "react";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "./App.css";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList.jsx";
import NoteModal from "./components/Modal";

function App() {
  // Notes data
  const [notes, setNotes] = useState([]);

  // Modal state
  const [selectedNote, setSelectedNote] = useState(null);

  // Note operations
  const addNote = (newNote) => {
    setNotes((prev) => [...prev, { id: crypto.randomUUID(), ...newNote }]);
  };

  const deleteNote = (noteId) => {
    setNotes((prev) => prev.filter((note) => note.id !== noteId));
  };

  // Modal operations
  const toggleModal = (note = null) => {
    setSelectedNote(note);
  };

  return (
    <MantineProvider>
      <div className="app">
        <h1>QuickNotes</h1>
        <div className="columns">
          <NoteForm onAdd={addNote} />
          <NoteList
            notes={notes}
            onDelete={deleteNote}
            onNoteClick={toggleModal}
          />
        </div>
        <NoteModal
          opened={!!selectedNote}
          onClose={() => toggleModal()}
          note={selectedNote}
        />
      </div>
    </MantineProvider>
  );
}

export default App;
