import React from 'react';
import './actionButton.css';

export default function ActionButton({ label, icon, handleButtonClick }) {
    return (
        <button className="action-btn new-product" onClick={handleButtonClick}>
            <span className="btn-text">{label}</span>
            <span className="btn-icon green">
                {icon}
            </span>
        </button>
    )
}
