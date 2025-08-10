import React from "react";
import { formatNoteDates } from "../utils/dateUtils";
import { UI_TEXT, CATEGORY_COLORS } from "../constants";

const NoteTile = ({ note, onDelete, onNoteClick }) => {
  const { createdDate, editedDate } = formatNoteDates(note);

  // Get category colors
  const categoryColors =
    note.category && CATEGORY_COLORS[note.category]
      ? CATEGORY_COLORS[note.category]
      : CATEGORY_COLORS.default;

  function deleteNote() {
    if (confirm(UI_TEXT.DELETE_CONFIRMATION)) {
      onDelete(note.id);
    }
  }

  return (
    <article
      className="note"
      onClick={() => onNoteClick(note)}
      style={{
        cursor: "pointer",
        backgroundColor: categoryColors.background,
        borderColor: categoryColors.border,
        color: categoryColors.text,
      }}
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
      {note.category && (
        <small
          className="note-category"
          style={{
            backgroundColor: categoryColors.border,
            color: "white",
          }}
        >
          {note.category}
        </small>
      )}
      <p className="note-body">{note.text}</p>
      <div className="note-footer">
        <small>
          {UI_TEXT.CREATED_LABEL} {createdDate}
        </small>
        {editedDate && (
          <small className="edit-time">
            {UI_TEXT.EDITED_LABEL} {editedDate}
          </small>
        )}
      </div>
    </article>
  );
};

export default NoteTile;
