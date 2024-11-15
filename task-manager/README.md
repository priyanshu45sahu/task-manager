# Task Management App

## Overview

This Task Management App allows users to add, edit, delete, and filter tasks based on priority and due date. It categorizes tasks into Overdue, Upcoming, and Completed based on their due dates and completion status. Additionally, tasks can be sorted by Priority (High, Medium, Low) and Due Date (ascending).

The app leverages React for the frontend, and task data is stored in `localStorage` for persistence between sessions.

## Features

- **Task Management**: Add, edit, and delete tasks.
- **Categorization**: Tasks are categorized into Overdue, Upcoming, and Completed.
- **Search & Filtering**: Filter tasks by title or description and sort them by priority or due date.
- **Responsive Design**: The app is mobile-friendly and adjusts to various screen sizes.
- **Persistent Storage**: Tasks are saved in `localStorage`, so they persist even when the page is refreshed.

## Assumptions Made During Development

- The application assumes the task data is well-formed and that all fields are properly provided (e.g., a task always has a title, `dueDate`, and `priority`).
- Only tasks with the status Completed will be filtered out as "Completed," while others will follow the due date logic for "Upcoming" and "Overdue."
- Priority levels are predefined as High, Medium, and Low.
- Due Date comparisons are done in the format of `YYYY-MM-DD` and are not timezone-sensitive.

## Setup Instructions

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js (>= 14.x)
- npm (>= 6.x)

### Step 1: Clone the Repository

Start by cloning the project repository:

```bash
git clone https://github.com/your-username/task-management-app.git
cd task-management-app
```

### Step 2: Install Dependencies

Install the required npm dependencies:

```bash
npm install
```

### Step 3: Run the Application

After installing the dependencies, start the development server:

```bash
npm start
```

This will run the application in development mode. Open your browser and navigate to `http://localhost:3000` to view the app.

### Step 4: Build the Application

To create a production build, run:

```bash
npm run build
```

This will create an optimized production build of the app in the `build/` directory.

## File Structure

```
src/
|-- components/        # Contains React components such as AddTask, TaskCard, etc.
|-- context/           # Contains context-related files like TaskContext.js for state management.
|-- style/             # Contains CSS files for styling the application.
|-- App.js             # Main component that sets up routing and app-wide context.
|-- index.js           # Entry point of the application where React is rendered.
public/                # Contains the index.html template for the app.
```

## Documentation

### Task Context (TaskContext.js)

The task context manages global state for tasks. It provides functions to add, delete, and edit tasks, and it also ensures that tasks are sorted by priority and due date before being displayed.

**Functions:**

- `addTask(newTask)` - Adds a new task and sorts the list.
- `editTask(updatedTask)` - Updates an existing task and re-sorts the list.
- `deleteTask(id)` - Deletes a task by its ID.
- `handleSearch(term)` - Filters tasks based on a search term (used in task titles and descriptions).
- `getTaskCategory(task)` - Determines the category for a task (Overdue, Upcoming, Completed) based on the due date and status.

### Task Management Logic

- **Overdue**: Tasks are categorized as Overdue if the due date has passed and the task is not completed.
- **Upcoming**: Tasks due today or in the future are categorized as Upcoming.
- **Completed**: Tasks marked as Completed are moved to the Completed category.

## Additional Notes

- **Browser Compatibility**: This app should work in modern browsers such as Chrome, Firefox, Safari, and Edge. Ensure your browser supports ES6+ features.
- **Data Persistence**: Tasks are stored in `localStorage`, which is cleared if the user clears their browser cache. Consider using a database for a more persistent solution in production.
