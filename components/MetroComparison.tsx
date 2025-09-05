import React from 'react';
import { MetroData, MetroProfileData } from '../types';
import { CloseIcon } from './icons';

interface MetroComparisonProps {
    metros: MetroData[];
    profiles: MetroProfileData[];
    onClose: () => void;
}

type MetricRow = {
    label: string;
    key: keyof MetroData;
    higherIsBetter: boolean;
    format: (value: any) => string;
};

const metricsToCompare: MetricRow[] = [
    { label: 'Composite Score', key: 'Composite_0_100', higherIsBetter: true, format: v => v.toFixed(1) },
    { label: 'YoY Pop Growth', key: 'YoY_Pop_Growth', higherIsBetter: true, format: v => `${v.toFixed(2)}%` },
    { label: 'Net Domestic Migration / 1k', key: 'Net_Dom_Mig_per_1k', higherIsBetter: true, format: v => v.toFixed(1) },
    { label: 'YoY Job Growth', key: 'CES_YoY', higherIsBetter: true, format: v => `${v.toFixed(2)}%` },
    { label: 'Unemployment Rate', key: 'Unemp_Rate', higherIsBetter: false, format: v => `${v.toFixed(1)}%` },
    { label: 'YoY Real Wage Growth', key: 'QCEW_Real_Wage_YoY', higherIsBetter: true, format: v => `${v.toFixed(2)}%` },
    { label: 'Rent-to-Income Ratio', key: 'Rent_to_Income', higherIsBetter: false, format: v => `${(v * 100).toFixed(1)}%` },
    { label: 'Severe Renter Cost Burden', key: 'Severe_Cost_Burden_Renters_Percent', higherIsBetter: false, format: v => `${v.toFixed(1)}%` },
    { label: 'Tech LQ', key: 'LQ_Tech', higherIsBetter: true, format: v => v.toFixed(2) },
];

type ProfileRow = {
    label: string;
    key: keyof MetroProfileData;
}

const profilesToCompare: ProfileRow[] = [
    { label: 'Snapshot', key: 'snapshot' },
    { label: 'Labor Market', key: 'laborMarket' },
    { label: 'Migration & Affordability', key: 'migrationAffordability' },
    { label: 'Forward View', key: 'forwardView' },
];

export const MetroComparison: React.FC<MetroComparisonProps> = ({ metros, profiles, onClose }) => {
    
    const getBestValue = (key: keyof MetroData, higherIsBetter: boolean) => {
        const values = metros.map(m => m[key] as number).filter(v => typeof v === 'number');
        if (values.length === 0) return null;
        return higherIsBetter ? Math.max(...values) : Math.min(...values);
    };

    return (
        <div 
            className="fixed inset-0 bg-[#2F4157] bg-opacity-75 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="comparison-title"
        >
            <div 
                className="bg-white w-full max-w-7xl h-full max-h-[90vh] rounded-xl shadow-2xl flex flex-col border border-[#C7D9E5]"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="p-4 sm:p-6 border-b border-[#C7D9E5] flex justify-between items-center flex-shrink-0 bg-[#FDF6EE]/70 rounded-t-xl">
                    <h2 id="comparison-title" className="text-xl sm:text-2xl font-bold text-[#2F4157]">Metropolitan Area Comparison</h2>
                    <button onClick={onClose} className="text-slate-500 hover:text-red-600 hover:bg-red-100 p-1 rounded-full transition-colors" aria-label="Close comparison view">
                        <CloseIcon />
                    </button>
                </div>

                <div className="flex-1 overflow-auto">
                    <table className="min-w-full">
                        <thead className="bg-[#FDF6EE]/80 sticky top-0 z-10">
                            <tr>
                                <th scope="col" className="w-1/4 sm:w-1/5 px-4 sm:px-6 py-3 text-left text-xs font-semibold text-[#2F4157] uppercase tracking-wider">Metric</th>
                                {metros.map(metro => (
                                    <th key={metro.MSA} scope="col" className="px-4 sm:px-6 py-3 text-left text-sm font-semibold text-[#2F4157] tracking-wide">
                                        {metro.MSA.split(',')[0]}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-[#C7D9E5]">
                            {metricsToCompare.map(metric => {
                                const bestValue = getBestValue(metric.key, metric.higherIsBetter);
                                return (
                                    <tr key={metric.key}>
                                        <th scope="row" className="px-4 sm:px-6 py-4 text-sm font-medium text-[#33576F] text-left align-top">{metric.label}</th>
                                        {metros.map(metro => {
                                            const value = metro[metric.key] as number;
                                            const isBest = value === bestValue;
                                            return (
                                                <td key={metro.MSA} className={`px-4 sm:px-6 py-4 text-sm whitespace-nowrap ${isBest ? `bg-[#BBCF9A]/30 text-[#498C6D] font-semibold` : 'text-[#33576F]'}`}>
                                                    {value != null ? metric.format(value) : 'N/A'}
                                                </td>
                                            )
                                        })}
                                    </tr>
                                )
                            })}
                             {profilesToCompare.map(prof => (
                                <tr key={prof.key}>
                                    <th scope="row" className="px-4 sm:px-6 py-4 text-sm font-medium text-[#33576F] text-left align-top">{prof.label}</th>
                                    {metros.map(metro => {
                                        const metroProfile = profiles.find(p => p.MSA === metro.MSA);
                                        const value = metroProfile ? metroProfile[prof.key] : 'N/A';
                                        return (
                                            <td key={metro.MSA} className="px-4 sm:px-6 py-4 text-sm text-[#33576F] align-top">
                                               <p className="whitespace-normal leading-relaxed">{value as string}</p>
                                            </td>
                                        )
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};