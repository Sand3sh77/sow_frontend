import React from 'react';
import { Search } from 'lucide-react';
import './searchBar.css';

const SearchBar = ({ placeholder, value, onChange }) => {
    return (
        <div className="search-bar">
            <input
                type="text"
                className="search-input"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
            <button className="search-button">
                <Search strokeWidth='2' />
            </button>
        </div>
    );
};

export default SearchBar;