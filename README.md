# Trello Clone (Frontend)

A simple Trello-inspired kanban board application built with React and Tailwind CSS. This project demonstrates essential features of a task management board, including columns for different task statuses and drag-and-drop functionality.

## Features

- **Three Columns:**  
  - **Pending**: Tasks that are yet to be started.  
  - **In Progress**: Tasks that are currently being worked on.  
  - **Done**: Completed tasks.
- **Add Tasks:** Easily create new tasks and assign them to any column.
- **Drag and Drop:** Move tasks between columns using a smooth drag-and-drop interface.
- **Responsive UI:** Built with Tailwind CSS for a modern and responsive design.

## Tech Stack

- **React**: Frontend framework for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for fast UI development.

## Getting Started

### Prerequisites

- Node.js (v14 or above)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/durgeshkr-5/Trello_clone.git
   cd Trello_clone
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the app:**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open in browser:**  
   Visit `http://localhost:3000` to use the app.

## Usage

- Click "Add Task" in any column to create a new task.
- Drag tasks from one column to another to update their status.

## Project Structure

```
src/
├── components/
│   ├── Board.jsx
│   ├── Column.jsx
│   └── Task.jsx
├── App.jsx
├── index.js
└── ...
```

## Notes

- This is a frontend-only project. No backend or persistent storage is implemented.
- All data is stored in memory; refreshing the page will reset the tasks.
- Designed for educational and demonstration purposes.

## License

MIT

---

**Created by [durgeshkr-5](https://github.com/durgeshkr-5)**
