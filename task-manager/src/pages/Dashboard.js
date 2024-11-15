// Dashboard.js
import React, { useContext } from 'react';
import Layout from '../component/layout/Layout.js';
import TaskCard from '../component/TaskCard.js';
import AddTask from '../component/AddTask.js';
import TaskContext from '../context/TaskContext.js';
import '../style/Dashboard.css';


const Dashboard = () => {
    const { overdueTasks, upcomingTasks, completedTasks, addTask, deleteTask, editTask, showAddTaskForm, setShowAddTaskForm, handleToggleCompleted } = useContext(TaskContext);

    return (
        <Layout>
            <div>
                <main className="task-container">
                    <div className='add-task-button'>
                        <button onClick={() => setShowAddTaskForm(!showAddTaskForm)}>
                            {showAddTaskForm ? "Close Add Task Form" : "Add Task"}
                        </button>
                    </div>
                    <div className="add-task-container">
                        {showAddTaskForm && <AddTask onAddTask={addTask} />}
                    </div>

                    <TaskCard
                        title="Overdue Tasks"
                        tasks={overdueTasks}
                        onEdit={editTask}
                        onDelete={deleteTask}
                        onToggleCompleted={handleToggleCompleted}
                    />
                    <TaskCard
                        title="Upcoming Tasks"
                        tasks={upcomingTasks}
                        onEdit={editTask}
                        onDelete={deleteTask}
                        onToggleCompleted={handleToggleCompleted}
                    />
                    <TaskCard
                        title="Completed Tasks"
                        tasks={completedTasks}
                        onEdit={editTask}
                        onDelete={deleteTask}
                        onToggleCompleted={handleToggleCompleted}
                    />
                </main>
            </div>
        </Layout>
    );
};

export default Dashboard;
