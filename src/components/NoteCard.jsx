import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
dayjs.extend(advancedFormat);
import React from "react";

const NoteCard = ({ note }) => {
  const formattedDate = dayjs(note.createdAt).format("MMM Do h:mm A");
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
