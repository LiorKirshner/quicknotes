import { Modal } from "@mantine/core";
import { useState } from "react";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
dayjs.extend(advancedFormat);

const NoteViewModal = ({ opened, onClose, note, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editText, setEditText] = useState("");

  if (!note) return null;

  const formattedDate = dayjs(note.createdAt).format("MMM Do h:mm A");

  const startEditing = () => {
    setEditTitle(note.title || "");
    setEditText(note.text);
    setIsEditing(true);
  };

  const saveChanges = () => {
    onSave({
      ...note,
      title: editTitle.trim(),
      text: editText.trim(),
    });
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
          // Edit mode
          <div className="edit-form">
            <input
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              placeholder="Title"
              className="edit-title"
            />
            <textarea
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              placeholder="Note text"
              className="edit-text"
              rows={6}
            />
            <div className="edit-buttons">
              <button onClick={saveChanges} className="save-btn">
                Save
              </button>
              <button onClick={cancelEditing} className="cancel-btn">
                Cancel
              </button>
            </div>
          </div>
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
        </div>
      </div>
    </Modal>
  );
};

export default NoteViewModal;
