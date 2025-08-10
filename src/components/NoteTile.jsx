import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
dayjs.extend(advancedFormat);
import React from "react";

const NoteTile = ({ note, onDelete, onNoteClick }) => {
  const formattedDate = dayjs(note.createdAt).format("MMM Do h:mm A");

  function deleteNote() {
    if (confirm("Are you sure that you want to delete this note?")) {
      onDelete(note.id);
    }
  }

  return (
    <article
      className="note"
      onClick={() => onNoteClick(note)}
      style={{ cursor: "pointer" }}
    >
      <button
        className="deleteBTN"
        onClick={(e) => {
          e.stopPropagation(); // Prevent opening modal when delete is clicked
          deleteNote();
        }}
      >
        X
      </button>
      {note.title && <h3 className="note-title">{note.title}</h3>}
      <p className="note-body">{note.text}</p>
      <div className="note-footer">
        <small>Created: {formattedDate}</small>
      </div>
    </article>
  );
};

export default NoteTile;
