import React from 'react';

interface DashboardCardProps {
    title: string;
    value: string;
    metric: string;
    icon: React.ReactNode;
}

export const DashboardCard: React.FC<DashboardCardProps> = ({ title, value, metric, icon }) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-[#C7D9E5] flex items-center space-x-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="bg-[#C7D9E5] p-3 rounded-full">
                <span className="text-[#33576F] h-7 w-7 block">{icon}</span>
            </div>
            <div>
                <p className="text-sm text-[#5591B5] font-medium">{title}</p>
                <p className="text-xl font-bold text-[#2F4157] font-heading">{value}</p>
                <p className="text-sm font-semibold text-[#33576F]">{metric}</p>
            </div>
        </div>
    );
};