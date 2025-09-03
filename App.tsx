import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { DashboardCard } from './components/DashboardCard';
import { DataTable } from './components/DataTable';
import { DataChart } from './components/DataChart';
import { MetroProfile } from './components/MetroProfile';
import { MetroComparison } from './components/MetroComparison';
import { useSortableData } from './hooks/useSortableData';
import { mergedMetroData, metroProfiles } from './data/metroData';
import { View, MetroData, SortConfig, ColumnDefinition } from './types';
import { PopulationIcon, BriefcaseIcon, DollarIcon, BrainIcon, HomeIcon, BarChartIcon, StarIcon, ChartMixedIcon, ArrowsRightLeftIcon } from './components/icons';

const App: React.FC = () => {
    const [view, setView] = useState<View>(View.Overview);
    const [selectedMetro, setSelectedMetro] = useState<MetroData | null>(null);
    const [comparisonSelection, setComparisonSelection] = useState<MetroData[]>([]);
    const [isComparing, setIsComparing] = useState(false);
    const [data, setData] = useState<MetroData[]>([]);

    useEffect(() => {
        setData(mergedMetroData);
    }, []);

    const { items: sortedData, requestSort, sortConfig } = useSortableData(data);

    const handleSort = useCallback((key: keyof MetroData) => {
        requestSort(key);
    }, [requestSort]);

    const handleComparisonSelect = useCallback((metro: MetroData, isSelected: boolean) => {
        setComparisonSelection(prev => {
            if (isSelected) {
                return [...prev, metro];
            } else {
                return prev.filter(m => m.MSA !== metro.MSA);
            }
        });
    }, []);

    const columns: Record<View, ColumnDefinition<MetroData>[]> = useMemo(() => ({
        [View.Overview]: [],
        [View.Population]: [
            { key: 'MSA', label: 'MSA', sortable: true },
            { key: 'YoY_Pop_Growth', label: 'YoY Pop. Growth %', sortable: true, format: (v) => `${v.toFixed(2)}%` },
            { key: 'Net_Dom_Mig_per_1k', label: 'Net Domestic Migration / 1k', sortable: true },
            { key: 'PrimeAge_Share_Δ_5yr', label: 'Prime Age Share Δ (5yr)', sortable: true, format: (v) => `${v.toFixed(2)}%` },
            { key: 'BAplus_Share_Δ_5yr', label: 'BA+ Share Δ (5yr)', sortable: true, format: (v) => `${v.toFixed(2)}%` },
        ],
        [View.Jobs]: [
            { key: 'MSA', label: 'MSA', sortable: true },
            { key: 'CES_YoY', label: 'Job Growth YoY %', sortable: true, format: (v) => `${v.toFixed(2)}%` },
            { key: 'CAGR_3yr_Jobs', label: 'Job Growth CAGR (3yr)', sortable: true, format: (v) => `${v.toFixed(2)}%` },
            { key: 'Unemp_Rate', label: 'Unemployment Rate %', sortable: true, format: (v) => `${v.toFixed(2)}%` },
            { key: 'LF_Trend_Note', label: 'Labor Force Trend', sortable: false },
        ],
        [View.Wages]: [
            { key: 'MSA', label: 'MSA', sortable: true },
            { key: 'QCEW_Real_Wage_YoY', label: 'Real Wage Growth YoY %', sortable: true, format: (v) => `${v.toFixed(2)}%` },
            { key: 'CAGR_3yr_Wages', label: 'Real Wage CAGR (3yr)', sortable: true, format: (v) => `${v.toFixed(2)}%` },
            { key: 'Industry_Leaders', label: 'Industry Leaders', sortable: false },
            { key: 'Industry_Laggards', label: 'Industry Laggards', sortable: false },
        ],
        [View.Sectors]: [
            { key: 'MSA', label: 'MSA', sortable: true },
            { key: 'LQ_Tech', label: 'Tech LQ', sortable: true },
            { key: 'LQ_Health', label: 'Health LQ', sortable: true },
            { key: 'LQ_Mfg', label: 'Manufacturing LQ', sortable: true },
            { key: 'LQ_Logistics', label: 'Logistics LQ', sortable: true },
            { key: 'ΔLQ_3yr_Key_Sector', label: 'Key Sector ΔLQ (3yr)', sortable: false },
        ],
        [View.Affordability]: [
            { key: 'MSA', label: 'MSA', sortable: true },
            { key: 'Rent_to_Income', label: 'Rent-to-Income Ratio', sortable: true, format: (v) => (v * 100).toFixed(1) + '%' },
            { key: 'Severe_Cost_Burden_Renters_Percent', label: 'Severe Renter Cost Burden %', sortable: true, format: (v) => `${v.toFixed(1)}%` },
            { key: 'Net_Migration_per_1k', label: 'Net Migration / 1k', sortable: true },
        ],
        [View.Scorecard]: [
            { key: 'MSA', label: 'MSA', sortable: true },
            { key: 'Composite_0_100', label: 'Composite Score', sortable: true, format: (v) => v.toFixed(1) },
            { key: 'Pop_Growth_Score', label: 'Pop. Growth', sortable: true },
            { key: 'Job_Growth_Score', label: 'Job Growth', sortable: true },
            { key: 'Real_Wage_Score', label: 'Real Wage', sortable: true },
            { key: 'Talent_Score', label: 'Talent', sortable: true },
            { key: 'Affordability_Score', label: 'Affordability', sortable: true },
            { key: 'Rationale', label: 'Rationale', sortable: false },
        ]
    }), []);

    const findMetroStat = (field: keyof MetroData, order: 'max' | 'min') => {
        if (data.length === 0) return { MSA: 'N/A', value: 0 };
        const sorted = [...data].sort((a, b) => {
            const valA = a[field] ?? (order === 'max' ? -Infinity : Infinity);
            const valB = b[field] ?? (order === 'max' ? -Infinity : Infinity);
            return order === 'max' ? (valB as number) - (valA as number) : (valA as number) - (valB as number);
        });
        return { MSA: sorted[0].MSA, value: sorted[0][field] ?? 0 };
    };
    
    const topComposite = findMetroStat('Composite_0_100', 'max');
    const topPopGrowth = findMetroStat('YoY_Pop_Growth', 'max');
    const topJobGrowth = findMetroStat('CES_YoY', 'max');
    const topMigration = findMetroStat('Net_Dom_Mig_per_1k', 'max');

    const renderContent = () => {
        if (view === View.Overview) {
            return (
                <div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-8">
                        <h2 className="text-2xl font-bold text-slate-800 mb-2">Executive Summary</h2>
                        <p className="text-slate-600 leading-relaxed max-w-4xl">
                            This report presents a comprehensive analysis of demographic and economic shifts across the 50 largest U.S. Metropolitan Statistical Areas (MSAs). The findings reveal sustained dominance of the Sunbelt & Mountain West in population growth, contrasted with significant out-migration from major coastal hubs like New York and Los Angeles. While the "affordability-migration flywheel" persists, high-growth markets like Austin and Nashville now face severe housing cost pressures. Our composite Opportunity Scorecard identifies Dallas-Fort Worth as the top-ranked market, balancing high-volume growth with manageable affordability.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <DashboardCard title="Top Opportunity Score" value={topComposite.MSA} metric={`${(topComposite.value as number).toFixed(1)} / 100`} icon={<StarIcon />} />
                        <DashboardCard title="Top Population Growth (YoY)" value={topPopGrowth.MSA} metric={`${(topPopGrowth.value as number).toFixed(2)}%`} icon={<PopulationIcon />} />
                        <DashboardCard title="Top Job Growth (YoY)" value={topJobGrowth.MSA} metric={`${(topJobGrowth.value as number).toFixed(2)}%`} icon={<BriefcaseIcon />} />
                        <DashboardCard title="Top Net Migration (/1k)" value={topMigration.MSA} metric={`${(topMigration.value as number).toFixed(1)}`} icon={<ChartMixedIcon />} />
                    </div>
                </div>
            );
        }
        return (
            <div className="space-y-8">
                <DataChart data={sortedData} view={view} />

                <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-slate-200">
                    <div className="flex justify-end items-center mb-4">
                        <button 
                            onClick={() => setIsComparing(true)}
                            disabled={comparisonSelection.length < 2 || comparisonSelection.length > 4}
                            className="flex items-center space-x-2 px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
                        >
                            <ArrowsRightLeftIcon />
                            <span>Compare ({comparisonSelection.length})</span>
                        </button>
                    </div>
                    <DataTable<MetroData>
                        data={sortedData}
                        columns={columns[view]}
                        sortConfig={sortConfig as SortConfig<MetroData>}
                        onSort={handleSort}
                        onRowClick={(metro) => setSelectedMetro(metro)}
                        comparisonSelection={comparisonSelection}
                        onComparisonSelect={handleComparisonSelect}
                    />
                </div>
            </div>
        );
    };

    const viewTitles: Record<View, string> = {
        [View.Overview]: "Dashboard Overview",
        [View.Population]: "Population Growth Dynamics",
        [View.Jobs]: "Job Market Momentum",
        [View.Wages]: "Real Wage & Sectoral Performance",
        [View.Sectors]: "Sector Specialization & Dynamics",
        [View.Affordability]: "Affordability & Migration Pressures",
        [View.Scorecard]: "Opportunity Scorecard"
    };

    const viewIcons: Record<View, React.ReactNode> = {
        [View.Overview]: <BarChartIcon />,
        [View.Population]: <PopulationIcon />,
        [View.Jobs]: <BriefcaseIcon />,
        [View.Wages]: <DollarIcon />,
        [View.Sectors]: <ChartMixedIcon />,
        [View.Affordability]: <HomeIcon />,
        [View.Scorecard]: <StarIcon />
    };

    return (
        <div className="min-h-screen flex bg-slate-50">
            <Sidebar currentView={view} setView={setView} />
            <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
                <Header 
                    title={viewTitles[view]}
                    icon={viewIcons[view]}
                />
                <div className="mt-8">
                    {renderContent()}
                </div>
            </main>
            {selectedMetro && (
                <MetroProfile
                    metro={selectedMetro}
                    profile={metroProfiles.find(p => p.MSA === selectedMetro.MSA)}
                    onClose={() => setSelectedMetro(null)}
                />
            )}
            {isComparing && (
                <MetroComparison 
                    metros={comparisonSelection}
                    profiles={metroProfiles}
                    onClose={() => setIsComparing(false)}
                />
            )}
        </div>
    );
};

export default App;