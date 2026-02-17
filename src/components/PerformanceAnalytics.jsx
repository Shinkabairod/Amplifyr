import React, { useState } from 'react';
import {
  IoStatsChartOutline,
  IoTrendingUp,
  IoTrendingDown,
  IoEye,
  IoHeart,
  IoPeople,
  IoVideocam,
  IoCheckmarkCircle,
  IoArrowUp,
  IoArrowDown,
  IoSend,
  IoFlame,
  IoFlash,
} from 'react-icons/io5';
import {
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Bar,
  ResponsiveContainer,
  Area,
  AreaChart
} from 'recharts';

const PerformanceAnalytics = () => {
  const [period, setPeriod] = useState('30d');
  const [chartMetric, setChartMetric] = useState('views');
  const [optimizationSuggestions, setOptimizationSuggestions] = useState([
    { id: 1, text: 'Increase Authority pillar from 35% to 45% (+10%)', applied: false, impact: 'High' },
    { id: 2, text: 'Retire hook type "Generic Question" — underperforming 3 weeks', applied: false, impact: 'Medium' },
    { id: 3, text: 'Shift posting time to 2 PM-5 PM window (+18% engagement)', applied: false, impact: 'High' },
    { id: 4, text: 'Replace CTA "Check description" with "Link in bio" (+2.4% CTR)', applied: false, impact: 'Medium' },
    { id: 5, text: 'Increase video length to 45-50s range (current avg: 38s)', applied: false, impact: 'Low' }
  ]);

  const kpis = {
    '7d': {
      views: { value: '127K', delta: 12.4 },
      engagement: { value: '8.2%', delta: 2.1 },
      followers: { value: '+1.2K', delta: 18.5 },
      bestVideo: { value: '47K', delta: 5.8 },
      conversion: { value: '3.4%', delta: 0.8 },
      published: { value: '7', delta: 0 }
    },
    '30d': {
      views: { value: '524K', delta: 32.7 },
      engagement: { value: '9.1%', delta: 15.3 },
      followers: { value: '+4.8K', delta: 45.2 },
      bestVideo: { value: '89K', delta: 28.4 },
      conversion: { value: '4.2%', delta: 12.6 },
      published: { value: '28', delta: 16.7 }
    },
    '90d': {
      views: { value: '1.2M', delta: 67.8 },
      engagement: { value: '10.3%', delta: 42.1 },
      followers: { value: '+12.4K', delta: 89.5 },
      bestVideo: { value: '147K', delta: 52.3 },
      conversion: { value: '5.1%', delta: 38.9 },
      published: { value: '84', delta: 40.0 }
    }
  };

  const currentKPIs = kpis[period];

  const performanceData = [
    { date: 'Day 1', views: 8200, engagement: 6.2, followers: 45120 },
    { date: 'Day 3', views: 12400, engagement: 7.1, followers: 45280 },
    { date: 'Day 5', views: 15800, engagement: 7.8, followers: 45510 },
    { date: 'Day 7', views: 18200, engagement: 8.4, followers: 45820 },
    { date: 'Day 9', views: 21500, engagement: 8.9, followers: 46200 },
    { date: 'Day 11', views: 24800, engagement: 9.2, followers: 46680 },
    { date: 'Day 13', views: 28200, engagement: 9.8, followers: 47150 },
    { date: 'Day 15', views: 32500, engagement: 10.1, followers: 47820 },
    { date: 'Day 17', views: 35800, engagement: 10.4, followers: 48450 },
    { date: 'Day 19', views: 38200, engagement: 10.7, followers: 49020 },
    { date: 'Day 21', views: 41500, engagement: 11.2, followers: 49680 },
    { date: 'Day 23', views: 44200, engagement: 11.5, followers: 50240 },
    { date: 'Day 25', views: 46800, engagement: 11.8, followers: 50890 },
    { date: 'Day 27', views: 49200, engagement: 12.1, followers: 51420 },
    { date: 'Day 30', views: 52400, engagement: 12.4, followers: 52100 }
  ];

  const videos = {
    winners: [
      { title: 'Why your content strategy is backwards', views: '89K', engagement: '14.2%', reason: 'Contrarian hook + perfect timing' },
      { title: 'I spent $50K learning this', views: '76K', engagement: '13.1%', reason: 'Personal story resonated' },
      { title: 'Stop posting daily', views: '68K', engagement: '12.8%', reason: 'Myth-busting angle strong' },
      { title: 'The framework that changed everything', views: '62K', engagement: '11.9%', reason: 'Educational value high' },
      { title: 'Income transparency breakdown', views: '58K', engagement: '11.4%', reason: 'Transparency trending' }
    ],
    neutrals: [
      { title: '5 brutal truths about building online', views: '24K', engagement: '8.2%', reason: 'Standard performance' },
      { title: 'Behind the scenes: My process', views: '22K', engagement: '7.9%', reason: 'Average engagement' },
      { title: 'How to start from zero', views: '21K', engagement: '7.6%', reason: 'Expected reach' },
      { title: 'Day in the life of a creator', views: '20K', engagement: '7.4%', reason: 'Typical BTS content' },
      { title: 'My content creation setup', views: '19K', engagement: '7.2%', reason: 'Niche interest' },
      { title: 'Responding to your questions', views: '18K', engagement: '7.0%', reason: 'Community engagement' },
      { title: '3 tools I use daily', views: '17K', engagement: '6.8%', reason: 'Moderate interest' },
      { title: 'Weekly content planning ritual', views: '16K', engagement: '6.5%', reason: 'Process content' },
      { title: 'Mistakes I made starting out', views: '15K', engagement: '6.3%', reason: 'Standard lesson' },
      { title: 'Quick tip: Caption writing', views: '14K', engagement: '6.1%', reason: 'Micro-content' },
      { title: 'Content strategy overview', views: '13K', engagement: '5.9%', reason: 'Educational baseline' },
      { title: 'Platform algorithm changes', views: '12K', engagement: '5.7%', reason: 'Timely but niche' }
    ],
    losers: [
      { title: 'Generic productivity tips', views: '4.2K', engagement: '3.8%', reason: 'Oversaturated topic' },
      { title: 'My morning routine', views: '3.8K', engagement: '3.2%', reason: 'Off-brand content' },
      { title: 'Tool review: Generic app', views: '3.1K', engagement: '2.9%', reason: 'Low audience interest' }
    ]
  };

  const hookPerformance = [
    { type: 'Contrarian', performance: 94 },
    { type: 'Personal Story', performance: 87 },
    { type: 'Myth Buster', performance: 82 },
    { type: 'Curiosity Gap', performance: 78 },
    { type: 'List', performance: 72 },
    { type: 'How-To', performance: 68 },
    { type: 'Generic Question', performance: 42 }
  ];

  const pillarPerformance = [
    { pillar: 'Authority', engagement: 11.8 },
    { pillar: 'Education', engagement: 8.4 },
    { pillar: 'Inspiration', engagement: 7.2 },
    { pillar: 'Entertainment', engagement: 6.9 }
  ];

  const ctaPerformance = [
    { cta: 'Link in bio', conversion: 4.2 },
    { cta: 'Comment keyword', conversion: 3.8 },
    { cta: 'DM for info', conversion: 2.9 },
    { cta: 'Check description', conversion: 1.8 }
  ];

  const formatTrends = [
    { format: 'Face-to-camera', trend: 'up', change: '+18%' },
    { format: 'Contrarian opener', trend: 'up', change: '+12%' },
    { format: 'Screen recording', trend: 'up', change: '+8%' },
    { format: 'Carousel', trend: 'down', change: '-5%' },
    { format: 'Faceless', trend: 'down', change: '-12%' }
  ];

  const weeklyReport = {
    topVideos: [
      { title: 'Why your content strategy is backwards', views: '89K', reason: 'Contrarian angle + perfect timing (2 PM post)' },
      { title: 'I spent $50K learning this', views: '76K', reason: 'Vulnerability + value combination resonated' },
      { title: 'Stop posting daily', views: '68K', reason: 'Challenged conventional wisdom effectively' }
    ],
    bottomVideos: [
      { title: 'Generic productivity tips', views: '4.2K', learning: 'Avoid oversaturated topics without unique angle' },
      { title: 'My morning routine', views: '3.8K', learning: 'Off-brand lifestyle content doesn\'t resonate' },
      { title: 'Tool review: Generic app', views: '3.1K', learning: 'Audience not interested in product reviews' }
    ],
    insights: [
      'Contrarian hooks outperforming all other types by 34% — prioritize for next week',
      'Authority pillar driving 67% of total engagement — increase allocation from 35% to 45%',
      '2 PM - 5 PM posting window showing 18% higher engagement vs other times'
    ],
    nextWeekPlan: 'Focus: 5 Authority-pillar videos with contrarian hooks. Target 2-4 PM posting. Retire "How-To" opener format. Test income transparency angle (trending +28%).'
  };

  const toggleSuggestion = (id) => {
    setOptimizationSuggestions(prev =>
      prev.map(s => s.id === id ? { ...s, applied: !s.applied } : s)
    );
  };

  const getMetricData = () => {
    return performanceData.map(d => ({
      date: d.date,
      value: chartMetric === 'views' ? d.views : chartMetric === 'engagement' ? d.engagement * 1000 : d.followers
    }));
  };

  const winnerPercent = Math.round((videos.winners.length / (videos.winners.length + videos.neutrals.length + videos.losers.length)) * 100);
  const neutralPercent = Math.round((videos.neutrals.length / (videos.winners.length + videos.neutrals.length + videos.losers.length)) * 100);
  const loserPercent = Math.round((videos.losers.length / (videos.winners.length + videos.neutrals.length + videos.losers.length)) * 100);

  return (
    <div className="min-h-screen bg-[#07070b] text-white font-['DM_Sans']">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=JetBrains+Mono:wght@400;500&display=swap');
        .glow { box-shadow: 0 0 20px rgba(255, 87, 34, 0.3); }
      `}</style>

      {/* HEADER */}
      <header className="bg-[#0e0e16] border-b border-[#1a1a2e] p-6">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500">
                <IoStatsChartOutline size={28} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Performance Analytics</h1>
                <div className="flex items-center gap-2 mt-1">
                  <span className="px-2 py-0.5 rounded text-xs font-['JetBrains_Mono'] bg-blue-500/20 text-blue-400 border border-blue-500/30">
                    WF7 + WF8
                  </span>
                  <span className="text-sm text-gray-400">Intelligence & Optimization</span>
                </div>
              </div>
            </div>

            {/* Period Selector */}
            <div className="flex items-center gap-2">
              {['7d', '30d', '90d'].map(p => (
                <button
                  key={p}
                  onClick={() => setPeriod(p)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    period === p
                      ? 'bg-[#ff5722] text-white'
                      : 'bg-[#0e0e16] text-gray-400 hover:text-white border border-[#1a1a2e]'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-[1800px] mx-auto p-8 space-y-8">
        {/* KPI CARDS */}
        <div className="grid grid-cols-6 gap-4">
          {[
            { label: 'Total Views', icon: IoEye, value: currentKPIs.views.value, delta: currentKPIs.views.delta },
            { label: 'Engagement Rate', icon: IoHeart, value: currentKPIs.engagement.value, delta: currentKPIs.engagement.delta },
            { label: 'Followers Gained', icon: IoPeople, value: currentKPIs.followers.value, delta: currentKPIs.followers.delta },
            { label: 'Best Video Views', icon: IoFlame, value: currentKPIs.bestVideo.value, delta: currentKPIs.bestVideo.delta },
            { label: 'Conversion Rate', icon: IoCheckmarkCircle, value: currentKPIs.conversion.value, delta: currentKPIs.conversion.delta },
            { label: 'Content Published', icon: IoVideocam, value: currentKPIs.published.value, delta: currentKPIs.published.delta }
          ].map((kpi, idx) => {
            const Icon = kpi.icon;
            const isPositive = kpi.delta > 0;
            return (
              <div key={idx} className="bg-[#0e0e16] rounded-lg border border-[#1a1a2e] p-5 hover:border-[#ff5722]/50 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <Icon size={20} className="text-gray-500" />
                  {kpi.delta !== 0 && (
                    <div className={`flex items-center gap-1 text-xs font-medium ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
                      {isPositive ? <IoArrowUp size={14} /> : <IoArrowDown size={14} />}
                      {Math.abs(kpi.delta)}%
                    </div>
                  )}
                </div>
                <div className="text-2xl font-bold font-['JetBrains_Mono'] mb-1">{kpi.value}</div>
                <div className="text-xs text-gray-500">{kpi.label}</div>
              </div>
            );
          })}
        </div>

        {/* PERFORMANCE CHART */}
        <div className="bg-[#0e0e16] rounded-lg border border-[#1a1a2e] p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold">Performance Trend</h2>
            <div className="flex items-center gap-2">
              {[
                { id: 'views', label: 'Views' },
                { id: 'engagement', label: 'Engagement' },
                { id: 'followers', label: 'Followers' }
              ].map(metric => (
                <button
                  key={metric.id}
                  onClick={() => setChartMetric(metric.id)}
                  className={`px-3 py-1 rounded text-sm transition-all ${
                    chartMetric === metric.id
                      ? 'bg-[#ff5722] text-white'
                      : 'bg-[#07070b] text-gray-400 hover:text-white'
                  }`}
                >
                  {metric.label}
                </button>
              ))}
            </div>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={getMetricData()}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ff5722" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#ff5722" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1a1a2e" />
              <XAxis dataKey="date" stroke="#666" style={{ fontSize: '12px' }} />
              <YAxis stroke="#666" style={{ fontSize: '12px' }} />
              <Tooltip
                contentStyle={{ backgroundColor: '#0e0e16', border: '1px solid #1a1a2e', borderRadius: '8px' }}
                labelStyle={{ color: '#fff' }}
              />
              <Area type="monotone" dataKey="value" stroke="#ff5722" strokeWidth={2} fill="url(#colorValue)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* CONTENT CLASSIFICATION */}
        <div className="grid grid-cols-3 gap-4">
          {/* Winners */}
          <div className="bg-[#0e0e16] rounded-lg border border-[#1a1a2e] p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <IoFlame size={20} className="text-orange-500" />
                <h3 className="font-bold">Winners</h3>
              </div>
              <span className="text-xs px-2 py-1 rounded bg-orange-500/20 text-orange-400 font-medium">{winnerPercent}%</span>
            </div>
            <div className="space-y-3">
              {videos.winners.map((video, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-[#07070b] border border-green-500/30">
                  <div className="text-sm font-semibold mb-2 leading-tight">{video.title}</div>
                  <div className="flex items-center gap-3 text-xs mb-2">
                    <span className="font-['JetBrains_Mono'] text-green-400">{video.views}</span>
                    <span className="font-['JetBrains_Mono'] text-blue-400">{video.engagement}</span>
                  </div>
                  <div className="text-xs text-gray-400 italic">{video.reason}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Neutrals */}
          <div className="bg-[#0e0e16] rounded-lg border border-[#1a1a2e] p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <IoFlash size={20} className="text-yellow-500" />
                <h3 className="font-bold">Neutrals</h3>
              </div>
              <span className="text-xs px-2 py-1 rounded bg-yellow-500/20 text-yellow-400 font-medium">{neutralPercent}%</span>
            </div>
            <div className="space-y-2 max-h-[500px] overflow-y-auto">
              {videos.neutrals.map((video, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-[#07070b] border border-[#1a1a2e]">
                  <div className="text-sm font-semibold mb-1 leading-tight">{video.title}</div>
                  <div className="flex items-center gap-3 text-xs mb-1">
                    <span className="font-['JetBrains_Mono'] text-gray-400">{video.views}</span>
                    <span className="font-['JetBrains_Mono'] text-gray-400">{video.engagement}</span>
                  </div>
                  <div className="text-xs text-gray-500 italic">{video.reason}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Losers */}
          <div className="bg-[#0e0e16] rounded-lg border border-[#1a1a2e] p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <IoTrendingDown size={20} className="text-red-500" />
                <h3 className="font-bold">Losers</h3>
              </div>
              <span className="text-xs px-2 py-1 rounded bg-red-500/20 text-red-400 font-medium">{loserPercent}%</span>
            </div>
            <div className="space-y-3">
              {videos.losers.map((video, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-[#07070b] border border-red-500/30">
                  <div className="text-sm font-semibold mb-2 leading-tight">{video.title}</div>
                  <div className="flex items-center gap-3 text-xs mb-2">
                    <span className="font-['JetBrains_Mono'] text-red-400">{video.views}</span>
                    <span className="font-['JetBrains_Mono'] text-red-400">{video.engagement}</span>
                  </div>
                  <div className="text-xs text-gray-400 italic">{video.reason}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PATTERN ANALYSIS */}
        <div className="grid grid-cols-2 gap-6">
          {/* Hook Analysis */}
          <div className="bg-[#0e0e16] rounded-lg border border-[#1a1a2e] p-6">
            <h3 className="font-bold mb-4">Hook Performance</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={hookPerformance} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#1a1a2e" />
                <XAxis type="number" stroke="#666" style={{ fontSize: '12px' }} />
                <YAxis type="category" dataKey="type" stroke="#666" style={{ fontSize: '12px' }} width={120} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0e0e16', border: '1px solid #1a1a2e', borderRadius: '8px' }}
                />
                <Bar dataKey="performance" fill="#ff5722" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pillar Performance */}
          <div className="bg-[#0e0e16] rounded-lg border border-[#1a1a2e] p-6">
            <h3 className="font-bold mb-4">Pillar Engagement</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={pillarPerformance}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1a1a2e" />
                <XAxis dataKey="pillar" stroke="#666" style={{ fontSize: '12px' }} />
                <YAxis stroke="#666" style={{ fontSize: '12px' }} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0e0e16', border: '1px solid #1a1a2e', borderRadius: '8px' }}
                />
                <Bar dataKey="engagement" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Format Trends */}
          <div className="bg-[#0e0e16] rounded-lg border border-[#1a1a2e] p-6">
            <h3 className="font-bold mb-4">Format Trends</h3>
            <div className="space-y-3">
              {formatTrends.map((format, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-[#07070b]">
                  <span className="text-sm">{format.format}</span>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-['JetBrains_Mono'] ${
                      format.trend === 'up' ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {format.change}
                    </span>
                    {format.trend === 'up' ? (
                      <IoTrendingUp size={16} className="text-green-400" />
                    ) : (
                      <IoTrendingDown size={16} className="text-red-400" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Effectiveness */}
          <div className="bg-[#0e0e16] rounded-lg border border-[#1a1a2e] p-6">
            <h3 className="font-bold mb-4">CTA Conversion</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={ctaPerformance}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1a1a2e" />
                <XAxis dataKey="cta" stroke="#666" style={{ fontSize: '11px' }} />
                <YAxis stroke="#666" style={{ fontSize: '12px' }} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0e0e16', border: '1px solid #1a1a2e', borderRadius: '8px' }}
                />
                <Bar dataKey="conversion" fill="#10b981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* WEEKLY REPORT & OPTIMIZATION */}
        <div className="grid grid-cols-2 gap-6">
          {/* Weekly Report */}
          <div className="bg-[#0e0e16] rounded-lg border border-[#1a1a2e] p-6">
            <h2 className="text-lg font-bold mb-6">Weekly Report Preview</h2>

            <div className="space-y-6">
              {/* Top 3 */}
              <div>
                <h3 className="text-sm font-semibold text-green-400 mb-3">🏆 Top Performers</h3>
                <div className="space-y-2">
                  {weeklyReport.topVideos.map((video, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-green-500/10 border border-green-500/30">
                      <div className="text-sm font-medium mb-1">{video.title}</div>
                      <div className="text-xs text-gray-400 mb-1 font-['JetBrains_Mono']">{video.views} views</div>
                      <div className="text-xs text-gray-500 italic">{video.reason}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom 3 */}
              <div>
                <h3 className="text-sm font-semibold text-red-400 mb-3">📚 Learnings</h3>
                <div className="space-y-2">
                  {weeklyReport.bottomVideos.map((video, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-red-500/10 border border-red-500/30">
                      <div className="text-sm font-medium mb-1">{video.title}</div>
                      <div className="text-xs text-gray-400 mb-1 font-['JetBrains_Mono']">{video.views} views</div>
                      <div className="text-xs text-gray-500 italic">{video.learning}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Insights */}
              <div>
                <h3 className="text-sm font-semibold text-blue-400 mb-3">💡 Key Insights</h3>
                <ul className="space-y-2">
                  {weeklyReport.insights.map((insight, idx) => (
                    <li key={idx} className="text-sm text-gray-300 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#ff5722]">
                      {insight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Next Week Plan */}
              <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/30">
                <h3 className="text-sm font-semibold text-purple-400 mb-2">📅 Next Week Strategy</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{weeklyReport.nextWeekPlan}</p>
              </div>

              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-[#ff5722] to-orange-400 text-white hover:shadow-lg hover:shadow-[#ff5722]/30 transition-all font-medium">
                <IoSend size={18} />
                Send Report to Client
              </button>
            </div>
          </div>

          {/* Optimization Suggestions */}
          <div className="bg-[#0e0e16] rounded-lg border border-[#1a1a2e] p-6">
            <h2 className="text-lg font-bold mb-6">AI Optimization Suggestions</h2>

            <div className="space-y-3">
              {optimizationSuggestions.map(suggestion => (
                <div
                  key={suggestion.id}
                  className={`p-4 rounded-lg border transition-all ${
                    suggestion.applied
                      ? 'bg-green-500/10 border-green-500/30'
                      : 'bg-[#07070b] border-[#1a1a2e] hover:border-[#ff5722]/50'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <p className="text-sm flex-1 pr-4">{suggestion.text}</p>
                    <span className={`text-[10px] px-2 py-0.5 rounded font-medium ${
                      suggestion.impact === 'High' ? 'bg-red-500/20 text-red-400' :
                      suggestion.impact === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {suggestion.impact}
                    </span>
                  </div>

                  <button
                    onClick={() => toggleSuggestion(suggestion.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded text-sm transition-all ${
                      suggestion.applied
                        ? 'bg-green-500 text-white'
                        : 'bg-[#ff5722] text-white hover:bg-[#ff5722]/90'
                    }`}
                  >
                    {suggestion.applied ? (
                      <>
                        <IoCheckmarkCircle size={16} />
                        Applied
                      </>
                    ) : (
                      <>
                        <IoCheckmarkCircle size={16} />
                        Apply
                      </>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceAnalytics;
