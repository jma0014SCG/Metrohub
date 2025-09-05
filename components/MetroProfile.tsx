import React from 'react';
import { MetroData, MetroProfileData } from '../types';
import { CloseIcon } from './icons';

interface MetroProfileProps {
    metro: MetroData;
    profile: MetroProfileData | undefined;
    onClose: () => void;
}

const Stat: React.FC<{ label: string; value: string | number | undefined }> = ({ label, value }) => (
    <div className="text-center md:text-left">
        <p className="text-sm text-[#5591B5]">{label}</p>
        <p className="text-2xl font-bold text-[#2F4157]">{value ?? 'N/A'}</p>
    </div>
);

export const MetroProfile: React.FC<MetroProfileProps> = ({ metro, profile, onClose }) => {
    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="metro-profile-title"
        >
            <div 
                className="w-full max-w-2xl bg-white h-full shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out translate-x-0"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="p-6 border-b border-[#C7D9E5] flex justify-between items-center bg-[#FDF6EE]/70">
                    <h2 id="metro-profile-title" className="text-2xl font-bold text-[#2F4157]">{metro.MSA}</h2>
                    <button onClick={onClose} className="text-slate-500 hover:text-red-600 hover:bg-red-100 p-1 rounded-full transition-colors" aria-label="Close metro profile">
                        <CloseIcon />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-8">
                    <div>
                         <h3 className="text-lg font-semibold text-[#2F4157] mb-4 pb-2 border-b">Key Metrics</h3>
                         <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            <Stat label="Composite Score" value={metro.Composite_0_100 != null ? metro.Composite_0_100.toFixed(1) : undefined} />
                            <Stat label="YoY Pop Growth" value={metro.YoY_Pop_Growth != null ? `${metro.YoY_Pop_Growth.toFixed(2)}%` : undefined} />
                            <Stat label="YoY Job Growth" value={metro.CES_YoY != null ? `${metro.CES_YoY.toFixed(2)}%` : undefined} />
                            <Stat label="Unemployment Rate" value={metro.Unemp_Rate != null ? `${metro.Unemp_Rate.toFixed(1)}%` : undefined} />
                            <Stat label="Real Wage Growth" value={metro.QCEW_Real_Wage_YoY != null ? `${metro.QCEW_Real_Wage_YoY.toFixed(2)}%` : undefined} />
                            <Stat label="Rent-to-Income" value={metro.Rent_to_Income != null ? `${(metro.Rent_to_Income * 100).toFixed(1)}%` : undefined} />
                         </div>
                    </div>

                    {profile ? (
                        <div className="space-y-6 text-[#33576F] leading-relaxed">
                            <div>
                                <h3 className="text-lg font-semibold text-[#2F4157] mb-2 pb-2 border-b">Snapshot</h3>
                                <p>{profile.snapshot}</p>
                            </div>
                             <div>
                                <h3 className="text-lg font-semibold text-[#2F4157] mb-2 pb-2 border-b">Labor Market</h3>
                                <p>{profile.laborMarket}</p>
                            </div>
                             <div>
                                <h3 className="text-lg font-semibold text-[#2F4157] mb-2 pb-2 border-b">Migration & Affordability</h3>
                                <p>{profile.migrationAffordability}</p>
                            </div>
                             <div>
                                <h3 className="text-lg font-semibold text-[#2F4157] mb-2 pb-2 border-b">Forward View</h3>
                                <p>{profile.forwardView}</p>
                            </div>
                        </div>
                    ) : (
                        <p className="text-[#5591B5]">Detailed profile not available for this metro.</p>
                    )}
                </div>
            </div>
        </div>
    );
};