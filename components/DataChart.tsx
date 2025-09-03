import React, { useState, useMemo, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Brush } from 'recharts';
import { View, MetroData } from '../types';

interface DataChartProps {
    data: MetroData[];
    view: View;
}

const METRIC_OPTIONS: Record<View, { key: keyof MetroData; label: string; format?: (v: number) => string; }[]> = {
    [View.Overview]: [],
    [View.Population]: [
        { key: 'YoY_Pop_Growth', label: 'YoY Population Growth', format: v => `${v.toFixed(2)}%` },
        { key: 'Net_Dom_Mig_per_1k', label: 'Net Domestic Migration per 1k' },
    ],
    [View.Jobs]: [
        { key: 'CES_YoY', label: 'YoY Job Growth', format: v => `${v.toFixed(2)}%` },
        { key: 'Unemp_Rate', label: 'Unemployment Rate', format: v => `${v.toFixed(2)}%` },
    ],
    [View.Wages]: [
        { key: 'QCEW_Real_Wage_YoY', label: 'YoY Real Wage Growth', format: v => `${v.toFixed(2)}%` },
        { key: 'CAGR_3yr_Wages', label: '3-Year Real Wage CAGR', format: v => `${v.toFixed(2)}%` },
    ],
    [View.Sectors]: [
        { key: 'LQ_Tech', label: 'Tech LQ' },
        { key: 'LQ_Logistics', label: 'Logistics LQ' },
    ],
    [View.Affordability]: [
        { key: 'Rent_to_Income', label: 'Rent-to-Income Ratio', format: v => `${(v * 100).toFixed(1)}%` },
        { key: 'Severe_Cost_Burden_Renters_Percent', label: 'Severe Renter Cost Burden', format: v => `${v.toFixed(1)}%` },
    ],
    [View.Scorecard]: [
        { key: 'Composite_0_100', label: 'Composite Score' },
        { key: 'Affordability_Score', label: 'Affordability Score' },
    ]
};

const barColors = ['#2563eb', '#60a5fa', '#f59e0b', '#ef4444'];

export const DataChart: React.FC<DataChartProps> = ({ data, view }) => {
    const metricOptions = METRIC_OPTIONS[view];
    const [selectedMetrics, setSelectedMetrics] = useState<Array<keyof MetroData>>([]);

    useEffect(() => {
        if (metricOptions.length > 0) {
            setSelectedMetrics([metricOptions[0].key]);
        } else {
            setSelectedMetrics([]);
        }
    }, [view]);

    const handleMetricChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const metricKey = event.target.value as keyof MetroData;
        setSelectedMetrics(prev =>
            prev.includes(metricKey)
                ? prev.filter(m => m !== metricKey)
                : [...prev, metricKey]
        );
    };

    const chartData = useMemo(() => {
        if (!data || data.length === 0 || selectedMetrics.length === 0) return [];

        const primaryMetric = selectedMetrics[0];
        
        const sorted = [...data].sort((a, b) => ((b[primaryMetric] as number) || 0) - ((a[primaryMetric] as number) || 0));
        const top10 = sorted.slice(0, 10);
        const bottom10 = sorted.slice(-10).reverse();

        const combined = [...top10, ...bottom10];
        
        return combined.map(d => {
            const entry: { name: string; [key: string]: any } = {
                name: d.MSA.split('-')[0],
            };
            selectedMetrics.forEach(metric => {
                entry[metric as string] = d[metric];
            });
            return entry;
        });
    }, [data, selectedMetrics]);

    if (metricOptions.length === 0) return null;

    const CustomTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white p-3 border border-slate-200 rounded-lg shadow-lg">
                    <p className="font-bold text-slate-800 mb-2">{label}</p>
                    {payload.map((pld: any) => {
                        const metricInfo = metricOptions.find(m => m.key === pld.dataKey);
                        const value = pld.value;
                        const formattedValue = metricInfo?.format 
                            ? metricInfo.format(value) 
                            : (typeof value === 'number' ? value.toLocaleString() : value);
                        
                        return (
                             <p key={pld.dataKey} className="text-sm" style={{ color: pld.fill }}>
                                <span className="font-semibold">{`${metricInfo?.label}:`}</span> {formattedValue}
                            </p>
                        );
                    })}
                </div>
            );
        }
        return null;
    };
    
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex justify-between items-start mb-6 flex-wrap gap-y-4">
                <div>
                    <h3 className="text-xl font-bold text-slate-800">Top & Bottom 10 Metros</h3>
                     <p className="text-sm text-slate-500 mt-1">Sorted by {metricOptions.find(m => m.key === selectedMetrics[0])?.label || 'first selected metric'}</p>
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-2 p-3 bg-slate-50 rounded-lg border">
                    {metricOptions.map(option => (
                        <div key={option.key as string} className="flex items-center">
                            <input
                                type="checkbox"
                                id={`metric-${option.key as string}`}
                                value={option.key as string}
                                checked={selectedMetrics.includes(option.key)}
                                onChange={handleMetricChange}
                                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                            />
                            <label htmlFor={`metric-${option.key as string}`} className="ml-2 text-sm text-slate-700 select-none cursor-pointer">
                                {option.label}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={chartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#475569' }} angle={-20} textAnchor="end" height={60} interval={0} />
                    <YAxis tick={{ fontSize: 12, fill: '#475569' }} />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(239, 246, 255, 0.7)' }} />
                    <Legend wrapperStyle={{ paddingTop: '20px' }} />
                     {selectedMetrics.map((metric, index) => {
                         const metricInfo = metricOptions.find(m => m.key === metric);
                         return (
                            <Bar 
                                key={metric as string}
                                dataKey={metric as string}
                                name={metricInfo?.label}
                                fill={barColors[index % barColors.length]} 
                            />
                         );
                    })}
                    <Brush dataKey="name" height={30} stroke="#60a5fa" fill="rgba(239, 246, 255, 0.6)" y={360}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};