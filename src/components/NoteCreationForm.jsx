import { useState } from "react";

export default function NoteCreationForm({ onAdd }) {
  const [formData, setFormData] = useState({
    title: "",
    text: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Auto-resize textarea
    e.target.style.height = 'auto';
    e.target.style.height = e.target.scrollHeight + 'px';
    
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

    const newNote = {
      title: title || "",
      text,
      createdAt: Date.now(),
    };

    onAdd(newNote);
    setFormData({ title: "", text: "" });
    
    // Reset textarea heights after submit
    const textareas = e.target.querySelectorAll('textarea');
    textareas.forEach(textarea => {
      textarea.style.height = 'auto';
    });
  };

  return (
    <div className="note-form">
      <h2>Add New Note</h2>
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
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
}
