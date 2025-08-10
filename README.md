# 📝 QuickNotes

A complete note-taking application with categories, filtering, and persistent storage. Built as a comprehensive React learning project with modern UI components.

![QuickNotes Screenshot](https://github.com/LiorKirshner/quicknotes/blob/main/screenshot.png)

## What it does ✨

- 📝 Create notes with titles and content
- 🏷️ Organize notes by categories (Work, Personal, Ideas, To Do)
- 🎨 Color-coded notes based on category
- 🔍 Filter notes by category
- 💾 Automatic local storage - notes persist between page reloads
- 🖱️ Click notes to view them in a popup modal
- ✏️ Edit notes directly in the modal view
- 🗑️ Delete notes (with confirmation, because accidents happen)
- 📱 Fully responsive design for phone and desktop
- 🌍 Handles Hebrew and English text perfectly

## Built with 🛠️

- **React 18** with hooks (useState, useEffect) for state management
- **Vite** for fast development and building
- **Mantine UI** for modal components and enhanced UX
- **dayjs** with advanced formatting for beautiful date display
- **CSS Grid & Flexbox** for responsive layouts
- **Local Storage API** for data persistence
- Custom CSS with category-based color theming

## Cool features I'm proud of 🎉

### Category system with color coding

Each note can be categorized as Work (blue), Personal (green), Ideas (purple), or To Do (orange). Notes are visually color-coded for instant recognition.

### Smart filtering

Filter your notes by category with a clean dropdown interface. "All Notes" shows everything, or pick a specific category.

### Persistent storage

Notes automatically save to your browser's local storage. Close the app, restart your computer - your notes are always there when you come back.

### Auto-resizing textareas

The text fields grow as you type - no more scrolling in tiny boxes!

### In-modal editing

Click on any note text and boom - you're editing it. Save or cancel with buttons.

### Clean responsive design

Looks perfect on phone, tablet, and desktop. Grid layout adapts beautifully to any screen size.

### Smart date display

Shows "Aug 10th 4:16 PM" instead of ugly timestamps. Also tracks when you last edited each note.

## How to use it 🎮

1. **Add a note** - Fill the form on the left, choose a category, hit "Add Note"
2. **Filter notes** - Use the filter dropdown to show only specific categories
3. **Read a note** - Click any note to open it in a modal popup
4. **Edit a note** - In the modal, click on the title or text to edit directly
5. **Save changes** - Hit "Save Changes" or "Cancel" to exit edit mode
6. **Delete a note** - Click the X button (it'll ask if you're sure)
7. **Automatic saving** - Everything saves automatically to your browser!

## Project structure 📁

```
src/
├── components/
│   ├── NoteCreationForm.jsx    # Form with category selection & auto-resize
│   ├── NotesGrid.jsx           # Grid with category filter integration
│   ├── NoteTile.jsx            # Color-coded note cards
│   └── NoteViewModal.jsx       # Modal with edit/view modes
├── constants/
│   └── index.js                # UI text & category color definitions
├── utils/
│   ├── dateUtils.js            # Date formatting utilities
│   └── localStorage.js         # Persistent storage functions
├── App.jsx                     # Main app with state management
└── App.css                     # Complete styling with color themes
```

## Development journey 🚀

What started as a simple React learning project evolved into a full-featured note-taking application. Here's what I learned and implemented:

### Phase 1: Core functionality

- React state management with hooks
- Dynamic form handling and validation
- Component composition and props

### Phase 2: User experience

- Mantine UI integration for professional modals
- Auto-resizing textareas for better UX
- Responsive design with CSS Grid

### Phase 3: Advanced features

- Category system with dropdown selection
- Color-coded visual themes for each category
- Smart filtering and state management

### Phase 4: Production ready

- Local storage for data persistence
- Code organization with utilities and constants
- Error handling and edge cases
- Clean, maintainable architecture

The most challenging part was implementing the in-modal editing while maintaining proper state synchronization between the main app and modal components. The category color system also required careful CSS planning to ensure good contrast and accessibility.

## Live Demo 🌐

[View Live Demo](https://liorkirshner.github.io/quicknotes/) (GitHub Pages)

## Getting started 🏃‍♂️

```bash
# Clone the repository
git clone https://github.com/LiorKirshner/quicknotes.git

# Navigate to project directory
cd quicknotes

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

_Built with ❤️ and a lot of learning along the way_
