import React from 'react';

interface HeaderProps {
    title: string;
    icon: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ title, icon }) => {
    return (
        <div className="flex items-center space-x-4">
            <div className="bg-[#C7D9E5] p-3 rounded-full">
                <span className="text-[#33576F] h-8 w-8 block">{icon}</span>
            </div>
            <h1 className="text-4xl font-extrabold text-[#2F4157] tracking-tight">{title}</h1>
        </div>
    );
};