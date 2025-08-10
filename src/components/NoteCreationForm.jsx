import { useState, useEffect } from "react";

export default function NoteCreationForm({
  onAdd,
  onUpdate,
  initialNote = null,
  onCancel = null,
}) {
  // Auto-detect edit mode if initialNote is provided
  const isEditMode = !!initialNote;

  const [formData, setFormData] = useState({
    title: initialNote?.title || "",
    text: initialNote?.text || "",
  });

  // Update form data when initialNote changes
  useEffect(() => {
    if (initialNote) {
      setFormData({
        title: initialNote.title || "",
        text: initialNote.text || "",
      });
    }
  }, [initialNote]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Auto-resize textarea
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = formData.title.trim();
    const text = formData.text.trim();

    if (!text) return;

    if (isEditMode && onUpdate) {
      // Update existing note
      const updatedNote = {
        ...initialNote,
        title: title || "",
        text,
      };
      onUpdate(updatedNote);
    } else if (onAdd) {
      // Create new note
      const newNote = {
        title: title || "",
        text,
        createdAt: Date.now(),
      };
      onAdd(newNote);
      setFormData({ title: "", text: "" });

      // Reset textarea heights after submit
      const textareas = e.target.querySelectorAll("textarea");
      textareas.forEach((textarea) => {
        textarea.style.height = "auto";
      });
    }
  };

  return (
    <div className="note-form">
      <h2>{isEditMode ? "Edit Note" : "Add New Note"}</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          name="title"
          placeholder="Title"
          rows={1}
          value={formData.title}
          onChange={handleInputChange}
        />
        <textarea
          name="text"
          placeholder="Write your note here..."
          rows={4}
          value={formData.text}
          onChange={handleInputChange}
          required
        />
        <div className="form-buttons">
          <button type="submit">
            {isEditMode ? "Save Changes" : "Add Note"}
          </button>
          {isEditMode && onCancel && (
            <button type="button" onClick={onCancel} className="cancel-btn">
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
