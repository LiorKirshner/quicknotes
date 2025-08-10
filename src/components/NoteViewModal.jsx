import { Modal } from "@mantine/core";
import { useState } from "react";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import NoteCreationForm from "./NoteCreationForm";
dayjs.extend(advancedFormat);

const NoteViewModal = ({ opened, onClose, note, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);

  if (!note) return null;

  const formattedDate = dayjs(note.createdAt).format("MMM Do h:mm A");
  const formattedEditDate = note.editedAt
    ? dayjs(note.editedAt).format("MMM Do h:mm A")
    : null;

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
      title={isEditing ? "Edit Note" : note.title || "Note"}
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
              title="Click to edit"
            >
              {note.text}
            </p>
            <button onClick={startEditing} className="edit-btn">
              ✏️ Edit
            </button>
          </div>
        )}
        <div className="modal-footer">
          <small>Created: {formattedDate}</small>
          {formattedEditDate && (
            <small className="edit-time">• Edited: {formattedEditDate}</small>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default NoteViewModal;
