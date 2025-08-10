# 📝 QuickNotes

My personal note-taking app - simple, clean, and exactly what I needed! Built as a learning project with React and Mantine.

## What it does ✨

- 📝 Create notes with titles and content
- � Click notes to view them in a popup
- ✏️ Edit notes by clicking on the text
- 🗑️ Delete notes (with confirmation, because accidents happen)
- 📱 Works on phone and desktop
- 🌍 Handles Hebrew and English text perfectly

## Built with 🛠️

- React 18 + Vite (fast and modern)
- Mantine UI (saves me from writing CSS!)
- dayjs for nice date formatting
- Some custom CSS for the layout

## Cool features I'm proud of 🎉

### Auto-resizing textareas

The text fields grow as you type - no more scrolling in tiny boxes!

### In-modal editing

Click on any note text and boom - you're editing it. Save or cancel with buttons.

### Clean responsive design

Looks good on my phone, laptop, whatever. Grid layout adapts nicely.

### Smart date display

Shows "Aug 10th 2:30 PM" instead of ugly timestamps.

## How to use it 🎮

1. **Add a note** - Fill the form on the left, hit "Add Note"
2. **Read a note** - Click any note to open it
3. **Edit a note** - In the popup, click the text or hit "Edit"
4. **Delete a note** - Click the X (it'll ask if you're sure)

## Project structure 📁

```
src/
├── components/
│   ├── NoteCreationForm.jsx    # Left side form
│   ├── NotesGrid.jsx           # Right side note grid
│   ├── NoteTile.jsx            # Individual note cards
│   └── NoteViewModal.jsx       # Popup for viewing/editing
├── App.jsx                     # Main app
└── App.css                     # All the styles
```

## Why I built this 🤔

Started as a React learning project, but actually ended up being useful! Wanted something simple for quick notes without all the bloat of bigger apps.

The editing-in-modal feature was fun to implement - took a few tries to get the state management right, but super satisfying when it worked.

---

_Built with ❤️ and probably too much coffee_
