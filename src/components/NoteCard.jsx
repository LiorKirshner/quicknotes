import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
dayjs.extend(advancedFormat);
import React from "react";

const NoteCard = ({ note, onDelete }) => {
  const formattedDate = dayjs(note.createdAt).format("MMM Do h:mm A");

  function deleteNote() {
    if (confirm("Are you sure you want to delete this note?")) {
      onDelete(note.id);
    }
  }
  return (
    <article className="note">
      <button className="deleteBTN" onClick={deleteNote}>
        X
      </button>
      <p className="note-body">{note.text}</p>
      <div className="note-footer">
        <small>Created: {formattedDate}</small>
      </div>
    </article>
  );
};

export default NoteCard;
