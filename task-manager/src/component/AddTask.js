// AddTaskForm.js
import React, { useState } from 'react';
import '../style/AddTask.css'

const AddTask = ({ onAddTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState('Low');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            id: Date.now(), // unique ID
            title,
            description,
            dueDate,
            priority,
            status: 'Upcoming', // default status
        };
        onAddTask(newTask);
        setTitle('');
        setDescription('');
        setDueDate('');
        setPriority('Low');
    };

    return (
        <form onSubmit={handleSubmit} className="add-task-form">
            <h3>Add New Task</h3>
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
        </form>
    );
};

export default AddTask;
