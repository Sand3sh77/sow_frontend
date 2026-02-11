import { useEffect, useState } from 'react';
import { ArrowDown, ArrowRight, Ellipsis } from 'lucide-react';
import { useColumns } from '../../hooks';
import { editProducts } from '../../../../api';
import toast from 'react-hot-toast';
import './dataTable.css';

const DataTable = ({ data }) => {
    const [tableData, setTableData] = useState([]);
    const [activeRow, setActiveRow] = useState(null);
    const columns = useColumns();

    useEffect(() => {
        setTableData(data);
    }, [data])

    const handleChange = (index, id, field, value) => {
        setTableData(prev =>
            prev.map(row =>
                row.id === id ? { ...row, [field]: value } : row
            )
        );
    };

    console.log(activeRow);

    const handleBlur = async (id, field, value) => {
        try {
            if (value === data.find(row => row.id === id)[field]) return;
            await editProducts({ id, data: { [field]: isNaN(value) ? value : +value } });
            toast.success("Updated successfully");
        } catch (error) {
            console.error("Update failed", error);
            if (error.response.data.error) toast.error(error.response.data.details[0]);
            else toast.error(error.response.data.message);
        }
    };

    return (
        <div className="data-table-container">
            <table className="data-table">
                <thead>
                    <tr>
                        <th className="active-row-col"></th>
                        {columns.map(column => (
                            <th key={column.key} className={column.key}>
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
                    {tableData.map((row, index) => (
                        <tr key={row.id}>
                            <div className={index === activeRow ? 'active-row' : 'inactive-row'}><ArrowRight stroke='#92e9eb' /></div>

                            {columns.map(col => (
                                <td key={col.key} className={col.key}>
                                    <div className="table-input">
                                        <input
                                            value={row[col.key] ?? ''}
                                            onChange={(e) =>
                                                handleChange(index, row.id, col.key, e.target.value)
                                            }
                                            onBlur={(e) =>
                                                handleBlur(row.id, col.key, e.target.value)
                                            }
                                            onKeyDownCapture={(e) =>
                                                e.key === 'Enter' &&
                                                handleBlur(row.id, col.key, e.target.value)
                                            }
                                            onClick={() => setActiveRow(index)}
                                        />
                                    </div>
                                </td>
                            ))}
                            <td className="actions-col">
                                <button className="more-actions">
                                    <Ellipsis size={18} />
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
