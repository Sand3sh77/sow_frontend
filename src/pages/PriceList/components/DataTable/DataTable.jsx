import React, { useState } from 'react';
import { ArrowDown, ArrowRight, Ellipsis } from 'lucide-react';
import { useColumns } from '../../hooks';
import './dataTable.css';

const DataTable = ({ data }) => {
    const [sortColumn, setSortColumn] = useState(null);
    const [sortDirection, setSortDirection] = useState('asc');

    const columns = useColumns();

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
                        {columns.map(column => (
                            <th key={column.key} onClick={() => handleSort(column.key)} className={column.key}>
                                <div className="header-content">
                                    <span>{column.label}</span>
                                    {column.key == "articleNo" && <ArrowDown stroke='#92e9eb' />}
                                    {column.key == "product" && <ArrowDown stroke='#98e8a9' />}
                                </div>
                            </th>
                        ))}
                        <th className="actions-col"></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <>
                            {
                                index === data.length - 1 &&
                                <div className='last-row'><ArrowRight stroke='#92e9eb' /></div>
                            }
                            <tr key={index}>
                                <td className="article-no">{row.article_no}</td>
                                <td className="product">{row.name}</td>
                                <td className="in-price">{row.in_price}</td>
                                <td className="price">{row.price}</td>
                                <td className="unit">{row.unit}</td>
                                <td className="in-stock">{row.in_stock}</td>
                                <td className="description">{row.description}</td>
                                <td className="actions-col">
                                    <button className="more-actions">
                                        <Ellipsis strokeWidth={1} fill='black' />
                                    </button>
                                </td>
                            </tr>
                        </ >
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;
