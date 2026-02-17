import React, { useState } from 'react';
import {
  IoPlayCircle,
  IoCheckmarkCircle,
  IoWarning,
  IoCloudUpload,
  IoDownload,
  IoChevronDown,
  IoChevronUp,
  IoTime,
  IoFilmOutline,
  IoChatbubbleOutline,
  IoDocumentTextOutline,
  IoVideocamOutline,
  IoPersonCircle,
  IoAlertCircle
} from 'react-icons/io5';

const ProductionHub = () => {
  const [selectedScript, setSelectedScript] = useState(1);
  const [activeTab, setActiveTab] = useState('scenes');
  const [currentRole, setCurrentRole] = useState('Admin');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showCorrectionModal, setShowCorrectionModal] = useState(false);
  const [expandedCorrection, setExpandedCorrection] = useState(null);

  const roles = ['Admin', 'Copywriter', 'Client', 'Editor'];

  const scripts = [
    {
      id: 1,
      title: 'Why your content strategy is backwards',
      status: 'Review',
      phase: 'Editing',
      dueDate: 'Today',
      priority: 'High',
      recordedDate: '2h ago',
      duration: '45s',
      versions: [
        {
          id: 'V3',
          date: '1h ago',
          status: 'In Review',
          editor: 'Mike',
          formats: [
            { name: '9:16 (Reels/TikTok)', status: 'Complete', url: '#' },
            { name: '1:1 (Feed)', status: 'Complete', url: '#' },
            { name: '16:9 (YouTube)', status: 'Rendering', progress: 78 }
          ],
          editingChecklist: [
            { item: 'Captions added', checked: true },
            { item: 'B-roll inserted', checked: true },
            { item: 'Transitions', checked: true },
            { item: 'Lower-third', checked: true },
            { item: 'CTA card', checked: false },
            { item: 'Audio balanced', checked: true }
          ],
          qaCheck: {
            score: 87,
            flags: [
              { type: 'warning', message: 'CTA card missing in final 3 seconds' },
              { type: 'info', message: 'Hook delivery slightly slower than script (3.2s vs 2.8s)' }
            ],
            transcriptMatch: 94
          }
        },
        {
          id: 'V2',
          date: '1d ago',
          status: 'Needs Correction',
          editor: 'Mike',
          formats: [],
          editingChecklist: [],
          qaCheck: { score: 72, flags: [], transcriptMatch: 89 }
        },
        {
          id: 'V1',
          date: '2d ago',
          status: 'Rejected',
          editor: 'Sarah',
          formats: [],
          editingChecklist: [],
          qaCheck: { score: 65, flags: [], transcriptMatch: 82 }
        }
      ],
      corrections: [
        {
          id: 1,
          date: '6h ago',
          author: 'Client',
          type: 'video',
          note: 'The B-roll in the tension section doesn\'t match the message. Need more contrast between "before" and "after" state.',
          timestamps: ['0:05', '0:12'],
          status: 'Resolved',
          videoUrl: '#'
        },
        {
          id: 2,
          date: '1d ago',
          author: 'Admin',
          type: 'text',
          note: 'CTA card needs to appear at 0:27, not 0:30. Also increase font size by 20%.',
          timestamps: ['0:27'],
          status: 'In Progress',
          videoUrl: null
        }
      ],
      scenes: [
        { name: 'Hook', timing: '0:00-0:03', status: 'Approved', takes: 2 },
        { name: 'Tension', timing: '0:03-0:08', status: 'Approved', takes: 1 },
        { name: 'Value', timing: '0:08-0:25', status: 'Needs Retake', takes: 3 },
        { name: 'CTA', timing: '0:25-0:30', status: 'Approved', takes: 1 }
      ],
      script: {
        hook: "Everyone tells you to post daily. Here's why that's destroying your growth.",
        tension: "I spent $50K on content coaches and they all said the same thing: consistency is king. So I posted 3x a day for 6 months. The result? 147 followers.",
        value: "Then I found the real pattern. The top 1% of creators aren't posting more. They're posting strategically. 3 pieces per week, but each one is engineered for virality.",
        cta: "Want the exact framework? Link in bio."
      },
      caption: "Everyone says post daily. I did—and gained 147 followers in 6 months.\n\nThen I learned what top creators actually do:\n\n❌ Not more content\n✅ Strategic content\n\n3 posts/week. Each one engineered for virality.\n\nFramework in bio 🔗\n\n#ContentStrategy #CreatorEconomy #GrowthHacking"
    },
    {
      id: 2,
      title: '5 brutal truths about building online',
      status: 'Recording',
      phase: 'Recording',
      dueDate: 'Tomorrow',
      priority: 'Medium',
      recordedDate: null,
      duration: '60s',
      versions: [],
      corrections: [],
      scenes: [
        { name: 'Hook', timing: '0:00-0:04', status: 'Not Started', takes: 0 },
        { name: 'Truth 1', timing: '0:04-0:12', status: 'Not Started', takes: 0 },
        { name: 'Truth 2', timing: '0:12-0:20', status: 'Not Started', takes: 0 },
        { name: 'Truth 3', timing: '0:20-0:28', status: 'Not Started', takes: 0 },
        { name: 'Truth 4', timing: '0:28-0:36', status: 'Not Started', takes: 0 },
        { name: 'Truth 5', timing: '0:36-0:44', status: 'Not Started', takes: 0 },
        { name: 'CTA', timing: '0:44-0:50', status: 'Not Started', takes: 0 }
      ],
      script: {},
      caption: ''
    },
    {
      id: 3,
      title: 'Behind the scenes: My content process',
      status: 'Approved',
      phase: 'Complete',
      dueDate: 'Published',
      priority: 'Low',
      recordedDate: '3d ago',
      duration: '35s',
      versions: [
        {
          id: 'V2',
          date: '2d ago',
          status: 'Approved',
          editor: 'Sarah',
          formats: [
            { name: '9:16 (Reels/TikTok)', status: 'Complete', url: '#' },
            { name: '1:1 (Feed)', status: 'Complete', url: '#' },
            { name: '16:9 (YouTube)', status: 'Complete', url: '#' }
          ],
          editingChecklist: [
            { item: 'Captions added', checked: true },
            { item: 'B-roll inserted', checked: true },
            { item: 'Transitions', checked: true },
            { item: 'Lower-third', checked: true },
            { item: 'CTA card', checked: true },
            { item: 'Audio balanced', checked: true }
          ],
          qaCheck: {
            score: 96,
            flags: [],
            transcriptMatch: 98
          }
        }
      ],
      corrections: [],
      scenes: [],
      script: {},
      caption: ''
    },
    {
      id: 4,
      title: 'How I went from 0 to 100K in 90 days',
      status: 'Editing',
      phase: 'Editing',
      dueDate: 'In 2 days',
      priority: 'High',
      recordedDate: '1d ago',
      duration: '50s',
      versions: [
        {
          id: 'V1',
          date: '4h ago',
          status: 'In Progress',
          editor: 'Mike',
          formats: [
            { name: '9:16 (Reels/TikTok)', status: 'Rendering', progress: 45 },
            { name: '1:1 (Feed)', status: 'Queued', progress: 0 },
            { name: '16:9 (YouTube)', status: 'Queued', progress: 0 }
          ],
          editingChecklist: [
            { item: 'Captions added', checked: true },
            { item: 'B-roll inserted', checked: true },
            { item: 'Transitions', checked: false },
            { item: 'Lower-third', checked: false },
            { item: 'CTA card', checked: false },
            { item: 'Audio balanced', checked: true }
          ],
          qaCheck: {
            score: 0,
            flags: [],
            transcriptMatch: 0
          }
        }
      ],
      corrections: [],
      scenes: [],
      script: {},
      caption: ''
    },
    {
      id: 5,
      title: 'The framework that changed everything',
      status: 'Script Ready',
      phase: 'Pre-Production',
      dueDate: 'In 3 days',
      priority: 'Medium',
      recordedDate: null,
      duration: '70s',
      versions: [],
      corrections: [],
      scenes: [],
      script: {},
      caption: ''
    }
  ];

  const phaseColors = {
    'Pre-Production': 'bg-gray-100 text-gray-700 border-gray-300',
    'Recording': 'bg-yellow-100 text-yellow-700 border-yellow-300',
    'Editing': 'bg-blue-100 text-blue-700 border-blue-300',
    'Review': 'bg-purple-100 text-purple-700 border-purple-300',
    'Complete': 'bg-green-100 text-green-700 border-green-300'
  };

  const statusColors = {
    'Not Started': 'bg-gray-100 text-gray-600',
    'Approved': 'bg-green-100 text-green-700',
    'Needs Retake': 'bg-red-100 text-red-700',
    'In Progress': 'bg-blue-100 text-blue-700',
    'In Review': 'bg-purple-100 text-purple-700',
    'Needs Correction': 'bg-orange-100 text-orange-700',
    'Rejected': 'bg-red-100 text-red-700',
    'Complete': 'bg-green-100 text-green-700',
    'Rendering': 'bg-blue-100 text-blue-700',
    'Queued': 'bg-gray-100 text-gray-600',
    'Error': 'bg-red-100 text-red-700'
  };

  const currentScript = scripts.find(s => s.id === selectedScript);
  const currentVersion = currentScript.versions[0];

  const getEditingProgress = (checklist) => {
    if (!checklist || checklist.length === 0) return 0;
    const checked = checklist.filter(item => item.checked).length;
    return Math.round((checked / checklist.length) * 100);
  };

  const getQAScoreColor = (score) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 75) return 'text-blue-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="h-screen bg-[#f8f8f6] text-gray-900 font-['Instrument_Sans'] flex overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap');
        .font-mono { font-family: 'IBM Plex Mono', monospace; }
      `}</style>

      {/* SIDEBAR */}
      <aside className="w-[320px] bg-white border-r border-[#e8e6e1] flex flex-col">
        {/* Sidebar Header */}
        <div className="p-6 border-b border-[#e8e6e1]">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-gradient-to-br from-[#ff5722] to-orange-400">
              <IoVideocamOutline size={24} className="text-white" />
            </div>
            <div>
              <h2 className="font-bold text-lg">Production Hub</h2>
              <div className="text-xs text-gray-500 font-mono">WF4 + WF5</div>
            </div>
          </div>

          {/* Role Switcher */}
          <select
            value={currentRole}
            onChange={(e) => setCurrentRole(e.target.value)}
            className="w-full bg-[#f8f8f6] border border-[#e8e6e1] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ff5722]"
          >
            {roles.map(role => (
              <option key={role} value={role}>{role}</option>
            ))}
          </select>
        </div>

        {/* Scripts Pipeline */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="text-xs uppercase tracking-wider text-gray-500 mb-3 px-2">Pipeline</div>
          {scripts.map(script => (
            <button
              key={script.id}
              onClick={() => setSelectedScript(script.id)}
              className={`w-full text-left p-4 rounded-lg mb-2 transition-all border ${
                selectedScript === script.id
                  ? 'bg-[#ff5722]/5 border-[#ff5722] shadow-sm'
                  : 'bg-white border-[#e8e6e1] hover:border-[#ff5722]/50'
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <span className="text-xs font-mono text-gray-500">#{script.id}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${phaseColors[script.phase]} border`}>
                  {script.phase}
                </span>
              </div>

              <div className="text-sm font-semibold mb-2 leading-tight">
                {script.title}
              </div>

              <div className="flex items-center justify-between text-xs text-gray-600">
                <div className="flex items-center gap-1">
                  <IoTime size={12} />
                  <span>{script.dueDate}</span>
                </div>
                <span className="font-mono">{script.duration}</span>
              </div>

              {script.versions.length > 0 && (
                <div className="mt-2 text-xs text-gray-500">
                  {script.versions.length} version{script.versions.length > 1 ? 's' : ''}
                </div>
              )}
            </button>
          ))}
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-[#e8e6e1] p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold mb-2">{currentScript.title}</h1>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <span className={`px-3 py-1 rounded-lg font-medium ${phaseColors[currentScript.phase]} border`}>
                  {currentScript.phase}
                </span>
                <span>•</span>
                <span className="font-mono">{currentScript.duration}</span>
                {currentScript.recordedDate && (
                  <>
                    <span>•</span>
                    <span>Recorded {currentScript.recordedDate}</span>
                  </>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2">
              {currentRole === 'Editor' && currentScript.phase === 'Recording' && (
                <button
                  onClick={() => setShowUploadModal(true)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#ff5722] text-white hover:bg-[#ff5722]/90 transition-all"
                >
                  <IoCloudUpload size={18} />
                  Upload Raw Footage
                </button>
              )}
              {(currentRole === 'Admin' || currentRole === 'Client') && currentVersion && (
                <button
                  onClick={() => setShowCorrectionModal(true)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#e8e6e1] hover:border-[#ff5722] transition-all"
                >
                  <IoChatbubbleOutline size={18} />
                  Request Correction
                </button>
              )}
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-2">
            {[
              { id: 'scenes', label: 'Scenes', icon: IoFilmOutline },
              { id: 'script', label: 'Script', icon: IoDocumentTextOutline },
              { id: 'versions', label: 'Video Versions', icon: IoVideocamOutline, count: currentScript.versions.length },
              { id: 'caption', label: 'Caption', icon: IoChatbubbleOutline }
            ].map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
                    activeTab === tab.id
                      ? 'bg-[#ff5722] text-white border-[#ff5722]'
                      : 'bg-white border-[#e8e6e1] text-gray-700 hover:border-[#ff5722]'
                  }`}
                >
                  <Icon size={16} />
                  <span className="text-sm font-medium">{tab.label}</span>
                  {tab.count > 0 && (
                    <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                      activeTab === tab.id ? 'bg-white text-[#ff5722]' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {tab.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* TAB: SCENES */}
          {activeTab === 'scenes' && (
            <div className="max-w-5xl">
              {currentScript.scenes.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentScript.scenes.map((scene, idx) => (
                    <div key={idx} className="bg-white rounded-lg border border-[#e8e6e1] p-6 hover:border-[#ff5722]/50 transition-all">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{scene.name}</h3>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <IoTime size={14} />
                            <span className="font-mono">{scene.timing}</span>
                          </div>
                        </div>
                        <span className={`text-xs px-3 py-1 rounded-full font-medium ${statusColors[scene.status]}`}>
                          {scene.status}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600">
                        Takes: <span className="font-mono font-semibold">{scene.takes}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex items-center justify-center h-64 text-gray-400">
                  <div className="text-center">
                    <IoFilmOutline size={48} className="mx-auto mb-4 opacity-30" />
                    <p>No scenes data available</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB: SCRIPT */}
          {activeTab === 'script' && (
            <div className="max-w-4xl">
              {currentScript.script.hook ? (
                <div className="space-y-6">
                  {Object.entries(currentScript.script).map(([section, text]) => (
                    <div key={section} className="bg-white rounded-lg border border-[#e8e6e1] p-6">
                      <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">{section}</h3>
                      <p className="font-mono text-sm leading-relaxed text-gray-800">{text}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex items-center justify-center h-64 text-gray-400">
                  <div className="text-center">
                    <IoDocumentTextOutline size={48} className="mx-auto mb-4 opacity-30" />
                    <p>No script available</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB: VIDEO VERSIONS */}
          {activeTab === 'versions' && (
            <div className="max-w-6xl space-y-6">
              {currentScript.versions.length > 0 ? (
                currentScript.versions.map(version => (
                  <div key={version.id} className="bg-white rounded-lg border border-[#e8e6e1] p-6">
                    {/* Version Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold">{version.id}</h3>
                          <span className={`text-xs px-3 py-1 rounded-full font-medium ${statusColors[version.status]}`}>
                            {version.status}
                          </span>
                        </div>
                        <div className="text-sm text-gray-600">
                          Edited by {version.editor} • {version.date}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Video Player Placeholder */}
                      <div>
                        <div className="bg-gray-100 rounded-lg aspect-[9/16] max-w-[300px] mx-auto relative overflow-hidden border border-[#e8e6e1] flex items-center justify-center">
                          <button className="text-[#ff5722] hover:scale-110 transition-transform">
                            <IoPlayCircle size={64} />
                          </button>
                          <div className="absolute top-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded font-mono">
                            {version.id}
                          </div>
                          <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded font-mono">
                            0:00 / {currentScript.duration}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        {/* Editing Checklist */}
                        {version.editingChecklist.length > 0 && (
                          <div>
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-700">Editing Checklist</h4>
                              <span className="text-sm font-mono text-[#ff5722] font-semibold">
                                {getEditingProgress(version.editingChecklist)}%
                              </span>
                            </div>
                            <div className="space-y-2">
                              {version.editingChecklist.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                                    item.checked ? 'bg-green-500 border-green-500' : 'bg-white border-gray-300'
                                  }`}>
                                    {item.checked && <IoCheckmarkCircle size={14} className="text-white" />}
                                  </div>
                                  <span className={`text-sm ${item.checked ? 'text-gray-600' : 'text-gray-900'}`}>
                                    {item.item}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* QA Check */}
                        {version.qaCheck.score > 0 && (
                          <div className="bg-[#f8f8f6] rounded-lg border border-[#e8e6e1] p-4">
                            <div className="flex items-center gap-2 mb-3">
                              <IoAlertCircle size={18} className="text-[#ff5722]" />
                              <h4 className="font-semibold text-sm uppercase tracking-wider">AI QA Check</h4>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-4">
                              <div>
                                <div className="text-xs text-gray-600 mb-1">Conformity Score</div>
                                <div className={`text-2xl font-bold font-mono ${getQAScoreColor(version.qaCheck.score)}`}>
                                  {version.qaCheck.score}/100
                                </div>
                              </div>
                              <div>
                                <div className="text-xs text-gray-600 mb-1">Transcript Match</div>
                                <div className="text-2xl font-bold font-mono text-blue-600">
                                  {version.qaCheck.transcriptMatch}%
                                </div>
                              </div>
                            </div>

                            {version.qaCheck.flags.length > 0 && (
                              <div className="space-y-2">
                                {version.qaCheck.flags.map((flag, idx) => (
                                  <div key={idx} className={`flex items-start gap-2 text-xs p-2 rounded ${
                                    flag.type === 'warning' ? 'bg-yellow-50 text-yellow-800' : 'bg-blue-50 text-blue-800'
                                  }`}>
                                    {flag.type === 'warning' ? <IoWarning size={14} /> : <IoAlertCircle size={14} />}
                                    <span className="flex-1">{flag.message}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Multi-Format Export */}
                    {version.formats.length > 0 && (
                      <div className="mt-6 pt-6 border-t border-[#e8e6e1]">
                        <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-700 mb-4">Export Formats</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {version.formats.map((format, idx) => (
                            <div key={idx} className="bg-[#f8f8f6] rounded-lg border border-[#e8e6e1] p-4">
                              <div className="flex items-start justify-between mb-3">
                                <div className="font-mono text-sm font-semibold">{format.name}</div>
                                <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${statusColors[format.status]}`}>
                                  {format.status}
                                </span>
                              </div>

                              {format.status === 'Rendering' && (
                                <div>
                                  <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                                    <span>Progress</span>
                                    <span className="font-mono">{format.progress}%</span>
                                  </div>
                                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div
                                      className="h-full bg-gradient-to-r from-[#ff5722] to-orange-400 transition-all"
                                      style={{ width: `${format.progress}%` }}
                                    />
                                  </div>
                                </div>
                              )}

                              {format.status === 'Complete' && (
                                <button className="flex items-center gap-2 w-full justify-center px-3 py-2 rounded-lg bg-white border border-[#e8e6e1] hover:border-[#ff5722] transition-all text-sm">
                                  <IoDownload size={16} />
                                  Download
                                </button>
                              )}

                              {format.status === 'Queued' && (
                                <div className="text-xs text-gray-500 text-center py-2">
                                  Waiting in queue...
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="flex items-center justify-center h-64 text-gray-400">
                  <div className="text-center">
                    <IoVideocamOutline size={48} className="mx-auto mb-4 opacity-30" />
                    <p>No video versions yet</p>
                  </div>
                </div>
              )}

              {/* Corrections Timeline */}
              {currentScript.corrections.length > 0 && (
                <div className="bg-white rounded-lg border border-[#e8e6e1] p-6">
                  <h3 className="font-semibold text-lg mb-6">Correction Requests</h3>
                  <div className="space-y-4">
                    {currentScript.corrections.map(correction => (
                      <div key={correction.id} className="border border-[#e8e6e1] rounded-lg">
                        <button
                          onClick={() => setExpandedCorrection(expandedCorrection === correction.id ? null : correction.id)}
                          className="w-full p-4 flex items-start justify-between hover:bg-[#f8f8f6] transition-colors"
                        >
                          <div className="flex items-start gap-3 flex-1 text-left">
                            <IoPersonCircle size={24} className="text-gray-400 mt-1" />
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-1">
                                <span className="font-semibold text-sm">{correction.author}</span>
                                <span className="text-xs text-gray-500">{correction.date}</span>
                                <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                                  correction.status === 'Resolved' ? statusColors['Complete'] :
                                  correction.status === 'In Progress' ? statusColors['In Progress'] :
                                  statusColors['Queued']
                                }`}>
                                  {correction.status}
                                </span>
                              </div>
                              <p className="text-sm text-gray-700">{correction.note}</p>
                              {correction.timestamps.length > 0 && (
                                <div className="flex items-center gap-2 mt-2">
                                  <IoTime size={14} className="text-gray-400" />
                                  <div className="flex gap-2">
                                    {correction.timestamps.map((time, idx) => (
                                      <span key={idx} className="text-xs font-mono bg-gray-100 px-2 py-0.5 rounded">
                                        {time}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                          {expandedCorrection === correction.id ? <IoChevronUp size={20} /> : <IoChevronDown size={20} />}
                        </button>

                        {expandedCorrection === correction.id && correction.type === 'video' && (
                          <div className="p-4 pt-0 border-t border-[#e8e6e1]">
                            <div className="bg-gray-100 rounded-lg aspect-video max-w-md flex items-center justify-center">
                              <button className="text-[#ff5722] hover:scale-110 transition-transform">
                                <IoPlayCircle size={48} />
                              </button>
                            </div>
                            <p className="text-xs text-gray-500 mt-2">Correction video from {correction.author}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB: CAPTION */}
          {activeTab === 'caption' && (
            <div className="max-w-3xl">
              {currentScript.caption ? (
                <div className="bg-white rounded-lg border border-[#e8e6e1] p-6">
                  <h3 className="font-semibold text-lg mb-4">Caption</h3>
                  <div className="font-mono text-sm leading-relaxed text-gray-800 whitespace-pre-line">
                    {currentScript.caption}
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-64 text-gray-400">
                  <div className="text-center">
                    <IoChatbubbleOutline size={48} className="mx-auto mb-4 opacity-30" />
                    <p>No caption available</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      {/* UPLOAD MODAL */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-lg max-w-2xl w-full p-8">
            <h2 className="text-2xl font-bold mb-6">Upload Raw Footage</h2>

            <div className="border-2 border-dashed border-[#e8e6e1] rounded-lg p-12 text-center mb-6 hover:border-[#ff5722] transition-colors cursor-pointer">
              <IoCloudUpload size={48} className="mx-auto mb-4 text-gray-400" />
              <p className="text-gray-700 mb-2">Drag & drop files here or click to browse</p>
              <p className="text-sm text-gray-500">Supports MP4, MOV up to 5GB</p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowUploadModal(false)}
                className="flex-1 px-4 py-3 rounded-lg border border-[#e8e6e1] hover:border-[#ff5722] transition-all"
              >
                Cancel
              </button>
              <button className="flex-1 px-4 py-3 rounded-lg bg-[#ff5722] text-white hover:bg-[#ff5722]/90 transition-all">
                Upload
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CORRECTION MODAL */}
      {showCorrectionModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-lg max-w-2xl w-full p-8">
            <h2 className="text-2xl font-bold mb-6">Request Correction</h2>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Correction Type</label>
                <select className="w-full bg-[#f8f8f6] border border-[#e8e6e1] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ff5722]">
                  <option>Text Note</option>
                  <option>Video Feedback</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Timestamps (comma separated)</label>
                <input
                  type="text"
                  placeholder="e.g., 0:05, 0:12, 0:27"
                  className="w-full bg-[#f8f8f6] border border-[#e8e6e1] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ff5722]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Note</label>
                <textarea
                  rows={4}
                  placeholder="Describe what needs to be corrected..."
                  className="w-full bg-[#f8f8f6] border border-[#e8e6e1] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ff5722] resize-none"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowCorrectionModal(false)}
                className="flex-1 px-4 py-3 rounded-lg border border-[#e8e6e1] hover:border-[#ff5722] transition-all"
              >
                Cancel
              </button>
              <button className="flex-1 px-4 py-3 rounded-lg bg-[#ff5722] text-white hover:bg-[#ff5722]/90 transition-all">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductionHub;
