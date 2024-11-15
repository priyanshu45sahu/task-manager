import React, { useContext } from 'react';
import '../style/Search.css';
import TaskContext from '../context/TaskContext';

const Search = () => {
    const { handleSearch } = useContext(TaskContext);
    return (
        <div>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search tasks..."
                    onChange={(event) => handleSearch(event.target.value)}
                />

            </div>
        </div>
    )
}

export default Search