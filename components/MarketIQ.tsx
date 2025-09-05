import React, { useState, useMemo, useEffect, useRef } from 'react';
import { LeaseData } from '../types';
import { CloseIcon, SearchIcon, ResetIcon } from './icons';

// Add Mapbox declaration and API Key
declare var mapboxgl: any;
mapboxgl.accessToken = 'pk.eyJ1Ijoiam1hMDAxNDkiLCJhIjoiY21mNnl3NXpkMDZxaTJvcnQ3bjhueCJ9.7004pTc5mWO8Et9OiS1GmA';


interface MarketIQProps {
    leaseData: LeaseData[];
}

const parseSqft = (sqft: string | number | null): number => {
    if (typeof sqft === 'number') return sqft;
    if (typeof sqft === 'string') {
        const num = parseInt(sqft.replace(/,/g, ''), 10);
        return isNaN(num) ? 0 : num;
    }
    return 0;
};

const DetailItem: React.FC<{ label: string; value: string | number | null }> = ({ label, value }) => (
    <div>
        <p className="text-xs text-[#5591B5] font-medium uppercase tracking-wider">{label}</p>
        <p className="text-base text-[#2F4157] font-semibold">{value ?? 'N/A'}</p>
    </div>
);

const LeaseDetailPanel: React.FC<{ lease: LeaseData; onClose: () => void }> = ({ lease, onClose }) => {
    return (
        <div
            className="fixed inset-y-0 right-0 w-full max-w-md bg-white h-full shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out translate-x-0 z-40 border-l-2 border-[#33576F]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="lease-detail-title"
        >
            <div className="p-6 border-b border-[#C7D9E5] flex justify-between items-center bg-[#FDF6EE]/70 flex-shrink-0">
                <div className="pr-4">
                    <h2 id="lease-detail-title" className="text-xl font-bold text-[#2F4157] leading-tight">{lease['Property Name']}</h2>
                    <p className="text-sm text-[#33576F]">{lease['Tenant Name']}</p>
                </div>
                <button onClick={onClose} className="text-slate-500 hover:text-red-600 hover:bg-red-100 p-1 rounded-full transition-colors" aria-label="Close lease details">
                    <CloseIcon />
                </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <h3 className="text-lg font-semibold text-[#2F4157] mb-4 pb-2 border-b-2 border-[#C7D9E5]">Lease Abstract</h3>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-5">
                        <DetailItem label="Address" value={lease.Address} />
                        <DetailItem label="Submarket" value={lease.Submarket} />
                        <DetailItem label="Tenant SF" value={parseSqft(lease['Tenant Square Feet']).toLocaleString()} />
                        <DetailItem label="Suite" value={lease['Tenant Suite']} />
                        <DetailItem label="Lease Start" value={lease['Lease Start']} />
                        <DetailItem label="Lease End" value={lease['Lease End']} />
                        <DetailItem label="Rent / SF" value={lease['Rent Per Square Foot']} />
                        <DetailItem label="Annual Rent" value={lease['Annual Rent']} />
                    </div>
                </div>
            </div>
        </div>
    );
};


export const MarketIQ: React.FC<MarketIQProps> = ({ leaseData }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCity, setSelectedCity] = useState('All');
    const [selectedSubmarket, setSelectedSubmarket] = useState('All');
    const [sqftRange, setSqftRange] = useState([0, 0]);
    const [selectedLease, setSelectedLease] = useState<LeaseData | null>(null);

    const mapContainer = useRef<HTMLDivElement>(null);
    const map = useRef<any>(null);

    const { cities, submarkets, minSqft, maxSqft } = useMemo(() => {
        const citySet = new Set<string>();
        const submarketSet = new Set<string>();
        let min = Infinity;
        let max = 0;
        leaseData.forEach(item => {
            citySet.add(item.City);
            submarketSet.add(item.Submarket);
            const sqft = parseSqft(item['Tenant Square Feet']);
            if (sqft < min) min = sqft;
            if (sqft > max) max = sqft;
        });
        return {
            cities: ['All', ...Array.from(citySet).sort()],
            submarkets: ['All', ...Array.from(submarketSet).sort()],
            minSqft: min,
            maxSqft: max,
        };
    }, [leaseData]);

    useEffect(() => {
        setSqftRange([minSqft, maxSqft]);
    }, [minSqft, maxSqft]);
    
    const filteredData = useMemo(() => {
        return leaseData.filter(item => {
            const sqft = parseSqft(item['Tenant Square Feet']);
            return (
                (selectedCity === 'All' || item.City === selectedCity) &&
                (selectedSubmarket === 'All' || item.Submarket === selectedSubmarket) &&
                (sqft >= sqftRange[0] && sqft <= sqftRange[1]) &&
                (searchTerm === '' ||
                    item['Property Name'].toLowerCase().includes(searchTerm.toLowerCase()) ||
                    item['Tenant Name'].toLowerCase().includes(searchTerm.toLowerCase()))
            );
        });
    }, [leaseData, searchTerm, selectedCity, selectedSubmarket, sqftRange]);

     const leaseDataGeoJSON = useMemo(() => {
        return {
            type: 'FeatureCollection',
            features: filteredData.map((lease, index) => ({
                type: 'Feature',
                id: index, // setFeatureState requires a numeric ID
                geometry: {
                    type: 'Point',
                    coordinates: [lease.coords.lng, lease.coords.lat],
                },
                properties: {
                    ...lease,
                    sqft: parseSqft(lease['Tenant Square Feet']),
                },
            })),
        };
    }, [filteredData]);

    useEffect(() => {
        if (map.current || !mapContainer.current) return;
        
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/light-v11',
            center: [-84.3880, 33.7490], // Center on Atlanta
            zoom: 8,
        });

        map.current.on('load', () => {
            map.current.addSource('leases', { type: 'geojson', data: leaseDataGeoJSON });

            map.current.addLayer({
                id: 'leases-layer',
                type: 'circle',
                source: 'leases',
                paint: {
                    'circle-color': '#33576F',
                    'circle-radius': [
                        'interpolate', ['linear'], ['sqrt', ['get', 'sqft']],
                        1, 2, 1000, 4, 10000, 10, 50000, 25
                    ],
                    'circle-stroke-width': [ 'case', ['boolean', ['feature-state', 'hover'], false], 2, 0.5 ],
                    'circle-stroke-color': '#FDF6EE',
                    'circle-opacity': 0.8,
                },
            });

            const popup = new mapboxgl.Popup({ closeButton: false, closeOnClick: false });
            let hoveredLeaseId: number | null = null;

            map.current.on('mousemove', 'leases-layer', (e: any) => {
                map.current.getCanvas().style.cursor = 'pointer';
                if (e.features.length > 0) {
                    if (hoveredLeaseId !== null) map.current.setFeatureState({ source: 'leases', id: hoveredLeaseId }, { hover: false });
                    hoveredLeaseId = e.features[0].id;
                    map.current.setFeatureState({ source: 'leases', id: hoveredLeaseId }, { hover: true });

                    const props = e.features[0].properties;
                    popup.setLngLat(e.features[0].geometry.coordinates.slice())
                         .setHTML(`<div class="font-bold text-[#2F4157]">${props['Property Name']}</div><div class="text-[#33576F]">${props['Tenant Name']}</div>`)
                         .addTo(map.current);
                }
            });

            map.current.on('mouseleave', 'leases-layer', () => {
                map.current.getCanvas().style.cursor = '';
                if (hoveredLeaseId !== null) map.current.setFeatureState({ source: 'leases', id: hoveredLeaseId }, { hover: false });
                hoveredLeaseId = null;
                popup.remove();
            });

            map.current.on('click', 'leases-layer', (e: any) => {
                if (e.features.length > 0) {
                    const leaseId = e.features[0].properties.id;
                    const clickedLease = leaseData.find(l => l.id === leaseId);
                    if (clickedLease) {
                        setSelectedLease(clickedLease);
                        map.current.flyTo({ center: e.features[0].geometry.coordinates, zoom: 14 });
                    }
                }
            });
        });
    }, []);

    useEffect(() => {
        if (map.current?.getSource('leases')) {
            map.current.getSource('leases').setData(leaseDataGeoJSON);
        }
    }, [leaseDataGeoJSON]);

    const resetAll = () => {
        setSearchTerm('');
        setSelectedCity('All');
        setSelectedSubmarket('All');
        setSqftRange([minSqft, maxSqft]);
        if (map.current) {
            map.current.flyTo({ center: [-84.3880, 33.7490], zoom: 8 });
        }
    };

    return (
        <div className="h-[calc(100vh-120px)] flex flex-col">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-[#C7D9E5] mb-4 flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
                    <div className="relative lg:col-span-1">
                        <label htmlFor="search" className="block text-sm font-medium text-[#33576F]">Search Property/Tenant</label>
                        <input
                            type="text"
                            id="search"
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            className="mt-1 block w-full pl-10 pr-3 py-2 border border-[#C7D9E5] rounded-md shadow-sm focus:outline-none focus:ring-[#33576F] focus:border-[#33576F] sm:text-sm"
                            placeholder="e.g., Capital Center"
                        />
                         <div className="absolute inset-y-0 left-0 pl-3 pt-6 flex items-center pointer-events-none">
                            <SearchIcon />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="city-select" className="block text-sm font-medium text-[#33576F]">City</label>
                        <select id="city-select" value={selectedCity} onChange={e => setSelectedCity(e.target.value)} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-[#C7D9E5] focus:outline-none focus:ring-[#33576F] focus:border-[#33576F] sm:text-sm rounded-md shadow-sm">
                            {cities.map(c => <option key={c}>{c}</option>)}
                        </select>
                    </div>
                     <div>
                        <label htmlFor="submarket-select" className="block text-sm font-medium text-[#33576F]">Submarket</label>
                        <select id="submarket-select" value={selectedSubmarket} onChange={e => setSelectedSubmarket(e.target.value)} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-[#C7D9E5] focus:outline-none focus:ring-[#33576F] focus:border-[#33576F] sm:text-sm rounded-md shadow-sm">
                            {submarkets.map(s => <option key={s}>{s}</option>)}
                        </select>
                    </div>
                     <div className="lg:col-span-2">
                        <label htmlFor="sqft-slider" className="block text-sm font-medium text-[#33576F]">Tenant SF: {sqftRange[0].toLocaleString()} - {sqftRange[1].toLocaleString()}</label>
                        <div className="flex items-center gap-2">
                            <input
                                type="range"
                                min={minSqft}
                                max={maxSqft}
                                value={sqftRange[1]}
                                onChange={e => setSqftRange([sqftRange[0], parseInt(e.target.value, 10)])}
                                className="w-full h-2 bg-[#C7D9E5] rounded-lg appearance-none cursor-pointer mt-2"
                            />
                             <button onClick={resetAll} className="p-2 text-[#33576F] bg-slate-100 hover:bg-slate-200 rounded-md transition-colors mt-2" title="Reset Filters and View">
                                <ResetIcon/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div ref={mapContainer} className="flex-grow bg-[#FDF6EE] rounded-xl shadow-inner border border-[#C7D9E5] relative overflow-hidden" />
            
            {selectedLease && <LeaseDetailPanel lease={selectedLease} onClose={() => setSelectedLease(null)} />}
        </div>
    );
};