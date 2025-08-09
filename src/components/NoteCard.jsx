import React from "react";

const NoteCard = ({ note }) => {
  const formattedDate = new Date(note.createdAt).toLocaleString();
  return (
    <article className="note">
      <p className="note-body">{note.text}</p>
      <div className="note-footer">
        <small>Created: {formattedDate}</small>
      </div>
    </article>
  );
};

export default NoteCard;
