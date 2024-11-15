// TaskContext.js
import React, { createContext, useState, useEffect, useMemo } from 'react';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [showAddTaskForm, setShowAddTaskForm] = useState(false);
    const [filters, setFilters] = useState({
        priority: '',
        completion: ''
    });

    const sortTasks = (taskList) => {
        return taskList.sort((a, b) => {
            const priorityOrder = { 'High': 1, 'Medium': 2, 'Low': 3 };
            const priorityComparison = priorityOrder[a.priority] - priorityOrder[b.priority];
            if (priorityComparison !== 0) return priorityComparison;
            return new Date(a.dueDate) - new Date(b.dueDate);
        });
    };

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(sortTasks(savedTasks));
    }, []);

    useEffect(() => {
        if (tasks.length > 0)
            localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
        setShowAddTaskForm(false);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const editTask = (updatedTask) => {
        const updatedTasks = tasks.map((task) =>
            task.id === updatedTask.id ? updatedTask : task
        );
        setTasks(sortTasks(updatedTasks));
    };

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const getTaskCategory = (task) => {
        const today = new Date();
        const dueDate = new Date(task.dueDate);

        if (task.status === 'Completed') return 'Completed';
        if (dueDate.toDateString() === today.toDateString()) return 'Upcoming';
        if (dueDate < today) return 'Overdue';

        return 'Upcoming';
    };

    const categorizedTasks = useMemo(() => {
        const searchFilterTasks = tasks.filter(task =>
            task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            task.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        const filteredTasks = searchFilterTasks.filter(task => {
            const matchesPriority = filters.priority ? task.priority === filters.priority : true;
            const matchesCompletion = filters.completion
                ? (filters.completion === 'Completed' ? getTaskCategory(task) === 'Completed' : getTaskCategory(task) !== 'Completed')
                : true;
            return matchesPriority && matchesCompletion;
        });
        return {
            overdueTasks: filteredTasks.filter(task => getTaskCategory(task) === 'Overdue'),
            upcomingTasks: filteredTasks.filter(task => getTaskCategory(task) === 'Upcoming'),
            completedTasks: filteredTasks.filter(task => getTaskCategory(task) === 'Completed')
        };
    }, [tasks, searchTerm, filters.priority, filters.completion]);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const clearFilters = () => {
        setFilters({
            priority: '',
            completion: ''
        });
    };

    const handleToggleCompleted = (updatedTask) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === updatedTask.id ? updatedTask : task
            )
        );
    };

    return (
        <TaskContext.Provider value={{
            tasks,
            addTask,
            deleteTask,
            editTask,
            searchTerm,
            handleSearch,
            overdueTasks: categorizedTasks.overdueTasks,
            upcomingTasks: categorizedTasks.upcomingTasks,
            completedTasks: categorizedTasks.completedTasks,
            showAddTaskForm,
            setShowAddTaskForm,
            filters,
            handleFilterChange,
            clearFilters,
            handleToggleCompleted
        }}>
            {children}
        </TaskContext.Provider>
    );
};

export default TaskContext;
