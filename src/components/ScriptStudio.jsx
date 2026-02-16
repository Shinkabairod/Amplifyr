import React, { useState } from 'react';
import {
  IoCreateOutline,
  IoCheckmarkCircle,
  IoWarning,
  IoRefresh,
  IoTimeOutline,
  IoFilmOutline,
  IoStatsChart,
  IoDocumentTextOutline,
  IoGitBranchOutline,
  IoSparkles
} from 'react-icons/io5';

const ScriptStudio = () => {
  const [selectedScript, setSelectedScript] = useState(1);
  const [activeTab, setActiveTab] = useState('editor');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedHookVariant, setSelectedHookVariant] = useState(0);

  const scripts = [
    {
      id: 1,
      title: 'Why your content strategy is backwards',
      status: 'Approved',
      pillar: 'Authority',
      hookType: 'Contrarian',
      format: 'Video',
      duration: '45s',
      aiScore: 9.2,
      sections: [
        {
          name: 'HOOK',
          timing: '0-3s',
          color: 'from-red-500/10 to-red-500/5',
          script: "Everyone tells you to post daily. Here's why that's destroying your growth.",
          direction: '[Direct to camera, serious tone, slight lean forward]',
          broll: 'Screen recording of generic posting calendar',
          wordCount: 14,
          readingTime: '2.8s'
        },
        {
          name: 'TENSION',
          timing: '3-8s',
          color: 'from-yellow-500/10 to-yellow-500/5',
          script: "I spent $50K on content coaches and they all said the same thing: consistency is king. So I posted 3x a day for 6 months. The result? 147 followers.",
          direction: '[B-roll overlay, frustrated expression]',
          broll: 'Growth chart showing flat line, expense receipts',
          wordCount: 31,
          readingTime: '6.2s'
        },
        {
          name: 'VALUE',
          timing: '8-25s',
          color: 'from-blue-500/10 to-blue-500/5',
          script: "Then I found the real pattern. The top 1% of creators aren't posting more. They're posting strategically. 3 pieces per week, but each one is engineered for virality. Hook tested with AI. Structure optimized for retention. CTA designed for conversion. Quality over quantity isn't just a saying—it's the algorithm.",
          direction: '[Cut to screen recording, confident delivery, faster pace]',
          broll: 'Dashboard showing high engagement, competitor analysis screenshots',
          wordCount: 58,
          readingTime: '11.6s'
        },
        {
          name: 'CTA',
          timing: '25-30s',
          color: 'from-orange-500/10 to-orange-500/5',
          script: "Want the exact framework I use to engineer viral content? Link in bio. Or keep posting daily and wonder why nothing hits.",
          direction: '[Back to camera, direct eye contact, pause after question]',
          broll: 'CTA graphic overlay with arrow to bio',
          wordCount: 27,
          readingTime: '5.4s'
        }
      ],
      hookVariants: [
        { text: "Everyone tells you to post daily. Here's why that's destroying your growth.", score: 9.2, reason: 'Strong contrarian angle, creates immediate curiosity' },
        { text: "The content advice that bankrupted me (and why you're probably following it)", score: 8.7, reason: 'Personal story hook, but less punchy opening' },
        { text: "Stop posting daily. Do this instead.", score: 8.1, reason: 'Direct pattern interrupt, but lacks specificity' }
      ],
      aiReview: {
        overall: 9.2,
        hookStrength: 9.5,
        retentionTriggers: 9.0,
        ctaClarity: 8.8,
        toneMatch: 9.3,
        lengthOptimization: 9.2,
        suggestions: [
          'Hook is exceptionally strong—contrarian angle with immediate payoff',
          'Tension builds well with personal failure story, creates relatability',
          'Consider adding one more specific metric in VALUE section (e.g., "went from 147 to 45K in 90 days")',
          'CTA could be slightly softer—"wonder why nothing hits" may feel aggressive to some',
          'Overall pacing is excellent, estimated 94% retention based on structure'
        ],
        approved: true
      },
      captions: {
        instagram: {
          text: "Everyone says post daily. I did—and gained 147 followers in 6 months.\n\nThen I learned what top creators actually do:\n\n❌ Not more content\n✅ Strategic content\n\n3 posts/week. Each one engineered:\n• Hook tested with AI\n• Structure optimized for retention\n• CTA designed for conversion\n\nQuality > Quantity isn't a saying. It's the algorithm.\n\nFramework in bio 🔗",
          hashtags: '#ContentStrategy #CreatorEconomy #SocialMediaTips #ContentCreation #GrowthHacking',
          charCount: 287
        },
        tiktok: {
          text: "POV: You just learned why posting daily killed your growth 💀\n\nSpent $50K on coaches. Posted 3x/day for 6 months. Got 147 followers.\n\nThen discovered the top 1% secret: strategic > consistent\n\nFull breakdown in comments 👇",
          hashtags: '#ContentCreator #GrowthStrategy #ContentTips #CreatorTips #SocialMediaGrowth',
          charCount: 198
        },
        youtube: {
          text: "Why Your Content Strategy Is Backwards (And How To Fix It)\n\nIn this video, I break down why posting daily might be killing your growth—and reveal the strategic framework top creators use instead.\n\n🔗 Get the framework: [link]\n\nTimestamps:\n0:00 - The daily posting myth\n0:03 - My $50K mistake\n0:08 - What top 1% actually do\n0:25 - Get the framework",
          hashtags: '#ContentStrategy #CreatorEconomy #GrowthHacking',
          charCount: 312
        }
      },
      history: [
        { date: '2h ago', author: 'AI Engine', action: 'approved', note: 'Script approved with score 9.2/10' },
        { date: '2h ago', author: 'Sarah (Editor)', action: 'revised', note: 'Softened CTA language, added specific failure metric' },
        { date: '3h ago', author: 'AI Engine', action: 'generated', note: 'Initial draft generated from topic brief' },
        { date: '4h ago', author: 'System', action: 'created', note: 'Topic approved from Content Decision Engine' }
      ]
    },
    {
      id: 2,
      title: '5 brutal truths about building online',
      status: 'In Review',
      pillar: 'Education',
      hookType: 'List',
      format: 'Carousel',
      duration: '60s',
      aiScore: 7.8,
      sections: [],
      hookVariants: [],
      aiReview: { overall: 7.8, hookStrength: 8.2, retentionTriggers: 7.5, ctaClarity: 7.8, toneMatch: 8.0, lengthOptimization: 7.5, suggestions: [], approved: false },
      captions: {},
      history: []
    },
    {
      id: 3,
      title: 'Behind the scenes: My content process',
      status: 'AI Draft',
      pillar: 'Entertainment',
      hookType: 'BTS',
      format: 'Video',
      duration: '35s',
      aiScore: 6.9,
      sections: [],
      hookVariants: [],
      aiReview: { overall: 6.9, hookStrength: 7.0, retentionTriggers: 6.5, ctaClarity: 7.2, toneMatch: 7.1, lengthOptimization: 6.8, suggestions: [], approved: false },
      captions: {},
      history: []
    },
    {
      id: 4,
      title: 'How I went from 0 to 100K in 90 days',
      status: 'Needs Revision',
      pillar: 'Inspiration',
      hookType: 'Personal Story',
      format: 'Video',
      duration: '50s',
      aiScore: 7.2,
      sections: [],
      hookVariants: [],
      aiReview: { overall: 7.2, hookStrength: 8.5, retentionTriggers: 6.8, ctaClarity: 6.5, toneMatch: 7.5, lengthOptimization: 7.0, suggestions: [], approved: false },
      captions: {},
      history: []
    },
    {
      id: 5,
      title: 'The framework that changed everything',
      status: 'Approved',
      pillar: 'Education',
      hookType: 'How-To',
      format: 'Carousel',
      duration: '70s',
      aiScore: 8.9,
      sections: [],
      hookVariants: [],
      aiReview: { overall: 8.9, hookStrength: 9.1, retentionTriggers: 8.7, ctaClarity: 8.9, toneMatch: 9.0, lengthOptimization: 8.8, suggestions: [], approved: true },
      captions: {},
      history: []
    }
  ];

  const statusConfig = {
    'AI Draft': { bg: 'bg-gray-500/20', text: 'text-gray-400', border: 'border-gray-500/30', icon: IoSparkles },
    'In Review': { bg: 'bg-yellow-500/20', text: 'text-yellow-400', border: 'border-yellow-500/30', icon: IoWarning },
    'Approved': { bg: 'bg-green-500/20', text: 'text-green-400', border: 'border-green-500/30', icon: IoCheckmarkCircle },
    'Needs Revision': { bg: 'bg-red-500/20', text: 'text-red-400', border: 'border-red-500/30', icon: IoRefresh }
  };

  const pillarColors = {
    Authority: 'from-purple-500 to-purple-600',
    Education: 'from-blue-500 to-blue-600',
    Inspiration: 'from-pink-500 to-pink-600',
    Entertainment: 'from-orange-500 to-orange-600'
  };

  const getScoreColor = (score) => {
    if (score >= 9) return 'text-green-400';
    if (score >= 8) return 'text-blue-400';
    if (score >= 7) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreBarColor = (score) => {
    if (score >= 9) return 'from-green-500 to-green-600';
    if (score >= 8) return 'from-blue-500 to-blue-600';
    if (score >= 7) return 'from-yellow-500 to-yellow-600';
    return 'from-red-500 to-red-600';
  };

  const filteredScripts = filterStatus === 'all'
    ? scripts
    : scripts.filter(s => s.status === filterStatus);

  const currentScript = scripts.find(s => s.id === selectedScript);

  return (
    <div className="h-screen bg-[#08080d] text-white font-['DM_Sans'] flex overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=JetBrains+Mono:wght@400;500;600&display=swap');
        .font-mono { font-family: 'JetBrains Mono', monospace; }
      `}</style>

      {/* SIDEBAR */}
      <aside className="w-[260px] bg-[#0f0f17] border-r border-[#1a1a2e] flex flex-col">
        {/* Sidebar Header */}
        <div className="p-4 border-b border-[#1a1a2e]">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-gradient-to-br from-[#ff5722] to-orange-400">
              <IoCreateOutline size={20} className="text-white" />
            </div>
            <div>
              <h2 className="font-bold">Script Studio</h2>
              <div className="text-xs text-gray-500 font-mono">WF3</div>
            </div>
          </div>

          {/* Status Filters */}
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="w-full bg-[#08080d] border border-[#1a1a2e] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#ff5722]"
          >
            <option value="all">All Scripts</option>
            <option value="AI Draft">AI Draft</option>
            <option value="In Review">In Review</option>
            <option value="Approved">Approved</option>
            <option value="Needs Revision">Needs Revision</option>
          </select>
        </div>

        {/* Scripts List */}
        <div className="flex-1 overflow-y-auto p-2">
          {filteredScripts.map(script => {
            const StatusIcon = statusConfig[script.status].icon;
            return (
              <button
                key={script.id}
                onClick={() => setSelectedScript(script.id)}
                className={`w-full text-left p-3 rounded-lg mb-2 transition-all ${
                  selectedScript === script.id
                    ? 'bg-[#ff5722]/20 border border-[#ff5722]'
                    : 'bg-[#08080d] border border-[#1a1a2e] hover:border-[#ff5722]/50'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs font-mono text-gray-500">#{script.id}</span>
                  <span className={`text-xs font-bold font-mono ${getScoreColor(script.aiScore)}`}>
                    {script.aiScore}
                  </span>
                </div>

                <div className="text-sm font-medium mb-2 leading-tight line-clamp-2">
                  {script.title}
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2 py-0.5 rounded text-[10px] bg-gradient-to-br ${pillarColors[script.pillar]} text-white`}>
                    {script.pillar}
                  </span>
                  <span className="text-[10px] text-gray-500">{script.duration}</span>
                </div>

                <div className={`flex items-center gap-1 px-2 py-1 rounded text-[10px] ${statusConfig[script.status].bg} ${statusConfig[script.status].text} border ${statusConfig[script.status].border}`}>
                  <StatusIcon size={12} />
                  {script.status}
                </div>
              </button>
            );
          })}
        </div>
      </aside>

      {/* MAIN EDITOR */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Editor Header */}
        <header className="bg-[#0f0f17] border-b border-[#1a1a2e] p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h1 className="text-2xl font-bold mb-2">{currentScript.title}</h1>
              <div className="flex items-center gap-3 flex-wrap">
                <span className={`px-3 py-1 rounded-lg text-sm bg-gradient-to-br ${pillarColors[currentScript.pillar]} text-white`}>
                  {currentScript.pillar}
                </span>
                <span className="text-sm text-gray-400">{currentScript.hookType}</span>
                <span className="text-sm text-gray-400">•</span>
                <span className="text-sm text-gray-400">{currentScript.format}</span>
                <span className="text-sm text-gray-400">•</span>
                <span className="text-sm font-mono text-gray-400">{currentScript.duration}</span>
              </div>
            </div>
            {currentScript.aiReview.approved && (
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/20 border border-green-500/30 text-green-400">
                <IoCheckmarkCircle size={20} />
                <span className="text-sm font-medium">AI Approved</span>
              </div>
            )}
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mt-4">
            {[
              { id: 'editor', label: 'Script Editor', icon: IoCreateOutline },
              { id: 'captions', label: 'Captions', icon: IoDocumentTextOutline },
              { id: 'history', label: 'History', icon: IoGitBranchOutline }
            ].map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
                    activeTab === tab.id
                      ? 'bg-[#ff5722]/20 border-[#ff5722] text-white'
                      : 'bg-[#08080d] border-[#1a1a2e] text-gray-400 hover:border-gray-700'
                  }`}
                >
                  <Icon size={16} />
                  <span className="text-sm">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-hidden flex">
          {/* Main Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {/* TAB: SCRIPT EDITOR */}
            {activeTab === 'editor' && currentScript.sections.length > 0 && (
              <div className="max-w-4xl space-y-6">
                {/* Hook Variants */}
                <div className="bg-[#0f0f17] rounded-lg border border-[#1a1a2e] p-6">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Hook Variants</h3>
                  <div className="space-y-3">
                    {currentScript.hookVariants.map((variant, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedHookVariant(idx)}
                        className={`w-full text-left p-4 rounded-lg border transition-all ${
                          selectedHookVariant === idx
                            ? 'bg-[#ff5722]/10 border-[#ff5722]'
                            : 'bg-[#08080d] border-[#1a1a2e] hover:border-[#ff5722]/50'
                        }`}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <span className="font-mono text-sm flex-1">{variant.text}</span>
                          <span className={`text-sm font-bold font-mono ml-4 ${getScoreColor(variant.score)}`}>
                            {variant.score}
                          </span>
                        </div>
                        <div className="text-xs text-gray-500 italic">{variant.reason}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Script Sections */}
                {currentScript.sections.map((section, idx) => (
                  <div
                    key={idx}
                    className={`bg-gradient-to-br ${section.color} rounded-lg border border-[#1a1a2e] p-6`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <h3 className="text-sm font-bold uppercase tracking-wider">{section.name}</h3>
                        <span className="flex items-center gap-1 text-xs font-mono text-gray-400">
                          <IoTimeOutline size={14} />
                          {section.timing}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>{section.wordCount} words</span>
                        <span>~{section.readingTime}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <div className="text-xs uppercase tracking-wider text-gray-500 mb-2">Script</div>
                        <div className="font-mono text-sm leading-relaxed text-white">
                          {section.script}
                        </div>
                      </div>

                      <div>
                        <div className="text-xs uppercase tracking-wider text-gray-500 mb-2 flex items-center gap-2">
                          <IoFilmOutline size={14} />
                          Production Direction
                        </div>
                        <div className="font-mono text-sm italic text-gray-400">
                          {section.direction}
                        </div>
                      </div>

                      <div>
                        <div className="text-xs uppercase tracking-wider text-gray-500 mb-2">B-Roll Notes</div>
                        <div className="text-sm text-gray-400">
                          {section.broll}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'editor' && currentScript.sections.length === 0 && (
              <div className="flex items-center justify-center h-64 text-gray-500">
                <div className="text-center">
                  <IoCreateOutline size={48} className="mx-auto mb-4 opacity-30" />
                  <p>No script content available for this draft</p>
                </div>
              </div>
            )}

            {/* TAB: CAPTIONS */}
            {activeTab === 'captions' && currentScript.captions.instagram && (
              <div className="max-w-4xl space-y-6">
                {Object.entries(currentScript.captions).map(([platform, data]) => (
                  <div key={platform} className="bg-[#0f0f17] rounded-lg border border-[#1a1a2e] p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold capitalize">{platform}</h3>
                      <span className="text-xs font-mono text-gray-500">{data.charCount} chars</span>
                    </div>
                    <div className="font-mono text-sm leading-relaxed text-gray-300 mb-4 whitespace-pre-line">
                      {data.text}
                    </div>
                    <div className="pt-4 border-t border-[#1a1a2e]">
                      <div className="text-xs uppercase tracking-wider text-gray-500 mb-2">Hashtags</div>
                      <div className="text-sm text-blue-400">{data.hashtags}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'captions' && !currentScript.captions.instagram && (
              <div className="flex items-center justify-center h-64 text-gray-500">
                <div className="text-center">
                  <IoDocumentTextOutline size={48} className="mx-auto mb-4 opacity-30" />
                  <p>No captions available for this draft</p>
                </div>
              </div>
            )}

            {/* TAB: HISTORY */}
            {activeTab === 'history' && currentScript.history.length > 0 && (
              <div className="max-w-3xl">
                <div className="space-y-4">
                  {currentScript.history.map((entry, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          entry.action === 'approved' ? 'bg-green-500/20 text-green-400' :
                          entry.action === 'revised' ? 'bg-yellow-500/20 text-yellow-400' :
                          entry.action === 'generated' ? 'bg-blue-500/20 text-blue-400' :
                          'bg-gray-500/20 text-gray-400'
                        }`}>
                          {entry.action === 'approved' && <IoCheckmarkCircle size={16} />}
                          {entry.action === 'revised' && <IoCreateOutline size={16} />}
                          {entry.action === 'generated' && <IoSparkles size={16} />}
                          {entry.action === 'created' && <IoFilmOutline size={16} />}
                        </div>
                        {idx < currentScript.history.length - 1 && (
                          <div className="w-0.5 flex-1 bg-[#1a1a2e] my-2" style={{ minHeight: '20px' }} />
                        )}
                      </div>
                      <div className="flex-1 pb-4">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-sm font-medium">{entry.author}</span>
                          <span className="text-xs text-gray-500">{entry.date}</span>
                        </div>
                        <div className="text-sm text-gray-400">{entry.note}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'history' && currentScript.history.length === 0 && (
              <div className="flex items-center justify-center h-64 text-gray-500">
                <div className="text-center">
                  <IoGitBranchOutline size={48} className="mx-auto mb-4 opacity-30" />
                  <p>No history available</p>
                </div>
              </div>
            )}
          </div>

          {/* AI REVIEWER PANEL */}
          {activeTab === 'editor' && currentScript.sections.length > 0 && (
            <aside className="w-[360px] bg-[#0f0f17] border-l border-[#1a1a2e] p-6 overflow-y-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-br from-[#ff5722] to-orange-400">
                  <IoStatsChart size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold">AI Review</h3>
                  <div className="text-xs text-gray-500">Quality Analysis</div>
                </div>
              </div>

              {/* Overall Score */}
              <div className="bg-[#08080d] rounded-lg border border-[#1a1a2e] p-4 mb-6">
                <div className="text-xs uppercase tracking-wider text-gray-500 mb-2">Overall Score</div>
                <div className={`text-4xl font-bold font-mono mb-3 ${getScoreColor(currentScript.aiReview.overall)}`}>
                  {currentScript.aiReview.overall}/10
                </div>
                <div className="h-2 bg-[#0f0f17] rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${getScoreBarColor(currentScript.aiReview.overall)}`}
                    style={{ width: `${currentScript.aiReview.overall * 10}%` }}
                  />
                </div>
              </div>

              {/* Detailed Scores */}
              <div className="space-y-4 mb-6">
                {[
                  { label: 'Hook Strength', score: currentScript.aiReview.hookStrength },
                  { label: 'Retention Triggers', score: currentScript.aiReview.retentionTriggers },
                  { label: 'CTA Clarity', score: currentScript.aiReview.ctaClarity },
                  { label: 'Tone Match', score: currentScript.aiReview.toneMatch },
                  { label: 'Length Optimization', score: currentScript.aiReview.lengthOptimization }
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-400">{item.label}</span>
                      <span className={`text-sm font-bold font-mono ${getScoreColor(item.score)}`}>
                        {item.score}
                      </span>
                    </div>
                    <div className="h-1.5 bg-[#08080d] rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${getScoreBarColor(item.score)}`}
                        style={{ width: `${item.score * 10}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Suggestions */}
              <div className="bg-[#08080d] rounded-lg border border-[#1a1a2e] p-4">
                <div className="text-xs uppercase tracking-wider text-gray-500 mb-3">Suggestions</div>
                <ul className="space-y-2 text-sm text-gray-300">
                  {currentScript.aiReview.suggestions.map((suggestion, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-[#ff5722] mt-1">•</span>
                      <span className="flex-1">{suggestion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          )}
        </div>
      </main>
    </div>
  );
};

export default ScriptStudio;
