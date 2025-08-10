import NoteTile from "./NoteTile";
import { UI_TEXT } from "../constants";

export default function NotesGrid({ notes, onDelete, onNoteClick }) {
  if (notes.length === 0) {
    return (
      <div>
        <h2>{UI_TEXT.YOUR_NOTES}</h2>
        <p>{UI_TEXT.NO_NOTES_MESSAGE}</p>
      </div>
    );
  }

  return (
    <div className="notes-container">
      <h2>{UI_TEXT.YOUR_NOTES}</h2>
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
