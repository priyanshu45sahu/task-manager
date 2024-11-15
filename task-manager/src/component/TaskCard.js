// TaskCard.js
import React from 'react';
import Task from './Task';

const TaskCard = ({ title, tasks, onEdit, onDelete, onToggleCompleted }) => {
    return (
        <section className="task-section">
            <h3>{title}</h3>
            {tasks.map(task => (
                <Task
                    key={task.id}
                    task={task}
                    onEdit={onEdit}
                    onDelete={onDelete}
                    onToggleCompleted={onToggleCompleted}
                />
            ))}
        </section>
    );
};

export default TaskCard;
