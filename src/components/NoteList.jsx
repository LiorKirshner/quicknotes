import NoteCard from "./NoteCard";

export default function NoteList({ notes, onDelete }) {
  if (notes.length === 0) {
    return (
      <div>
        <h2>Your Notes</h2>
        <p>No notes yet. Add your first note!</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Your Notes</h2>
      <div className="notes-grid">
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
}
