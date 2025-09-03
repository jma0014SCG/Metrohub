import React from 'react';
import { View } from '../types';
import { PopulationIcon, BriefcaseIcon, DollarIcon, BrainIcon, HomeIcon, BarChartIcon, StarIcon, ChartMixedIcon } from './icons';

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
    const activeClasses = 'bg-blue-600 text-white shadow-md';
    const inactiveClasses = 'text-slate-300 hover:bg-slate-700 hover:text-white';

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
    ];
    
    return (
        <aside className="w-64 bg-slate-800 text-white flex-shrink-0 flex flex-col shadow-lg">
            <div className="h-20 flex items-center gap-x-3 justify-center px-4 border-b border-slate-700">
                <span className="w-8 h-8 text-blue-400"><BarChartIcon /></span>
                <h1 className="text-xl font-bold text-white whitespace-nowrap">Metro Dynamics</h1>
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
            <div className="p-4 border-t border-slate-700 text-xs text-slate-400">
                <p>&copy; 2025 Metro Analysis Group</p>
                <p>Data as of July 2025</p>
            </div>
        </aside>
    );
};