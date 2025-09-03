import React from 'react';
import { SortConfig, ColumnDefinition, MetroData } from '../types';
import { ArrowUpIcon, ArrowDownIcon } from './icons';

interface DataTableProps<T extends { MSA: string }> {
    data: T[];
    columns: ColumnDefinition<T>[];
    sortConfig: SortConfig<T> | null;
    onSort: (key: keyof T) => void;
    onRowClick: (item: T) => void;
    comparisonSelection: T[];
    onComparisonSelect: (item: T, isSelected: boolean) => void;
}

export const DataTable = <T extends { MSA: string },>({ data, columns, sortConfig, onSort, onRowClick, comparisonSelection, onComparisonSelect }: DataTableProps<T>): React.ReactElement => {
    
    const getSortIcon = (key: keyof T) => {
        if (!sortConfig || sortConfig.key !== key) {
            return <span className="w-4 h-4 text-slate-400 opacity-30 group-hover:opacity-100 transition-opacity"></span>;
        }
        if (sortConfig.direction === 'ascending') {
            return <span className="w-4 h-4 text-blue-600"><ArrowUpIcon /></span>;
        }
        return <span className="w-4 h-4 text-blue-600"><ArrowDownIcon /></span>;
    };

    const handleCheckboxChange = (item: T) => {
        const isSelected = comparisonSelection.some(m => m.MSA === item.MSA);
        onComparisonSelect(item, !isSelected);
    };

    const isMaxSelected = comparisonSelection.length >= 4;

    return (
        <div className="overflow-hidden">
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200">
                    <thead className="bg-slate-100">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                                Compare
                            </th>
                            {columns.map((col) => (
                                <th
                                    key={col.key as string}
                                    scope="col"
                                    className={`px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider ${col.sortable ? 'cursor-pointer group' : ''}`}
                                    onClick={() => col.sortable && onSort(col.key)}
                                >
                                    <div className="flex items-center space-x-1">
                                       <span>{col.label}</span>
                                       {col.sortable && getSortIcon(col.key)}
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {data.map((item, index) => {
                            const isSelected = comparisonSelection.some(m => m.MSA === item.MSA);
                            const isDisabled = isMaxSelected && !isSelected;
                            return (
                                <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'} hover:bg-blue-50 transition-colors duration-150`}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center justify-center">
                                             <input
                                                type="checkbox"
                                                checked={isSelected}
                                                disabled={isDisabled}
                                                onChange={() => handleCheckboxChange(item)}
                                                className={`h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 ${isDisabled ? 'cursor-not-allowed bg-slate-200' : 'cursor-pointer'}`}
                                                aria-label={`Select ${item.MSA} for comparison`}
                                            />
                                        </div>
                                    </td>
                                    {columns.map((col) => (
                                        <td 
                                            key={col.key as string} 
                                            className="px-6 py-4 whitespace-nowrap text-sm text-slate-700 cursor-pointer"
                                            onClick={() => onRowClick(item)}
                                        >
                                            {col.format ? col.format((item as any)[col.key]) : (item as any)[col.key]}
                                        </td>
                                    ))}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};