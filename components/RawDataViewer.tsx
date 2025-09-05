import React, { useState, useMemo } from 'react';
import { rawData } from '../data/rawData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const datasetNames = Object.keys(rawData);

const chartColors = ['#33576F', '#498C6D', '#F6D982', '#D95E3D', '#8C4A82', '#5591B5', '#C7D9E5'];

const parseRawValue = (value: string | number): number | null => {
    if (typeof value === 'number') return value;
    if (typeof value !== 'string' || value.trim() === '') return null;
    
    // Remove formatting characters like '%', 'x', and ',' before parsing
    const cleanedValue = value.replace(/%|x|,/g, '').trim();
    const num = parseFloat(cleanedValue);
    
    return isNaN(num) ? null : num;
};

export const RawDataViewer: React.FC = () => {
    const [selectedDataset, setSelectedDataset] = useState(datasetNames[0]);
    const [selectedMarkets, setSelectedMarkets] = useState<string[]>([]);
    
    const dataset = rawData[selectedDataset as keyof typeof rawData];
    if (!dataset) {
        return <div>Error: Dataset not found.</div>;
    }
    const { headers, data } = dataset;
    const yearHeaders = headers.filter(h => h !== 'Market');

    const handleMarketSelect = (marketName: string) => {
        setSelectedMarkets(prev => 
            prev.includes(marketName) 
                ? prev.filter(m => m !== marketName) 
                : [...prev, marketName]
        );
    };

    const chartData = useMemo(() => {
        if (selectedMarkets.length === 0) return [];
        
        const selectedMarketData = data.filter(row => selectedMarkets.includes(row['Market'] as string));
        
        return yearHeaders.map(year => {
            const dataPoint: { name: string; [key: string]: string | number | null } = { name: year };
            
            selectedMarketData.forEach(marketRow => {
                const marketName = marketRow['Market'] as string;
                const value = marketRow[year as keyof typeof marketRow];
                dataPoint[marketName] = parseRawValue(value);
            });
            
            return dataPoint;
        });
    }, [selectedDataset, selectedMarkets, data, headers]);


    const CustomTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white p-3 border border-slate-200 rounded-lg shadow-lg z-50 min-w-[200px]">
                    <p className="font-bold text-[#2F4157] mb-2 font-heading">{label}</p>
                    <div className="space-y-1">
                        {payload.map((pld: any) => (
                             <div key={pld.dataKey} className="flex justify-between items-center text-sm">
                                <div className="flex items-center">
                                    <span className="w-2.5 h-2.5 rounded-full mr-2" style={{ backgroundColor: pld.stroke }}></span>
                                    <span className="text-[#33576F]">{pld.dataKey}:</span>
                                </div>
                                <span className="font-semibold text-[#2F4157]">{pld.value?.toLocaleString() ?? 'N/A'}</span>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }
        return null;
    };


    return (
        <div className="space-y-8">
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-[#C7D9E5]">
                 <h3 className="text-xl font-bold text-[#2F4157]">{selectedDataset}</h3>
                 <p className="text-sm text-[#5591B5] mt-1 mb-4">Select markets from the table below to compare trends over time.</p>
                {selectedMarkets.length === 0 ? (
                    <div className="flex items-center justify-center h-80 bg-slate-50 rounded-lg mt-4 border-2 border-dashed border-slate-200">
                        <p className="text-[#5591B5]">Select one or more markets from the table below to visualize the data.</p>
                    </div>
                ) : (
                    <ResponsiveContainer width="100%" height={400}>
                        <LineChart data={chartData} margin={{ top: 20, right: 20, left: 10, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0"/>
                            <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#33576F' }} />
                            <YAxis tick={{ fontSize: 12, fill: '#33576F' }} tickFormatter={(tick) => tick.toLocaleString()} />
                            <Tooltip content={<CustomTooltip />} />
                            <Legend wrapperStyle={{ paddingTop: '20px' }} />
                            {selectedMarkets.map((market, index) => (
                                <Line key={market} type="monotone" dataKey={market} stroke={chartColors[index % chartColors.length]} strokeWidth={2.5} dot={{ r: 4 }} activeDot={{ r: 8 }} />
                            ))}
                        </LineChart>
                    </ResponsiveContainer>
                )}
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-[#C7D9E5]">
                <div className="mb-6">
                    <label htmlFor="dataset-select" className="block text-sm font-medium text-[#33576F] mb-2">
                        Select Dataset to View:
                    </label>
                    <select 
                        id="dataset-select"
                        value={selectedDataset}
                        onChange={(e) => {
                            setSelectedDataset(e.target.value);
                            setSelectedMarkets([]); // Reset selection when dataset changes
                        }}
                        className="mt-1 block w-full max-w-md pl-3 pr-10 py-2 text-base border-[#C7D9E5] focus:outline-none focus:ring-[#33576F] focus:border-[#33576F] sm:text-sm rounded-md shadow-sm"
                    >
                        {datasetNames.map(name => <option key={name} value={name}>{name.replace(/_/g, ' ')}</option>)}
                    </select>
                </div>
                
                <div className="overflow-x-auto border border-[#C7D9E5] rounded-lg">
                    <table className="min-w-full divide-y divide-[#C7D9E5]">
                        <thead className="bg-[#FDF6EE]/80">
                            <tr>
                                <th scope="col" className="px-4 py-3 text-left text-xs font-semibold text-[#2F4157] uppercase tracking-wider sticky left-0 bg-[#FDF6EE] z-20 w-16">
                                    Select
                                </th>
                                {headers.map((header, index) => (
                                    <th 
                                        key={header} 
                                        scope="col"
                                        className={`px-4 py-3 text-left text-xs font-semibold text-[#2F4157] uppercase tracking-wider ${index === 0 ? 'sticky left-16 bg-[#FDF6EE] z-10' : ''}`}
                                    >
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-[#C7D9E5]">
                            {data.map((row, rowIndex) => (
                                <tr key={rowIndex} className="hover:bg-[#C7D9E5]/30 transition-colors duration-150">
                                     <td className="px-4 py-3 whitespace-nowrap sticky left-0 bg-white z-10 w-16">
                                        <div className="flex items-center justify-center">
                                            <input
                                                type="checkbox"
                                                checked={selectedMarkets.includes(row['Market'] as string)}
                                                onChange={() => handleMarketSelect(row['Market'] as string)}
                                                className="h-4 w-4 rounded border-gray-300 text-[#33576F] focus:ring-[#33576F] cursor-pointer"
                                                aria-label={`Select ${row['Market']} for charting`}
                                            />
                                        </div>
                                    </td>
                                    {headers.map((header, colIndex) => (
                                        <td 
                                            key={header} 
                                            className={`px-4 py-3 whitespace-nowrap text-sm ${colIndex === 0 ? 'sticky left-16 bg-white font-medium text-[#2F4157]' : 'text-[#33576F]'}`}
                                        >
                                            {row[header as keyof typeof row] || ''}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}