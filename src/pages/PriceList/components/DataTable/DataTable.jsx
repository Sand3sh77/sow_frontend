import React, { useState } from 'react';
import { columns } from '../../constants';
import './dataTable.css';

const DataTable = ({ data }) => {
    const [sortColumn, setSortColumn] = useState(null);
    const [sortDirection, setSortDirection] = useState('asc');

    const handleSort = (columnKey) => {
        if (sortColumn === columnKey) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortColumn(columnKey);
            setSortDirection('desc');
        }
    };

    return (
        <div className="data-table-container">
            <table className="data-table">
                <thead>
                    <tr>
                        <th className="checkbox-col">
                            <div className="checkbox-wrapper">
                                <input type="checkbox" />
                            </div>
                        </th>
                        {columns.map(column => (
                            <th key={column.key} onClick={() => handleSort(column.key)}>
                                <div className="header-content">
                                    <span>{column.label}</span>
                                    <svg
                                        className={`sort-icon ${sortColumn === column.key ? sortDirection : ''}`}
                                        width="12"
                                        height="12"
                                        viewBox="0 0 12 12"
                                    >
                                        <path d="M6 3L9 7H3L6 3Z" fill="#666" />
                                    </svg>
                                </div>
                            </th>
                        ))}
                        <th className="actions-col"></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td className="checkbox-col">
                                <div className="checkbox-wrapper">
                                    <input type="checkbox" />
                                </div>
                            </td>
                            <td className="article-no">{row.article_no}</td>
                            <td className="product">{row.name}</td>
                            <td className="in-price">{row.in_price}</td>
                            <td className="price">{row.price}</td>
                            <td className="unit">{row.unit}</td>
                            <td className="in-stock">{row.in_stock}</td>
                            <td className="description">{row.description}</td>
                            <td className="actions-col">
                                <button className="more-actions">
                                    <svg width="4" height="16" viewBox="0 0 4 16">
                                        <circle cx="2" cy="2" r="2" fill="#999" />
                                        <circle cx="2" cy="8" r="2" fill="#999" />
                                        <circle cx="2" cy="14" r="2" fill="#999" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;