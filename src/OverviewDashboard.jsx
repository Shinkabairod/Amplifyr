import React, { useState } from 'react';
import {
  IoDocumentTextOutline,
  IoFlaskOutline,
  IoBulbOutline,
  IoCreateOutline,
  IoMicOutline,
  IoVideocamOutline,
  IoRocketOutline,
  IoStatsChartOutline,
  IoSyncOutline,
  IoArrowForward,
  IoChevronDown,
  IoChevronUp
} from 'react-icons/io5';

const OverviewDashboard = () => {
  const [expandedWorkflow, setExpandedWorkflow] = useState(null);
  const [clientCount, setClientCount] = useState(1);

  const workflows = [
    {
      id: 'WF0',
      name: 'Onboarding',
      icon: IoDocumentTextOutline,
      phase: 'Setup',
      phaseColor: 'yellow',
      nodes: 12,
      description: 'Client intake, goal alignment, workflow configuration',
      inputs: ['Client Form', 'Brand Assets'],
      outputs: ['Notion Database', 'Config JSON'],
      connects: ['WF1']
    },
    {
      id: 'WF1',
      name: 'Research Engine',
      icon: IoFlaskOutline,
      phase: 'Intelligence',
      phaseColor: 'purple',
      nodes: 15,
      description: 'Multi-source trend monitoring via Apify scrapers',
      inputs: ['Apify Instagram', 'Apify TikTok', 'Apify YouTube'],
      outputs: ['Trend Database', 'Topic List'],
      connects: ['WF2']
    },
    {
      id: 'WF2',
      name: 'Content Decisions',
      icon: IoBulbOutline,
      phase: 'Intelligence',
      phaseColor: 'purple',
      nodes: 8,
      description: 'Strategic content selection + approval workflow',
      inputs: ['Trend Data', 'Performance Insights (WF8)'],
      outputs: ['Approved Topics', 'Content Calendar'],
      connects: ['WF3']
    },
    {
      id: 'WF3',
      name: 'Script Studio',
      icon: IoCreateOutline,
      phase: 'Production',
      phaseColor: 'accent',
      nodes: 10,
      description: 'Claude API script generation with brand voice',
      inputs: ['Topic Brief', 'Brand Voice'],
      outputs: ['Final Script', 'Notion Page'],
      connects: ['WF4']
    },
    {
      id: 'WF4',
      name: 'Recording Hub',
      icon: IoMicOutline,
      phase: 'Production',
      phaseColor: 'accent',
      nodes: 6,
      description: 'Recording coordination and asset management',
      inputs: ['Script', 'Recording Schedule'],
      outputs: ['Raw Video/Audio', 'S3 URLs'],
      connects: ['WF5']
    },
    {
      id: 'WF5',
      name: 'Editing Engine',
      icon: IoVideocamOutline,
      phase: 'Production',
      phaseColor: 'accent',
      nodes: 11,
      description: 'Automated editing via Creatomate + Whisper transcription',
      inputs: ['Raw Media', 'Edit Template'],
      outputs: ['Final Video', 'Subtitles'],
      connects: ['WF6']
    },
    {
      id: 'WF6',
      name: 'Publishing Center',
      icon: IoRocketOutline,
      phase: 'Distribution',
      phaseColor: 'green',
      nodes: 9,
      description: 'Multi-platform scheduling and deployment',
      inputs: ['Final Video', 'Platform Specs'],
      outputs: ['Published Posts', 'Post IDs'],
      connects: ['WF7']
    },
    {
      id: 'WF7',
      name: 'Performance',
      icon: IoStatsChartOutline,
      phase: 'Analytics',
      phaseColor: 'blue',
      nodes: 7,
      description: 'Cross-platform metrics aggregation',
      inputs: ['Platform APIs', 'Post IDs'],
      outputs: ['Metrics Database', 'Dashboard Data'],
      connects: ['WF8']
    },
    {
      id: 'WF8',
      name: 'Optimization',
      icon: IoSyncOutline,
      phase: 'Analytics',
      phaseColor: 'blue',
      nodes: 5,
      description: 'Insight extraction and strategy refinement',
      inputs: ['Performance Data', 'Trend Data'],
      outputs: ['Insights Report', 'Strategy Updates'],
      connects: ['WF2']
    }
  ];

  const techStack = [
    { name: 'n8n', role: 'Workflow Orchestration', cost: 20, workflows: 'All' },
    { name: 'Claude API', role: 'Script Generation', cost: 50, workflows: 'WF3' },
    { name: 'Apify', role: 'Social Media Scraping', cost: 49, workflows: 'WF1' },
    { name: 'Notion API', role: 'Database & Collaboration', cost: 8, workflows: 'WF0, WF2, WF3' },
    { name: 'Whisper API', role: 'Transcription', cost: 15, workflows: 'WF5' },
    { name: 'Creatomate', role: 'Video Editing Automation', cost: 49, workflows: 'WF5' },
    { name: 'AWS S3', role: 'Media Storage', cost: 10, workflows: 'WF4, WF5' },
    { name: 'Instagram API', role: 'Publishing & Analytics', cost: 0, workflows: 'WF6, WF7' },
    { name: 'TikTok API', role: 'Publishing & Analytics', cost: 0, workflows: 'WF6, WF7' },
    { name: 'YouTube API', role: 'Publishing & Analytics', cost: 0, workflows: 'WF6, WF7' },
    { name: 'LinkedIn API', role: 'Publishing & Analytics', cost: 0, workflows: 'WF6, WF7' },
    { name: 'React Dashboard', role: 'User Interface', cost: 0, workflows: 'All' }
  ];

  const totalCost = techStack.reduce((sum, tech) => sum + tech.cost, 0) * clientCount;

  const phaseColors = {
    yellow: 'from-yellow-500 to-orange-500',
    purple: 'from-purple-500 to-pink-500',
    accent: 'from-[#ff5722] to-orange-600',
    green: 'from-green-500 to-emerald-500',
    blue: 'from-blue-500 to-cyan-500'
  };

  const phaseBorders = {
    yellow: 'border-yellow-500/30',
    purple: 'border-purple-500/30',
    accent: 'border-[#ff5722]/30',
    green: 'border-green-500/30',
    blue: 'border-blue-500/30'
  };

  const toggleWorkflow = (id) => {
    setExpandedWorkflow(expandedWorkflow === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#07070b] text-white font-['DM_Sans']">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff5722]/10 via-transparent to-purple-500/10" />
        <div className="relative max-w-7xl mx-auto px-8 py-24 text-center">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-[#ff5722] via-orange-400 to-yellow-500 bg-clip-text text-transparent">
            Content Growth Engine
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            9 n8n workflows powered by Apify scrapers forming an autonomous content growth flywheel
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {[
              { label: 'Workflows', value: '9' },
              { label: 'Nodes', value: '70+' },
              { label: 'Apify Actors', value: '15' },
              { label: 'Platforms', value: '4' },
              { label: 'Full Cycle', value: '7d' }
            ].map((stat, i) => (
              <div key={i} className="bg-[#0e0e16] rounded-lg p-4 border border-gray-800">
                <div className="text-3xl font-bold text-[#ff5722]">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW PIPELINE */}
      <section className="max-w-7xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">Workflow Pipeline</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {workflows.map((wf, idx) => {
            const Icon = wf.icon;
            const isExpanded = expandedWorkflow === wf.id;
            const isFlywheel = wf.id === 'WF8';

            return (
              <div key={wf.id} className="relative">
                {/* Workflow Card */}
                <div
                  onClick={() => toggleWorkflow(wf.id)}
                  className={`bg-[#0e0e16] rounded-lg border-2 ${phaseBorders[wf.phaseColor]} p-6 cursor-pointer hover:border-opacity-100 transition-all ${
                    isExpanded ? 'ring-2 ring-[#ff5722]' : ''
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${phaseColors[wf.phaseColor]}`}>
                        <Icon size={24} className="text-white" />
                      </div>
                      <div>
                        <div className="font-['JetBrains_Mono'] text-xs text-gray-500">{wf.id}</div>
                        <div className="font-bold">{wf.name}</div>
                      </div>
                    </div>
                    {isExpanded ? <IoChevronUp size={20} /> : <IoChevronDown size={20} />}
                  </div>

                  <div className="text-xs text-gray-400 mb-3">{wf.description}</div>

                  <div className="flex items-center justify-between text-xs">
                    <span className={`px-2 py-1 rounded bg-gradient-to-r ${phaseColors[wf.phaseColor]} text-white font-medium`}>
                      {wf.phase}
                    </span>
                    <span className="text-gray-500">{wf.nodes} nodes</span>
                  </div>

                  {/* Expanded Details */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-gray-800 space-y-3">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">INPUTS</div>
                        {wf.inputs.map((input, i) => (
                          <div key={i} className="text-xs text-gray-300 font-['JetBrains_Mono'] mb-1">
                            → {input}
                          </div>
                        ))}
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">OUTPUTS</div>
                        {wf.outputs.map((output, i) => (
                          <div key={i} className="text-xs text-gray-300 font-['JetBrains_Mono'] mb-1">
                            ← {output}
                          </div>
                        ))}
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">CONNECTS TO</div>
                        <div className="text-xs text-[#ff5722] font-['JetBrains_Mono']">
                          {wf.connects.join(', ')}
                          {isFlywheel && ' (Flywheel)'}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Connection Arrow */}
                {idx < workflows.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 translate-x-full">
                    <IoArrowForward className="text-gray-700" size={20} />
                  </div>
                )}

                {/* Flywheel Connection */}
                {isFlywheel && (
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                    <div className="text-xs text-[#ff5722] font-['JetBrains_Mono'] flex items-center gap-1">
                      <IoSyncOutline size={16} />
                      Flywheel → WF2
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* TECH STACK */}
      <section className="max-w-7xl mx-auto px-8 py-16 border-t border-gray-800">
        <h2 className="text-3xl font-bold mb-8">Tech Stack</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {techStack.map((tech, i) => (
            <div key={i} className="bg-[#0e0e16] rounded-lg border border-gray-800 p-4 hover:border-gray-700 transition-colors">
              <div className="font-bold text-lg mb-1">{tech.name}</div>
              <div className="text-xs text-gray-400 mb-3">{tech.role}</div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500 font-['JetBrains_Mono']">{tech.workflows}</span>
                <span className="text-[#ff5722] font-bold">
                  {tech.cost > 0 ? `$${tech.cost}/mo` : 'Free'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COST ESTIMATOR */}
      <section className="max-w-7xl mx-auto px-8 py-16 border-t border-gray-800">
        <h2 className="text-3xl font-bold mb-8">Cost Estimator</h2>

        <div className="bg-[#0e0e16] rounded-lg border border-gray-800 p-8">
          <div className="flex items-center justify-between mb-6">
            <label className="text-sm text-gray-400">Number of Clients</label>
            <select
              value={clientCount}
              onChange={(e) => setClientCount(Number(e.target.value))}
              className="bg-[#07070b] border border-gray-700 rounded px-4 py-2 text-sm focus:outline-none focus:border-[#ff5722]"
            >
              {[1, 3, 5, 10, 20].map(n => (
                <option key={n} value={n}>{n} {n === 1 ? 'Client' : 'Clients'}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2 mb-6">
            {techStack.filter(t => t.cost > 0).map((tech, i) => (
              <div key={i} className="flex items-center justify-between text-sm py-2 border-b border-gray-800">
                <span className="text-gray-300">{tech.name}</span>
                <span className="font-['JetBrains_Mono'] text-gray-400">
                  ${tech.cost} × {clientCount} = ${tech.cost * clientCount}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t-2 border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-bold">Total Monthly Cost</span>
              <span className="text-3xl font-bold bg-gradient-to-r from-[#ff5722] to-orange-400 bg-clip-text text-transparent">
                ${totalCost}
              </span>
            </div>
            <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#ff5722] to-orange-400 transition-all duration-500"
                style={{ width: `${Math.min((totalCost / 500) * 100, 100)}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE DIAGRAM */}
      <section className="max-w-7xl mx-auto px-8 py-16 border-t border-gray-800">
        <h2 className="text-3xl font-bold mb-8">Architecture</h2>

        <pre className="bg-[#0e0e16] rounded-lg border border-gray-800 p-6 text-xs font-['JetBrains_Mono'] text-gray-300 overflow-x-auto">
{`┌─────────────────────────────────────────────────────────────────────┐
│                         REACT DASHBOARD                             │
│                    (User Interface & Control)                       │
└──────────────────────────┬──────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────────────┐
│                         n8n ENGINE                                  │
│                    (Workflow Orchestration)                         │
│                                                                     │
│  WF0 ──► WF1 ──► WF2 ──► WF3 ──► WF4 ──► WF5 ──► WF6 ──► WF7 ──► WF8  │
│           ▲                                                  │      │
│           └──────────────────────────────────────────────────┘      │
│                        (Flywheel Loop)                              │
└────┬──────────┬──────────┬──────────┬──────────┬────────────┬──────┘
     │          │          │          │          │            │
     ▼          ▼          ▼          ▼          ▼            ▼
┌─────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌─────────┐ ┌──────────┐
│ Apify   │ │ Claude │ │ Notion │ │Whisper │ │Creatomate│ │Platform  │
│Scrapers │ │  API   │ │  API   │ │  API   │ │   API    │ │  APIs    │
├─────────┤ ├────────┤ ├────────┤ ├────────┤ ├─────────┤ ├──────────┤
│Instagram│ │Script  │ │Database│ │Transcr.│ │Video Edit│ │Instagram │
│TikTok   │ │Gen.    │ │Collab  │ │        │ │          │ │TikTok    │
│YouTube  │ │        │ │        │ │        │ │          │ │YouTube   │
│LinkedIn │ │        │ │        │ │        │ │          │ │LinkedIn  │
└─────────┘ └────────┘ └────────┘ └────────┘ └─────────┘ └──────────┘
                                      │
                                      ▼
                              ┌──────────────┐
                              │   AWS S3     │
                              │Media Storage │
                              └──────────────┘`}
        </pre>
      </section>

      {/* QUICK ACTIONS */}
      <section className="max-w-7xl mx-auto px-8 py-16 border-t border-gray-800">
        <h2 className="text-3xl font-bold mb-8">Quick Actions</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Go to Onboarding', wf: 'WF0', color: 'yellow' },
            { label: 'Open Research', wf: 'WF1', color: 'purple' },
            { label: 'View Decisions', wf: 'WF2', color: 'purple' },
            { label: 'Script Studio', wf: 'WF3', color: 'accent' },
            { label: 'Recording Hub', wf: 'WF4', color: 'accent' },
            { label: 'Editing Engine', wf: 'WF5', color: 'accent' },
            { label: 'Publishing Center', wf: 'WF6', color: 'green' },
            { label: 'View Analytics', wf: 'WF7', color: 'blue' }
          ].map((action, i) => (
            <button
              key={i}
              className={`bg-gradient-to-br ${phaseColors[action.color]} text-white font-medium py-4 px-6 rounded-lg hover:shadow-lg hover:scale-105 transition-all`}
            >
              {action.label}
              <div className="text-xs opacity-75 mt-1 font-['JetBrains_Mono']">{action.wf}</div>
            </button>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-8 text-center text-sm text-gray-500">
          Content Growth Engine v1.0 · Powered by n8n, Apify & Claude AI
        </div>
      </footer>
    </div>
  );
};

export default OverviewDashboard;
