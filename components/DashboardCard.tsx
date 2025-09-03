import React from 'react';

interface DashboardCardProps {
    title: string;
    value: string;
    metric: string;
    icon: React.ReactNode;
}

export const DashboardCard: React.FC<DashboardCardProps> = ({ title, value, metric, icon }) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-center space-x-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="bg-blue-100 p-3 rounded-full">
                <span className="text-blue-600 h-7 w-7 block">{icon}</span>
            </div>
            <div>
                <p className="text-sm text-slate-500 font-medium">{title}</p>
                <p className="text-xl font-bold text-slate-800">{value}</p>
                <p className="text-sm font-semibold text-blue-600">{metric}</p>
            </div>
        </div>
    );
};