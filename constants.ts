/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Paper, JournalArticle } from './types';

export const BRAND_NAME = 'The Auto Times';

// Helper to generate dynamic dates relative to "today"
// This ensures the news always looks fresh and accurate
const getDate = (daysAgo: number) => {
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

const CURRENT_YEAR = new Date().getFullYear();

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 1,
    title: 'The End of the Internal Combustion Engine',
    date: getDate(0), // Today
    excerpt: 'An obituary for the V8, and a look at what we lose in the silence.',
    content: React.createElement('p', null, 'The roar is fading...')
  },
  {
    id: 2,
    title: 'Autonomous Ethics',
    date: getDate(2), // 2 days ago
    excerpt: 'The Trolley Problem is no longer theoretical.',
    content: React.createElement('p', null, 'When algorithms decide who survives...')
  }
];

// Helper to generate publisher metadata
export const getPublisherInfo = (publisher: string) => {
    const map: Record<string, { logo: string, desc: string }> = {
       "Car & Driver": { logo: "CD", desc: "The definitive voice in automotive journalism since 1955." },
       "Top Gear": { logo: "TG", desc: "Global motoring entertainment and serious road testing." },
       "MotorTrend": { logo: "MT", desc: "Covering the automotive industry with depth and precision." },
       "Autocar": { logo: "AC", desc: "The world's oldest car magazine, established 1895." },
       "Road & Track": { logo: "RT", desc: "For the enthusiast driver." },
       "EV Inside": { logo: "EV", desc: "Breaking news from the electric frontier." },
       "F1 Journal": { logo: "F1", desc: "Technical analysis from the paddock." },
       "Bloomberg Auto": { logo: "BB", desc: "The business of mobility." }
    };

    return map[publisher] || { 
        logo: publisher.substring(0, 2).toUpperCase(), 
        desc: "A leading voice in the global automotive conversation." 
    };
};

const NEWS_DATA = [
  // --- FRONT PAGE ---
  {
    id: "fp-001",
    title: "Toyota's Solid State Breakthrough",
    publisher: "MotorTrend",
    year: CURRENT_YEAR,
    field: "Front Page",
    link: "#",
    description: `Toyota confirms mass production of solid-state batteries will begin in ${CURRENT_YEAR + 2}, promising a 1,200km range and 10-minute charge times. The announcement has sent shockwaves through the EV supply chain.`,
    insights: ["Energy density doubled compared to lithium-ion.", "Initial rollout limited to Lexus halo cars."],
    whyMatters: "Range anxiety could be solved permanently.",
    authors: ["Jonny Lieberman", "Senior Editor"],
    readTime: "8 min read",
    daysAgo: 0
  },
  {
    id: "fp-002",
    title: "Porsche Mission X Goes into Production",
    publisher: "Road & Track",
    year: CURRENT_YEAR,
    field: "Front Page",
    link: "#",
    description: "Porsche's electric hypercar successor to the 918 Spyder has been greenlit. With a 1:1 power-to-weight ratio, it aims to shatter the Nürburgring record.",
    insights: ["900V architecture for ultra-fast charging.", "Active aero generates more downforce than a GT3 RS."],
    whyMatters: "The electric era finally gets its poster car.",
    authors: ["Chris Harris", "Contributor"],
    readTime: "6 min read",
    daysAgo: 1
  },
  {
    id: "fp-003",
    title: `F1 ${CURRENT_YEAR + 1} Regulations: The Verdict`,
    publisher: "F1 Journal",
    year: CURRENT_YEAR,
    field: "Front Page",
    link: "#",
    description: `The FIA reveals the final chassis rules for ${CURRENT_YEAR + 1}. Smaller, lighter cars with active aerodynamics are coming to save racing from the heavyweight era.`,
    insights: ["Cars will be 20cm shorter and 10cm narrower.", "Manual 'Override' mode replaces DRS."],
    whyMatters: "Racing needs to be agile again.",
    authors: ["Scarbs Tech", "Analyst"],
    readTime: "10 min read",
    daysAgo: 0
  },
  {
    id: "fp-004",
    title: "Tesla Model 2 Unveiled",
    publisher: "EV Inside",
    year: CURRENT_YEAR,
    field: "Front Page",
    link: "#",
    description: "Elon Musk finally reveals the $25,000 compact EV. Stripped of paint options and rare earth metals, it is a masterclass in manufacturing efficiency.",
    insights: ["Unboxed manufacturing process cuts assembly costs by 50%.", "No steering wheel option confirmed for Robotaxi variant."],
    whyMatters: "EVs enter the mass market era.",
    authors: ["Fred Lambert", "Editor"],
    readTime: "5 min read",
    daysAgo: 2
  },

  // --- EV WIRE ---
  {
    id: "ev-001",
    title: "Lucid Gravity Review: The Best SUV?",
    publisher: "Car & Driver",
    year: CURRENT_YEAR,
    field: "EV Wire",
    link: "#",
    description: "Lucid's second act is a triumph. The Gravity SUV offers S-Class luxury with sports car handling and 440 miles of real-world range.",
    insights: ["Efficiency is unmatched at 3.6 mi/kWh.", "Third row fits actual adults."],
    whyMatters: "Lucid proves it wasn't a one-hit wonder.",
    authors: ["Ezra Dyer", "Editor"],
    readTime: "12 min read",
    daysAgo: 3
  },
  {
    id: "ev-002",
    title: "China's BYD Overtakes VW Group",
    publisher: "Bloomberg Auto",
    year: CURRENT_YEAR,
    field: "EV Wire",
    link: "#",
    description: "For the first time, BYD has sold more cars globally than Volkswagen. The shift signals the end of European dominance in the volume segment.",
    insights: ["Vertical integration of battery supply is the key.", "Export growth to South America and SEA is exponential."],
    whyMatters: "The automotive center of gravity has shifted East.",
    authors: ["Colin McKerracher", "Analyst"],
    readTime: "7 min read",
    daysAgo: 1
  },
  {
    id: "ev-003",
    title: "Rivian R2 & R3: Retro Future",
    publisher: "The Verge",
    year: CURRENT_YEAR,
    field: "EV Wire",
    link: "#",
    description: "Rivian's new mid-size crossovers steal the show with Lancia Delta Integrale vibes and a competitive price point.",
    insights: ["R3X performance model creates a new 'Rally EV' segment.", "Accessory ports allow infinite customization."],
    whyMatters: "Character design matters in the appliance era.",
    authors: ["Andrew J. Hawkins", "Transport Editor"],
    readTime: "6 min read",
    daysAgo: 4
  },
  {
    id: "ev-004",
    title: "Supercharger Network Opens to Everyone",
    publisher: "InsideEVs",
    year: CURRENT_YEAR,
    field: "EV Wire",
    link: "#",
    description: "The walled garden is gone. Ford, GM, and Rivian owners can now access 15,000 Tesla Superchargers. Chaos or convenience?",
    insights: ["Cable length issues persist for non-Tesla cars.", "NACS adapter shortage frustrates owners."],
    whyMatters: "Infrastructure is no longer a brand moat.",
    authors: ["Kyle Conner", "Reviewer"],
    readTime: "8 min read",
    daysAgo: 5
  },

  // --- SUPERCARS ---
  {
    id: "sc-001",
    title: "Ferrari F80: The V6 Hybrid King",
    publisher: "Evo Magazine",
    year: CURRENT_YEAR,
    field: "Supercars",
    link: "#",
    description: "Ferrari's latest halo car ditches the V12 for a Le Mans-derived V6 Hybrid. Purists are angry, until they drive it.",
    insights: ["1,200 hp total output.", "Active suspension eliminates body roll entirely."],
    whyMatters: "Technology has officially surpassed emotion.",
    authors: ["Harry Metcalfe", "Contributor"],
    readTime: "10 min read",
    daysAgo: 2
  },
  {
    id: "sc-002",
    title: "Bugatti Tourbillon: Analogue Renaissance",
    publisher: "Top Gear",
    year: CURRENT_YEAR,
    field: "Supercars",
    link: "#",
    description: "Mate Rimac shocks the world with a V16 naturally aspirated hybrid. The interior is a swiss-watch masterpiece with zero screens.",
    insights: ["Engine revs to 9,000 RPM.", "Skeletonized instrument cluster is physical."],
    whyMatters: "Luxury is becoming anti-digital.",
    authors: ["Jack Rix", "Editor"],
    readTime: "9 min read",
    daysAgo: 3
  },
  {
    id: "sc-003",
    title: "Lamborghini Temerario First Drive",
    publisher: "Autocar",
    year: CURRENT_YEAR,
    field: "Supercars",
    link: "#",
    description: "The Huracan replacement arrives with a 10,000 RPM Twin-Turbo V8. It screams like a superbike and grips like a prototype.",
    insights: ["Hybrid system fills torque gaps.", "Drift mode is more accessible."],
    whyMatters: "Lamborghini keeps the soul alive.",
    authors: ["Matt Prior", "Editor"],
    readTime: "7 min read",
    daysAgo: 1
  },
  {
    id: "sc-004",
    title: "McLaren W1: The Widowmaker Returns",
    publisher: "Car Magazine",
    year: CURRENT_YEAR,
    field: "Supercars",
    link: "#",
    description: "The successor to the P1 is here. Rear-wheel drive, 1,258bhp, and no hybrid front axle. It demands respect.",
    insights: ["Active Long Tail extends 300mm at speed.", "Fastest lap time of any road car ever tested."],
    whyMatters: "Driver engagement over easy speed.",
    authors: ["Gavin Green", "Writer"],
    readTime: "8 min read",
    daysAgo: 6
  },

  // --- MOTORSPORT ---
  {
    id: "ms-001",
    title: "Hamilton's Ferrari Debut",
    publisher: "F1 Journal",
    year: CURRENT_YEAR,
    field: "Motorsport",
    link: "#",
    description: "Lewis Hamilton steps into the red suit for the first time at Fiorano. Tifosi attendance breaks records.",
    insights: ["Lap times within 0.1s of Leclerc.", "Merchandise sales crash the Ferrari website."],
    whyMatters: "The biggest transfer in sports history is real.",
    authors: ["Mark Hughes", "Analyst"],
    readTime: "5 min read",
    daysAgo: 1
  },
  {
    id: "ms-002",
    title: "WEC: Aston Martin Valkyrie Wins Le Mans",
    publisher: "Autosport",
    year: CURRENT_YEAR,
    field: "Motorsport",
    link: "#",
    description: "The screaming V12 Valkyrie hypercar takes overall victory at Le Mans, defeating the factory prototypes. A win for noise.",
    insights: ["First win for a road-based car since the GT1 era.", "Reliability was flawless for 24 hours."],
    whyMatters: "Hypercar regulations are finally working.",
    authors: ["Gary Watkins", "Reporter"],
    readTime: "11 min read",
    daysAgo: 7
  },
  {
    id: "ms-003",
    title: "Andretti Cadillac Entry Approved",
    publisher: "Racer",
    year: CURRENT_YEAR,
    field: "Motorsport",
    link: "#",
    description: `After years of legal battles, Andretti Global will join the F1 grid as the 11th team in ${CURRENT_YEAR + 1}, powered by GM.`,
    insights: ["US market pressure forced FOM's hand.", "Factory to be built in Indiana."],
    whyMatters: "American influence in F1 hits critical mass.",
    authors: ["Chris Medland", "Writer"],
    readTime: "6 min read",
    daysAgo: 4
  },

  // --- REVIEWS ---
  {
    id: "rev-001",
    title: "BMW M5 (G90) Review: Too Heavy?",
    publisher: "BMW Blog",
    year: CURRENT_YEAR,
    field: "Reviews",
    link: "#",
    description: "The new M5 is a plug-in hybrid weighing 2.5 tons. It's faster than ever, but has it lost the plot?",
    insights: ["0-60 in 2.9 seconds.", "You feel the weight in tight corners."],
    whyMatters: "The definition of a sports sedan is changing.",
    authors: ["Horatiu Boeriu", "Tester"],
    readTime: "8 min read",
    daysAgo: 2
  },
  {
    id: "rev-002",
    title: "Ford Ranger Raptor: Desert King",
    publisher: "Off-Road",
    year: CURRENT_YEAR,
    field: "Reviews",
    link: "#",
    description: "Jumping dunes in Ford's mid-size super truck. It might be the most fun vehicle you can buy today.",
    insights: ["Fox Live Valve shocks are magic.", "V6 exhaust note is properly aggressive."],
    whyMatters: "Fun doesn't have to cost $100k.",
    authors: ["Mike Spinelli", "Driver"],
    readTime: "7 min read",
    daysAgo: 10
  },
  {
    id: "rev-003",
    title: "Volvo EX90: The Safe Space",
    publisher: "What Car?",
    year: CURRENT_YEAR,
    field: "Reviews",
    link: "#",
    description: "Volvo's electric flagship is a sanctuary of calm. Lidar sensors standard, interior materials are vegan and premium.",
    insights: ["Audio system by Bowers & Wilkins is benchmark.", "Software bugs mar the launch."],
    whyMatters: "Safety is now defined by software.",
    authors: ["Steve Huntingford", "Editor"],
    readTime: "6 min read",
    daysAgo: 3
  },

  // --- INDUSTRY ---
  {
    id: "ind-001",
    title: "The Death of the Dealership",
    publisher: "Automotive News",
    year: CURRENT_YEAR,
    field: "Industry",
    link: "#",
    description: "Direct-to-consumer sales models are facing legal battles in 20 states. Dealers are fighting for survival.",
    insights: ["Agency model adoption by legacy OEMs is stalling.", "Customer satisfaction is higher with direct sales."],
    whyMatters: "Buying a car sucks. It might get better.",
    authors: ["Jamie Butters", "Analyst"],
    readTime: "9 min read",
    daysAgo: 5
  },
  {
    id: "ind-002",
    title: "Software-Defined Vehicle Crisis",
    publisher: "TechCrunch",
    year: CURRENT_YEAR,
    field: "Industry",
    link: "#",
    description: "VW's Cariad software division delay causes another model pushback. Legacy automakers are struggling to become code factories.",
    insights: ["Tesla's lead in software architecture is widening.", "Apple CarPlay 2.0 is the fallback for many."],
    whyMatters: "Code is harder than steel.",
    authors: ["Kirsten Korosec", "Reporter"],
    readTime: "8 min read",
    daysAgo: 1
  },
  {
    id: "ind-003",
    title: "Hydrogen: The Dead End?",
    publisher: "Clean Technica",
    year: CURRENT_YEAR,
    field: "Industry",
    link: "#",
    description: "Shell closes all hydrogen stations in California. Passenger FCEVs look increasingly like a bet that failed.",
    insights: ["Infrastructure cost is too high.", "Trucking remains the only viable use case."],
    whyMatters: "Physics wins. Battery efficiency is superior.",
    authors: ["Zachary Shahan", "Editor"],
    readTime: "6 min read",
    daysAgo: 12
  }
];

export const PAPERS: Paper[] = NEWS_DATA.map(item => ({
    id: item.id,
    title: item.title,
    publisher: item.publisher,
    authors: item.authors,
    abstractPreview: item.description,
    abstract: item.description,
    publicationDate: getDate(item.daysAgo), // Use dynamic date
    category: item.field, 
    doi: item.link,
    whyMatters: item.whyMatters,
    upvotes: Math.floor(Math.random() * 5000) + 500,
    timestamp: Date.now() - (item.daysAgo * 24 * 60 * 60 * 1000), 
    aiInsights: item.insights,
    industry: [item.field],
    readTime: item.readTime,
    publisherLogo: getPublisherInfo(item.publisher).logo
}));