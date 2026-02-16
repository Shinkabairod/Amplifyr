import React, { useState } from 'react';
import {
  IoBulbOutline,
  IoVideocamOutline,
  IoImageOutline,
  IoDocumentTextOutline,
  IoCheckmarkCircle,
  IoCloseCircle,
  IoCreateOutline,
  IoSunny,
  IoMoon,
  IoChevronForward,
  IoChevronBack
} from 'react-icons/io5';

const ContentDecisionEngine = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [currentWeekOffset, setCurrentWeekOffset] = useState(0);

  const pillars = {
    Authority: { color: 'from-purple-500 to-purple-600', bgLight: 'bg-purple-100', textDark: 'text-purple-700', target: 40 },
    Education: { color: 'from-blue-500 to-blue-600', bgLight: 'bg-blue-100', textDark: 'text-blue-700', target: 30 },
    Inspiration: { color: 'from-pink-500 to-pink-600', bgLight: 'bg-pink-100', textDark: 'text-pink-700', target: 15 },
    Entertainment: { color: 'from-orange-500 to-orange-600', bgLight: 'bg-orange-100', textDark: 'text-orange-700', target: 15 }
  };

  const formatIcons = {
    Video: IoVideocamOutline,
    Carousel: IoImageOutline,
    Text: IoDocumentTextOutline
  };

  const statusColors = {
    Planned: { bg: 'bg-gray-500/20', text: 'text-gray-400', border: 'border-gray-500/30' },
    Approved: { bg: 'bg-green-500/20', text: 'text-green-400', border: 'border-green-500/30' },
    Published: { bg: 'bg-blue-500/20', text: 'text-blue-400', border: 'border-blue-500/30' },
    Rejected: { bg: 'bg-red-500/20', text: 'text-red-400', border: 'border-red-500/30' }
  };

  const contentSlots = [
    // Week 1
    { id: 1, day: 0, topic: 'The brutal truth about content that nobody tells you', pillar: 'Authority', format: 'Video', hookType: 'Contrarian', priority: 9, status: 'Approved', goal: 'Awareness', duration: '45s', cta: 'Comment your biggest struggle', hypothesis: 'Contrarian hooks trending +40% this week' },
    { id: 2, day: 0, topic: '5 mistakes killing your engagement', pillar: 'Education', format: 'Carousel', hookType: 'List', priority: 7, status: 'Approved', goal: 'Consideration', duration: '60s', cta: 'Save for later', hypothesis: 'List-based education performs well on Monday' },

    { id: 3, day: 1, topic: 'How I went from 0 to 100K in 90 days', pillar: 'Inspiration', format: 'Video', hookType: 'Personal Story', priority: 8, status: 'Planned', goal: 'Awareness', duration: '50s', cta: 'Follow for the journey', hypothesis: 'Story-based content has higher shareability on Tuesday' },

    { id: 4, day: 2, topic: 'Behind the scenes: My content creation process', pillar: 'Entertainment', format: 'Video', hookType: 'BTS', priority: 6, status: 'Planned', goal: 'Engagement', duration: '35s', cta: 'DM me your process', hypothesis: 'Mid-week BTS content builds connection' },
    { id: 5, day: 2, topic: 'The framework that changed everything for me', pillar: 'Education', format: 'Carousel', hookType: 'How-To', priority: 8, status: 'Approved', goal: 'Consideration', duration: '70s', cta: 'Link in bio for template', hypothesis: 'Educational frameworks drive lead gen' },

    { id: 6, day: 3, topic: 'Stop doing this if you want to grow', pillar: 'Authority', format: 'Video', hookType: 'Myth Buster', priority: 9, status: 'Approved', goal: 'Awareness', duration: '40s', cta: 'Share if you agree', hypothesis: 'Authority positioning peaks mid-week' },

    { id: 7, day: 4, topic: 'POV: You just discovered the content hack everyone uses', pillar: 'Entertainment', format: 'Video', hookType: 'Curiosity Gap', priority: 7, status: 'Planned', goal: 'Awareness', duration: '30s', cta: 'Comment HACK for details', hypothesis: 'Friday engagement spikes with entertainment' },
    { id: 8, day: 4, topic: 'Case study: How my client 10x their reach', pillar: 'Authority', format: 'Carousel', hookType: 'Case Study', priority: 8, status: 'Approved', goal: 'Conversion', duration: '80s', cta: 'DM for consultation', hypothesis: 'Case studies convert well end of week' },

    { id: 9, day: 5, topic: 'My content creation routine (real & unfiltered)', pillar: 'Inspiration', format: 'Video', hookType: 'Day in Life', priority: 6, status: 'Planned', goal: 'Engagement', duration: '60s', cta: 'Follow for more', hypothesis: 'Lifestyle content performs on weekends' },

    { id: 10, day: 6, topic: 'The mindset shift that unlocked growth', pillar: 'Inspiration', format: 'Text', hookType: 'Personal Story', priority: 5, status: 'Planned', goal: 'Awareness', duration: '90s', cta: 'Save this', hypothesis: 'Reflective content suits Sunday audience' },

    // Week 2
    { id: 11, day: 7, topic: 'Why your content strategy is backwards', pillar: 'Authority', format: 'Video', hookType: 'Contrarian', priority: 9, status: 'Planned', goal: 'Awareness', duration: '45s', cta: 'Comment if this resonates', hypothesis: 'Starting week strong with contrarian take' },
    { id: 12, day: 7, topic: '3 tools that automate 80% of my workflow', pillar: 'Education', format: 'Carousel', hookType: 'List', priority: 8, status: 'Planned', goal: 'Consideration', duration: '60s', cta: 'Link in bio', hypothesis: 'Tool recommendations drive clicks' },

    { id: 13, day: 8, topic: 'From burnout to breakthrough: My story', pillar: 'Inspiration', format: 'Video', hookType: 'Personal Story', priority: 7, status: 'Planned', goal: 'Awareness', duration: '55s', cta: 'Share your story', hypothesis: 'Vulnerability creates connection' },

    { id: 14, day: 9, topic: 'Watch me create content in real-time', pillar: 'Entertainment', format: 'Video', hookType: 'Process', priority: 6, status: 'Planned', goal: 'Engagement', duration: '40s', cta: 'Follow for tips', hypothesis: 'Process content educates and entertains' },
    { id: 15, day: 9, topic: 'The only content formula you need', pillar: 'Education', format: 'Carousel', hookType: 'How-To', priority: 9, status: 'Planned', goal: 'Consideration', duration: '75s', cta: 'Save this formula', hypothesis: 'Proven formulas get high saves' },

    { id: 16, day: 10, topic: 'Everyone says post daily. Here\'s why that\'s wrong.', pillar: 'Authority', format: 'Video', hookType: 'Myth Buster', priority: 9, status: 'Planned', goal: 'Awareness', duration: '50s', cta: 'Agree or disagree?', hypothesis: 'Challenging norms sparks debate' },

    { id: 17, day: 11, topic: 'Recreating viral content (with my twist)', pillar: 'Entertainment', format: 'Video', hookType: 'Trend', priority: 7, status: 'Planned', goal: 'Awareness', duration: '35s', cta: 'Which was better?', hypothesis: 'Trend participation boosts reach' },
    { id: 18, day: 11, topic: 'Revenue breakdown: How I monetize content', pillar: 'Authority', format: 'Carousel', hookType: 'Transparency', priority: 8, status: 'Planned', goal: 'Conversion', duration: '85s', cta: 'DM for strategy call', hypothesis: 'Income transparency builds trust' },

    { id: 19, day: 12, topic: 'Saturday reset: My weekly content planning ritual', pillar: 'Inspiration', format: 'Video', hookType: 'Routine', priority: 5, status: 'Planned', goal: 'Engagement', duration: '50s', cta: 'What\'s your ritual?', hypothesis: 'Weekend wellness content resonates' },

    { id: 20, day: 13, topic: 'Reflecting on 30 days of consistent posting', pillar: 'Inspiration', format: 'Text', hookType: 'Reflection', priority: 6, status: 'Planned', goal: 'Awareness', duration: '100s', cta: 'Comment your progress', hypothesis: 'Reflection posts encourage community sharing' }
  ];

  const aiReasoning = "Today's strategy: Contrarian hooks are trending +40% this week. Shifting 2/3 Monday slots to Authority pillar to capitalize on algorithm favorability. Educational carousels maintain high save rates (8.2% avg), keeping 1 slot for lead gen. Tuesday prioritizes personal story format due to +23% shareability spike. Mid-week focusing on myth-busting authority content as engagement peaks Wed-Thu. Friday case study targets conversion-ready audience before weekend drop-off.";

  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const getWeekSlots = () => {
    const startDay = currentWeekOffset * 7;
    return weekDays.map((day, idx) => ({
      day: day,
      slots: contentSlots.filter(slot => slot.day === startDay + idx)
    }));
  };

  const weekData = getWeekSlots();

  // Calculate pillar distribution
  const totalSlots = contentSlots.length;
  const pillarDistribution = Object.keys(pillars).map(pillar => {
    const count = contentSlots.filter(slot => slot.pillar === pillar).length;
    const percentage = Math.round((count / totalSlots) * 100);
    return { pillar, percentage, count };
  });

  const bgClass = darkMode ? 'bg-[#07070b]' : 'bg-[#f8f8f6]';
  const surfaceClass = darkMode ? 'bg-[#0e0e16]' : 'bg-white';
  const borderClass = darkMode ? 'border-[#1a1a2e]' : 'border-gray-200';
  const textClass = darkMode ? 'text-white' : 'text-gray-900';
  const textSecondaryClass = darkMode ? 'text-gray-400' : 'text-gray-600';

  return (
    <div className={`min-h-screen ${bgClass} ${textClass} font-['DM_Sans'] transition-colors`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=JetBrains+Mono:wght@400;500&display=swap');
        @keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }
        .slide-in { animation: slideIn 0.3s ease-out; }
      `}</style>

      {/* HEADER */}
      <header className={`sticky top-0 z-40 ${surfaceClass} border-b ${borderClass}`}>
        <div className="max-w-[1800px] mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
                <IoBulbOutline size={28} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Content Decision Engine</h1>
                <div className="flex items-center gap-2 mt-1">
                  <span className="px-2 py-0.5 rounded text-xs font-['JetBrains_Mono'] bg-purple-500/20 text-purple-400 border border-purple-500/30">
                    WF2
                  </span>
                  <span className={`text-sm ${textSecondaryClass}`}>Intelligence</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-3 rounded-lg border ${borderClass} hover:border-[#ff5722] transition-all`}
            >
              {darkMode ? <IoSunny size={20} /> : <IoMoon size={20} />}
            </button>
          </div>

          {/* PILLAR DISTRIBUTION BAR */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className={`text-xs uppercase tracking-wider ${textSecondaryClass}`}>Content Pillar Distribution</span>
              <span className={`text-xs ${textSecondaryClass}`}>Current vs Target</span>
            </div>
            <div className="flex gap-1 h-8 rounded-lg overflow-hidden">
              {pillarDistribution.map(({ pillar, percentage }) => (
                <div
                  key={pillar}
                  className={`bg-gradient-to-br ${pillars[pillar].color} flex items-center justify-center text-white text-xs font-bold transition-all hover:opacity-80`}
                  style={{ width: `${percentage}%` }}
                  title={`${pillar}: ${percentage}% (target ${pillars[pillar].target}%)`}
                >
                  {percentage}%
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-1">
              {pillarDistribution.map(({ pillar }) => (
                <div key={pillar} className={`text-xs ${textSecondaryClass}`}>
                  {pillar} <span className="text-[#ff5722]">({pillars[pillar].target}%)</span>
                </div>
              ))}
            </div>
          </div>

          {/* AI CONFIDENCE PANEL */}
          <div className={`mt-4 ${surfaceClass} rounded-lg border ${borderClass} p-4`}>
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-[#ff5722] to-orange-400">
                <IoBulbOutline size={18} className="text-white" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-[#ff5722] mb-1">AI Strategy Reasoning</div>
                <p className={`text-sm ${textSecondaryClass} leading-relaxed`}>{aiReasoning}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* CALENDAR VIEW */}
      <main className="max-w-[1800px] mx-auto px-8 py-8">
        {/* Week Navigation */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => setCurrentWeekOffset(Math.max(0, currentWeekOffset - 1))}
            disabled={currentWeekOffset === 0}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${borderClass} hover:border-[#ff5722] transition-all disabled:opacity-30 disabled:cursor-not-allowed`}
          >
            <IoChevronBack size={18} />
            Previous Week
          </button>
          <div className={`font-['JetBrains_Mono'] text-sm ${textSecondaryClass}`}>
            Week {currentWeekOffset + 1}
          </div>
          <button
            onClick={() => setCurrentWeekOffset(Math.min(1, currentWeekOffset + 1))}
            disabled={currentWeekOffset === 1}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${borderClass} hover:border-[#ff5722] transition-all disabled:opacity-30 disabled:cursor-not-allowed`}
          >
            Next Week
            <IoChevronForward size={18} />
          </button>
        </div>

        {/* Week Grid */}
        <div className="grid grid-cols-7 gap-4">
          {weekData.map(({ day, slots }, dayIdx) => (
            <div key={dayIdx}>
              <div className={`text-center mb-3 pb-2 border-b ${borderClass}`}>
                <div className="text-xs uppercase tracking-wider text-[#ff5722]">{day}</div>
                <div className={`text-xs ${textSecondaryClass} mt-1`}>{slots.length} slots</div>
              </div>

              <div className="space-y-3">
                {slots.map(slot => {
                  const FormatIcon = formatIcons[slot.format];
                  return (
                    <button
                      key={slot.id}
                      onClick={() => setSelectedSlot(slot)}
                      className={`w-full ${surfaceClass} rounded-lg border ${
                        selectedSlot?.id === slot.id ? 'border-[#ff5722]' : borderClass
                      } p-3 text-left hover:border-[#ff5722]/50 transition-all`}
                    >
                      {/* Topic */}
                      <div className="text-sm font-medium mb-2 line-clamp-2 leading-tight">
                        {slot.topic}
                      </div>

                      {/* Pillar & Format */}
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-medium ${
                          darkMode
                            ? `bg-gradient-to-br ${pillars[slot.pillar].color} text-white`
                            : `${pillars[slot.pillar].bgLight} ${pillars[slot.pillar].textDark}`
                        }`}>
                          {slot.pillar}
                        </span>
                        <FormatIcon size={14} className={textSecondaryClass} />
                      </div>

                      {/* Status & Priority */}
                      <div className="flex items-center justify-between">
                        <span className={`px-2 py-0.5 rounded text-[10px] border ${statusColors[slot.status].bg} ${statusColors[slot.status].text} ${statusColors[slot.status].border}`}>
                          {slot.status}
                        </span>
                        <span className={`text-xs font-['JetBrains_Mono'] ${textSecondaryClass}`}>
                          P{slot.priority}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* SIDE PANEL */}
      {selectedSlot && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setSelectedSlot(null)}
          />
          <div className={`fixed right-0 top-0 h-full w-[400px] ${surfaceClass} border-l ${borderClass} z-50 overflow-y-auto slide-in`}>
            <div className="p-6">
              {/* Close Button */}
              <button
                onClick={() => setSelectedSlot(null)}
                className={`absolute top-6 right-6 ${textSecondaryClass} hover:${textClass}`}
              >
                ✕
              </button>

              {/* Topic */}
              <h2 className="text-xl font-bold mb-4 pr-8 leading-tight">{selectedSlot.topic}</h2>

              {/* Pillar & Format */}
              <div className="flex items-center gap-2 mb-6">
                <span className={`px-3 py-1 rounded-lg text-sm font-medium bg-gradient-to-br ${pillars[selectedSlot.pillar].color} text-white`}>
                  {selectedSlot.pillar}
                </span>
                {React.createElement(formatIcons[selectedSlot.format], { size: 20, className: textSecondaryClass })}
                <span className={`text-sm ${textSecondaryClass}`}>{selectedSlot.format}</span>
              </div>

              {/* Details Grid */}
              <div className="space-y-4 mb-6">
                <DetailRow label="Hook Type" value={selectedSlot.hookType} darkMode={darkMode} />
                <DetailRow label="Format" value={selectedSlot.format} darkMode={darkMode} />
                <DetailRow label="CTA" value={selectedSlot.cta} darkMode={darkMode} />
                <DetailRow label="Expected Goal" value={selectedSlot.goal} darkMode={darkMode} />
                <DetailRow label="Duration Target" value={selectedSlot.duration} darkMode={darkMode} />
                <DetailRow label="Status" value={selectedSlot.status} darkMode={darkMode} />
              </div>

              {/* Priority Gauge */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs uppercase tracking-wider ${textSecondaryClass}`}>Priority Score</span>
                  <span className="text-2xl font-bold text-[#ff5722]">{selectedSlot.priority}/10</span>
                </div>
                <div className={`h-2 ${darkMode ? 'bg-[#07070b]' : 'bg-gray-200'} rounded-full overflow-hidden`}>
                  <div
                    className="h-full bg-gradient-to-r from-[#ff5722] to-orange-400 transition-all"
                    style={{ width: `${selectedSlot.priority * 10}%` }}
                  />
                </div>
              </div>

              {/* Hypothesis */}
              <div className={`${darkMode ? 'bg-[#07070b]' : 'bg-gray-100'} rounded-lg border ${borderClass} p-4 mb-6`}>
                <div className="text-xs uppercase tracking-wider text-[#ff5722] mb-2">AI Hypothesis</div>
                <p className={`text-sm ${textSecondaryClass} leading-relaxed`}>{selectedSlot.hypothesis}</p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full px-4 py-3 rounded-lg bg-green-500/20 border border-green-500 text-green-400 hover:bg-green-500/30 transition-all flex items-center justify-center gap-2 font-medium">
                  <IoCheckmarkCircle size={20} />
                  Approve Content
                </button>
                <button className="w-full px-4 py-3 rounded-lg bg-[#ff5722]/20 border border-[#ff5722] text-[#ff5722] hover:bg-[#ff5722]/30 transition-all flex items-center justify-center gap-2 font-medium">
                  <IoCreateOutline size={20} />
                  Modify Content
                </button>
                <button className="w-full px-4 py-3 rounded-lg bg-red-500/20 border border-red-500 text-red-400 hover:bg-red-500/30 transition-all flex items-center justify-center gap-2 font-medium">
                  <IoCloseCircle size={20} />
                  Reject Content
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const DetailRow = ({ label, value, darkMode }) => (
  <div className="flex items-center justify-between py-2 border-b border-current/10">
    <span className={`text-xs uppercase tracking-wider ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>{label}</span>
    <span className={`text-sm font-['JetBrains_Mono'] ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{value}</span>
  </div>
);

export default ContentDecisionEngine;
