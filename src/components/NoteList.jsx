export default function NoteList({ notes }) {
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
          <div key={note.id} className="note-card">
            <p className="note-text">{note.text}</p>
            <small className="note-date">
              {new Date(note.createdAt).toLocaleString()}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}
