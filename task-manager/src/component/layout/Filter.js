import React, { useContext } from 'react';
import '../../style/Filter.css';
import TaskContext from '../../context/TaskContext';

const Filter = () => {
    const { filters, handleFilterChange, clearFilters } = useContext(TaskContext);

    return (
        <div>
            <aside className="filter-sidebar">
                <h2>Filters</h2>

                {/* Priority Filter */}
                <div className="filter-section">
                    <h3>Priority</h3>
                    <form>
                        <label>
                            <input
                                type="radio"
                                name="priority"
                                value="High"
                                checked={filters.priority === 'High'}
                                onChange={handleFilterChange}
                            />
                            High
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="priority"
                                value="Medium"
                                checked={filters.priority === 'Medium'}
                                onChange={handleFilterChange}
                            />
                            Medium
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="priority"
                                value="Low"
                                checked={filters.priority === 'Low'}
                                onChange={handleFilterChange}
                            />
                            Low
                        </label>
                    </form>
                </div>

                {/* Completion Filter */}
                <div className="filter-section">
                    <h3>Completion</h3>
                    <form>
                        <label>
                            <input
                                type="radio"
                                name="completion"
                                value="Completed"
                                checked={filters.completion === 'Completed'}
                                onChange={handleFilterChange}
                            />
                            Completed
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="completion"
                                value="Pending"
                                checked={filters.completion === 'Pending'}
                                onChange={handleFilterChange}
                            />
                            Pending
                        </label>
                    </form>
                </div>

                {/* Clear Filter Button */}
                <button className="clear-filter-button" onClick={clearFilters}>
                    Clear Filters
                </button>
            </aside>
        </div>
    );
};

export default Filter;
