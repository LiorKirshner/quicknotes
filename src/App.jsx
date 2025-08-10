import { useState } from "react";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "./App.css";
import NoteCreationForm from "./components/NoteCreationForm";
import NotesGrid from "./components/NotesGrid";
import NoteViewModal from "./components/NoteViewModal";

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

  const saveNote = (updatedNote) => {
    const noteWithEditTime = {
      ...updatedNote,
      editedAt: Date.now(), // Add edit timestamp
    };

    setNotes((prev) =>
      prev.map((note) => (note.id === updatedNote.id ? noteWithEditTime : note))
    );
    // Update selected note to reflect changes in modal
    setSelectedNote(noteWithEditTime);
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
          <NoteCreationForm onAdd={addNote} />
          <NotesGrid
            notes={notes}
            onDelete={deleteNote}
            onNoteClick={toggleModal}
          />
        </div>
        <NoteViewModal
          opened={!!selectedNote}
          onClose={() => toggleModal()}
          note={selectedNote}
          onSave={saveNote}
        />
      </div>
    </MantineProvider>
  );
}

export default App;
