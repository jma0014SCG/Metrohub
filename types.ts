
export enum View {
    Overview = 'overview',
    Population = 'population',
    Jobs = 'jobs',
    Wages = 'wages',
    Sectors = 'sectors',
    Affordability = 'affordability',
    Scorecard = 'scorecard',
    RawData = 'rawData',
    MarketIQ = 'marketIQ',
}

export interface LeaseData {
    id: string; // Unique ID for each lease
    'Property Name': string;
    'Tenant Name': string;
    'Tenant Square Feet': string;
    'Tenant Suite': string | number;
    'Lease Start': string;
    'Lease End': string;
    'Rent Per Square Foot': string;
    'Annual Rent': string | null;
    'City': string;
    'State': string;
    'Submarket': string;
    'Address': string;
    'Expense Reimbursment': string | null;
    // For mapping
    coords: { lng: number; lat: number };
}

export interface PopulationData {
    MSA: string;
    YoY_Pop_Growth: number;
    CAGR_3yr_Pop: number;
    CAGR_5yr_Pop: number;
    Net_Dom_Mig_per_1k: number;
    BAplus_Share_Δ_5yr: number;
    PrimeAge_Share_Δ_5yr: number;
}

export interface JobData {
    MSA: string;
    CES_YoY: number;
    CAGR_3yr_Jobs: number;
    CAGR_5yr_Jobs: number;
    Unemp_Rate: number;
    LF_Trend_Note: string;
}

export interface WageData {
    MSA: string;
    QCEW_Real_Wage_YoY: number;
    CAGR_3yr_Wages: number;
    Industry_Leaders: string;
    Industry_Laggards: string;
}

export interface SectorData {
    MSA: string;
    LQ_Tech: number;
    LQ_Health: number;
    LQ_Mfg: number;
    LQ_Logistics: number;
    ΔLQ_3yr_Key_Sector: string;
}

export interface AffordabilityData {
    MSA: string;
    Rent_to_Income: number;
    Severe_Cost_Burden_Renters_Percent: number;
    Net_Migration_per_1k: number;
}

export interface OpportunityData {
    MSA: string;
    Pop_Growth_Score: number;
    Job_Growth_Score: number;
    Real_Wage_Score: number;
    Talent_Score: number;
    Affordability_Score: number;
    Sector_Diversity_Score: number;
    Composite_0_100: number;
    Rationale: string;
}

export type MetroData = PopulationData & JobData & WageData & SectorData & AffordabilityData & OpportunityData;

export interface MetroProfileData {
    MSA: string;
    snapshot: string;
    laborMarket: string;
    migrationAffordability: string;
    forwardView: string;
}

export type SortConfig<T> = {
    key: keyof T;
    direction: 'ascending' | 'descending';
};

export interface ColumnDefinition<T> {
    key: keyof T;
    label: string;
    sortable: boolean;
    format?: (value: any) => string;
}