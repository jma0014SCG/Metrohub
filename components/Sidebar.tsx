import React from 'react';
import { View } from '../types';
import { PopulationIcon, BriefcaseIcon, DollarIcon, HomeIcon, BarChartIcon, StarIcon, ChartMixedIcon, DocumentIcon, MapPinIcon } from './icons';

interface SidebarProps {
    currentView: View;
    setView: (view: View) => void;
}

const NavItem: React.FC<{
    view: View;
    label: string;
    icon: React.ReactNode;
    currentView: View;
    onClick: (view: View) => void;
}> = ({ view, label, icon, currentView, onClick }) => {
    const isActive = view === currentView;
    const baseClasses = 'flex items-center w-full px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 group';
    const activeClasses = 'bg-[#33576F] text-white shadow-md';
    const inactiveClasses = 'text-[#C7D9E5] hover:bg-[#33576F]/80 hover:text-white';

    return (
        <li>
            <button onClick={() => onClick(view)} className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}>
                <span className="w-6 h-6 mr-3">{icon}</span>
                <span className="flex-1 text-left">{label}</span>
            </button>
        </li>
    );
};

export const Sidebar: React.FC<SidebarProps> = ({ currentView, setView }) => {
    const navItems = [
        { view: View.Overview, label: "Overview", icon: <BarChartIcon /> },
        { view: View.Population, label: "Population", icon: <PopulationIcon /> },
        { view: View.Jobs, label: "Jobs", icon: <BriefcaseIcon /> },
        { view: View.Wages, label: "Wages", icon: <DollarIcon /> },
        { view: View.Sectors, label: "Sectors", icon: <ChartMixedIcon /> },
        { view: View.Affordability, label: "Affordability", icon: <HomeIcon /> },
        { view: View.Scorecard, label: "Scorecard", icon: <StarIcon /> },
        { view: View.MarketIQ, label: "MarketIQ", icon: <MapPinIcon /> },
        { view: View.RawData, label: "Raw Data", icon: <DocumentIcon /> },
    ];
    
    return (
        <aside className="w-64 bg-[#2F4157] text-white flex-shrink-0 flex flex-col shadow-lg">
            <div className="h-20 flex items-center justify-center px-4 border-b border-[#33576F]">
                <h1 className="text-2xl font-bold text-white whitespace-nowrap font-heading tracking-widest">STOCKBRIDGE</h1>
            </div>
            <nav className="flex-1 px-4 py-6">
                <ul className="space-y-2">
                    {navItems.map(item => (
                         <NavItem
                            key={item.view}
                            view={item.view}
                            label={item.label}
                            icon={item.icon}
                            currentView={currentView}
                            onClick={setView}
                        />
                    ))}
                </ul>
            </nav>
            <div className="p-4 border-t border-[#33576F] text-xs text-[#C7D9E5]/80">
                <p>&copy; 2025 STOCKBRIDGE</p>
                <p>Data as of July 2025</p>
            </div>
        </aside>
    );
};