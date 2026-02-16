import React, { useState } from 'react';
import { IoFlaskOutline, IoSearch, IoFilter, IoCheckmarkCircle, IoWarning, IoClose, IoTrendingUp, IoTrendingDown } from 'react-icons/io5';

const ResearchEngine = () => {
  const [activeTab, setActiveTab] = useState('hooks');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterTier, setFilterTier] = useState('all');
  const [filterPlatform, setFilterPlatform] = useState('all');

  const stats = {
    totalHooks: 247,
    trendsDetected: 18,
    sourcesScraped: 12,
    lastUpdated: '2 hours ago'
  };

  const hooks = [
    {
      id: 1,
      text: "I made $127K in 90 days selling a product I don't own",
      type: 'Contrarian Stat',
      tier: 'Top 1%',
      platform: 'TikTok',
      views: '4.2M',
      engagement: '12.3%'
    },
    {
      id: 2,
      text: "Everyone tells you to post daily. Here's why that's killing your growth.",
      type: 'Myth Buster',
      tier: 'Top 1%',
      platform: 'LinkedIn',
      views: '890K',
      engagement: '8.7%'
    },
    {
      id: 3,
      text: "POV: You just discovered the content strategy no one talks about",
      type: 'Curiosity Gap',
      tier: 'Top 10%',
      platform: 'Instagram',
      views: '2.1M',
      engagement: '9.2%'
    },
    {
      id: 4,
      text: "I spent $50K learning this. You can have it for free.",
      type: 'Personal Story',
      tier: 'Top 1%',
      platform: 'TikTok',
      views: '5.8M',
      engagement: '14.1%'
    },
    {
      id: 5,
      text: "5 brutal truths about building online that nobody warned me about",
      type: 'List',
      tier: 'Top 10%',
      platform: 'YouTube',
      views: '1.3M',
      engagement: '7.4%'
    },
    {
      id: 6,
      text: "Stop doing [common thing]. Do this instead.",
      type: 'Pattern Interrupt',
      tier: 'Proven',
      platform: 'Instagram',
      views: '680K',
      engagement: '6.8%'
    },
    {
      id: 7,
      text: "How to [achieve result] in [timeframe] (even if you're starting from zero)",
      type: 'How-To',
      tier: 'Top 10%',
      platform: 'YouTube',
      views: '980K',
      engagement: '8.1%'
    },
    {
      id: 8,
      text: "The algorithm doesn't hate you. You're just doing this wrong.",
      type: 'Myth Buster',
      tier: 'Top 1%',
      platform: 'TikTok',
      views: '3.4M',
      engagement: '11.2%'
    },
    {
      id: 9,
      text: "Day 1 vs Day 365 of [journey]. Here's what changed.",
      type: 'Personal Story',
      tier: 'Top 10%',
      platform: 'Instagram',
      views: '1.7M',
      engagement: '9.8%'
    },
    {
      id: 10,
      text: "97% of creators get this wrong. Are you one of them?",
      type: 'Contrarian Stat',
      tier: 'Top 10%',
      platform: 'LinkedIn',
      views: '540K',
      engagement: '7.9%'
    },
    {
      id: 11,
      text: "If I had to start over today with $0, here's exactly what I'd do",
      type: 'How-To',
      tier: 'Top 1%',
      platform: 'YouTube',
      views: '2.9M',
      engagement: '10.4%'
    },
    {
      id: 12,
      text: "The uncomfortable truth about [topic] no one wants to admit",
      type: 'Curiosity Gap',
      tier: 'Proven',
      platform: 'TikTok',
      views: '820K',
      engagement: '6.2%'
    },
    {
      id: 13,
      text: "3 red flags that your content strategy is failing (and how to fix it)",
      type: 'List',
      tier: 'Top 10%',
      platform: 'LinkedIn',
      views: '420K',
      engagement: '8.3%'
    },
    {
      id: 14,
      text: "Watch me [do thing] in real-time with zero editing",
      type: 'Pattern Interrupt',
      tier: 'Top 10%',
      platform: 'Instagram',
      views: '1.1M',
      engagement: '9.5%'
    },
    {
      id: 15,
      text: "I quit my job to do this full-time. Here's the income breakdown.",
      type: 'Personal Story',
      tier: 'Top 1%',
      platform: 'YouTube',
      views: '3.8M',
      engagement: '13.7%'
    },
    {
      id: 16,
      text: "Your competitors are using this tactic. Here's how to beat them.",
      type: 'Curiosity Gap',
      tier: 'Top 10%',
      platform: 'TikTok',
      views: '1.5M',
      engagement: '8.9%'
    },
    {
      id: 17,
      text: "Delete your content calendar. Try this instead.",
      type: 'Myth Buster',
      tier: 'Proven',
      platform: 'LinkedIn',
      views: '620K',
      engagement: '7.1%'
    },
    {
      id: 18,
      text: "The exact funnel that generated $2M (steal this)",
      type: 'How-To',
      tier: 'Top 1%',
      platform: 'Instagram',
      views: '2.4M',
      engagement: '12.8%'
    }
  ];

  const trends = [
    {
      id: 1,
      name: 'Behind-the-Scenes Content',
      description: 'Unpolished, raw content showing the process behind the product',
      status: 'Rising',
      window: '7-14 days before peak',
      relatedFormats: 'Day-in-the-life, Process videos, Studio tours',
      action: 'Start creating now for maximum reach'
    },
    {
      id: 2,
      name: 'Founder Story Arc',
      description: 'Personal journey narratives with vulnerability and transformation',
      status: 'Peaking',
      window: 'At peak - post immediately',
      relatedFormats: 'Timeline format, Before/After, Lessons learned',
      action: 'Capitalize now - window closing in 3-5 days'
    },
    {
      id: 3,
      name: 'Anti-Guru Positioning',
      description: 'Calling out fake experts and positioning as authentic alternative',
      status: 'Rising',
      window: '10-21 days before peak',
      relatedFormats: 'Myth-busting, Contrarian takes, Truth bombs',
      action: 'Build content library - strong opportunity'
    },
    {
      id: 4,
      name: 'Silent Vlogs with Text',
      status: 'Declining',
      description: 'No voiceover, just captions and ambient audio',
      window: 'Past peak - avoid unless proven',
      relatedFormats: 'ASMR-style, Aesthetic edits',
      action: 'Monitor but don\'t prioritize'
    },
    {
      id: 5,
      name: 'Income Transparency',
      description: 'Detailed breakdowns of revenue, expenses, and profit margins',
      status: 'Rising',
      window: '5-10 days before peak',
      relatedFormats: 'Dashboard tours, P&L walkthroughs, Revenue screenshots',
      action: 'Prepare content - high virality potential'
    }
  ];

  const competitors = [
    {
      id: 1,
      handle: '@contentking',
      platform: 'TikTok',
      followers: '487K',
      engagement: '8.4%',
      postFreq: '2x/day',
      topContent: 'How-To',
      lastActive: '2h ago',
      growth: [20, 35, 28, 45, 52, 48, 61]
    },
    {
      id: 2,
      handle: '@growth_hacker',
      platform: 'LinkedIn',
      followers: '124K',
      engagement: '6.2%',
      postFreq: 'Daily',
      topContent: 'Thought Leadership',
      lastActive: '5h ago',
      growth: [15, 22, 31, 28, 39, 44, 52]
    },
    {
      id: 3,
      handle: '@viralstrategy',
      platform: 'Instagram',
      followers: '892K',
      engagement: '11.3%',
      postFreq: '3x/day',
      topContent: 'Reels',
      lastActive: '1h ago',
      growth: [30, 42, 38, 55, 61, 58, 74]
    },
    {
      id: 4,
      handle: '@marketingwithsarah',
      platform: 'YouTube',
      followers: '312K',
      engagement: '9.1%',
      postFreq: '3x/week',
      topContent: 'Tutorials',
      lastActive: '1d ago',
      growth: [18, 24, 29, 32, 41, 45, 50]
    },
    {
      id: 5,
      handle: '@contentstudio',
      platform: 'TikTok',
      followers: '654K',
      engagement: '7.8%',
      postFreq: 'Daily',
      topContent: 'Behind-the-Scenes',
      lastActive: '4h ago',
      growth: [22, 28, 35, 31, 44, 49, 56]
    },
    {
      id: 6,
      handle: '@digitalempire',
      platform: 'Instagram',
      followers: '1.2M',
      engagement: '10.2%',
      postFreq: '2x/day',
      topContent: 'Carousels',
      lastActive: '3h ago',
      growth: [35, 48, 52, 59, 67, 71, 82]
    },
    {
      id: 7,
      handle: '@scaleyourbrand',
      platform: 'LinkedIn',
      followers: '89K',
      engagement: '5.9%',
      postFreq: '5x/week',
      topContent: 'Case Studies',
      lastActive: '8h ago',
      growth: [12, 18, 21, 24, 28, 32, 36]
    }
  ];

  const scrapeLogs = [
    { id: 1, date: '2h ago', source: 'Apify Instagram Scraper', results: 847, cost: '$2.40', status: 'Success' },
    { id: 2, date: '2h ago', source: 'Apify TikTok Scraper', results: 1203, cost: '$3.80', status: 'Success' },
    { id: 3, date: '3h ago', source: 'Apify YouTube Scraper', results: 524, cost: '$1.90', status: 'Success' },
    { id: 4, date: '3h ago', source: 'Apify LinkedIn Scraper', results: 312, cost: '$1.50', status: 'Partial' },
    { id: 5, date: '6h ago', source: 'Apify Instagram Scraper', results: 0, cost: '$0.20', status: 'Failed' },
    { id: 6, date: '1d ago', source: 'Apify TikTok Scraper', results: 1589, cost: '$4.20', status: 'Success' },
    { id: 7, date: '1d ago', source: 'Apify YouTube Scraper', results: 692, cost: '$2.10', status: 'Success' },
    { id: 8, date: '2d ago', source: 'Apify Instagram Scraper', results: 934, cost: '$2.70', status: 'Success' },
    { id: 9, date: '2d ago', source: 'Apify LinkedIn Scraper', results: 418, cost: '$1.80', status: 'Success' },
    { id: 10, date: '3d ago', source: 'Apify TikTok Scraper', results: 1124, cost: '$3.50', status: 'Success' }
  ];

  const tierEmoji = {
    'Top 1%': '🔥',
    'Top 10%': '⚡',
    'Proven': '✅'
  };

  const platformColors = {
    TikTok: 'from-pink-500 to-purple-500',
    Instagram: 'from-purple-500 to-pink-500',
    YouTube: 'from-red-500 to-red-600',
    LinkedIn: 'from-blue-500 to-cyan-500'
  };

  const statusColors = {
    Rising: 'text-green-400',
    Peaking: 'text-orange-400',
    Declining: 'text-gray-500'
  };

  const statusIcons = {
    Rising: IoTrendingUp,
    Peaking: IoWarning,
    Declining: IoTrendingDown
  };

  const filteredHooks = hooks.filter(hook => {
    const matchesSearch = hook.text.toLowerCase().includes(searchQuery.toLowerCase()) || hook.type.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === 'all' || hook.type === filterType;
    const matchesTier = filterTier === 'all' || hook.tier === filterTier;
    const matchesPlatform = filterPlatform === 'all' || hook.platform === filterPlatform;
    return matchesSearch && matchesType && matchesTier && matchesPlatform;
  });

  const uniqueTypes = [...new Set(hooks.map(h => h.type))];

  return (
    <div className="min-h-screen bg-[#07070b] text-white font-['DM_Sans']">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=JetBrains+Mono:wght@400;500&display=swap');
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.4s ease-out; }
      `}</style>

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-[#0e0e16]/80 backdrop-blur-xl border-b border-[#1a1a2e]">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
                <IoFlaskOutline size={28} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Research Engine</h1>
                <div className="flex items-center gap-2 mt-1">
                  <span className="px-2 py-0.5 rounded text-xs font-['JetBrains_Mono'] bg-purple-500/20 text-purple-400 border border-purple-500/30">
                    WF1
                  </span>
                  <span className="text-sm text-gray-400">Intelligence</span>
                </div>
              </div>
            </div>
          </div>

          {/* STATS BAR */}
          <div className="grid grid-cols-4 gap-4 mt-6">
            <div className="bg-[#0e0e16] rounded-lg border border-[#1a1a2e] p-4">
              <div className="text-xs text-gray-500 mb-1">Total Hooks</div>
              <div className="text-2xl font-bold text-[#ff5722]">{stats.totalHooks}</div>
            </div>
            <div className="bg-[#0e0e16] rounded-lg border border-[#1a1a2e] p-4">
              <div className="text-xs text-gray-500 mb-1">Trends Detected</div>
              <div className="text-2xl font-bold text-purple-400">{stats.trendsDetected}</div>
            </div>
            <div className="bg-[#0e0e16] rounded-lg border border-[#1a1a2e] p-4">
              <div className="text-xs text-gray-500 mb-1">Sources Scraped</div>
              <div className="text-2xl font-bold text-cyan-400">{stats.sourcesScraped}</div>
            </div>
            <div className="bg-[#0e0e16] rounded-lg border border-[#1a1a2e] p-4">
              <div className="text-xs text-gray-500 mb-1">Last Updated</div>
              <div className="text-lg font-bold text-gray-300">{stats.lastUpdated}</div>
            </div>
          </div>

          {/* TABS */}
          <div className="flex gap-2 mt-6 overflow-x-auto pb-2">
            {[
              { id: 'hooks', label: 'Viral Hooks Library' },
              { id: 'trends', label: 'Trend Radar' },
              { id: 'competitors', label: 'Competitor Analysis' },
              { id: 'sources', label: 'Source Data' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg border transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-[#ff5722]/20 border-[#ff5722] text-white'
                    : 'bg-[#0e0e16] border-[#1a1a2e] text-gray-400 hover:border-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <main className="max-w-7xl mx-auto px-8 py-8">
        {/* TAB: VIRAL HOOKS LIBRARY */}
        {activeTab === 'hooks' && (
          <div className="animate-fadeIn">
            {/* Search and Filters */}
            <div className="mb-6 space-y-4">
              <div className="relative">
                <IoSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search hooks..."
                  className="w-full bg-[#0e0e16] border border-[#1a1a2e] rounded-lg pl-12 pr-4 py-3 text-white focus:outline-none focus:border-[#ff5722] transition-all"
                />
              </div>

              <div className="flex gap-4 flex-wrap">
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="bg-[#0e0e16] border border-[#1a1a2e] rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#ff5722]"
                >
                  <option value="all">All Types</option>
                  {uniqueTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>

                <select
                  value={filterTier}
                  onChange={(e) => setFilterTier(e.target.value)}
                  className="bg-[#0e0e16] border border-[#1a1a2e] rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#ff5722]"
                >
                  <option value="all">All Tiers</option>
                  <option value="Top 1%">🔥 Top 1%</option>
                  <option value="Top 10%">⚡ Top 10%</option>
                  <option value="Proven">✅ Proven</option>
                </select>

                <select
                  value={filterPlatform}
                  onChange={(e) => setFilterPlatform(e.target.value)}
                  className="bg-[#0e0e16] border border-[#1a1a2e] rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#ff5722]"
                >
                  <option value="all">All Platforms</option>
                  <option value="TikTok">TikTok</option>
                  <option value="Instagram">Instagram</option>
                  <option value="YouTube">YouTube</option>
                  <option value="LinkedIn">LinkedIn</option>
                </select>
              </div>
            </div>

            {/* Hooks Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredHooks.map((hook, idx) => (
                <div
                  key={hook.id}
                  className="bg-[#0e0e16] rounded-lg border border-[#1a1a2e] p-6 hover:border-[#ff5722]/50 transition-all"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <div className="text-lg font-bold mb-4 leading-snug">{hook.text}</div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 rounded text-xs bg-purple-500/20 text-purple-400 border border-purple-500/30">
                      {hook.type}
                    </span>
                    <span className="px-2 py-1 rounded text-xs bg-[#ff5722]/20 text-[#ff5722] border border-[#ff5722]/30">
                      {tierEmoji[hook.tier]} {hook.tier}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs bg-gradient-to-r ${platformColors[hook.platform]} text-white`}>
                      {hook.platform}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm mb-4">
                    <span className="text-gray-400">
                      <span className="font-['JetBrains_Mono'] text-white">{hook.views}</span> views
                    </span>
                    <span className="text-gray-400">
                      <span className="font-['JetBrains_Mono'] text-green-400">{hook.engagement}</span> engagement
                    </span>
                  </div>

                  <button className="w-full px-4 py-2 rounded-lg bg-[#ff5722]/20 border border-[#ff5722] text-[#ff5722] hover:bg-[#ff5722]/30 transition-all text-sm font-medium">
                    Use in Script
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB: TREND RADAR */}
        {activeTab === 'trends' && (
          <div className="space-y-4 animate-fadeIn">
            {trends.map((trend, idx) => {
              const StatusIcon = statusIcons[trend.status];
              return (
                <div
                  key={trend.id}
                  className="bg-[#0e0e16] rounded-lg border border-[#1a1a2e] p-6 hover:border-[#ff5722]/50 transition-all"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{trend.name}</h3>
                      <p className="text-gray-400 text-sm">{trend.description}</p>
                    </div>
                    <div className={`flex items-center gap-2 px-3 py-1 rounded-lg bg-[#07070b] border border-[#1a1a2e] ${statusColors[trend.status]}`}>
                      <StatusIcon size={18} />
                      <span className="text-sm font-medium">{trend.status}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mt-4">
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Estimated Window</div>
                      <div className="text-sm font-['JetBrains_Mono'] text-gray-300">{trend.window}</div>
                    </div>
                    <div className="col-span-2">
                      <div className="text-xs text-gray-500 mb-1">Related Formats</div>
                      <div className="text-sm text-gray-300">{trend.relatedFormats}</div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-[#1a1a2e]">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500 uppercase tracking-wider">Recommended Action:</span>
                      <span className="text-sm text-[#ff5722] font-medium">{trend.action}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* TAB: COMPETITOR ANALYSIS */}
        {activeTab === 'competitors' && (
          <div className="space-y-4 animate-fadeIn">
            {competitors.map((comp, idx) => (
              <div
                key={comp.id}
                className="bg-[#0e0e16] rounded-lg border border-[#1a1a2e] p-6 hover:border-[#ff5722]/50 transition-all"
                style={{ animationDelay: `${idx * 0.08}s` }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${platformColors[comp.platform]} flex items-center justify-center text-white font-bold`}>
                      {comp.handle[1].toUpperCase()}
                    </div>
                    <div>
                      <div className="font-bold">{comp.handle}</div>
                      <div className="text-xs text-gray-400">{comp.platform}</div>
                    </div>
                  </div>

                  {/* Sparkline */}
                  <div className="flex items-end gap-1 h-8">
                    {comp.growth.map((val, i) => (
                      <div
                        key={i}
                        className="w-2 bg-gradient-to-t from-[#ff5722] to-orange-400 rounded-t"
                        style={{ height: `${(val / Math.max(...comp.growth)) * 100}%` }}
                      />
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-5 gap-4 mt-6">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Followers</div>
                    <div className="text-sm font-['JetBrains_Mono'] text-white">{comp.followers}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Engagement</div>
                    <div className="text-sm font-['JetBrains_Mono'] text-green-400">{comp.engagement}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Post Freq</div>
                    <div className="text-sm font-['JetBrains_Mono'] text-gray-300">{comp.postFreq}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Top Content</div>
                    <div className="text-sm text-gray-300">{comp.topContent}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Last Active</div>
                    <div className="text-sm text-gray-400">{comp.lastActive}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB: SOURCE DATA */}
        {activeTab === 'sources' && (
          <div className="bg-[#0e0e16] rounded-lg border border-[#1a1a2e] overflow-hidden animate-fadeIn">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#1a1a2e] bg-[#07070b]">
                  <th className="text-left px-6 py-4 text-xs uppercase tracking-wider text-gray-500">Date</th>
                  <th className="text-left px-6 py-4 text-xs uppercase tracking-wider text-gray-500">Source</th>
                  <th className="text-left px-6 py-4 text-xs uppercase tracking-wider text-gray-500">Results</th>
                  <th className="text-left px-6 py-4 text-xs uppercase tracking-wider text-gray-500">Cost</th>
                  <th className="text-left px-6 py-4 text-xs uppercase tracking-wider text-gray-500">Status</th>
                </tr>
              </thead>
              <tbody>
                {scrapeLogs.map(log => (
                  <tr key={log.id} className="border-b border-[#1a1a2e] hover:bg-[#07070b] transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-400">{log.date}</td>
                    <td className="px-6 py-4 text-sm font-['JetBrains_Mono'] text-gray-300">{log.source}</td>
                    <td className="px-6 py-4 text-sm font-['JetBrains_Mono'] text-white">{log.results}</td>
                    <td className="px-6 py-4 text-sm font-['JetBrains_Mono'] text-[#ff5722]">{log.cost}</td>
                    <td className="px-6 py-4">
                      {log.status === 'Success' && (
                        <span className="flex items-center gap-2 text-sm text-green-400">
                          <IoCheckmarkCircle size={16} /> Success
                        </span>
                      )}
                      {log.status === 'Partial' && (
                        <span className="flex items-center gap-2 text-sm text-orange-400">
                          <IoWarning size={16} /> Partial
                        </span>
                      )}
                      {log.status === 'Failed' && (
                        <span className="flex items-center gap-2 text-sm text-red-400">
                          <IoClose size={16} /> Failed
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
};

export default ResearchEngine;
