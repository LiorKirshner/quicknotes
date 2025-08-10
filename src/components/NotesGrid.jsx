import NoteTile from "./NoteTile";
import { UI_TEXT } from "../constants";

export default function NotesGrid({
  notes,
  selectedCategory,
  onCategoryChange,
  categories,
  onDelete,
  onNoteClick,
}) {
  if (notes.length === 0) {
    return (
      <div>
        <div className="notes-header">
          <h2>{UI_TEXT.YOUR_NOTES}</h2>
          <div className="category-filter">
            <span className="filter-label">Filter:</span>
            <select
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="category-filter-select"
            >
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <p>{UI_TEXT.NO_NOTES_MESSAGE}</p>
      </div>
    );
  }

  return (
    <div className="notes-container">
      <div className="notes-header">
        <h2>{UI_TEXT.YOUR_NOTES}</h2>
        <div className="category-filter">
          <span className="filter-label">Filter:</span>
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="category-filter-select"
          >
            {categories.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>
      </div>
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
