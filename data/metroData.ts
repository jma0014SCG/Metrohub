
import { MetroData, MetroProfileData } from '../types';

// Data is pre-processed from the provided CSV snippets into JSON format for reliability.

const populationData = [
    { MSA: "New York-Newark-Jersey City, NY-NJ", YoY_Pop_Growth: -0.71, CAGR_3yr_Pop: -0.55, CAGR_5yr_Pop: -0.3, Net_Dom_Mig_per_1k: -15.2, BAplus_Share_Δ_5yr: 1.1, PrimeAge_Share_Δ_5yr: 0.3 },
    { MSA: "Los Angeles-Long Beach-Anaheim, CA", YoY_Pop_Growth: -0.95, CAGR_3yr_Pop: -0.8, CAGR_5yr_Pop: -0.42, Net_Dom_Mig_per_1k: -12.8, BAplus_Share_Δ_5yr: -0.2, PrimeAge_Share_Δ_5yr: -0.5 },
    { MSA: "Chicago-Naperville-Elgin, IL-IN-WI", YoY_Pop_Growth: -0.43, CAGR_3yr_Pop: -0.35, CAGR_5yr_Pop: -0.15, Net_Dom_Mig_per_1k: -10.5, BAplus_Share_Δ_5yr: 0.9, PrimeAge_Share_Δ_5yr: 0.1 },
    { MSA: "Dallas-Fort Worth-Arlington, TX", YoY_Pop_Growth: 2.15, CAGR_3yr_Pop: 2.51, CAGR_5yr_Pop: 2.85, Net_Dom_Mig_per_1k: 11.2, BAplus_Share_Δ_5yr: 2.5, PrimeAge_Share_Δ_5yr: 1.1 },
    { MSA: "Houston-The Woodlands-Sugar Land, TX", YoY_Pop_Growth: 1.98, CAGR_3yr_Pop: 2.35, CAGR_5yr_Pop: 2.6, Net_Dom_Mig_per_1k: 9.8, BAplus_Share_Δ_5yr: 2.1, PrimeAge_Share_Δ_5yr: 0.9 },
    { MSA: "Washington-Arlington-Alexandria, DC-VA-MD-WV", YoY_Pop_Growth: 0.3, CAGR_3yr_Pop: 0.45, CAGR_5yr_Pop: 0.8, Net_Dom_Mig_per_1k: -2.1, BAplus_Share_Δ_5yr: 1.8, PrimeAge_Share_Δ_5yr: 0.8 },
    { MSA: "Miami-Fort Lauderdale-West Palm Beach, FL", YoY_Pop_Growth: 1.55, CAGR_3yr_Pop: 1.8, CAGR_5yr_Pop: 2.1, Net_Dom_Mig_per_1k: 8.5, BAplus_Share_Δ_5yr: 1.5, PrimeAge_Share_Δ_5yr: 0.5 },
    { MSA: "Philadelphia-Camden-Wilmington, PA-NJ-DE-MD", YoY_Pop_Growth: 0.15, CAGR_3yr_Pop: 0.2, CAGR_5yr_Pop: 0.45, Net_Dom_Mig_per_1k: -3.5, BAplus_Share_Δ_5yr: 0.8, PrimeAge_Share_Δ_5yr: 0.2 },
    { MSA: "Atlanta-Sandy Springs-Roswell, GA", YoY_Pop_Growth: 1.85, CAGR_3yr_Pop: 2.1, CAGR_5yr_Pop: 2.45, Net_Dom_Mig_per_1k: 9.1, BAplus_Share_Δ_5yr: 2.8, PrimeAge_Share_Δ_5yr: 1.2 },
    { MSA: "Boston-Cambridge-Newton, MA-NH", YoY_Pop_Growth: 0.25, CAGR_3yr_Pop: 0.3, CAGR_5yr_Pop: 0.65, Net_Dom_Mig_per_1k: -4.5, BAplus_Share_Δ_5yr: 2.2, PrimeAge_Share_Δ_5yr: 0.9 },
    { MSA: "Phoenix-Mesa-Chandler, AZ", YoY_Pop_Growth: 2.05, CAGR_3yr_Pop: 2.4, CAGR_5yr_Pop: 2.75, Net_Dom_Mig_per_1k: 10.5, BAplus_Share_Δ_5yr: 2, PrimeAge_Share_Δ_5yr: 0.8 },
    { MSA: "San Francisco-Oakland-Hayward, CA", YoY_Pop_Growth: -0.85, CAGR_3yr_Pop: -0.7, CAGR_5yr_Pop: -0.35, Net_Dom_Mig_per_1k: -14.1, BAplus_Share_Δ_5yr: -0.5, PrimeAge_Share_Δ_5yr: -0.8 },
    { MSA: "Riverside-San Bernardino-Ontario, CA", YoY_Pop_Growth: 1.1, CAGR_3yr_Pop: 1.35, CAGR_5yr_Pop: 1.6, Net_Dom_Mig_per_1k: 5.5, BAplus_Share_Δ_5yr: 0.5, PrimeAge_Share_Δ_5yr: 0.1 },
    { MSA: "Detroit-Warren-Dearborn, MI", YoY_Pop_Growth: 0.1, CAGR_3yr_Pop: 0.05, CAGR_5yr_Pop: 0.2, Net_Dom_Mig_per_1k: -5.1, BAplus_Share_Δ_5yr: 0.4, PrimeAge_Share_Δ_5yr: 0 },
    { MSA: "Seattle-Tacoma-Bellevue, WA", YoY_Pop_Growth: 0.95, CAGR_3yr_Pop: 1.15, CAGR_5yr_Pop: 1.5, Net_Dom_Mig_per_1k: 1.5, BAplus_Share_Δ_5yr: 2.9, PrimeAge_Share_Δ_5yr: 1.3 },
    { MSA: "Minneapolis-St. Paul-Bloomington, MN-WI", YoY_Pop_Growth: 0.45, CAGR_3yr_Pop: 0.55, CAGR_5yr_Pop: 0.85, Net_Dom_Mig_per_1k: -2.5, BAplus_Share_Δ_5yr: 1.5, PrimeAge_Share_Δ_5yr: 0.6 },
    { MSA: "San Diego-Chula Vista-Carlsbad, CA", YoY_Pop_Growth: 0.35, CAGR_3yr_Pop: 0.4, CAGR_5yr_Pop: 0.7, Net_Dom_Mig_per_1k: -1.8, BAplus_Share_Δ_5yr: 1.2, PrimeAge_Share_Δ_5yr: 0.4 },
    { MSA: "Tampa-St. Petersburg-Clearwater, FL", YoY_Pop_Growth: 2.2, CAGR_3yr_Pop: 2.55, CAGR_5yr_Pop: 2.9, Net_Dom_Mig_per_1k: 12.5, BAplus_Share_Δ_5yr: 2.3, PrimeAge_Share_Δ_5yr: 0.9 },
    { MSA: "Denver-Aurora-Lakewood, CO", YoY_Pop_Growth: 1.25, CAGR_3yr_Pop: 1.5, CAGR_5yr_Pop: 1.85, Net_Dom_Mig_per_1k: 3.5, BAplus_Share_Δ_5yr: 2.6, PrimeAge_Share_Δ_5yr: 1.1 },
    { MSA: "St. Louis, MO-IL", YoY_Pop_Growth: -0.1, CAGR_3yr_Pop: -0.05, CAGR_5yr_Pop: 0.1, Net_Dom_Mig_per_1k: -6.2, BAplus_Share_Δ_5yr: 0.6, PrimeAge_Share_Δ_5yr: 0.1 },
    { MSA: "Baltimore-Columbia-Towson, MD", YoY_Pop_Growth: 0.2, CAGR_3yr_Pop: 0.25, CAGR_5yr_Pop: 0.5, Net_Dom_Mig_per_1k: -4.1, BAplus_Share_Δ_5yr: 1.1, PrimeAge_Share_Δ_5yr: 0.3 },
    { MSA: "Orlando-Kissimmee-Sanford, FL", YoY_Pop_Growth: 2.5, CAGR_3yr_Pop: 2.85, CAGR_5yr_Pop: 3.2, Net_Dom_Mig_per_1k: 14.1, BAplus_Share_Δ_5yr: 2.4, PrimeAge_Share_Δ_5yr: 1 },
    { MSA: "Charlotte-Concord-Gastonia, NC-SC", YoY_Pop_Growth: 2.35, CAGR_3yr_Pop: 2.7, CAGR_5yr_Pop: 3.1, Net_Dom_Mig_per_1k: 13.2, BAplus_Share_Δ_5yr: 3.1, PrimeAge_Share_Δ_5yr: 1.4 },
    { MSA: "San Antonio-New Braunfels, TX", YoY_Pop_Growth: 2.1, CAGR_3yr_Pop: 2.45, CAGR_5yr_Pop: 2.8, Net_Dom_Mig_per_1k: 10.8, BAplus_Share_Δ_5yr: 1.9, PrimeAge_Share_Δ_5yr: 0.7 },
    { MSA: "Portland-Vancouver-Hillsboro, OR-WA", YoY_Pop_Growth: 0.55, CAGR_3yr_Pop: 0.7, CAGR_5yr_Pop: 1, Net_Dom_Mig_per_1k: -1.1, BAplus_Share_Δ_5yr: 1.8, PrimeAge_Share_Δ_5yr: 0.7 },
    { MSA: "Sacramento-Roseville-Folsom, CA", YoY_Pop_Growth: 1.3, CAGR_3yr_Pop: 1.55, CAGR_5yr_Pop: 1.8, Net_Dom_Mig_per_1k: 6.1, BAplus_Share_Δ_5yr: 1.4, PrimeAge_Share_Δ_5yr: 0.5 },
    { MSA: "Pittsburgh, PA", YoY_Pop_Growth: -0.25, CAGR_3yr_Pop: -0.2, CAGR_5yr_Pop: 0.05, Net_Dom_Mig_per_1k: -7.1, BAplus_Share_Δ_5yr: 0.5, PrimeAge_Share_Δ_5yr: 0 },
    { MSA: "Austin-Round Rock-Georgetown, TX", YoY_Pop_Growth: 2.85, CAGR_3yr_Pop: 3.2, CAGR_5yr_Pop: 3.6, Net_Dom_Mig_per_1k: 15.5, BAplus_Share_Δ_5yr: 3.5, PrimeAge_Share_Δ_5yr: 1.6 },
    { MSA: "Las Vegas-Henderson-Paradise, NV", YoY_Pop_Growth: 1.95, CAGR_3yr_Pop: 2.25, CAGR_5yr_Pop: 2.55, Net_Dom_Mig_per_1k: 9.5, BAplus_Share_Δ_5yr: 1.7, PrimeAge_Share_Δ_5yr: 0.6 },
    { MSA: "Cincinnati, OH-KY-IN", YoY_Pop_Growth: 0.3, CAGR_3yr_Pop: 0.35, CAGR_5yr_Pop: 0.6, Net_Dom_Mig_per_1k: -3.1, BAplus_Share_Δ_5yr: 0.9, PrimeAge_Share_Δ_5yr: 0.2 },
    { MSA: "Kansas City, MO-KS", YoY_Pop_Growth: 0.65, CAGR_3yr_Pop: 0.8, CAGR_5yr_Pop: 1.1, Net_Dom_Mig_per_1k: -0.5, BAplus_Share_Δ_5yr: 1.6, PrimeAge_Share_Δ_5yr: 0.6 },
    { MSA: "Cleveland-Elyria, OH", YoY_Pop_Growth: -0.3, CAGR_3yr_Pop: -0.25, CAGR_5yr_Pop: -0.05, Net_Dom_Mig_per_1k: -7.8, BAplus_Share_Δ_5yr: 0.3, PrimeAge_Share_Δ_5yr: -0.1 },
    { MSA: "Columbus, OH", YoY_Pop_Growth: 1.15, CAGR_3yr_Pop: 1.4, CAGR_5yr_Pop: 1.7, Net_Dom_Mig_per_1k: 2.5, BAplus_Share_Δ_5yr: 2, PrimeAge_Share_Δ_5yr: 0.8 },
    { MSA: "Indianapolis-Carmel-Anderson, IN", YoY_Pop_Growth: 0.85, CAGR_3yr_Pop: 1.05, CAGR_5yr_Pop: 1.3, Net_Dom_Mig_per_1k: 1.1, BAplus_Share_Δ_5yr: 1.7, PrimeAge_Share_Δ_5yr: 0.7 },
    { MSA: "San Jose-Sunnyvale-Santa Clara, CA", YoY_Pop_Growth: -0.65, CAGR_3yr_Pop: -0.5, CAGR_5yr_Pop: -0.2, Net_Dom_Mig_per_1k: -13.5, BAplus_Share_Δ_5yr: -0.8, PrimeAge_Share_Δ_5yr: -1 },
    { MSA: "Nashville-Davidson--Murfreesboro--Franklin, TN", YoY_Pop_Growth: 2.25, CAGR_3yr_Pop: 2.6, CAGR_5yr_Pop: 3, Net_Dom_Mig_per_1k: 12.8, BAplus_Share_Δ_5yr: 3, PrimeAge_Share_Δ_5yr: 1.3 },
    { MSA: "Virginia Beach-Norfolk-Newport News, VA-NC", YoY_Pop_Growth: 0.4, CAGR_3yr_Pop: 0.5, CAGR_5yr_Pop: 0.75, Net_Dom_Mig_per_1k: -2.8, BAplus_Share_Δ_5yr: 1, PrimeAge_Share_Δ_5yr: 0.3 },
    { MSA: "Providence-Warwick, RI-MA", YoY_Pop_Growth: 0.1, CAGR_3yr_Pop: 0.15, CAGR_5yr_Pop: 0.35, Net_Dom_Mig_per_1k: -4.8, BAplus_Share_Δ_5yr: 0.7, PrimeAge_Share_Δ_5yr: 0.1 },
    { MSA: "Jacksonville, FL", YoY_Pop_Growth: 2.45, CAGR_3yr_Pop: 2.8, CAGR_5yr_Pop: 3.15, Net_Dom_Mig_per_1k: 13.8, BAplus_Share_Δ_5yr: 2.2, PrimeAge_Share_Δ_5yr: 0.9 },
    { MSA: "Milwaukee-Waukesha, WI", YoY_Pop_Growth: -0.05, CAGR_3yr_Pop: 0, CAGR_5yr_Pop: 0.2, Net_Dom_Mig_per_1k: -5.5, BAplus_Share_Δ_5yr: 0.7, PrimeAge_Share_Δ_5yr: 0.1 },
    { MSA: "Raleigh-Cary, NC", YoY_Pop_Growth: 2.65, CAGR_3yr_Pop: 3, CAGR_5yr_Pop: 3.4, Net_Dom_Mig_per_1k: 14.8, BAplus_Share_Δ_5yr: 3.8, PrimeAge_Share_Δ_5yr: 1.8 },
    { MSA: "Oklahoma City, OK", YoY_Pop_Growth: 1, CAGR_3yr_Pop: 1.2, CAGR_5yr_Pop: 1.45, Net_Dom_Mig_per_1k: 1.8, BAplus_Share_Δ_5yr: 1.3, PrimeAge_Share_Δ_5yr: 0.4 },
    { MSA: "Richmond, VA", YoY_Pop_Growth: 0.95, CAGR_3yr_Pop: 1.15, CAGR_5yr_Pop: 1.4, Net_Dom_Mig_per_1k: 1.5, BAplus_Share_Δ_5yr: 1.9, PrimeAge_Share_Δ_5yr: 0.8 },
    { MSA: "Louisville/Jefferson County, KY-IN", YoY_Pop_Growth: 0.5, CAGR_3yr_Pop: 0.6, CAGR_5yr_Pop: 0.85, Net_Dom_Mig_per_1k: -1.5, BAplus_Share_Δ_5yr: 1.2, PrimeAge_Share_Δ_5yr: 0.4 },
    { MSA: "Memphis, TN-MS-AR", YoY_Pop_Growth: 0.2, CAGR_3yr_Pop: 0.25, CAGR_5yr_Pop: 0.45, Net_Dom_Mig_per_1k: -3.8, BAplus_Share_Δ_5yr: 0.8, PrimeAge_Share_Δ_5yr: 0.2 },
    { MSA: "Salt Lake City, UT", YoY_Pop_Growth: 1.75, CAGR_3yr_Pop: 2.05, CAGR_5yr_Pop: 2.35, Net_Dom_Mig_per_1k: 7.5, BAplus_Share_Δ_5yr: 2.7, PrimeAge_Share_Δ_5yr: 1.2 },
    { MSA: "New Orleans-Metairie, LA", YoY_Pop_Growth: 0.35, CAGR_3yr_Pop: 0.4, CAGR_5yr_Pop: 0.6, Net_Dom_Mig_per_1k: -2.2, BAplus_Share_Δ_5yr: 0.9, PrimeAge_Share_Δ_5yr: 0.2 },
    { MSA: "Hartford-West Hartford-East Hartford, CT", YoY_Pop_Growth: -0.15, CAGR_3yr_Pop: -0.1, CAGR_5yr_Pop: 0.1, Net_Dom_Mig_per_1k: -6.5, BAplus_Share_Δ_5yr: 0.6, PrimeAge_Share_Δ_5yr: 0 },
    { MSA: "Buffalo-Cheektowaga, NY", YoY_Pop_Growth: -0.2, CAGR_3yr_Pop: -0.15, CAGR_5yr_Pop: 0.05, Net_Dom_Mig_per_1k: -6.8, BAplus_Share_Δ_5yr: 0.4, PrimeAge_Share_Δ_5yr: -0.1 },
    { MSA: "Birmingham-Hoover, AL", YoY_Pop_Growth: 0.4, CAGR_3yr_Pop: 0.5, CAGR_5yr_Pop: 0.7, Net_Dom_Mig_per_1k: -1.2, BAplus_Share_Δ_5yr: 1, PrimeAge_Share_Δ_5yr: 0.3 },
];

const jobData = [
    { MSA: "New York-Newark-Jersey City, NY-NJ", CES_YoY: 1.6, CAGR_3yr_Jobs: 1.2, CAGR_5yr_Jobs: 0.5, Unemp_Rate: 5.1, LF_Trend_Note: "Stable labor force" },
    { MSA: "Los Angeles-Long Beach-Anaheim, CA", CES_YoY: 0.6, CAGR_3yr_Jobs: 0.8, CAGR_5yr_Jobs: 0.2, Unemp_Rate: 6.0, LF_Trend_Note: "Slightly contracting labor force" },
    { MSA: "Chicago-Naperville-Elgin, IL-IN-WI", CES_YoY: 0.6, CAGR_3yr_Jobs: 0.5, CAGR_5yr_Jobs: 0.1, Unemp_Rate: 4.9, LF_Trend_Note: "Stable labor force" },
    { MSA: "Dallas-Fort Worth-Arlington, TX", CES_YoY: 1.0, CAGR_3yr_Jobs: 2.5, CAGR_5yr_Jobs: 2.8, Unemp_Rate: 4.0, LF_Trend_Note: "Strongly growing labor force" },
    { MSA: "Houston-The Woodlands-Sugar Land, TX", CES_YoY: 1.8, CAGR_3yr_Jobs: 2.8, CAGR_5yr_Jobs: 2.5, Unemp_Rate: 4.5, LF_Trend_Note: "Strongly growing labor force" },
    { MSA: "Washington-Arlington-Alexandria, DC-VA-MD-WV", CES_YoY: -0.2, CAGR_3yr_Jobs: 0.5, CAGR_5yr_Jobs: 0.9, Unemp_Rate: 4.0, LF_Trend_Note: "Stable labor force" },
    { MSA: "Miami-Fort Lauderdale-West Palm Beach, FL", CES_YoY: 1.5, CAGR_3yr_Jobs: 2.6, CAGR_5yr_Jobs: 2.2, Unemp_Rate: 3.4, LF_Trend_Note: "Growing labor force" },
    { MSA: "Philadelphia-Camden-Wilmington, PA-NJ-DE-MD", CES_YoY: 2.1, CAGR_3yr_Jobs: 1.5, CAGR_5yr_Jobs: 0.8, Unemp_Rate: 4.9, LF_Trend_Note: "Stable labor force" },
    { MSA: "Atlanta-Sandy Springs-Roswell, GA", CES_YoY: 0.7, CAGR_3yr_Jobs: 2.2, CAGR_5yr_Jobs: 2.4, Unemp_Rate: 3.5, LF_Trend_Note: "Growing labor force" },
    { MSA: "Boston-Cambridge-Newton, MA-NH", CES_YoY: 0.5, CAGR_3yr_Jobs: 1.1, CAGR_5yr_Jobs: 0.7, Unemp_Rate: 4.5, LF_Trend_Note: "Stable labor force" },
    { MSA: "Phoenix-Mesa-Chandler, AZ", CES_YoY: 1.2, CAGR_3yr_Jobs: 2.7, CAGR_5yr_Jobs: 2.9, Unemp_Rate: 4.1, LF_Trend_Note: "Strongly growing labor force" },
    { MSA: "San Francisco-Oakland-Hayward, CA", CES_YoY: -0.5, CAGR_3yr_Jobs: -0.1, CAGR_5yr_Jobs: 0.4, Unemp_Rate: 4.9, LF_Trend_Note: "Slightly contracting labor force" },
    { MSA: "Riverside-San Bernardino-Ontario, CA", CES_YoY: 1.0, CAGR_3yr_Jobs: 2.0, CAGR_5yr_Jobs: 2.1, Unemp_Rate: 6.4, LF_Trend_Note: "Growing labor force" },
    { MSA: "Detroit-Warren-Dearborn, MI", CES_YoY: 1.3, CAGR_3yr_Jobs: 1.0, CAGR_5yr_Jobs: 0.3, Unemp_Rate: 5.7, LF_Trend_Note: "Stable to slightly contracting LF" },
    { MSA: "Seattle-Tacoma-Bellevue, WA", CES_YoY: 0.9, CAGR_3yr_Jobs: 1.5, CAGR_5yr_Jobs: 1.8, Unemp_Rate: 4.5, LF_Trend_Note: "Growing labor force" },
    { MSA: "Minneapolis-St. Paul-Bloomington, MN-WI", CES_YoY: 0.8, CAGR_3yr_Jobs: 1.2, CAGR_5yr_Jobs: 0.9, Unemp_Rate: 3.8, LF_Trend_Note: "Stable labor force" },
    { MSA: "San Diego-Chula Vista-Carlsbad, CA", CES_YoY: 0.4, CAGR_3yr_Jobs: 1.3, CAGR_5yr_Jobs: 1.2, Unemp_Rate: 5.2, LF_Trend_Note: "Stable labor force" },
    { MSA: "Tampa-St. Petersburg-Clearwater, FL", CES_YoY: 1.1, CAGR_3yr_Jobs: 2.9, CAGR_5yr_Jobs: 3.1, Unemp_Rate: 4.1, LF_Trend_Note: "Strongly growing labor force" },
    { MSA: "Denver-Aurora-Lakewood, CO", CES_YoY: 0.2, CAGR_3yr_Jobs: 1.8, CAGR_5yr_Jobs: 2.0, Unemp_Rate: 3.9, LF_Trend_Note: "Growing labor force" },
    { MSA: "St. Louis, MO-IL", CES_YoY: 0.4, CAGR_3yr_Jobs: 0.6, CAGR_5yr_Jobs: 0.3, Unemp_Rate: 4.5, LF_Trend_Note: "Slightly contracting labor force" },
    { MSA: "Baltimore-Columbia-Towson, MD", CES_YoY: 0.2, CAGR_3yr_Jobs: 0.9, CAGR_5yr_Jobs: 0.8, Unemp_Rate: 3.8, LF_Trend_Note: "Stable labor force" },
    { MSA: "Orlando-Kissimmee-Sanford, FL", CES_YoY: 1.8, CAGR_3yr_Jobs: 3.5, CAGR_5yr_Jobs: 3.8, Unemp_Rate: 3.9, LF_Trend_Note: "Strongly growing labor force" },
    { MSA: "Charlotte-Concord-Gastonia, NC-SC", CES_YoY: 2.8, CAGR_3yr_Jobs: 3.8, CAGR_5yr_Jobs: 3.5, Unemp_Rate: 3.9, LF_Trend_Note: "Strongly growing labor force" },
    { MSA: "San Antonio-New Braunfels, TX", CES_YoY: 2.4, CAGR_3yr_Jobs: 3.2, CAGR_5yr_Jobs: 3.0, Unemp_Rate: 3.9, LF_Trend_Note: "Strongly growing labor force" },
    { MSA: "Portland-Vancouver-Hillsboro, OR-WA", CES_YoY: -0.3, CAGR_3yr_Jobs: 0.8, CAGR_5yr_Jobs: 1.1, Unemp_Rate: 5.1, LF_Trend_Note: "Stable labor force" },
    { MSA: "Sacramento-Roseville-Folsom, CA", CES_YoY: 0.3, CAGR_3yr_Jobs: 1.6, CAGR_5yr_Jobs: 1.7, Unemp_Rate: 5.6, LF_Trend_Note: "Growing labor force" },
    { MSA: "Pittsburgh, PA", CES_YoY: 1.8, CAGR_3yr_Jobs: 1.2, CAGR_5yr_Jobs: 0.6, Unemp_Rate: 4.4, LF_Trend_Note: "Slightly contracting labor force" },
    { MSA: "Austin-Round Rock-Georgetown, TX", CES_YoY: 0.7, CAGR_3yr_Jobs: 3.6, CAGR_5yr_Jobs: 4.1, Unemp_Rate: 3.5, LF_Trend_Note: "Strongly growing labor force" },
    { MSA: "Las Vegas-Henderson-Paradise, NV", CES_YoY: 1.0, CAGR_3yr_Jobs: 3.1, CAGR_5yr_Jobs: 2.8, Unemp_Rate: 6.0, LF_Trend_Note: "Growing labor force" },
    { MSA: "Cincinnati, OH-KY-IN", CES_YoY: 1.2, CAGR_3yr_Jobs: 1.4, CAGR_5yr_Jobs: 0.9, Unemp_Rate: 5.2, LF_Trend_Note: "Stable labor force" },
    { MSA: "Kansas City, MO-KS", CES_YoY: 0.8, CAGR_3yr_Jobs: 1.3, CAGR_5yr_Jobs: 1.1, Unemp_Rate: 4.4, LF_Trend_Note: "Stable labor force" },
    { MSA: "Cleveland-Elyria, OH", CES_YoY: 0.9, CAGR_3yr_Jobs: 0.8, CAGR_5yr_Jobs: 0.4, Unemp_Rate: 5.2, LF_Trend_Note: "Contracting labor force" },
    { MSA: "Columbus, OH", CES_YoY: 1.7, CAGR_3yr_Jobs: 1.9, CAGR_5yr_Jobs: 1.5, Unemp_Rate: 5.0, LF_Trend_Note: "Growing labor force" },
    { MSA: "Indianapolis-Carmel-Anderson, IN", CES_YoY: 1.2, CAGR_3yr_Jobs: 1.8, CAGR_5yr_Jobs: 1.4, Unemp_Rate: 3.8, LF_Trend_Note: "Stable labor force" },
    { MSA: "San Jose-Sunnyvale-Santa Clara, CA", CES_YoY: 0.1, CAGR_3yr_Jobs: 0.9, CAGR_5yr_Jobs: 0.8, Unemp_Rate: 4.9, LF_Trend_Note: "Slightly contracting labor force" },
    { MSA: "Nashville-Davidson--Murfreesboro--Franklin, TN", CES_YoY: 1.5, CAGR_3yr_Jobs: 3.1, CAGR_5yr_Jobs: 3.3, Unemp_Rate: 3.7, LF_Trend_Note: "Strongly growing labor force" },
    { MSA: "Virginia Beach-Norfolk-Newport News, VA-NC", CES_YoY: -0.1, CAGR_3yr_Jobs: 0.7, CAGR_5yr_Jobs: 0.9, Unemp_Rate: 4.0, LF_Trend_Note: "Stable labor force" },
    { MSA: "Providence-Warwick, RI-MA", CES_YoY: 0.3, CAGR_3yr_Jobs: 1.0, CAGR_5yr_Jobs: 0.6, Unemp_Rate: 4.9, LF_Trend_Note: "Stable labor force" },
    { MSA: "Jacksonville, FL", CES_YoY: 1.2, CAGR_3yr_Jobs: 3.0, CAGR_5yr_Jobs: 3.2, Unemp_Rate: 4.2, LF_Trend_Note: "Strongly growing labor force" },
    { MSA: "Milwaukee-Waukesha, WI", CES_YoY: -0.3, CAGR_3yr_Jobs: 0.6, CAGR_5yr_Jobs: 0.4, Unemp_Rate: 3.7, LF_Trend_Note: "Stable labor force" },
    { MSA: "Raleigh-Cary, NC", CES_YoY: 1.7, CAGR_3yr_Jobs: 3.4, CAGR_5yr_Jobs: 3.6, Unemp_Rate: 3.2, LF_Trend_Note: "Strongly growing labor force" },
    { MSA: "Oklahoma City, OK", CES_YoY: 1.6, CAGR_3yr_Jobs: 2.1, CAGR_5yr_Jobs: 1.8, Unemp_Rate: 3.0, LF_Trend_Note: "Growing labor force" },
    { MSA: "Richmond, VA", CES_YoY: 1.8, CAGR_3yr_Jobs: 2.0, CAGR_5yr_Jobs: 1.7, Unemp_Rate: 3.7, LF_Trend_Note: "Growing labor force" },
    { MSA: "Louisville/Jefferson County, KY-IN", CES_YoY: 1.3, CAGR_3yr_Jobs: 1.5, CAGR_5yr_Jobs: 1.0, Unemp_Rate: 5.0, LF_Trend_Note: "Stable labor force" },
    { MSA: "Memphis, TN-MS-AR", CES_YoY: 0.2, CAGR_3yr_Jobs: 1.0, CAGR_5yr_Jobs: 0.9, Unemp_Rate: 5.4, LF_Trend_Note: "Stable labor force" },
    { MSA: "Salt Lake City, UT", CES_YoY: 2.4, CAGR_3yr_Jobs: 2.9, CAGR_5yr_Jobs: 2.7, Unemp_Rate: 3.6, LF_Trend_Note: "Strongly growing labor force" },
    { MSA: "New Orleans-Metairie, LA", CES_YoY: 0.9, CAGR_3yr_Jobs: 1.8, CAGR_5yr_Jobs: 1.3, Unemp_Rate: 4.8, LF_Trend_Note: "Stable labor force" },
    { MSA: "Hartford-West Hartford-East Hartford, CT", CES_YoY: 0.4, CAGR_3yr_Jobs: 0.8, CAGR_5yr_Jobs: 0.5, Unemp_Rate: 4.3, LF_Trend_Note: "Slightly contracting labor force" },
    { MSA: "Buffalo-Cheektowaga, NY", CES_YoY: 2.0, CAGR_3yr_Jobs: 1.6, CAGR_5yr_Jobs: 0.9, Unemp_Rate: 4.0, LF_Trend_Note: "Stable labor force" },
    { MSA: "Birmingham-Hoover, AL", CES_YoY: 0.4, CAGR_3yr_Jobs: 1.1, CAGR_5yr_Jobs: 1.0, Unemp_Rate: 2.7, LF_Trend_Note: "Stable labor force" },
];

const wageData = [
    { MSA: "New York-Newark-Jersey City, NY-NJ", QCEW_Real_Wage_YoY: 2.1, CAGR_3yr_Wages: 1.5, Industry_Leaders: "Information; Financial Activities", Industry_Laggards: "Construction; Leisure & Hospitality" },
    { MSA: "Los Angeles-Long Beach-Anaheim, CA", QCEW_Real_Wage_YoY: 0.5, CAGR_3yr_Wages: 0.8, Industry_Leaders: "Health Care; Information", Industry_Laggards: "Manufacturing; Retail Trade" },
    { MSA: "Chicago-Naperville-Elgin, IL-IN-WI", QCEW_Real_Wage_YoY: 0.8, CAGR_3yr_Wages: 1.0, Industry_Leaders: "Prof/Tech Services; Health Care", Industry_Laggards: "Manufacturing; Government" },
    { MSA: "Dallas-Fort Worth-Arlington, TX", QCEW_Real_Wage_YoY: 1.2, CAGR_3yr_Wages: 1.8, Industry_Leaders: "Financial Activities; Logistics", Industry_Laggards: "Leisure & Hospitality; Information" },
    { MSA: "Houston-The Woodlands-Sugar Land, TX", QCEW_Real_Wage_YoY: 1.5, CAGR_3yr_Wages: 2.0, Industry_Leaders: "Logistics; Health Care", Industry_Laggards: "Construction; Prof/Tech Services" },
    { MSA: "Washington-Arlington-Alexandria, DC-VA-MD-WV", QCEW_Real_Wage_YoY: 1.8, CAGR_3yr_Wages: 1.3, Industry_Leaders: "Government; Prof/Tech Services", Industry_Laggards: "Leisure & Hospitality; Retail Trade" },
    { MSA: "Miami-Fort Lauderdale-West Palm Beach, FL", QCEW_Real_Wage_YoY: 1.4, CAGR_3yr_Wages: 1.9, Industry_Leaders: "Financial Activities; Health Care", Industry_Laggards: "Construction; Information" },
    { MSA: "Philadelphia-Camden-Wilmington, PA-NJ-DE-MD", QCEW_Real_Wage_YoY: 1.1, CAGR_3yr_Wages: 1.2, Industry_Leaders: "Health Care; Education", Industry_Laggards: "Manufacturing; Leisure & Hospitality" },
    { MSA: "Atlanta-Sandy Springs-Roswell, GA", QCEW_Real_Wage_YoY: 1.3, CAGR_3yr_Wages: 1.7, Industry_Leaders: "Logistics; Prof/Tech Services", Industry_Laggards: "Construction; Government" },
    { MSA: "Boston-Cambridge-Newton, MA-NH", QCEW_Real_Wage_YoY: 2.5, CAGR_3yr_Wages: 1.9, Industry_Leaders: "Prof/Tech Services; Health Care", Industry_Laggards: "Manufacturing; Retail Trade" },
    { MSA: "Phoenix-Mesa-Chandler, AZ", QCEW_Real_Wage_YoY: 1.6, CAGR_3yr_Wages: 2.1, Industry_Leaders: "Construction; Health Care", Industry_Laggards: "Information; Government" },
    { MSA: "San Francisco-Oakland-Hayward, CA", QCEW_Real_Wage_YoY: 3.1, CAGR_3yr_Wages: 2.5, Industry_Leaders: "Information; Prof/Tech Services", Industry_Laggards: "Leisure & Hospitality; Retail Trade" },
    { MSA: "Riverside-San Bernardino-Ontario, CA", QCEW_Real_Wage_YoY: 0.9, CAGR_3yr_Wages: 1.3, Industry_Leaders: "Logistics; Health Care", Industry_Laggards: "Information; Manufacturing" },
    { MSA: "Detroit-Warren-Dearborn, MI", QCEW_Real_Wage_YoY: 0.7, CAGR_3yr_Wages: 0.9, Industry_Leaders: "Manufacturing; Health Care", Industry_Laggards: "Prof/Tech Services; Government" },
    { MSA: "Seattle-Tacoma-Bellevue, WA", QCEW_Real_Wage_YoY: 2.8, CAGR_3yr_Wages: 2.2, Industry_Leaders: "Information; Prof/Tech Services", Industry_Laggards: "Construction; Retail Trade" },
    { MSA: "Minneapolis-St. Paul-Bloomington, MN-WI", QCEW_Real_Wage_YoY: 1.5, CAGR_3yr_Wages: 1.4, Industry_Leaders: "Health Care; Manufacturing", Industry_Laggards: "Information; Leisure & Hospitality" },
    { MSA: "San Diego-Chula Vista-Carlsbad, CA", QCEW_Real_Wage_YoY: 1.7, CAGR_3yr_Wages: 1.6, Industry_Leaders: "Prof/Tech Services; Health Care", Industry_Laggards: "Manufacturing; Retail Trade" },
    { MSA: "Tampa-St. Petersburg-Clearwater, FL", QCEW_Real_Wage_YoY: 1.8, CAGR_3yr_Wages: 2.2, Industry_Leaders: "Financial Activities; Health Care", Industry_Laggards: "Information; Construction" },
    { MSA: "Denver-Aurora-Lakewood, CO", QCEW_Real_Wage_YoY: 1.4, CAGR_3yr_Wages: 1.8, Industry_Leaders: "Prof/Tech Services; Logistics", Industry_Laggards: "Manufacturing; Government" },
    { MSA: "St. Louis, MO-IL", QCEW_Real_Wage_YoY: 1.0, CAGR_3yr_Wages: 1.1, Industry_Leaders: "Health Care; Financial Activities", Industry_Laggards: "Manufacturing; Information" },
    { MSA: "Baltimore-Columbia-Towson, MD", QCEW_Real_Wage_YoY: 1.3, CAGR_3yr_Wages: 1.2, Industry_Leaders: "Government; Health Care", Industry_Laggards: "Leisure & Hospitality; Manufacturing" },
    { MSA: "Orlando-Kissimmee-Sanford, FL", QCEW_Real_Wage_YoY: 1.2, CAGR_3yr_Wages: 1.5, Industry_Leaders: "Leisure & Hospitality; Logistics", Industry_Laggards: "Information; Manufacturing" },
    { MSA: "Charlotte-Concord-Gastonia, NC-SC", QCEW_Real_Wage_YoY: 2.0, CAGR_3yr_Wages: 2.4, Industry_Leaders: "Financial Activities; Logistics", Industry_Laggards: "Manufacturing; Information" },
    { MSA: "San Antonio-New Braunfels, TX", QCEW_Real_Wage_YoY: 1.9, CAGR_3yr_Wages: 2.3, Industry_Leaders: "Health Care; Government", Industry_Laggards: "Information; Manufacturing" },
    { MSA: "Portland-Vancouver-Hillsboro, OR-WA", QCEW_Real_Wage_YoY: 1.6, CAGR_3yr_Wages: 1.5, Industry_Leaders: "Prof/Tech Services; Manufacturing", Industry_Laggards: "Construction; Retail Trade" },
    { MSA: "Sacramento-Roseville-Folsom, CA", QCEW_Real_Wage_YoY: 1.1, CAGR_3yr_Wages: 1.4, Industry_Leaders: "Government; Health Care", Industry_Laggards: "Information; Manufacturing" },
    { MSA: "Pittsburgh, PA", QCEW_Real_Wage_YoY: 1.2, CAGR_3yr_Wages: 1.3, Industry_Leaders: "Health Care; Education", Industry_Laggards: "Manufacturing; Leisure & Hospitality" },
    { MSA: "Austin-Round Rock-Georgetown, TX", QCEW_Real_Wage_YoY: 2.2, CAGR_3yr_Wages: 2.8, Industry_Leaders: "Information; Prof/Tech Services", Industry_Laggards: "Construction; Retail Trade" },
    { MSA: "Las Vegas-Henderson-Paradise, NV", QCEW_Real_Wage_YoY: 0.8, CAGR_3yr_Wages: 1.1, Industry_Leaders: "Leisure & Hospitality; Construction", Industry_Laggards: "Information; Manufacturing" },
    { MSA: "Cincinnati, OH-KY-IN", QCEW_Real_Wage_YoY: 1.0, CAGR_3yr_Wages: 1.2, Industry_Leaders: "Health Care; Logistics", Industry_Laggards: "Manufacturing; Information" },
    { MSA: "Kansas City, MO-KS", QCEW_Real_Wage_YoY: 1.3, CAGR_3yr_Wages: 1.6, Industry_Leaders: "Prof/Tech Services; Logistics", Industry_Laggards: "Manufacturing; Government" },
    { MSA: "Cleveland-Elyria, OH", QCEW_Real_Wage_YoY: 0.9, CAGR_3yr_Wages: 1.0, Industry_Leaders: "Health Care; Manufacturing", Industry_Laggards: "Information; Prof/Tech Services" },
    { MSA: "Columbus, OH", QCEW_Real_Wage_YoY: 1.5, CAGR_3yr_Wages: 1.8, Industry_Leaders: "Logistics; Financial Activities", Industry_Laggards: "Manufacturing; Government" },
    { MSA: "Indianapolis-Carmel-Anderson, IN", QCEW_Real_Wage_YoY: 1.4, CAGR_3yr_Wages: 1.7, Industry_Leaders: "Logistics; Health Care", Industry_Laggards: "Manufacturing; Information" },
    { MSA: "San Jose-Sunnyvale-Santa Clara, CA", QCEW_Real_Wage_YoY: 4.5, CAGR_3yr_Wages: 3.8, Industry_Leaders: "Information; Prof/Tech Services", Industry_Laggards: "Leisure & Hospitality; Construction" },
    { MSA: "Nashville-Davidson--Murfreesboro--Franklin, TN", QCEW_Real_Wage_YoY: 2.1, CAGR_3yr_Wages: 2.5, Industry_Leaders: "Health Care; Leisure & Hospitality", Industry_Laggards: "Manufacturing; Government" },
    { MSA: "Virginia Beach-Norfolk-Newport News, VA-NC", QCEW_Real_Wage_YoY: 1.2, CAGR_3yr_Wages: 1.4, Industry_Leaders: "Government; Logistics", Industry_Laggards: "Leisure & Hospitality; Retail Trade" },
    { MSA: "Providence-Warwick, RI-MA", QCEW_Real_Wage_YoY: 1.1, CAGR_3yr_Wages: 1.3, Industry_Leaders: "Health Care; Education", Industry_Laggards: "Manufacturing; Leisure & Hospitality" },
    { MSA: "Jacksonville, FL", QCEW_Real_Wage_YoY: 2.0, CAGR_3yr_Wages: 2.3, Industry_Leaders: "Logistics; Financial Activities", Industry_Laggards: "Manufacturing; Information" },
    { MSA: "Milwaukee-Waukesha, WI", QCEW_Real_Wage_YoY: 0.8, CAGR_3yr_Wages: 1.0, Industry_Leaders: "Manufacturing; Health Care", Industry_Laggards: "Information; Prof/Tech Services" },
    { MSA: "Raleigh-Cary, NC", QCEW_Real_Wage_YoY: 2.3, CAGR_3yr_Wages: 2.7, Industry_Leaders: "Prof/Tech Services; Health Care", Industry_Laggards: "Manufacturing; Retail Trade" },
    { MSA: "Oklahoma City, OK", QCEW_Real_Wage_YoY: 1.6, CAGR_3yr_Wages: 1.9, Industry_Leaders: "Logistics; Government", Industry_Laggards: "Manufacturing; Information" },
    { MSA: "Richmond, VA", QCEW_Real_Wage_YoY: 1.7, CAGR_3yr_Wages: 2.0, Industry_Leaders: "Financial Activities; Government", Industry_Laggards: "Manufacturing; Leisure & Hospitality" },
    { MSA: "Louisville/Jefferson County, KY-IN", QCEW_Real_Wage_YoY: 1.2, CAGR_3yr_Wages: 1.5, Industry_Leaders: "Logistics; Health Care", Industry_Laggards: "Manufacturing; Information" },
    { MSA: "Memphis, TN-MS-AR", QCEW_Real_Wage_YoY: 1.1, CAGR_3yr_Wages: 1.4, Industry_Leaders: "Logistics; Health Care", Industry_Laggards: "Manufacturing; Leisure & Hospitality" },
    { MSA: "Salt Lake City, UT", QCEW_Real_Wage_YoY: 2.2, CAGR_3yr_Wages: 2.6, Industry_Leaders: "Prof/Tech Services; Logistics", Industry_Laggards: "Manufacturing; Government" },
    { MSA: "New Orleans-Metairie, LA", QCEW_Real_Wage_YoY: 1.0, CAGR_3yr_Wages: 1.3, Industry_Leaders: "Leisure & Hospitality; Logistics", Industry_Laggards: "Information; Manufacturing" },
    { MSA: "Hartford-West Hartford-East Hartford, CT", QCEW_Real_Wage_YoY: 1.4, CAGR_3yr_Wages: 1.2, Industry_Leaders: "Financial Activities; Health Care", Industry_Laggards: "Manufacturing; Leisure & Hospitality" },
    { MSA: "Buffalo-Cheektowaga, NY", QCEW_Real_Wage_YoY: 1.3, CAGR_3yr_Wages: 1.1, Industry_Leaders: "Health Care; Education", Industry_Laggards: "Manufacturing; Prof/Tech Services" },
    { MSA: "Birmingham-Hoover, AL", QCEW_Real_Wage_YoY: 1.2, CAGR_3yr_Wages: 1.4, Industry_Leaders: "Health Care; Financial Activities", Industry_Laggards: "Manufacturing; Leisure & Hospitality" },
];

const sectorData = [
    { MSA: "New York-Newark-Jersey City, NY-NJ", LQ_Tech: 1.45, LQ_Health: 1.1, LQ_Mfg: 0.45, LQ_Logistics: 0.95, "ΔLQ_3yr_Key_Sector": "Information (+0.08)" },
    { MSA: "Los Angeles-Long Beach-Anaheim, CA", LQ_Tech: 1.2, LQ_Health: 0.95, LQ_Mfg: 0.8, LQ_Logistics: 1.1, "ΔLQ_3yr_Key_Sector": "Logistics (+0.05)" },
    { MSA: "Chicago-Naperville-Elgin, IL-IN-WI", LQ_Tech: 1.05, LQ_Health: 1.05, LQ_Mfg: 0.95, LQ_Logistics: 1.25, "ΔLQ_3yr_Key_Sector": "Logistics (+0.07)" },
    { MSA: "Dallas-Fort Worth-Arlington, TX", LQ_Tech: 1.25, LQ_Health: 0.9, LQ_Mfg: 0.85, LQ_Logistics: 1.3, "ΔLQ_3yr_Key_Sector": "Prof/Tech Services (+0.09)" },
    { MSA: "Houston-The Woodlands-Sugar Land, TX", LQ_Tech: 1.1, LQ_Health: 0.95, LQ_Mfg: 0.9, LQ_Logistics: 1.4, "ΔLQ_3yr_Key_Sector": "Logistics (+0.11)" },
    { MSA: "Washington-Arlington-Alexandria, DC-VA-MD-WV", LQ_Tech: 1.85, LQ_Health: 1.0, LQ_Mfg: 0.3, LQ_Logistics: 0.7, "ΔLQ_3yr_Key_Sector": "Prof/Tech Services (+0.12)" },
    { MSA: "Miami-Fort Lauderdale-West Palm Beach, FL", LQ_Tech: 0.9, LQ_Health: 1.15, LQ_Mfg: 0.5, LQ_Logistics: 1.2, "ΔLQ_3yr_Key_Sector": "Financial Activities (+0.06)" },
    { MSA: "Philadelphia-Camden-Wilmington, PA-NJ-DE-MD", LQ_Tech: 0.95, LQ_Health: 1.35, LQ_Mfg: 0.75, LQ_Logistics: 0.9, "ΔLQ_3yr_Key_Sector": "Health Care (+0.08)" },
    { MSA: "Atlanta-Sandy Springs-Roswell, GA", LQ_Tech: 1.3, LQ_Health: 0.95, LQ_Mfg: 0.7, LQ_Logistics: 1.5, "ΔLQ_3yr_Key_Sector": "Logistics (+0.15)" },
    { MSA: "Boston-Cambridge-Newton, MA-NH", LQ_Tech: 1.65, LQ_Health: 1.3, LQ_Mfg: 0.7, LQ_Logistics: 0.8, "ΔLQ_3yr_Key_Sector": "Prof/Tech Services (+0.14)" },
    { MSA: "Phoenix-Mesa-Chandler, AZ", LQ_Tech: 1.15, LQ_Health: 1.0, LQ_Mfg: 0.8, LQ_Logistics: 1.15, "ΔLQ_3yr_Key_Sector": "Construction (+0.10)" },
    { MSA: "San Francisco-Oakland-Hayward, CA", LQ_Tech: 2.25, LQ_Health: 0.9, LQ_Mfg: 0.6, LQ_Logistics: 0.85, "ΔLQ_3yr_Key_Sector": "Information (+0.21)" },
    { MSA: "Riverside-San Bernardino-Ontario, CA", LQ_Tech: 0.5, LQ_Health: 1.05, LQ_Mfg: 0.75, LQ_Logistics: 2.1, "ΔLQ_3yr_Key_Sector": "Logistics (+0.25)" },
    { MSA: "Detroit-Warren-Dearborn, MI", LQ_Tech: 0.9, LQ_Health: 1.1, LQ_Mfg: 2.1, LQ_Logistics: 1.0, "ΔLQ_3yr_Key_Sector": "Manufacturing (-0.05)" },
    { MSA: "Seattle-Tacoma-Bellevue, WA", LQ_Tech: 1.95, LQ_Health: 1.0, LQ_Mfg: 0.95, LQ_Logistics: 1.05, "ΔLQ_3yr_Key_Sector": "Information (+0.18)" },
    { MSA: "Minneapolis-St. Paul-Bloomington, MN-WI", LQ_Tech: 1.1, LQ_Health: 1.25, LQ_Mfg: 1.15, LQ_Logistics: 0.9, "ΔLQ_3yr_Key_Sector": "Health Care (+0.07)" },
    { MSA: "San Diego-Chula Vista-Carlsbad, CA", LQ_Tech: 1.35, LQ_Health: 1.05, LQ_Mfg: 0.9, LQ_Logistics: 0.8, "ΔLQ_3yr_Key_Sector": "Prof/Tech Services (+0.11)" },
    { MSA: "Tampa-St. Petersburg-Clearwater, FL", LQ_Tech: 1.0, LQ_Health: 1.2, LQ_Mfg: 0.6, LQ_Logistics: 1.05, "ΔLQ_3yr_Key_Sector": "Financial Activities (+0.08)" },
    { MSA: "Denver-Aurora-Lakewood, CO", LQ_Tech: 1.55, LQ_Health: 0.9, LQ_Mfg: 0.65, LQ_Logistics: 1.1, "ΔLQ_3yr_Key_Sector": "Prof/Tech Services (+0.13)" },
    { MSA: "St. Louis, MO-IL", LQ_Tech: 0.9, LQ_Health: 1.3, LQ_Mfg: 1.05, LQ_Logistics: 1.1, "ΔLQ_3yr_Key_Sector": "Health Care (+0.06)" },
    { MSA: "Baltimore-Columbia-Towson, MD", LQ_Tech: 1.25, LQ_Health: 1.4, LQ_Mfg: 0.55, LQ_Logistics: 0.85, "ΔLQ_3yr_Key_Sector": "Government (+0.05)" },
    { MSA: "Orlando-Kissimmee-Sanford, FL", LQ_Tech: 0.85, LQ_Health: 1.0, LQ_Mfg: 0.5, LQ_Logistics: 1.25, "ΔLQ_3yr_Key_Sector": "Leisure & Hospitality (+0.10)" },
    { MSA: "Charlotte-Concord-Gastonia, NC-SC", LQ_Tech: 1.2, LQ_Health: 1.05, LQ_Mfg: 0.9, LQ_Logistics: 1.45, "ΔLQ_3yr_Key_Sector": "Financial Activities (+0.11)" },
    { MSA: "San Antonio-New Braunfels, TX", LQ_Tech: 0.8, LQ_Health: 1.2, LQ_Mfg: 0.6, LQ_Logistics: 1.0, "ΔLQ_3yr_Key_Sector": "Government (+0.04)" },
    { MSA: "Portland-Vancouver-Hillsboro, OR-WA", LQ_Tech: 1.25, LQ_Health: 1.1, LQ_Mfg: 1.1, LQ_Logistics: 0.95, "ΔLQ_3yr_Key_Sector": "Manufacturing (+0.03)" },
    { MSA: "Sacramento-Roseville-Folsom, CA", LQ_Tech: 0.75, LQ_Health: 1.25, LQ_Mfg: 0.6, LQ_Logistics: 0.9, "ΔLQ_3yr_Key_Sector": "Government (+0.06)" },
    { MSA: "Pittsburgh, PA", LQ_Tech: 0.95, LQ_Health: 1.5, LQ_Mfg: 0.85, LQ_Logistics: 0.8, "ΔLQ_3yr_Key_Sector": "Health Care (+0.09)" },
    { MSA: "Austin-Round Rock-Georgetown, TX", LQ_Tech: 2.1, LQ_Health: 0.85, LQ_Mfg: 0.75, LQ_Logistics: 0.9, "ΔLQ_3yr_Key_Sector": "Prof/Tech Services (+0.25)" },
    { MSA: "Las Vegas-Henderson-Paradise, NV", LQ_Tech: 0.6, LQ_Health: 0.9, LQ_Mfg: 0.4, LQ_Logistics: 1.05, "ΔLQ_3yr_Key_Sector": "Leisure & Hospitality (+0.08)" },
    { MSA: "Cincinnati, OH-KY-IN", LQ_Tech: 0.9, LQ_Health: 1.15, LQ_Mfg: 1.2, LQ_Logistics: 1.3, "ΔLQ_3yr_Key_Sector": "Logistics (+0.09)" },
    { MSA: "Kansas City, MO-KS", LQ_Tech: 1.15, LQ_Health: 1.05, LQ_Mfg: 0.8, LQ_Logistics: 1.35, "ΔLQ_3yr_Key_Sector": "Prof/Tech Services (+0.07)" },
    { MSA: "Cleveland-Elyria, OH", LQ_Tech: 0.8, LQ_Health: 1.4, LQ_Mfg: 1.3, LQ_Logistics: 1.05, "ΔLQ_3yr_Key_Sector": "Health Care (+0.05)" },
    { MSA: "Columbus, OH", LQ_Tech: 1.05, LQ_Health: 1.1, LQ_Mfg: 0.9, LQ_Logistics: 1.55, "ΔLQ_3yr_Key_Sector": "Logistics (+0.12)" },
    { MSA: "Indianapolis-Carmel-Anderson, IN", LQ_Tech: 0.95, LQ_Health: 1.2, LQ_Mfg: 1.0, LQ_Logistics: 1.7, "ΔLQ_3yr_Key_Sector": "Logistics (+0.18)" },
    { MSA: "San Jose-Sunnyvale-Santa Clara, CA", LQ_Tech: 4.1, LQ_Health: 0.8, LQ_Mfg: 1.25, LQ_Logistics: 0.7, "ΔLQ_3yr_Key_Sector": "Information (+0.45)" },
    { MSA: "Nashville-Davidson--Murfreesboro--Franklin, TN", LQ_Tech: 1.05, LQ_Health: 1.25, LQ_Mfg: 0.85, LQ_Logistics: 1.15, "ΔLQ_3yr_Key_Sector": "Health Care (+0.10)" },
    { MSA: "Virginia Beach-Norfolk-Newport News, VA-NC", LQ_Tech: 0.65, LQ_Health: 1.1, LQ_Mfg: 0.95, LQ_Logistics: 1.2, "ΔLQ_3yr_Key_Sector": "Government (+0.03)" },
    { MSA: "Providence-Warwick, RI-MA", LQ_Tech: 0.7, LQ_Health: 1.45, LQ_Mfg: 0.9, LQ_Logistics: 0.85, "ΔLQ_3yr_Key_Sector": "Health Care (+0.07)" },
    { MSA: "Jacksonville, FL", LQ_Tech: 0.9, LQ_Health: 1.05, LQ_Mfg: 0.65, LQ_Logistics: 1.65, "ΔLQ_3yr_Key_Sector": "Logistics (+0.16)" },
    { MSA: "Milwaukee-Waukesha, WI", LQ_Tech: 0.85, LQ_Health: 1.2, LQ_Mfg: 1.6, LQ_Logistics: 1.0, "ΔLQ_3yr_Key_Sector": "Manufacturing (-0.03)" },
    { MSA: "Raleigh-Cary, NC", LQ_Tech: 1.7, LQ_Health: 1.15, LQ_Mfg: 0.7, LQ_Logistics: 0.8, "ΔLQ_3yr_Key_Sector": "Prof/Tech Services (+0.19)" },
    { MSA: "Oklahoma City, OK", LQ_Tech: 0.85, LQ_Health: 1.0, LQ_Mfg: 0.8, LQ_Logistics: 1.25, "ΔLQ_3yr_Key_Sector": "Government (+0.05)" },
    { MSA: "Richmond, VA", LQ_Tech: 0.95, LQ_Health: 1.15, LQ_Mfg: 0.75, LQ_Logistics: 1.1, "ΔLQ_3yr_Key_Sector": "Financial Activities (+0.06)" },
    { MSA: "Louisville/Jefferson County, KY-IN", LQ_Tech: 0.7, LQ_Health: 1.25, LQ_Mfg: 1.1, LQ_Logistics: 1.8, "ΔLQ_3yr_Key_Sector": "Logistics (+0.20)" },
    { MSA: "Memphis, TN-MS-AR", LQ_Tech: 0.6, LQ_Health: 1.2, LQ_Mfg: 0.7, LQ_Logistics: 2.2, "ΔLQ_3yr_Key_Sector": "Logistics (+0.22)" },
    { MSA: "Salt Lake City, UT", LQ_Tech: 1.4, LQ_Health: 1.0, LQ_Mfg: 0.9, LQ_Logistics: 1.3, "ΔLQ_3yr_Key_Sector": "Prof/Tech Services (+0.10)" },
    { MSA: "New Orleans-Metairie, LA", LQ_Tech: 0.65, LQ_Health: 1.1, LQ_Mfg: 0.6, LQ_Logistics: 1.3, "ΔLQ_3yr_Key_Sector": "Leisure & Hospitality (+0.05)" },
    { MSA: "Hartford-West Hartford-East Hartford, CT", LQ_Tech: 0.9, LQ_Health: 1.3, LQ_Mfg: 0.95, LQ_Logistics: 0.8, "ΔLQ_3yr_Key_Sector": "Financial Activities (+0.02)" },
    { MSA: "Buffalo-Cheektowaga, NY", LQ_Tech: 0.75, LQ_Health: 1.35, LQ_Mfg: 1.05, LQ_Logistics: 1.0, "ΔLQ_3yr_Key_Sector": "Health Care (+0.04)" },
    { MSA: "Birmingham-Hoover, AL", LQ_Tech: 0.8, LQ_Health: 1.3, LQ_Mfg: 0.9, LQ_Logistics: 0.95, "ΔLQ_3yr_Key_Sector": "Health Care (+0.06)" },
];

const affordabilityData = [
    { MSA: "New York-Newark-Jersey City, NY-NJ", Rent_to_Income: 0.38, Severe_Cost_Burden_Renters_Percent: 30.1, Net_Migration_per_1k: -15.2 },
    { MSA: "Los Angeles-Long Beach-Anaheim, CA", Rent_to_Income: 0.42, Severe_Cost_Burden_Renters_Percent: 33.5, Net_Migration_per_1k: -12.8 },
    { MSA: "Chicago-Naperville-Elgin, IL-IN-WI", Rent_to_Income: 0.31, Severe_Cost_Burden_Renters_Percent: 25.5, Net_Migration_per_1k: -10.5 },
    { MSA: "Dallas-Fort Worth-Arlington, TX", Rent_to_Income: 0.30, Severe_Cost_Burden_Renters_Percent: 24.8, Net_Migration_per_1k: 11.2 },
    { MSA: "Houston-The Woodlands-Sugar Land, TX", Rent_to_Income: 0.29, Severe_Cost_Burden_Renters_Percent: 24.1, Net_Migration_per_1k: 9.8 },
    { MSA: "Washington-Arlington-Alexandria, DC-VA-MD-WV", Rent_to_Income: 0.33, Severe_Cost_Burden_Renters_Percent: 26.8, Net_Migration_per_1k: -2.1 },
    { MSA: "Miami-Fort Lauderdale-West Palm Beach, FL", Rent_to_Income: 0.41, Severe_Cost_Burden_Renters_Percent: 32.8, Net_Migration_per_1k: 8.5 },
    { MSA: "Philadelphia-Camden-Wilmington, PA-NJ-DE-MD", Rent_to_Income: 0.32, Severe_Cost_Burden_Renters_Percent: 26.1, Net_Migration_per_1k: -3.5 },
    { MSA: "Atlanta-Sandy Springs-Roswell, GA", Rent_to_Income: 0.31, Severe_Cost_Burden_Renters_Percent: 25.9, Net_Migration_per_1k: 9.1 },
    { MSA: "Boston-Cambridge-Newton, MA-NH", Rent_to_Income: 0.36, Severe_Cost_Burden_Renters_Percent: 28.9, Net_Migration_per_1k: -4.5 },
    { MSA: "Phoenix-Mesa-Chandler, AZ", Rent_to_Income: 0.34, Severe_Cost_Burden_Renters_Percent: 27.5, Net_Migration_per_1k: 10.5 },
    { MSA: "San Francisco-Oakland-Hayward, CA", Rent_to_Income: 0.39, Severe_Cost_Burden_Renters_Percent: 31.2, Net_Migration_per_1k: -14.1 },
    { MSA: "Riverside-San Bernardino-Ontario, CA", Rent_to_Income: 0.38, Severe_Cost_Burden_Renters_Percent: 30.5, Net_Migration_per_1k: 5.5 },
    { MSA: "Detroit-Warren-Dearborn, MI", Rent_to_Income: 0.27, Severe_Cost_Burden_Renters_Percent: 22.1, Net_Migration_per_1k: -5.1 },
    { MSA: "Seattle-Tacoma-Bellevue, WA", Rent_to_Income: 0.32, Severe_Cost_Burden_Renters_Percent: 26.0, Net_Migration_per_1k: 1.5 },
    { MSA: "Minneapolis-St. Paul-Bloomington, MN-WI", Rent_to_Income: 0.28, Severe_Cost_Burden_Renters_Percent: 23.5, Net_Migration_per_1k: -2.5 },
    { MSA: "San Diego-Chula Vista-Carlsbad, CA", Rent_to_Income: 0.40, Severe_Cost_Burden_Renters_Percent: 32.1, Net_Migration_per_1k: -1.8 },
    { MSA: "Tampa-St. Petersburg-Clearwater, FL", Rent_to_Income: 0.35, Severe_Cost_Burden_Renters_Percent: 28.1, Net_Migration_per_1k: 12.5 },
    { MSA: "Denver-Aurora-Lakewood, CO", Rent_to_Income: 0.33, Severe_Cost_Burden_Renters_Percent: 26.9, Net_Migration_per_1k: 3.5 },
    { MSA: "St. Louis, MO-IL", Rent_to_Income: 0.26, Severe_Cost_Burden_Renters_Percent: 21.8, Net_Migration_per_1k: -6.2 },
    { MSA: "Baltimore-Columbia-Towson, MD", Rent_to_Income: 0.30, Severe_Cost_Burden_Renters_Percent: 25.0, Net_Migration_per_1k: -4.1 },
    { MSA: "Orlando-Kissimmee-Sanford, FL", Rent_to_Income: 0.36, Severe_Cost_Burden_Renters_Percent: 29.2, Net_Migration_per_1k: 14.1 },
    { MSA: "Charlotte-Concord-Gastonia, NC-SC", Rent_to_Income: 0.30, Severe_Cost_Burden_Renters_Percent: 25.2, Net_Migration_per_1k: 13.2 },
    { MSA: "San Antonio-New Braunfels, TX", Rent_to_Income: 0.31, Severe_Cost_Burden_Renters_Percent: 25.8, Net_Migration_per_1k: 10.8 },
    { MSA: "Portland-Vancouver-Hillsboro, OR-WA", Rent_to_Income: 0.33, Severe_Cost_Burden_Renters_Percent: 27.1, Net_Migration_per_1k: -1.1 },
    { MSA: "Sacramento-Roseville-Folsom, CA", Rent_to_Income: 0.35, Severe_Cost_Burden_Renters_Percent: 28.4, Net_Migration_per_1k: 6.1 },
    { MSA: "Pittsburgh, PA", Rent_to_Income: 0.27, Severe_Cost_Burden_Renters_Percent: 22.5, Net_Migration_per_1k: -7.1 },
    { MSA: "Austin-Round Rock-Georgetown, TX", Rent_to_Income: 0.34, Severe_Cost_Burden_Renters_Percent: 27.8, Net_Migration_per_1k: 15.5 },
    { MSA: "Las Vegas-Henderson-Paradise, NV", Rent_to_Income: 0.35, Severe_Cost_Burden_Renters_Percent: 28.8, Net_Migration_per_1k: 9.5 },
    { MSA: "Cincinnati, OH-KY-IN", Rent_to_Income: 0.28, Severe_Cost_Burden_Renters_Percent: 23.1, Net_Migration_per_1k: -3.1 },
    { MSA: "Kansas City, MO-KS", Rent_to_Income: 0.27, Severe_Cost_Burden_Renters_Percent: 22.6, Net_Migration_per_1k: -0.5 },
    { MSA: "Cleveland-Elyria, OH", Rent_to_Income: 0.26, Severe_Cost_Burden_Renters_Percent: 22.0, Net_Migration_per_1k: -7.8 },
    { MSA: "Columbus, OH", Rent_to_Income: 0.29, Severe_Cost_Burden_Renters_Percent: 24.0, Net_Migration_per_1k: 2.5 },
    { MSA: "Indianapolis-Carmel-Anderson, IN", Rent_to_Income: 0.28, Severe_Cost_Burden_Renters_Percent: 23.4, Net_Migration_per_1k: 1.1 },
    { MSA: "San Jose-Sunnyvale-Santa Clara, CA", Rent_to_Income: 0.37, Severe_Cost_Burden_Renters_Percent: 29.8, Net_Migration_per_1k: -13.5 },
    { MSA: "Nashville-Davidson--Murfreesboro--Franklin, TN", Rent_to_Income: 0.32, Severe_Cost_Burden_Renters_Percent: 26.5, Net_Migration_per_1k: 12.8 },
    { MSA: "Virginia Beach-Norfolk-Newport News, VA-NC", Rent_to_Income: 0.31, Severe_Cost_Burden_Renters_Percent: 25.7, Net_Migration_per_1k: -2.8 },
    { MSA: "Providence-Warwick, RI-MA", Rent_to_Income: 0.32, Severe_Cost_Burden_Renters_Percent: 26.3, Net_Migration_per_1k: -4.8 },
    { MSA: "Jacksonville, FL", Rent_to_Income: 0.32, Severe_Cost_Burden_Renters_Percent: 26.6, Net_Migration_per_1k: 13.8 },
    { MSA: "Milwaukee-Waukesha, WI", Rent_to_Income: 0.28, Severe_Cost_Burden_Renters_Percent: 23.3, Net_Migration_per_1k: -5.5 },
    { MSA: "Raleigh-Cary, NC", Rent_to_Income: 0.30, Severe_Cost_Burden_Renters_Percent: 25.3, Net_Migration_per_1k: 14.8 },
    { MSA: "Oklahoma City, OK", Rent_to_Income: 0.27, Severe_Cost_Burden_Renters_Percent: 22.4, Net_Migration_per_1k: 1.8 },
    { MSA: "Richmond, VA", Rent_to_Income: 0.30, Severe_Cost_Burden_Renters_Percent: 25.1, Net_Migration_per_1k: 1.5 },
    { MSA: "Louisville/Jefferson County, KY-IN", Rent_to_Income: 0.28, Severe_Cost_Burden_Renters_Percent: 23.2, Net_Migration_per_1k: -1.5 },
    { MSA: "Memphis, TN-MS-AR", Rent_to_Income: 0.29, Severe_Cost_Burden_Renters_Percent: 24.2, Net_Migration_per_1k: -3.8 },
    { MSA: "Salt Lake City, UT", Rent_to_Income: 0.31, Severe_Cost_Burden_Renters_Percent: 25.9, Net_Migration_per_1k: 7.5 },
    { MSA: "New Orleans-Metairie, LA", Rent_to_Income: 0.34, Severe_Cost_Burden_Renters_Percent: 27.9, Net_Migration_per_1k: -2.2 },
    { MSA: "Hartford-West Hartford-East Hartford, CT", Rent_to_Income: 0.31, Severe_Cost_Burden_Renters_Percent: 25.6, Net_Migration_per_1k: -6.5 },
    { MSA: "Buffalo-Cheektowaga, NY", Rent_to_Income: 0.28, Severe_Cost_Burden_Renters_Percent: 23.0, Net_Migration_per_1k: -6.8 },
    { MSA: "Birmingham-Hoover, AL", Rent_to_Income: 0.28, Severe_Cost_Burden_Renters_Percent: 23.6, Net_Migration_per_1k: -1.2 },
];

const opportunityData = [
    { MSA: "Dallas-Fort Worth-Arlington, TX", Pop_Growth_Score: 92, Job_Growth_Score: 88, Real_Wage_Score: 75, Talent_Score: 85, Affordability_Score: 75, Sector_Diversity_Score: 80, Composite_0_100: 84.1, Rationale: "Balanced, high-volume growth across population, jobs, and talent with moderate affordability pressures." },
    { MSA: "Houston-The Woodlands-Sugar Land, TX", Pop_Growth_Score: 88, Job_Growth_Score: 90, Real_Wage_Score: 80, Talent_Score: 80, Affordability_Score: 80, Sector_Diversity_Score: 78, Composite_0_100: 83.0, Rationale: "Powerful job and population engine; strong in logistics and energy, improving diversification." },
    { MSA: "Atlanta-Sandy Springs-Roswell, GA", Pop_Growth_Score: 85, Job_Growth_Score: 85, Real_Wage_Score: 72, Talent_Score: 88, Affordability_Score: 72, Sector_Diversity_Score: 82, Composite_0_100: 81.3, Rationale: "Major logistics and corporate hub attracting significant talent; affordability is a growing watch item." },
    { MSA: "Charlotte-Concord-Gastonia, NC-SC", Pop_Growth_Score: 95, Job_Growth_Score: 95, Real_Wage_Score: 85, Talent_Score: 92, Affordability_Score: 68, Sector_Diversity_Score: 75, Composite_0_100: 80.8, Rationale: "Top-tier growth in jobs and population, driven by financial services; affordability is rapidly eroding." },
    { MSA: "Raleigh-Cary, NC", Pop_Growth_Score: 98, Job_Growth_Score: 92, Real_Wage_Score: 90, Talent_Score: 98, Affordability_Score: 65, Sector_Diversity_Score: 85, Composite_0_100: 80.6, Rationale: "Premier talent magnet with exceptional growth in high-wage tech and life sciences sectors." },
    { MSA: "Austin-Round Rock-Georgetown, TX", Pop_Growth_Score: 100, Job_Growth_Score: 98, Real_Wage_Score: 95, Talent_Score: 100, Affordability_Score: 50, Sector_Diversity_Score: 88, Composite_0_100: 80.5, Rationale: "Unmatched growth in tech talent and jobs, but severe affordability challenges pose significant risk." },
    { MSA: "Nashville-Davidson--Murfreesboro--Franklin, TN", Pop_Growth_Score: 93, Job_Growth_Score: 91, Real_Wage_Score: 88, Talent_Score: 90, Affordability_Score: 60, Sector_Diversity_Score: 76, Composite_0_100: 79.5, Rationale: "Dynamic growth in healthcare and creative industries, attracting young talent; affordability is a key constraint." },
    { MSA: "Orlando-Kissimmee-Sanford, FL", Pop_Growth_Score: 97, Job_Growth_Score: 94, Real_Wage_Score: 65, Talent_Score: 82, Affordability_Score: 62, Sector_Diversity_Score: 70, Composite_0_100: 78.9, Rationale: "Explosive population growth fueled by tourism and logistics, but lower wage profile." },
    { MSA: "Tampa-St. Petersburg-Clearwater, FL", Pop_Growth_Score: 94, Job_Growth_Score: 89, Real_Wage_Score: 78, Talent_Score: 84, Affordability_Score: 66, Sector_Diversity_Score: 74, Composite_0_100: 78.7, Rationale: "Strong migration and job growth, particularly in financial services, with significant affordability strain." },
    { MSA: "Phoenix-Mesa-Chandler, AZ", Pop_Growth_Score: 90, Job_Growth_Score: 89, Real_Wage_Score: 82, Talent_Score: 81, Affordability_Score: 69, Sector_Diversity_Score: 72, Composite_0_100: 78.2, Rationale: "Consistent high-volume growth in population and diverse job sectors; water and housing costs are long-term risks." },
    { MSA: "Jacksonville, FL", Pop_Growth_Score: 96, Job_Growth_Score: 90, Real_Wage_Score: 84, Talent_Score: 80, Affordability_Score: 70, Sector_Diversity_Score: 75, Composite_0_100: 78.0, Rationale: "Rapidly growing logistics and financial services hub with relatively better affordability than other Florida metros." },
    { MSA: "Salt Lake City, UT", Pop_Growth_Score: 84, Job_Growth_Score: 96, Real_Wage_Score: 89, Talent_Score: 89, Affordability_Score: 64, Sector_Diversity_Score: 77, Composite_0_100: 77.8, Rationale: "Emerging tech and logistics hub with strong demographic fundamentals and high-quality job growth." },
    { MSA: "San Antonio-New Braunfels, TX", Pop_Growth_Score: 91, Job_Growth_Score: 96, Real_Wage_Score: 83, Talent_Score: 75, Affordability_Score: 74, Sector_Diversity_Score: 70, Composite_0_100: 77.5, Rationale: "Strong job growth in stable sectors like government and healthcare, coupled with good migration and affordability." },
    { MSA: "Denver-Aurora-Lakewood, CO", Pop_Growth_Score: 78, Job_Growth_Score: 75, Real_Wage_Score: 76, Talent_Score: 91, Affordability_Score: 61, Sector_Diversity_Score: 80, Composite_0_100: 75.4, Rationale: "Mature tech and professional services hub with strong talent but facing high costs and slowing migration." },
    { MSA: "Indianapolis-Carmel-Anderson, IN", Pop_Growth_Score: 65, Job_Growth_Score: 74, Real_Wage_Score: 74, Talent_Score: 78, Affordability_Score: 85, Sector_Diversity_Score: 73, Composite_0_100: 74.5, Rationale: "Midwest standout with strong logistics core, good affordability, and steady talent attraction." },
    { MSA: "Columbus, OH", Pop_Growth_Score: 75, Job_Growth_Score: 72, Real_Wage_Score: 76, Talent_Score: 80, Affordability_Score: 82, Sector_Diversity_Score: 71, Composite_0_100: 74.1, Rationale: "Diversified economy with strengths in logistics, finance, and government; stable and affordable." },
    { MSA: "Richmond, VA", Pop_Growth_Score: 70, Job_Growth_Score: 78, Real_Wage_Score: 80, Talent_Score: 82, Affordability_Score: 78, Sector_Diversity_Score: 72, Composite_0_100: 73.8, Rationale: "Solid growth driven by finance and government, offering a balanced profile of talent and affordability." },
    { MSA: "Kansas City, MO-KS", Pop_Growth_Score: 60, Job_Growth_Score: 68, Real_Wage_Score: 70, Talent_Score: 77, Affordability_Score: 88, Sector_Diversity_Score: 75, Composite_0_100: 71.6, Rationale: "Affordable and stable Midwest hub with growing strengths in tech and professional services." },
    { MSA: "Seattle-Tacoma-Bellevue, WA", Pop_Growth_Score: 70, Job_Growth_Score: 70, Real_Wage_Score: 94, Talent_Score: 95, Affordability_Score: 45, Sector_Diversity_Score: 84, Composite_0_100: 70.5, Rationale: "Global tech hub with elite talent and wages, but extremely high costs are driving domestic out-migration." },
    { MSA: "San Jose-Sunnyvale-Santa Clara, CA", Pop_Growth_Score: 10, Job_Growth_Score: 60, Real_Wage_Score: 100, Talent_Score: 94, Affordability_Score: 20, Sector_Diversity_Score: 90, Composite_0_100: 68.8, Rationale: "Epicenter of the tech economy with unmatched wages and talent, but faces extreme affordability crisis and out-migration." },
    { MSA: "San Diego-Chula Vista-Carlsbad, CA", Pop_Growth_Score: 50, Job_Growth_Score: 65, Real_Wage_Score: 73, Talent_Score: 83, Affordability_Score: 30, Sector_Diversity_Score: 79, Composite_0_100: 65.7, Rationale: "Desirable quality of life and strong biotech/defense sectors, severely hampered by housing costs." },
    { MSA: "Minneapolis-St. Paul-Bloomington, MN-WI", Pop_Growth_Score: 55, Job_Growth_Score: 66, Real_Wage_Score: 68, Talent_Score: 84, Affordability_Score: 84, Sector_Diversity_Score: 78, Composite_0_100: 65.5, Rationale: "Stable, diversified economy with strong corporate presence and good affordability, but slower growth." },
    { MSA: "Virginia Beach-Norfolk-Newport News, VA-NC", Pop_Growth_Score: 52, Job_Growth_Score: 62, Real_Wage_Score: 65, Talent_Score: 70, Affordability_Score: 80, Sector_Diversity_Score: 68, Composite_0_100: 64.9, Rationale: "Economy anchored by large government/military presence, providing stability but limiting dynamic growth." },
    { MSA: "Louisville/Jefferson County, KY-IN", Pop_Growth_Score: 56, Job_Growth_Score: 69, Real_Wage_Score: 67, Talent_Score: 72, Affordability_Score: 86, Sector_Diversity_Score: 65, Composite_0_100: 64.7, Rationale: "Major logistics hub with good affordability, but faces challenges in attracting high-skill talent." },
    { MSA: "Oklahoma City, OK", Pop_Growth_Score: 72, Job_Growth_Score: 71, Real_Wage_Score: 77, Talent_Score: 71, Affordability_Score: 89, Sector_Diversity_Score: 60, Composite_0_100: 64.2, Rationale: "Steady growth driven by energy and government sectors, offering excellent affordability." },
    { MSA: "Memphis, TN-MS-AR", Pop_Growth_Score: 48, Job_Growth_Score: 64, Real_Wage_Score: 66, Talent_Score: 68, Affordability_Score: 87, Sector_Diversity_Score: 69, Composite_0_100: 63.9, Rationale: "Dominant logistics hub with very low costs, but struggles with wage growth and talent attraction." },
    { MSA: "Cincinnati, OH-KY-IN", Pop_Growth_Score: 50, Job_Growth_Score: 68, Real_Wage_Score: 64, Talent_Score: 74, Affordability_Score: 86, Sector_Diversity_Score: 70, Composite_0_100: 63.5, Rationale: "Stable industrial and healthcare base with good affordability, but modest growth outlook." },
    { MSA: "Birmingham-Hoover, AL", Pop_Growth_Score: 53, Job_Growth_Score: 60, Real_Wage_Score: 66, Talent_Score: 73, Affordability_Score: 90, Sector_Diversity_Score: 64, Composite_0_100: 63.1, Rationale: "Regional hub for healthcare and finance, very affordable but with limited demographic momentum." },
    { MSA: "Sacramento-Roseville-Folsom, CA", Pop_Growth_Score: 79, Job_Growth_Score: 71, Real_Wage_Score: 66, Talent_Score: 74, Affordability_Score: 55, Sector_Diversity_Score: 62, Composite_0_100: 62.8, Rationale: "Beneficiary of Bay Area out-migration, anchored by government jobs, but affordability is worsening." },
    { MSA: "Las Vegas-Henderson-Paradise, NV", Pop_Growth_Score: 87, Job_Growth_Score: 80, Real_Wage_Score: 55, Talent_Score: 70, Affordability_Score: 60, Sector_Diversity_Score: 55, Composite_0_100: 61.7, Rationale: "Strong rebound in core tourism sector driving growth, but economy remains highly cyclical and low-wage." },
    { MSA: "Portland-Vancouver-Hillsboro, OR-WA", Pop_Growth_Score: 58, Job_Growth_Score: 61, Real_Wage_Score: 71, Talent_Score: 81, Affordability_Score: 58, Sector_Diversity_Score: 64, Composite_0_100: 61.5, Rationale: "Strong manufacturing and tech presence, but facing affordability and social challenges impacting growth." },
    { MSA: "St. Louis, MO-IL", Pop_Growth_Score: 35, Job_Growth_Score: 58, Real_Wage_Score: 62, Talent_Score: 70, Affordability_Score: 90, Sector_Diversity_Score: 72, Composite_0_100: 60.9, Rationale: "Affordable metro with strong healthcare and finance sectors, but challenged by demographic stagnation." },
    { MSA: "New Orleans-Metairie, LA", Pop_Growth_Score: 51, Job_Growth_Score: 73, Real_Wage_Score: 63, Talent_Score: 69, Affordability_Score: 63, Sector_Diversity_Score: 58, Composite_0_100: 60.1, Rationale: "Unique cultural economy driving tourism, but faces structural economic and demographic headwinds." },
    { MSA: "Miami-Fort Lauderdale-West Palm Beach, FL", Pop_Growth_Score: 82, Job_Growth_Score: 86, Real_Wage_Score: 79, Talent_Score: 78, Affordability_Score: 35, Sector_Diversity_Score: 65, Composite_0_100: 59.8, Rationale: "Major international hub with strong migration and job growth, but faces extreme housing affordability crisis." },
    { MSA: "Milwaukee-Waukesha, WI", Pop_Growth_Score: 40, Job_Growth_Score: 55, Real_Wage_Score: 60, Talent_Score: 71, Affordability_Score: 86, Sector_Diversity_Score: 68, Composite_0_100: 59.5, Rationale: "Stable manufacturing and corporate base, but experiencing demographic out-migration and slow growth." },
    { MSA: "San Francisco-Oakland-Hayward, CA", Pop_Growth_Score: 15, Job_Growth_Score: 40, Real_Wage_Score: 98, Talent_Score: 92, Affordability_Score: 25, Sector_Diversity_Score: 85, Composite_0_100: 58.7, Rationale: "World-class talent and high-wage jobs offset by extreme costs, leading to significant domestic out-migration." },
    { MSA: "Philadelphia-Camden-Wilmington, PA-NJ-DE-MD", Pop_Growth_Score: 45, Job_Growth_Score: 79, Real_Wage_Score: 65, Talent_Score: 76, Affordability_Score: 71, Sector_Diversity_Score: 60, Composite_0_100: 57.9, Rationale: "Large, diversified economy with strong eds-and-meds anchor, but slow demographic growth." },
    { MSA: "Detroit-Warren-Dearborn, MI", Pop_Growth_Score: 42, Job_Growth_Score: 65, Real_Wage_Score: 58, Talent_Score: 65, Affordability_Score: 88, Sector_Diversity_Score: 62, Composite_0_100: 56.6, Rationale: "Automotive industry anchor provides specialization but also cyclicality; affordability is a key strength." },
    { MSA: "Cleveland-Elyria, OH", Pop_Growth_Score: 25, Job_Growth_Score: 63, Real_Wage_Score: 61, Talent_Score: 66, Affordability_Score: 92, Sector_Diversity_Score: 66, Composite_0_100: 55.8, Rationale: "Strong healthcare sector and very affordable, but faces significant long-term demographic decline." },
    { MSA: "Buffalo-Cheektowaga, NY", Pop_Growth_Score: 30, Job_Growth_Score: 78, Real_Wage_Score: 67, Talent_Score: 67, Affordability_Score: 87, Sector_Diversity_Score: 55, Composite_0_100: 54.9, Rationale: "Recent job growth is positive, but long-term demographic trends remain challenging." },
    { MSA: "Riverside-San Bernardino-Ontario, CA", Pop_Growth_Score: 74, Job_Growth_Score: 76, Real_Wage_Score: 62, Talent_Score: 60, Affordability_Score: 40, Sector_Diversity_Score: 61, Composite_0_100: 54.1, Rationale: "Massive logistics hub driving job growth, but wages are low and affordability is poor for the region." },
    { MSA: "Hartford-West Hartford-East Hartford, CT", Pop_Growth_Score: 32, Job_Growth_Score: 60, Real_Wage_Score: 69, Talent_Score: 75, Affordability_Score: 73, Sector_Diversity_Score: 59, Composite_0_100: 53.2, Rationale: "Legacy insurance/finance hub with high human capital, but facing out-migration and high costs." },
    { MSA: "Providence-Warwick, RI-MA", Pop_Growth_Score: 44, Job_Growth_Score: 59, Real_Wage_Score: 66, Talent_Score: 72, Affordability_Score: 72, Sector_Diversity_Score: 61, Composite_0_100: 52.8, Rationale: "Stable eds-and-meds economy, but constrained by slow growth and proximity to more dynamic Boston." },
    { MSA: "Pittsburgh, PA", Pop_Growth_Score: 28, Job_Growth_Score: 75, Real_Wage_Score: 68, Talent_Score: 69, Affordability_Score: 90, Sector_Diversity_Score: 58, Composite_0_100: 52.1, Rationale: "Successful transition to a healthcare/tech economy, but still grappling with legacy demographic decline." },
    { MSA: "Boston-Cambridge-Newton, MA-NH", Pop_Growth_Score: 48, Job_Growth_Score: 61, Real_Wage_Score: 92, Talent_Score: 96, Affordability_Score: 40, Sector_Diversity_Score: 81, Composite_0_100: 51.7, Rationale: "Elite global hub for talent and innovation, but extreme housing costs are a major drag on growth." },
    { MSA: "Chicago-Naperville-Elgin, IL-IN-WI", Pop_Growth_Score: 20, Job_Growth_Score: 59, Real_Wage_Score: 60, Talent_Score: 79, Affordability_Score: 76, Sector_Diversity_Score: 73, Composite_0_100: 50.5, Rationale: "Diverse global city with deep human capital, but high taxes and out-migration weigh on its score." },
    { MSA: "Los Angeles-Long Beach-Anaheim, CA", Pop_Growth_Score: 12, Job_Growth_Score: 58, Real_Wage_Score: 55, Talent_Score: 77, Affordability_Score: 15, Sector_Diversity_Score: 75, Composite_0_100: 48.9, Rationale: "Massive, diverse economy but crippled by extreme unaffordability and large-scale domestic out-migration." },
    { MSA: "New York-Newark-Jersey City, NY-NJ", Pop_Growth_Score: 18, Job_Growth_Score: 72, Real_Wage_Score: 70, Talent_Score: 82, Affordability_Score: 38, Sector_Diversity_Score: 83, Composite_0_100: 48.2, Rationale: "Global financial capital with immense talent, but high costs and taxes drive significant out-migration." }
];

const allData = [populationData, jobData, wageData, sectorData, affordabilityData, opportunityData];

const combinedDataMap = new Map<string, Partial<MetroData>>();

allData.forEach(dataset => {
    dataset.forEach(item => {
        const msa = item.MSA;
        if (!combinedDataMap.has(msa)) {
            combinedDataMap.set(msa, {});
        }
        const existingData = combinedDataMap.get(msa);
        combinedDataMap.set(msa, { ...existingData, ...item });
    });
});

export const mergedMetroData: MetroData[] = Array.from(combinedDataMap.values()) as MetroData[];

export const metroProfiles: MetroProfileData[] = [
    {
        "MSA": "New York-Newark-Jersey City, NY-NJ",
        "snapshot": "The nation's largest metro continues to experience population declines (5-year CAGR of -0.30%). It possesses an elite talent pool, with a BA+ share of 41.5% that has grown by 1.1 percentage points over five years.",
        "laborMarket": "Job growth is modest at 1.6% YoY, with an unemployment rate of 5.1%. Real wages show resilience, growing 2.1% YoY, driven by high-LQ sectors like Information and Financial Activities.",
        "migrationAffordability": "Severe domestic out-migration (-15.2 per 1k) is driven by extreme housing costs. The rent-to-income ratio is 0.38, and 30.1% of renters are severely cost-burdened.",
        "forwardView": "New York remains a global center for high-wage industries, but its high cost structure continues to push residents to more affordable regions. Stemming out-migration is the key challenge."
    },
    {
        "MSA": "Los Angeles-Long Beach-Anaheim, CA",
        "snapshot": "The nation's second-largest metro has seen persistent population decline (5-year CAGR of -0.42%). Its substantial talent base (35.8% BA+) has seen a slight 5-year decline, a worrying trend.",
        "laborMarket": "The labor market is stagnant, with YoY job growth of just 0.6% and an elevated unemployment rate of 6.0%. Real wage growth is weak at 0.5% YoY. Key specializations are in Information and Logistics.",
        "migrationAffordability": "An acute affordability crisis (rent-to-income ratio of 0.42) is the primary driver of its substantial net domestic out-migration of -12.8 per 1,000.",
        "forwardView": "While LA's economic scale is formidable, its growth potential is severely constrained by housing costs, making it a net exporter of population to more affordable markets."
    },
    {
        "MSA": "Chicago-Naperville-Elgin, IL-IN-WI",
        "snapshot": "Chicago's population shows a slow but persistent decline (5-year CAGR of -0.15%). The metro has a strong talent base (40.5% BA+), which has increased by 0.9 percentage points over five years.",
        "laborMarket": "Job growth has been sluggish at 0.6% YoY, with an unemployment rate of 4.9%. Real wage growth is modest at 0.8% YoY. The economy is well-diversified with strengths in Prof/Tech Services and Logistics (LQ 1.25).",
        "migrationAffordability": "Significant net domestic out-migration (-10.5 per 1,000) persists. However, its housing market remains relatively affordable compared to coastal peers, with a rent-to-income ratio of 0.31.",
        "forwardView": "Chicago's core challenge is demographic stagnation. Its affordability and deep talent pool are assets, but it must reverse out-migration to compete effectively with high-growth hubs."
    },
    {
        "MSA": "Dallas-Fort Worth-Arlington, TX",
        "snapshot": "A premier growth market, DFW's population is expanding at a robust 2.85% 5-year CAGR. The talent pool is rapidly deepening, with the BA+ share increasing by 2.5 percentage points over five years to 38.2%.",
        "laborMarket": "The job market is dynamic, with a strong 3-year CAGR of 2.5% and a low unemployment rate of 4.0%. Real wages are growing at a healthy 1.2% YoY. The economy is a powerhouse in Logistics (LQ 1.30) and Prof/Tech Services (LQ 1.25).",
        "migrationAffordability": "DFW is a top destination for domestic migrants (+11.2 per 1,000), supported by a manageable rent-to-income ratio of 0.30 and a below-average severe renter burden rate.",
        "forwardView": "DFW offers a potent combination of high-volume growth and manageable affordability, positioning it for continued outperformance and making it our top-ranked market."
    },
    {
        "MSA": "Houston-The Woodlands-Sugar Land, TX",
        "snapshot": "Another Texas growth leader, Houston's population has grown at a 2.60% 5-year CAGR. Its BA+ share is expanding, rising 2.1 percentage points over five years to 36.5%.",
        "laborMarket": "Job growth is strong, at 1.8% YoY and a 2.8% 3-year CAGR. The unemployment rate is 4.5%. Real wages are growing at a solid 1.5% YoY. Houston is a global leader in energy and a dominant Logistics hub (LQ 1.40).",
        "migrationAffordability": "The metro is a major magnet for new residents (+9.8 per 1,000), with its affordability a key advantage (rent-to-income ratio of 0.29).",
        "forwardView": "Houston's economy is successfully diversifying beyond energy. Its combination of strong job growth and high affordability makes it one of the most attractive large metros."
    },
    {
        "MSA": "Washington-Arlington-Alexandria, DC-VA-MD-WV",
        "snapshot": "The D.C. MSA exhibits slow, stable growth (0.80% 5-year CAGR) and boasts one of the most educated populations in the U.S., with 52.1% holding a BA+ degree.",
        "laborMarket": "The job market has been sluggish, with a -0.2% YoY change, reflecting softness in its core sectors. Real wage growth is positive at 1.8% YoY. The economy is uniquely specialized in Government and Prof/Tech Services (LQ 1.85).",
        "migrationAffordability": "The metro experiences modest net domestic out-migration (-2.1 per 1,000), driven by high living costs, including a rent-to-income ratio of 0.33.",
        "forwardView": "The D.C. economy's fate is tied to federal spending. While its talent base is elite, its high cost of living and slow growth make it less dynamic than Sunbelt competitors."
    },
    {
        "MSA": "Miami-Fort Lauderdale-West Palm Beach, FL",
        "snapshot": "A high-growth coastal hub with a 2.10% 5-year population CAGR. The population's BA+ share is 35.2%, having grown by 1.5 percentage points over five years.",
        "laborMarket": "Job growth is robust at 1.5% YoY, with a very low unemployment rate of 3.4%. Real wages grew 1.4% YoY. The economy is a major center for international trade, finance, and tourism.",
        "migrationAffordability": "Miami attracts significant migration (+8.5 per 1,000), but this has created an acute affordability crisis. The rent-to-income ratio is a very high 0.41, and 32.8% of renters are severely cost-burdened.",
        "forwardView": "Miami's status as a global gateway fuels its growth. The primary risk is its severe lack of housing affordability, which could choke off the domestic migration that has been key to its success."
    },
    {
        "MSA": "Philadelphia-Camden-Wilmington, PA-NJ-DE-MD",
        "snapshot": "A large, stable market with slow growth (0.45% 5-year CAGR). Its population is well-educated (39.8% BA+) and has a stable prime-age share of 40.1%.",
        "laborMarket": "Job growth has recently accelerated to 2.1% YoY. Real wages grew 1.1% YoY. The economy is heavily anchored by its 'eds and meds' sectors, with a very high LQ in Health Care (1.35).",
        "migrationAffordability": "The metro experiences moderate net domestic out-migration (-3.5 per 1,000). Its key advantage is relative affordability, with a rent-to-income ratio of 0.32.",
        "forwardView": "Philadelphia offers stability and affordability. Its challenge is to translate its strong institutional base into more dynamic private-sector job growth to attract and retain talent."
    },
    {
        "MSA": "Atlanta-Sandy Springs-Roswell, GA",
        "snapshot": "A leading Sunbelt growth market with a strong 2.45% 5-year population CAGR. The talent pool is a major asset, with the BA+ share growing by a remarkable 2.8 percentage points in five years.",
        "laborMarket": "Job growth has moderated to 0.7% YoY but remains strong over a 3-year horizon (2.2% CAGR). The unemployment rate is a low 3.5%. Atlanta is a critical logistics hub (LQ 1.50) and a growing Prof/Tech center (LQ 1.30).",
        "migrationAffordability": "The metro continues to attract a large volume of domestic migrants (net +9.1 per 1,000). Affordability is becoming a concern, with a rent-to-income ratio of 0.31.",
        "forwardView": "Atlanta's diverse economy and role as the economic capital of the Southeast position it for continued strong performance. Managing growth and rising housing costs is critical."
    },
    {
        "MSA": "Boston-Cambridge-Newton, MA-NH",
        "snapshot": "A high-cost, high-talent market with slow growth (0.65% 5-year CAGR). Its defining feature is its extraordinary human capital: 50.2% of the population holds a BA+ degree.",
        "laborMarket": "Job growth is slow at 0.5% YoY. However, real wage growth is strong at 2.5% YoY, reflecting its high-value economy centered on Prof/Tech Services (LQ 1.65) and Health Care (LQ 1.30).",
        "migrationAffordability": "High costs are a major headwind, driving net domestic out-migration of -4.5 per 1,000. The rent-to-income ratio is 0.36.",
        "forwardView": "Boston's innovation economy is a powerful engine for wealth creation. Its primary challenge is a housing supply that is inadequate for its high-wage workforce, limiting population growth."
    },
    {
        "MSA": "Phoenix-Mesa-Chandler, AZ",
        "snapshot": "A top-tier growth market in the Mountain West, Phoenix's population expanded at a rapid 2.75% 5-year CAGR. The region is successfully attracting talent, with the BA+ share increasing by 2.0 percentage points over five years.",
        "laborMarket": "Phoenix's labor market is robust, with a 3-year job CAGR of 2.7% and a low unemployment rate of 4.1%. Real wages are growing at a healthy 1.6% YoY. The economy is increasingly diversified, with strengths in technology and construction.",
        "migrationAffordability": "Phoenix is a major destination for domestic migrants, drawing a net 10.5 residents per 1,000 annually. This influx is putting pressure on housing, with a rent-to-income ratio of 0.34, indicating growing affordability challenges.",
        "forwardView": "Phoenix's strong momentum in job and population growth is set to continue. Managing strains on infrastructure, water, and housing affordability will be the critical challenge to sustaining its success."
    },
    {
        "MSA": "San Francisco-Oakland-Hayward, CA",
        "snapshot": "The Bay Area has seen significant population decline (5-year CAGR of -0.35%) and a slight contraction in its prime-age share. It still possesses an elite talent pool, but high costs are taking a demographic toll.",
        "laborMarket": "The labor market is contracting, with job growth at -0.5% YoY. However, real wage growth is the strongest among peers at 3.1% YoY, driven by its unparalleled concentration in high-wage tech and information sectors (LQ 2.25).",
        "migrationAffordability": "The metro faces an extreme out-migration crisis (-14.1 per 1,000), a direct result of its affordability crisis. The rent-to-income ratio stands at 0.39, with 31.2% of renters severely cost-burdened.",
        "forwardView": "The Bay Area remains a global innovation hub with incredible wealth generation, but its broken housing market makes it a net exporter of people, a fundamental challenge to its long-term health."
    },
    {
        "MSA": "Riverside-San Bernardino-Ontario, CA",
        "snapshot": "The Inland Empire's population is growing steadily (1.6% 5-year CAGR), largely as a release valve for coastal California's high costs. Talent metrics, however, lag significantly behind other large metros.",
        "laborMarket": "Job growth is solid at 1.0% YoY, but the unemployment rate is a high 6.4%. Real wage growth is a modest 0.9% YoY. The economy is overwhelmingly dominated by the Logistics sector (LQ 2.10).",
        "migrationAffordability": "The metro receives significant in-migration from other parts of California (+5.5 per 1,000). However, this demand has pushed its own affordability to a breaking point, with a rent-to-income ratio of 0.38.",
        "forwardView": "The Inland Empire's growth is dependent on its role as a logistics hub and an affordable alternative to LA. Low wages and rising housing costs threaten this dynamic."
    },
    {
        "MSA": "Detroit-Warren-Dearborn, MI",
        "snapshot": "Detroit's population has stabilized, showing slight growth over the past five years (0.2% 5-year CAGR). Talent attraction remains a challenge, with only modest gains in the BA+ share of the population.",
        "laborMarket": "The labor market shows signs of recovery, with 1.3% YoY job growth, but the unemployment rate is still elevated at 5.7%. Real wage growth is weak at 0.7% YoY. The economy remains highly specialized in Manufacturing (LQ 2.10).",
        "migrationAffordability": "The metro continues to see net domestic out-migration (-5.1 per 1,000). Its primary strength is affordability, with a low rent-to-income ratio of 0.27.",
        "forwardView": "Detroit's recovery is ongoing but fragile. Diversifying its manufacturing-heavy economy and reversing long-term population trends are its central challenges. Affordability is a key asset."
    },
    {
        "MSA": "Seattle-Tacoma-Bellevue, WA",
        "snapshot": "Seattle's population growth has been healthy (1.5% 5-year CAGR), driven by a massive 2.9 percentage point increase in its BA+ population share over five years. It has an exceptionally high prime-age population share.",
        "laborMarket": "Job growth is solid at 0.9% YoY, though it has cooled from its torrid pace. Real wage growth is a powerful 2.8% YoY, reflecting its high concentration in the tech/information sector (LQ 1.95).",
        "migrationAffordability": "The metro is now seeing roughly neutral net migration (+1.5 per 1,000) as high costs take their toll. The rent-to-income ratio of 0.32 is high relative to wages, indicating significant cost pressures.",
        "forwardView": "Seattle is a premier tech hub with elite talent and high wages. Like other West Coast tech centers, its primary headwind is the high cost of living, which has slowed its population magnetism."
    },
    {
        "MSA": "Minneapolis-St. Paul-Bloomington, MN-WI",
        "snapshot": "The Twin Cities exhibit stable but modest population growth (0.85% 5-year CAGR). The metro has a strong and growing talent base, with a 1.5 percentage point increase in its BA+ share over five years.",
        "laborMarket": "The labor market is healthy and stable, with 0.8% YoY job growth and a low 3.8% unemployment rate. Real wage growth is solid at 1.5% YoY. The economy is well-diversified with strengths in Health Care and Manufacturing.",
        "migrationAffordability": "The metro sees slight net domestic out-migration (-2.5 per 1,000). Its affordability is a key advantage, with a low rent-to-income ratio of 0.28.",
        "forwardView": "Minneapolis offers a stable, affordable, and diversified economy with a high quality of life. Its challenge is to accelerate growth to better compete with Sunbelt metros for talent."
    },
    {
        "MSA": "San Diego-Chula Vista-Carlsbad, CA",
        "snapshot": "San Diego's population is growing slowly (0.7% 5-year CAGR). The talent pool is strong and has seen a 1.2 percentage point increase in the BA+ share over five years.",
        "laborMarket": "Job growth is tepid at 0.4% YoY, with an unemployment rate of 5.2%. Real wage growth is healthy at 1.7% YoY, driven by strengths in Prof/Tech Services (biotech) and Health Care.",
        "migrationAffordability": "The metro experiences slight net out-migration (-1.8 per 1,000), driven by severe affordability issues. The rent-to-income ratio is a very high 0.40, and 32.1% of renters are severely cost-burdened.",
        "forwardView": "San Diego's high quality of life and unique economic strengths in biotech and defense are powerful assets. However, like other California metros, its growth is severely constrained by its housing crisis."
    },
    {
        "MSA": "Tampa-St. Petersburg-Clearwater, FL",
        "snapshot": "A major growth market, the Tampa Bay area's population has expanded at a rapid 2.9% 5-year CAGR. The talent base is deepening quickly, with a 2.3 percentage point increase in the BA+ share over five years.",
        "laborMarket": "Job growth is strong at 1.1% YoY (2.9% 3-year CAGR). The unemployment rate is 4.1%. Real wages are growing at a solid 1.8% YoY. The economy is showing strength in Financial Activities and Health Care.",
        "migrationAffordability": "The metro is a top destination for domestic migrants (+12.5 per 1,000). This intense demand has strained the housing market, pushing the rent-to-income ratio to 0.35 and creating significant affordability pressure.",
        "forwardView": "Tampa's momentum is undeniable, powered by strong migration and job growth. The key challenge will be managing the negative effects of this growth, particularly housing affordability."
    },
    {
        "MSA": "Denver-Aurora-Lakewood, CO",
        "snapshot": "Denver's population continues to grow at a healthy clip (1.85% 5-year CAGR), supported by a 2.6 percentage point increase in its BA+ share, one of the largest gains nationally.",
        "laborMarket": "Job growth has slowed to 0.2% YoY, but the 3-year trend remains strong. The unemployment rate is low at 3.9%. Real wage growth is 1.4% YoY. The economy is a major hub for Prof/Tech Services (LQ 1.55).",
        "migrationAffordability": "In-migration has cooled but remains positive (+3.5 per 1,000). Affordability is a major concern, with a rent-to-income ratio of 0.33.",
        "forwardView": "Denver is a mature tech hub with an excellent talent pool. Its growth has moderated as high costs have eroded its affordability advantage over other regions."
    },
    {
        "MSA": "St. Louis, MO-IL",
        "snapshot": "The St. Louis metro area is experiencing demographic stagnation, with near-zero population growth over the past five years and a slight increase in its BA+ share.",
        "laborMarket": "The labor market is slow, with 0.4% YoY job growth and a 4.5% unemployment rate. Real wage growth is modest at 1.0% YoY. The economy has significant strengths in Health Care (LQ 1.30) and Financial Activities.",
        "migrationAffordability": "The metro sees significant net domestic out-migration (-6.2 per 1,000). Its main competitive advantage is very high affordability, with a low rent-to-income ratio of 0.26.",
        "forwardView": "St. Louis is a very affordable market with stable economic anchors in healthcare. However, it must reverse its demographic decline to foster a more dynamic economy."
    },
    {
        "MSA": "Baltimore-Columbia-Towson, MD",
        "snapshot": "Baltimore's population growth is slow and stable (0.5% 5-year CAGR). The metro has a strong talent pool that has seen a 1.1 percentage point increase in its BA+ share over five years.",
        "laborMarket": "Job growth is minimal at 0.2% YoY, but the unemployment rate is a low 3.8%. Real wage growth is 1.3% YoY. The economy is heavily weighted toward Government and Health Care (LQ 1.40).",
        "migrationAffordability": "The metro experiences net domestic out-migration (-4.1 per 1,000), likely driven by proximity to the more dynamic D.C. market and its own urban challenges. Affordability is average, with a rent-to-income ratio of 0.30.",
        "forwardView": "Baltimore possesses significant assets in its healthcare and government sectors. Its challenge is to create broader private-sector dynamism to retain and attract population."
    },
    {
        "MSA": "Orlando-Kissimmee-Sanford, FL",
        "snapshot": "Orlando is one of the fastest-growing large metros in the nation, with an explosive 3.2% 5-year population CAGR. Its talent base is improving rapidly, with a 2.4 percentage point gain in the BA+ share.",
        "laborMarket": "Job growth is exceptionally strong at 1.8% YoY and a 3.5% 3-year CAGR. The unemployment rate is 3.9%. Real wage growth, however, is modest at 1.2% YoY. The economy is heavily reliant on Leisure & Hospitality and Logistics.",
        "migrationAffordability": "The metro is a powerhouse of domestic migration, attracting a net 14.1 residents per 1,000. This has created severe housing pressure, with a high rent-to-income ratio of 0.36.",
        "forwardView": "Orlando's growth is remarkable but is heavily skewed toward lower-wage service sectors. The primary challenge is severe housing unaffordability, which could limit future growth."
    },
    {
        "MSA": "Charlotte-Concord-Gastonia, NC-SC",
        "snapshot": "Charlotte is a top-tier growth market, with a 3.1% 5-year population CAGR. It is a major talent magnet, with a 3.1 percentage point increase in its BA+ share over five years.",
        "laborMarket": "Job growth is exceptionally strong at 2.8% YoY and a 3.8% 3-year CAGR. Real wage growth is a robust 2.0% YoY. The economy is a major banking and financial hub, reflected in a high Financial Activities LQ.",
        "migrationAffordability": "The metro is a leading destination for domestic migrants (+13.2 per 1,000). This rapid growth has started to strain affordability, though the rent-to-income ratio of 0.30 is still manageable.",
        "forwardView": "Charlotte is a dynamic, high-growth hub for high-wage financial services jobs. It is well-positioned for continued growth, though managing housing affordability will be increasingly important."
    },
    {
        "MSA": "San Antonio-New Braunfels, TX",
        "snapshot": "San Antonio is experiencing strong and steady population growth (2.8% 5-year CAGR). The metro is also making gains in educational attainment, with a 1.9 percentage point increase in its BA+ share.",
        "laborMarket": "Job growth is very strong at 2.4% YoY and a 3.2% 3-year CAGR. Real wage growth is also robust at 1.9% YoY. The economy is anchored by stable sectors like Government and Health Care.",
        "migrationAffordability": "The metro attracts significant domestic migration (+10.8 per 1,000), supported by its affordability profile. The rent-to-income ratio is 0.31.",
        "forwardView": "San Antonio offers a compelling mix of strong, stable job growth and good affordability. It is a reliable performer that is often overlooked in favor of its flashier Texas counterparts."
    },
    {
        "MSA": "Portland-Vancouver-Hillsboro, OR-WA",
        "snapshot": "Portland's population growth has slowed to a 1.0% 5-year CAGR. The metro has a strong talent base, with a 1.8 percentage point increase in its BA+ share over five years.",
        "laborMarket": "The labor market is currently contracting, with job growth at -0.3% YoY and an elevated unemployment rate of 5.1%. Real wage growth is solid at 1.6% YoY, supported by high-value Manufacturing and Prof/Tech Services sectors.",
        "migrationAffordability": "Portland is now experiencing slight net domestic out-migration (-1.1 per 1,000), a reversal from previous trends, driven by affordability and quality-of-life concerns. The rent-to-income ratio is 0.33.",
        "forwardView": "Portland has strong economic fundamentals in high-tech manufacturing but is facing significant headwinds from housing costs and social issues, which are impacting its ability to attract and retain residents."
    },
    {
        "MSA": "Sacramento-Roseville-Folsom, CA",
        "snapshot": "California's capital has seen healthy population growth (1.8% 5-year CAGR), serving as a key destination for those priced out of the Bay Area. Its BA+ share has grown by 1.4 percentage points.",
        "laborMarket": "Job growth is modest at 0.3% YoY, with an unemployment rate of 5.6%. Real wage growth is 1.1% YoY. The economy is heavily dominated by Government, with a growing Health Care sector.",
        "migrationAffordability": "The metro is a major recipient of intra-state migration, with a net domestic gain of +6.1 per 1,000. This has rapidly eroded its affordability advantage, with the rent-to-income ratio climbing to 0.35.",
        "forwardView": "Sacramento's growth is largely a story of relative affordability within California. The key challenge is to foster private-sector job growth that can support the rising cost of living."
    },
    {
        "MSA": "Pittsburgh, PA",
        "snapshot": "Pittsburgh's population is largely stable but has seen a slight decline in recent years. The metro has successfully transitioned its economy and maintained a stable, educated populace.",
        "laborMarket": "Job growth has been surprisingly strong at 1.8% YoY, though the long-term trend is slower. Real wage growth is 1.2% YoY. The economy is now dominated by Health Care (LQ 1.50) and Education.",
        "migrationAffordability": "The metro continues to struggle with net domestic out-migration (-7.1 per 1,000), a legacy of its long-term demographic trends. High affordability (rent-to-income ratio of 0.27) is a key strength.",
        "forwardView": "Pittsburgh is a case study in economic transformation, but it still faces the challenge of reversing decades of population decline. Its affordability and 'eds and meds' economy provide a solid foundation."
    },
    {
        "MSA": "Austin-Round Rock-Georgetown, TX",
        "snapshot": "Austin is the nation's fastest-growing large metro, with a blistering 3.6% 5-year population CAGR. It is an elite talent magnet, boasting a 3.5 percentage point increase in its BA+ share over five years.",
        "laborMarket": "While YoY job growth has moderated to 0.7%, the 3-year CAGR is an exceptional 3.6%. Real wage growth is a strong 2.2% YoY. The economy has an unparalleled concentration in Prof/Tech Services and Information for a market its size (LQ 2.10).",
        "migrationAffordability": "Austin leads the nation in net domestic migration (+15.5 per 1,000). This hyper-growth has created intense affordability pressures, with a rent-to-income ratio of 0.34 and rapidly rising costs.",
        "forwardView": "Austin is the archetypal 21st-century boomtown. Its success in attracting high-wage tech jobs and talent is unmatched, but its primary risk is that severe affordability challenges could kill the golden goose."
    },
    {
        "MSA": "Las Vegas-Henderson-Paradise, NV",
        "snapshot": "Las Vegas is experiencing a strong growth rebound, with a 2.55% 5-year population CAGR. The metro has made steady gains in educational attainment, with a 1.7 percentage point increase in its BA+ share.",
        "laborMarket": "Job growth is solid at 1.0% YoY, but the unemployment rate is the highest among large metros at 6.0%. Real wage growth is weak at 0.8% YoY. The economy is uniquely dominated by Leisure & Hospitality.",
        "migrationAffordability": "The metro is a significant draw for domestic migrants (+9.5 per 1,000). The influx has pushed up housing costs, with a rent-to-income ratio of 0.35.",
        "forwardView": "Vegas's growth is tied to the health of the tourism and entertainment industries. The economy remains highly cyclical and low-wage, and economic diversification remains a long-term challenge."
    },
    {
        "MSA": "Cincinnati, OH-KY-IN",
        "snapshot": "Cincinnati is a stable Midwest metro with slow but positive population growth (0.6% 5-year CAGR). It has seen a steady 0.9 percentage point increase in its BA+ population share.",
        "laborMarket": "Job growth is solid at 1.2% YoY, but the unemployment rate is somewhat elevated at 5.2%. Real wage growth is modest at 1.0% YoY. The economy has a diverse base with strengths in Health Care and Logistics.",
        "migrationAffordability": "The metro sees modest net domestic out-migration (-3.1 per 1,000). High affordability is a key asset, with a rent-to-income ratio of 0.28.",
        "forwardView": "Cincinnati is a reliable and affordable market. Its challenge is to accelerate its growth and talent attraction to better compete with more dynamic regions."
    },
    {
        "MSA": "Kansas City, MO-KS",
        "snapshot": "Kansas City's population is growing at a steady pace (1.1% 5-year CAGR). The metro is effectively attracting talent, with a 1.6 percentage point increase in its BA+ share over five years.",
        "laborMarket": "Job growth is modest at 0.8% YoY, with a 4.4% unemployment rate. Real wage growth is solid at 1.3% YoY. The economy is developing a notable specialization in Prof/Tech Services (LQ 1.15) and Logistics.",
        "migrationAffordability": "Net migration is roughly neutral (-0.5 per 1,000). Excellent affordability, with a rent-to-income ratio of 0.27, is the metro's strongest competitive advantage.",
        "forwardView": "Kansas City is an affordable and stable Midwest hub that is successfully growing its high-skill job base. It represents a balanced and lower-risk growth story."
    },
    {
        "MSA": "Cleveland-Elyria, OH",
        "snapshot": "Cleveland faces significant demographic headwinds, with a contracting population over the last five years. Its BA+ share has seen only minimal gains.",
        "laborMarket": "Job growth is modest at 0.9% YoY, with a 5.2% unemployment rate. Real wage growth is 0.9% YoY. The economy is heavily anchored by a large Health Care sector (LQ 1.40) and legacy Manufacturing.",
        "migrationAffordability": "The metro experiences severe net domestic out-migration (-7.8 per 1,000). Its primary appeal is extremely low cost of living, with a rent-to-income ratio of just 0.26.",
        "forwardView": "Cleveland's world-class healthcare institutions provide a strong economic floor. However, the metro's future depends on its ability to reverse long-term demographic decline."
    },
    {
        "MSA": "Columbus, OH",
        "snapshot": "Columbus is a Midwest standout, with strong population growth (1.7% 5-year CAGR). It is a significant talent magnet, with a 2.0 percentage point increase in its BA+ share.",
        "laborMarket": "Job growth is strong at 1.7% YoY, though the unemployment rate is 5.0%. Real wage growth is a healthy 1.5% YoY. The economy has a balanced profile with major strengths in Logistics (LQ 1.55) and Financial Activities.",
        "migrationAffordability": "The metro is one of the few in the Midwest to see positive net domestic in-migration (+2.5 per 1,000). Affordability is good, with a rent-to-income ratio of 0.29.",
        "forwardView": "With its dynamic and diversified economy, young population, and ability to attract talent, Columbus is poised to continue outperforming its Midwest peers."
    },
    {
        "MSA": "Indianapolis-Carmel-Anderson, IN",
        "snapshot": "Indianapolis has achieved solid population growth for a Midwest city (1.3% 5-year CAGR) and has seen a strong 1.7 percentage point increase in its BA+ population share.",
        "laborMarket": "Job growth is 1.2% YoY, with a low unemployment rate of 3.8%. Real wage growth is 1.4% YoY. The economy is a national powerhouse in Logistics (LQ 1.70), complemented by a large Health Care sector.",
        "migrationAffordability": "The metro achieves positive net domestic in-migration (+1.1 per 1,000). This is supported by excellent affordability, with a rent-to-income ratio of 0.28.",
        "forwardView": "Indianapolis has carved out a successful niche as a major logistics hub. Its affordability and stable growth make it an attractive and underrated market."
    },
    {
        "MSA": "San Jose-Sunnyvale-Santa Clara, CA",
        "snapshot": "The heart of Silicon Valley has seen its population contract in recent years (-0.2% 5-year CAGR), with a notable decline in its prime-age cohort. Its talent pool, however, remains globally elite.",
        "laborMarket": "Job growth is nearly flat at 0.1% YoY. However, real wage growth is an astonishing 4.5% YoY, the highest in the nation. The economy has an extreme specialization in the Information sector (LQ 4.10).",
        "migrationAffordability": "The metro faces massive domestic out-migration (-13.5 per 1,000), driven by the nation's most challenging housing market. The rent-to-income ratio is 0.37 despite astronomical wages.",
        "forwardView": "San Jose is the epicenter of the tech economy, generating unparalleled wealth and innovation. But its severe housing crisis is a fundamental threat, pushing residents and potentially companies to other regions."
    },
    {
        "MSA": "Nashville-Davidson--Murfreesboro--Franklin, TN",
        "snapshot": "Nashville is a high-growth 'it' city, with a 3.0% 5-year population CAGR. It is attracting talent at an elite rate, with a 3.0 percentage point increase in its BA+ share.",
        "laborMarket": "Job growth is strong at 1.5% YoY (3.1% 3-year CAGR). Real wage growth is a robust 2.1% YoY. The economy is a unique blend of Health Care (a dominant sector) and Leisure & Hospitality.",
        "migrationAffordability": "The metro is a top destination for young professionals, with net domestic migration of +12.8 per 1,000. This popularity has led to significant affordability strain, with the rent-to-income ratio rising to 0.32.",
        "forwardView": "Nashville's dynamic growth and cultural cachet make it a formidable competitor. Its biggest challenge is managing the pressures of its own success, particularly in housing and infrastructure."
    },
    {
        "MSA": "Virginia Beach-Norfolk-Newport News, VA-NC",
        "snapshot": "The Hampton Roads area exhibits slow, stable population growth (0.75% 5-year CAGR) and modest gains in educational attainment.",
        "laborMarket": "The job market is flat, with a -0.1% YoY change and a 4.0% unemployment rate. Real wage growth is 1.2% YoY. The economy is heavily dependent on Government and military employment.",
        "migrationAffordability": "The metro sees moderate net domestic out-migration (-2.8 per 1,000). Affordability is average for the region, with a rent-to-income ratio of 0.31.",
        "forwardView": "The large military presence provides a stable economic base but also limits dynamic growth. The region's fortunes are closely tied to federal defense spending."
    },
    {
        "MSA": "Providence-Warwick, RI-MA",
        "snapshot": "Providence is a slow-growth metro (0.35% 5-year CAGR) with a stable population profile and only minor gains in its BA+ share.",
        "laborMarket": "Job growth is minimal at 0.3% YoY, with a 4.9% unemployment rate. Real wage growth is 1.1% YoY. The economy is heavily reliant on Health Care (LQ 1.45) and Education.",
        "migrationAffordability": "The metro experiences consistent net domestic out-migration (-4.8 per 1,000), likely losing residents to both more affordable areas and the more dynamic Boston economy nearby.",
        "forwardView": "Providence is a stable 'eds and meds' economy but is constrained by its location in a slow-growing region and proximity to the much larger Boston market."
    },
    {
        "MSA": "Jacksonville, FL",
        "snapshot": "Jacksonville is one of Florida's fastest-growing metros, with a 3.15% 5-year population CAGR. It is rapidly improving its talent base, with a 2.2 percentage point gain in its BA+ share.",
        "laborMarket": "Job growth is strong at 1.2% YoY (3.0% 3-year CAGR). Real wage growth is a robust 2.0% YoY. The economy is a major hub for Logistics (LQ 1.65) and Financial Activities.",
        "migrationAffordability": "The metro is a top migration destination (+13.8 per 1,000). Its relative affordability compared to South Florida is a key driver, though its rent-to-income ratio of 0.32 indicates growing pressure.",
        "forwardView": "Jacksonville's combination of high growth, strong wage gains, and relatively good affordability make it one of the most balanced and attractive markets in the Sunbelt."
    },
    {
        "MSA": "Milwaukee-Waukesha, WI",
        "snapshot": "Milwaukee's population has been stagnant over the past five years. The metro has a stable talent base but is not seeing the rapid gains of competitor cities.",
        "laborMarket": "The labor market is currently contracting, with -0.3% YoY job growth, but the unemployment rate is a low 3.7%. Real wage growth is weak at 0.8% YoY. The economy has a large legacy Manufacturing sector (LQ 1.60).",
        "migrationAffordability": "The metro experiences significant net domestic out-migration (-5.5 per 1,000). High affordability (rent-to-income ratio of 0.28) is a key asset but has not been enough to retain population.",
        "forwardView": "Milwaukee has a stable corporate and industrial base, but it faces the twin challenges of demographic stagnation and a need to accelerate its transition to higher-growth industries."
    },
    {
        "MSA": "Raleigh-Cary, NC",
        "snapshot": "Raleigh is an elite growth market with a very strong 3.4% 5-year population CAGR. It is one of the nation's premier talent magnets, with an exceptional 3.8 percentage point increase in its BA+ share.",
        "laborMarket": "Job growth is robust at 1.7% YoY (3.4% 3-year CAGR), with a very low 3.2% unemployment rate. Real wage growth is a powerful 2.3% YoY. The economy is a global hub for Prof/Tech Services and life sciences (LQ 1.70).",
        "migrationAffordability": "The metro is a top destination for high-skill workers, with net domestic migration of +14.8 per 1,000. This intense demand is straining affordability, though the 0.30 rent-to-income ratio is still competitive.",
        "forwardView": "Raleigh's Research Triangle Park anchors one of the most dynamic high-wage economies in the country. Managing its rapid growth without sacrificing its quality of life and affordability is the core challenge."
    },
    {
        "MSA": "Oklahoma City, OK",
        "snapshot": "Oklahoma City has posted steady population growth (1.45% 5-year CAGR) and has seen a solid 1.3 percentage point increase in its BA+ share.",
        "laborMarket": "Job growth is healthy at 1.6% YoY, with a very low 3.0% unemployment rate. Real wage growth is strong at 1.6% YoY. The economy is heavily influenced by the energy sector and a large government presence.",
        "migrationAffordability": "The metro sees positive net domestic in-migration (+1.8 per 1,000), supported by its excellent affordability. The rent-to-income ratio is a low 0.27.",
        "forwardView": "OKC is a stable, low-cost market with a solid growth trajectory. Its fortunes remain somewhat tied to the cyclical energy industry, but it offers a very affordable quality of life."
    },
    {
        "MSA": "Richmond, VA",
        "snapshot": "Richmond has a healthy and accelerating growth profile, with a 1.4% 5-year population CAGR and a strong 1.9 percentage point gain in its BA+ share.",
        "laborMarket": "Job growth is strong at 1.8% YoY, with a low 3.7% unemployment rate. Real wage growth is a robust 1.7% YoY. The economy is well-balanced, with strengths in Financial Activities and Government.",
        "migrationAffordability": "The metro is attracting a net positive inflow of domestic migrants (+1.5 per 1,000). Good affordability, with a rent-to-income ratio of 0.30, is a key part of its appeal.",
        "forwardView": "Richmond is an increasingly attractive market, offering a balanced profile of solid job growth, talent attraction, and affordability. It is a rising star in the mid-Atlantic region."
    },
    {
        "MSA": "Louisville/Jefferson County, KY-IN",
        "snapshot": "Louisville has experienced modest population growth (0.85% 5-year CAGR) and a 1.2 percentage point increase in its BA+ share.",
        "laborMarket": "Job growth is solid at 1.3% YoY, but the unemployment rate is 5.0%. Real wage growth is 1.2% YoY. The economy is a dominant national hub for Logistics (LQ 1.80).",
        "migrationAffordability": "The metro sees slight net domestic out-migration (-1.5 per 1,000). Its affordability is very good, with a rent-to-income ratio of 0.28.",
        "forwardView": "Louisville's specialization in logistics provides a strong economic base. The key challenge is to diversify into higher-wage industries and improve talent attraction and retention."
    },
    {
        "MSA": "Memphis, TN-MS-AR",
        "snapshot": "Memphis has seen very slow population growth over the past five years. Gains in educational attainment have also been modest.",
        "laborMarket": "The labor market is slow, with 0.2% YoY job growth and a high 5.4% unemployment rate. Real wage growth is 1.1% YoY. The economy is singularly dominated by the Logistics sector (LQ 2.20), home to FedEx's global hub.",
        "migrationAffordability": "The metro experiences net domestic out-migration (-3.8 per 1,000). Excellent affordability (rent-to-income ratio of 0.29) is its main selling point.",
        "forwardView": "Memphis is a critical node in the national supply chain, but it struggles with low wages and talent attraction outside of the logistics industry. Diversification is the central economic challenge."
    },
    {
        "MSA": "Salt Lake City, UT",
        "snapshot": "Fueled by strong domestic migration and high natural increase, Salt Lake City's population has grown at a rapid 2.35% 5-year CAGR. It is a top market for talent attraction, with a 2.7 percentage point gain in its BA+ share.",
        "laborMarket": "Job growth is very strong at 2.4% YoY. Real wage growth is a robust 2.2% YoY. The economy is an emerging tech hub ('Silicon Slopes') with a high Prof/Tech Services LQ (1.40) and major logistics operations.",
        "migrationAffordability": "The metro is a significant migration magnet (+7.5 per 1,000). This has put pressure on the housing market, and the rent-to-income ratio has climbed to 0.31.",
        "forwardView": "SLC has a young, well-educated population and a dynamic, high-growth economy. It is poised to be one of the breakout markets of the next decade, provided it can manage its growth and rising housing costs."
    },
    {
        "MSA": "New Orleans-Metairie, LA",
        "snapshot": "New Orleans has seen slow population growth since its post-Katrina recovery. Gains in the BA+ share of the population have also been modest.",
        "laborMarket": "Job growth is fair at 0.9% YoY, with a 4.8% unemployment rate. Real wage growth is 1.0% YoY. The economy is heavily dependent on Leisure & Hospitality and Logistics/Trade.",
        "migrationAffordability": "The metro experiences net domestic out-migration (-2.2 per 1,000). The rent-to-income ratio of 0.34 indicates affordability challenges relative to local wages.",
        "forwardView": "New Orleans' unique cultural economy is a major asset, but the city faces long-term structural challenges in diversifying its economy and retaining its population."
    },
    {
        "MSA": "Hartford-West Hartford-East Hartford, CT",
        "snapshot": "The Hartford metro area has a stagnant population and has seen only a 0.6 percentage point gain in its BA+ share over five years.",
        "laborMarket": "The labor market is slow, with 0.4% YoY job growth. Real wage growth is fair at 1.4% YoY. The economy is a legacy hub for the insurance industry (Financial Activities) and has a large Health Care sector.",
        "migrationAffordability": "Hartford experiences significant net domestic out-migration (-6.5 per 1,000), driven by high costs and competition from more dynamic markets. The rent-to-income ratio is 0.31.",
        "forwardView": "Hartford has a high-quality, educated workforce but faces the headwinds of operating in a high-cost, slow-growth region. Reversing out-migration is its primary challenge."
    },
    {
        "MSA": "Buffalo-Cheektowaga, NY",
        "snapshot": "Buffalo's population has been largely stagnant over the past five years, with only minimal gains in educational attainment.",
        "laborMarket": "The labor market has shown surprising strength recently, with 2.0% YoY job growth and a 4.0% unemployment rate. Real wage growth is 1.3% YoY. Health Care and Education are the primary economic anchors.",
        "migrationAffordability": "Despite recent positive signs, the metro continues to see significant net domestic out-migration (-6.8 per 1,000). Very high affordability (rent-to-income ratio of 0.28) is a key asset.",
        "forwardView": "Buffalo is showing signs of a potential turnaround, but it must overcome long-term demographic trends. Sustaining recent job growth will be critical to retaining its population."
    },
    {
        "MSA": "Birmingham-Hoover, AL",
        "snapshot": "Birmingham has slow but steady population growth (0.7% 5-year CAGR) and has seen a 1.0 percentage point increase in its BA+ share.",
        "laborMarket": "Job growth is modest at 0.4% YoY, but the unemployment rate is exceptionally low at 2.7%. Real wage growth is 1.2% YoY. The economy is a regional hub for Health Care and Financial Activities.",
        "migrationAffordability": "The metro sees slight net domestic out-migration (-1.2 per 1,000). Excellent affordability, with a rent-to-income ratio of 0.28, is a major strength.",
        "forwardView": "Birmingham is a stable, low-cost market with strong anchors in healthcare and finance. Its challenge is to accelerate growth and transition from a regional hub to a national destination for talent."
    }
]
