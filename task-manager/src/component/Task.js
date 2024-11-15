import React, { useState } from 'react';
import '../style/Task.css';

const Task = ({ task, onEdit, onDelete, onToggleCompleted }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState('Low');
    const [editing, setEditing] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            id: task.id,
            title,
            description,
            dueDate,
            priority,
            status: 'Upcoming', // default status
        };
        onEdit(newTask);
        setEditing(!editing);
    };

    const handleToggleCompleted = () => {
        // Toggle between "Completed" and "Upcoming" statuses
        const updatedTask = {
            ...task,
            status: task.status === 'Completed' ? 'Upcoming' : 'Completed'
        };
        onToggleCompleted(updatedTask);
    };

    const editingTask = (id) => {
        setEditing(!editing);
        setTitle(task.title);
        setDescription(task.description);
        setDueDate(task.dueDate);
        setPriority(task.priority);
    }
    return (
        <div >
            <div className="task-details">
                <div className="task-title">{task.title}</div>
                <div className='task-description'>{task.description}</div>
                <div className="task-feature">
                    <span className="task-priority">{task.priority}</span>
                    <span className="task-duedate">{task.dueDate}</span>
                    <button className="task-button edit-btn" onClick={() => editingTask(task.id)}>Edit</button>
                    <button className="task-button delete-btn" onClick={() => onDelete(task.id)}>Delete</button>
                    <button
                        className={`task-button ${task.status === 'Completed' ? 'completed-btn' : 'incomplete-btn'}`}
                        onClick={handleToggleCompleted}
                    >
                        {task.status === 'Completed' ? 'Mark Incomplete' : 'Mark Completed'}
                    </button>
                </div>
            </div>
            {editing ? <form onSubmit={handleSubmit} className="add-task-form">
                <h2>Edit Task</h2>
                <input
                    type="text"
                    placeholder='Title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea
                    style={{ width: '90%' }}
                    placeholder='Description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <div className="form-row">
                    <div className="form-control">
                        <label>
                            Due Date:
                            <input
                                type="date"
                                value={dueDate}
                                onChange={(e) => setDueDate(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div className="form-control">
                        <label>
                            Priority:
                            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                            </select>
                        </label>
                    </div>
                </div>
                <button type="submit">Add Task</button>
            </form> : <></>}
        </div>
    );
};

export default Task;
