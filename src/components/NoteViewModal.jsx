import { Modal } from "@mantine/core";
import { useState } from "react";
import { formatNoteDates } from "../utils/dateUtils";
import { UI_TEXT } from "../constants";
import NoteCreationForm from "./NoteCreationForm";

const NoteViewModal = ({ opened, onClose, note, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);

  if (!note) return null;

  const { createdDate, editedDate } = formatNoteDates(note);

  const startEditing = () => {
    setIsEditing(true);
  };

  const handleUpdate = (updatedNote) => {
    onSave(updatedNote);
    setIsEditing(false);
  };

  const cancelEditing = () => {
    setIsEditing(false);
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={isEditing ? UI_TEXT.EDIT_NOTE : note.title || "Note"}
      size="md"
      centered
    >
      <div className="modal-body">
        {isEditing ? (
          // Edit mode using NoteCreationForm
          <NoteCreationForm
            initialNote={note}
            onUpdate={handleUpdate}
            onCancel={cancelEditing}
          />
        ) : (
          // View mode
          <div>
            <p
              className="modal-text clickable"
              onClick={startEditing}
              title={UI_TEXT.CLICK_TO_EDIT}
            >
              {note.text}
            </p>
            <button onClick={startEditing} className="edit-btn">
              {UI_TEXT.EDIT_BUTTON}
            </button>
          </div>
        )}
        <div className="modal-footer">
          <small>
            {UI_TEXT.CREATED_LABEL} {createdDate}
          </small>
          {editedDate && (
            <small className="edit-time">
              • {UI_TEXT.EDITED_LABEL} {editedDate}
            </small>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default NoteViewModal;
