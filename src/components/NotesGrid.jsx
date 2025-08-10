import NoteTile from "./NoteTile";

export default function NotesGrid({ notes, onDelete, onNoteClick }) {
  if (notes.length === 0) {
    return (
      <div>
        <h2>Your Notes</h2>
        <p>No notes yet. Add your first note!</p>
      </div>
    );
  }

  return (
    <div className="notes-container">
      <h2>Your Notes</h2>
      <div className="notes-grid">
        {notes.map((note) => (
          <NoteTile
            key={note.id}
            note={note}
            onDelete={onDelete}
            onNoteClick={onNoteClick}
          />
        ))}
      </div>
    </div>
  );
}
