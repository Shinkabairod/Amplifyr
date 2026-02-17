import React, { useState } from 'react';
import {
  IoCheckmarkCircle,
  IoSync,
  IoCreate,
  IoCloudUpload,
  IoVideocam,
  IoSend,
  IoChevronDown,
  IoChevronUp,
  IoShieldCheckmark,
  IoPencil,
  IoPerson,
  IoFilm,
  IoTime,
} from 'react-icons/io5';

const PipelineDashboard = () => {
  const [selectedScript, setSelectedScript] = useState(1);
  const [activeTab, setActiveTab] = useState('scenes');
  const [currentRole, setCurrentRole] = useState('Admin');
  const [filterStatus, setFilterStatus] = useState('all');
  const [expandedScenes, setExpandedScenes] = useState([0]);
  const [showModal, setShowModal] = useState(null);

  const roles = [
    { name: 'Admin', icon: IoShieldCheckmark, color: 'from-purple-500 to-purple-600', badge: '🛡' },
    { name: 'Copywriter', icon: IoPencil, color: 'from-amber-500 to-amber-600', badge: '✍️' },
    { name: 'Client', icon: IoPerson, color: 'from-blue-500 to-blue-600', badge: '👤' },
    { name: 'Editor', icon: IoFilm, color: 'from-green-500 to-green-600', badge: '🎬' }
  ];

  const statuses = {
    'AI Draft': { emoji: '🤖', bg: 'bg-gray-100', text: 'text-gray-700', border: 'border-gray-300' },
    'Copy Review': { emoji: '✍️', bg: 'bg-amber-100', text: 'text-amber-700', border: 'border-amber-300' },
    'Copy Revision': { emoji: '🔁', bg: 'bg-red-100', text: 'text-red-700', border: 'border-red-300' },
    'Copy Approved': { emoji: '✅', bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-300' },
    'Awaiting Recording': { emoji: '📹', bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-300' },
    'Raw Uploaded': { emoji: '⬆️', bg: 'bg-cyan-100', text: 'text-cyan-700', border: 'border-cyan-300' },
    'In Editing': { emoji: '✂️', bg: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-300' },
    'Edit Review': { emoji: '👁', bg: 'bg-yellow-100', text: 'text-yellow-700', border: 'border-yellow-300' },
    'Correction': { emoji: '🔄', bg: 'bg-red-100', text: 'text-red-700', border: 'border-red-300' },
    'Approved': { emoji: '✅', bg: 'bg-green-100', text: 'text-green-700', border: 'border-green-300' },
    'Scheduled': { emoji: '📡', bg: 'bg-green-100', text: 'text-green-700', border: 'border-green-300' }
  };

  const sceneColors = {
    HOOK: { bg: 'bg-red-50', border: 'border-red-300', label: 'bg-red-500' },
    TENSION: { bg: 'bg-yellow-50', border: 'border-yellow-300', label: 'bg-yellow-500' },
    VALUE: { bg: 'bg-blue-50', border: 'border-blue-300', label: 'bg-blue-500' },
    PROOF: { bg: 'bg-green-50', border: 'border-green-300', label: 'bg-green-500' },
    CTA: { bg: 'bg-orange-50', border: 'border-orange-300', label: 'bg-orange-500' }
  };

  const scripts = [
    {
      id: 'SC-001',
      title: 'Why your content strategy is backwards',
      status: 'Edit Review',
      pillar: 'Authority',
      hookType: 'Contrarian',
      duration: '45s',
      sceneCount: 4,
      date: '2024-01-15',
      scenes: [
        {
          name: 'HOOK',
          timing: '0-3s',
          script: "Everyone tells you to post daily. Here's why that's destroying your growth.",
          direction: '[Direct to camera, serious tone, slight lean forward]',
          broll: 'Screen recording of generic posting calendar',
          brollStatus: 'Ready'
        },
        {
          name: 'TENSION',
          timing: '3-8s',
          script: "I spent $50K on content coaches. Posted 3x a day for 6 months. Got 147 followers.",
          direction: '[B-roll overlay, frustrated expression]',
          broll: 'Growth chart showing flat line, expense receipts montage',
          brollStatus: 'In Progress'
        },
        {
          name: 'VALUE',
          timing: '8-25s',
          script: "Then I found the pattern. Top 1% creators post 3x per week, but each one is engineered. Hook tested with AI. Structure optimized for retention. CTA designed for conversion.",
          direction: '[Cut to screen recording, confident delivery, faster pace]',
          broll: 'Dashboard showing high engagement, analytics screenshots',
          brollStatus: 'Ready'
        },
        {
          name: 'CTA',
          timing: '25-30s',
          script: "Want the framework? Link in bio. Or keep posting daily and wonder why nothing hits.",
          direction: '[Back to camera, direct eye contact, pause]',
          broll: 'CTA graphic overlay with arrow',
          brollStatus: 'Ready'
        }
      ],
      copyHistory: [
        { date: '2h ago', author: 'Client', action: 'approved', note: 'Video approved for publishing' },
        { date: '4h ago', author: 'Mike (Editor)', action: 'submitted', note: 'V2 submitted with corrections applied' },
        { date: '1d ago', author: 'Client', action: 'correction', note: 'B-roll in tension section needs more contrast' },
        { date: '2d ago', author: 'Mike (Editor)', action: 'submitted', note: 'V1 submitted for review' },
        { date: '3d ago', author: 'Client', action: 'uploaded', note: 'Raw recording uploaded' },
        { date: '4d ago', author: 'Sarah (Copywriter)', action: 'approved', note: 'Script approved for recording' }
      ],
      videoVersions: [
        { version: 'V2', date: '4h ago', editor: 'Mike', status: 'In Review', note: 'Applied B-roll corrections' },
        { version: 'V1', date: '2d ago', editor: 'Mike', status: 'Corrected', note: 'Initial edit' }
      ],
      caption: "Everyone says post daily. I did—and gained 147 followers in 6 months.\n\nThen I learned what top creators actually do:\n\n❌ Not more content\n✅ Strategic content\n\n3 posts/week. Each one engineered.\n\nFramework in bio 🔗\n\n#ContentStrategy #CreatorEconomy #GrowthHacking"
    },
    {
      id: 'SC-002',
      title: '5 brutal truths about building online',
      status: 'Copy Review',
      pillar: 'Education',
      hookType: 'List',
      duration: '60s',
      sceneCount: 7,
      date: '2024-01-16',
      scenes: [
        {
          name: 'HOOK',
          timing: '0-4s',
          script: "5 brutal truths about building online that nobody tells you.",
          direction: '[Energetic, direct to camera]',
          broll: 'Numbers 1-5 animation',
          brollStatus: 'Pending'
        }
      ],
      copyHistory: [
        { date: '1h ago', author: 'AI Engine', action: 'generated', note: 'Script generated from brief' }
      ],
      videoVersions: [],
      caption: ''
    },
    {
      id: 'SC-003',
      title: 'Behind the scenes: My content process',
      status: 'Approved',
      pillar: 'Entertainment',
      hookType: 'BTS',
      duration: '35s',
      sceneCount: 3,
      date: '2024-01-10',
      scenes: [],
      copyHistory: [],
      videoVersions: [
        { version: 'V1', date: '2d ago', editor: 'Sarah', status: 'Approved', note: 'Final version approved' }
      ],
      caption: "Ever wonder what goes into making content that converts? Here's the full process 🎬"
    },
    {
      id: 'SC-004',
      title: 'How I went from 0 to 100K in 90 days',
      status: 'In Editing',
      pillar: 'Inspiration',
      hookType: 'Personal Story',
      duration: '50s',
      sceneCount: 5,
      date: '2024-01-14',
      scenes: [],
      copyHistory: [],
      videoVersions: [
        { version: 'V1', date: '6h ago', editor: 'Mike', status: 'In Progress', note: 'Adding captions and B-roll' }
      ],
      caption: ''
    },
    {
      id: 'SC-005',
      title: 'The framework that changed everything',
      status: 'Awaiting Recording',
      pillar: 'Education',
      hookType: 'How-To',
      duration: '70s',
      sceneCount: 6,
      date: '2024-01-17',
      scenes: [],
      copyHistory: [
        { date: '3h ago', author: 'Sarah (Copywriter)', action: 'approved', note: 'Script approved for recording' }
      ],
      videoVersions: [],
      caption: ''
    }
  ];

  const filteredScripts = filterStatus === 'all'
    ? scripts
    : scripts.filter(s => s.status === filterStatus);

  const currentScript = filteredScripts.find(s => s.id === selectedScript) || filteredScripts[0];

  const statusCounts = scripts.reduce((acc, script) => {
    acc[script.status] = (acc[script.status] || 0) + 1;
    return acc;
  }, {});

  const toggleScene = (idx) => {
    setExpandedScenes(prev =>
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  const canApproveScript = currentRole === 'Admin' || currentRole === 'Copywriter';
  const canUploadRaw = currentRole === 'Admin' || currentRole === 'Client';
  const canSubmitEdit = currentRole === 'Admin' || currentRole === 'Editor';
  const canRequestCorrection = currentRole === 'Admin' || currentRole === 'Client';

  return (
    <div className="h-screen bg-[#f8f8f6] text-[#1a1a1a] font-['Instrument_Sans'] flex overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap');
        .font-mono { font-family: 'IBM Plex Mono', monospace; }
        * { transition: all 0.12s ease; }
      `}</style>

      {/* SIDEBAR */}
      <aside className="w-[290px] bg-white border-r border-[#e8e6e1] flex flex-col">
        {/* Pipeline Overview */}
        <div className="p-6 border-b border-[#e8e6e1]">
          <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4">Pipeline Overview</h2>
          <div className="grid grid-cols-2 gap-2">
            {Object.entries(statusCounts).map(([status, count]) => (
              <button
                key={status}
                onClick={() => setFilterStatus(filterStatus === status ? 'all' : status)}
                className={`p-2 rounded-lg border text-left ${
                  filterStatus === status
                    ? 'bg-[#1a1a1a] text-white border-[#1a1a1a]'
                    : `${statuses[status].bg} ${statuses[status].text} ${statuses[status].border}`
                }`}
              >
                <div className="text-xs mb-1 opacity-75">{statuses[status].emoji} {status}</div>
                <div className="text-lg font-bold font-mono">{count}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Scripts List */}
        <div className="flex-1 overflow-y-auto p-4">
          {filteredScripts.map(script => (
            <button
              key={script.id}
              onClick={() => setSelectedScript(script.id)}
              className={`w-full text-left p-4 rounded-lg mb-3 bg-white border transition-all ${
                selectedScript === script.id
                  ? 'border-l-[3px] border-l-[#1a1a1a] border-[#e8e6e1] shadow-sm'
                  : 'border-[#e8e6e1] hover:border-gray-300'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-gray-500">{script.id}</span>
                <span className={`text-[9px] px-2 py-0.5 rounded-full font-medium border ${statuses[script.status].bg} ${statuses[script.status].text} ${statuses[script.status].border}`}>
                  {statuses[script.status].emoji} {script.status}
                </span>
              </div>

              <h3 className="text-sm font-semibold mb-2 leading-tight">{script.title}</h3>

              <div className="flex items-center justify-between text-xs text-gray-600">
                <span className="px-2 py-0.5 rounded bg-gray-100">{script.pillar}</span>
                <span className="font-mono">{script.duration}</span>
              </div>

              <div className="mt-2 text-xs text-gray-500">
                {script.sceneCount} scenes
              </div>
            </button>
          ))}
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-[#e8e6e1] p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className={`text-xs px-3 py-1 rounded-full font-medium border ${statuses[currentScript.status].bg} ${statuses[currentScript.status].text} ${statuses[currentScript.status].border}`}>
                  {statuses[currentScript.status].emoji} {currentScript.status}
                </span>
                <span className="text-xs font-mono text-gray-500">{currentScript.id}</span>
                <span className="text-xs text-gray-500">•</span>
                <span className="text-xs text-gray-500">{currentScript.date}</span>
              </div>

              <h1 className="text-2xl font-bold mb-3">{currentScript.title}</h1>

              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-700">{currentScript.pillar}</span>
                <span className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-700">{currentScript.hookType}</span>
                <span className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-700 font-mono">{currentScript.duration}</span>
                <span className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-700">{currentScript.sceneCount} scenes</span>
              </div>
            </div>

            {/* Role Switcher */}
            <div className="flex items-center gap-2 ml-6">
              <span className="text-xs text-gray-500 mr-2">Role:</span>
              {roles.map(role => {
                return (
                  <button
                    key={role.name}
                    onClick={() => setCurrentRole(role.name)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all ${
                      currentRole === role.name
                        ? `bg-gradient-to-br ${role.color} text-white border-transparent shadow-sm`
                        : 'bg-white border-[#e8e6e1] text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    <span>{role.badge}</span>
                    <span className="text-xs font-medium">{role.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-2">
            {[
              { id: 'scenes', label: 'Scenes' },
              { id: 'script', label: 'Script & Copy' },
              { id: 'versions', label: 'Video Versions' },
              { id: 'caption', label: 'Caption & Distribution' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg border text-sm font-medium ${
                  activeTab === tab.id
                    ? 'bg-[#1a1a1a] text-white border-[#1a1a1a]'
                    : 'bg-white border-[#e8e6e1] text-gray-700 hover:border-gray-400'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* TAB: SCENES */}
          {activeTab === 'scenes' && (
            <div className="max-w-5xl space-y-4">
              {currentScript.scenes.length > 0 ? (
                currentScript.scenes.map((scene, idx) => {
                  const isExpanded = expandedScenes.includes(idx);
                  return (
                    <div
                      key={idx}
                      className={`border rounded-lg overflow-hidden ${sceneColors[scene.name].border} ${sceneColors[scene.name].bg}`}
                    >
                      <button
                        onClick={() => toggleScene(idx)}
                        className="w-full p-4 flex items-center justify-between hover:bg-black/5"
                      >
                        <div className="flex items-center gap-4">
                          <div className={`${sceneColors[scene.name].label} text-white text-xs font-bold px-3 py-1 rounded`}>
                            {scene.name}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-700">
                            <IoTime size={14} />
                            <span className="font-mono">{scene.timing}</span>
                          </div>
                          {scene.brollStatus && (
                            <span className={`text-[10px] px-2 py-0.5 rounded-full border ${
                              scene.brollStatus === 'Ready' ? 'bg-green-100 text-green-700 border-green-300' :
                              scene.brollStatus === 'In Progress' ? 'bg-yellow-100 text-yellow-700 border-yellow-300' :
                              'bg-gray-100 text-gray-700 border-gray-300'
                            }`}>
                              B-roll: {scene.brollStatus}
                            </span>
                          )}
                        </div>
                        {isExpanded ? <IoChevronUp size={20} /> : <IoChevronDown size={20} />}
                      </button>

                      {isExpanded && (
                        <div className="p-4 pt-0 space-y-4 border-t border-current/20">
                          <div>
                            <div className="text-xs uppercase tracking-wider text-gray-500 mb-2">Script</div>
                            <p className="text-sm leading-relaxed">{scene.script}</p>
                          </div>

                          <div>
                            <div className="text-xs uppercase tracking-wider text-gray-500 mb-2">Direction Notes</div>
                            <p className="text-sm italic text-gray-600">{scene.direction}</p>
                          </div>

                          <div>
                            <div className="text-xs uppercase tracking-wider text-gray-500 mb-2">B-roll Description</div>
                            <p className="text-sm text-gray-700">{scene.broll}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })
              ) : (
                <div className="flex items-center justify-center h-64 text-gray-400">
                  <div className="text-center">
                    <IoFilm size={48} className="mx-auto mb-4 opacity-30" />
                    <p>No scenes data available</p>
                  </div>
                </div>
              )}

              {/* Actions */}
              {currentScript.scenes.length > 0 && (
                <div className="flex gap-3 pt-4">
                  {canApproveScript && currentScript.status === 'Copy Review' && (
                    <>
                      <button
                        onClick={() => setShowModal('approveScript')}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600"
                      >
                        <IoCheckmarkCircle size={18} />
                        Approve Script
                      </button>
                      <button
                        onClick={() => setShowModal('requestRevision')}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#e8e6e1] hover:border-red-500 hover:text-red-500"
                      >
                        <IoSync size={18} />
                        Request Revision
                      </button>
                    </>
                  )}

                  {canUploadRaw && currentScript.status === 'Awaiting Recording' && (
                    <button
                      onClick={() => setShowModal('uploadRaw')}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
                    >
                      <IoCloudUpload size={18} />
                      Upload Raw Recording
                    </button>
                  )}
                </div>
              )}
            </div>
          )}

          {/* TAB: SCRIPT & COPY */}
          {activeTab === 'script' && (
            <div className="max-w-4xl">
              {currentScript.copyHistory.length > 0 ? (
                <div className="bg-white rounded-lg border border-[#e8e6e1] p-6">
                  <h3 className="font-semibold text-lg mb-6">Copy History</h3>
                  <div className="space-y-4">
                    {currentScript.copyHistory.map((entry, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            entry.action === 'approved' ? 'bg-green-100 text-green-600' :
                            entry.action === 'correction' ? 'bg-red-100 text-red-600' :
                            entry.action === 'submitted' ? 'bg-blue-100 text-blue-600' :
                            'bg-gray-100 text-gray-600'
                          }`}>
                            {entry.action === 'approved' && <IoCheckmarkCircle size={16} />}
                            {entry.action === 'correction' && <IoSync size={16} />}
                            {entry.action === 'submitted' && <IoSend size={16} />}
                            {entry.action === 'uploaded' && <IoCloudUpload size={16} />}
                            {entry.action === 'generated' && <IoCreate size={16} />}
                          </div>
                          {idx < currentScript.copyHistory.length - 1 && (
                            <div className="w-0.5 flex-1 bg-[#e8e6e1] my-2" style={{ minHeight: '20px' }} />
                          )}
                        </div>
                        <div className="flex-1 pb-4">
                          <div className="flex items-center gap-3 mb-1">
                            <span className="text-sm font-medium">{entry.author}</span>
                            <span className="text-xs text-gray-500">{entry.date}</span>
                          </div>
                          <p className="text-sm text-gray-600">{entry.note}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-64 text-gray-400">
                  <div className="text-center">
                    <IoCreate size={48} className="mx-auto mb-4 opacity-30" />
                    <p>No copy history available</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB: VIDEO VERSIONS */}
          {activeTab === 'versions' && (
            <div className="max-w-4xl">
              {currentScript.videoVersions.length > 0 ? (
                <div className="space-y-4">
                  {currentScript.videoVersions.map((version, idx) => (
                    <div key={idx} className="bg-white rounded-lg border border-[#e8e6e1] p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold font-mono">{version.version}</h3>
                            <span className={`text-xs px-3 py-1 rounded-full font-medium border ${
                              version.status === 'Approved' ? 'bg-green-100 text-green-700 border-green-300' :
                              version.status === 'In Review' ? 'bg-yellow-100 text-yellow-700 border-yellow-300' :
                              version.status === 'In Progress' ? 'bg-blue-100 text-blue-700 border-blue-300' :
                              'bg-red-100 text-red-700 border-red-300'
                            }`}>
                              {version.status}
                            </span>
                          </div>
                          <div className="text-sm text-gray-600">
                            Edited by {version.editor} • {version.date}
                          </div>
                        </div>

                        {version.status === 'In Review' && canRequestCorrection && (
                          <button
                            onClick={() => setShowModal('recordCorrection')}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#e8e6e1] hover:border-red-500 hover:text-red-500"
                          >
                            <IoVideocam size={18} />
                            Record Correction
                          </button>
                        )}
                      </div>

                      <p className="text-sm text-gray-700 mb-4">{version.note}</p>

                      {version.status === 'In Review' && canRequestCorrection && (
                        <div className="flex gap-2 pt-4 border-t border-[#e8e6e1]">
                          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600">
                            <IoCheckmarkCircle size={18} />
                            Approve Version
                          </button>
                        </div>
                      )}
                    </div>
                  ))}

                  {canSubmitEdit && currentScript.status === 'In Editing' && (
                    <button
                      onClick={() => setShowModal('submitEdit')}
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
                    >
                      <IoSend size={18} />
                      Submit Edited Version
                    </button>
                  )}
                </div>
              ) : (
                <div className="flex items-center justify-center h-64 text-gray-400">
                  <div className="text-center">
                    <IoVideocam size={48} className="mx-auto mb-4 opacity-30" />
                    <p>No video versions yet</p>
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
                    <IoCreate size={48} className="mx-auto mb-4 opacity-30" />
                    <p>Caption will be generated after video approval</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      {/* MODALS */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-lg max-w-2xl w-full p-8">
            {showModal === 'approveScript' && (
              <>
                <h2 className="text-2xl font-bold mb-6">Approve Script</h2>
                <p className="text-gray-700 mb-6">
                  This will mark the script as approved and move it to "Awaiting Recording" status.
                  The client will be notified to begin recording.
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowModal(null)}
                    className="flex-1 px-4 py-3 rounded-lg border border-[#e8e6e1] hover:border-gray-400"
                  >
                    Cancel
                  </button>
                  <button className="flex-1 px-4 py-3 rounded-lg bg-green-500 text-white hover:bg-green-600">
                    Approve Script
                  </button>
                </div>
              </>
            )}

            {showModal === 'requestRevision' && (
              <>
                <h2 className="text-2xl font-bold mb-6">Request Script Revision</h2>
                <textarea
                  placeholder="Describe what needs to be revised..."
                  rows={5}
                  className="w-full bg-[#f8f8f6] border border-[#e8e6e1] rounded-lg px-4 py-3 mb-6 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                />
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowModal(null)}
                    className="flex-1 px-4 py-3 rounded-lg border border-[#e8e6e1] hover:border-gray-400"
                  >
                    Cancel
                  </button>
                  <button className="flex-1 px-4 py-3 rounded-lg bg-red-500 text-white hover:bg-red-600">
                    Request Revision
                  </button>
                </div>
              </>
            )}

            {showModal === 'uploadRaw' && (
              <>
                <h2 className="text-2xl font-bold mb-6">Upload Raw Recording</h2>
                <div className="border-2 border-dashed border-[#e8e6e1] rounded-lg p-12 text-center mb-6 hover:border-blue-500 transition-colors cursor-pointer">
                  <IoCloudUpload size={48} className="mx-auto mb-4 text-gray-400" />
                  <p className="text-gray-700 mb-2">Drag & drop video file here or click to browse</p>
                  <p className="text-sm text-gray-500">MP4, MOV up to 5GB</p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowModal(null)}
                    className="flex-1 px-4 py-3 rounded-lg border border-[#e8e6e1] hover:border-gray-400"
                  >
                    Cancel
                  </button>
                  <button className="flex-1 px-4 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600">
                    Upload
                  </button>
                </div>
              </>
            )}

            {showModal === 'submitEdit' && (
              <>
                <h2 className="text-2xl font-bold mb-6">Submit Edited Version</h2>
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Version Number</label>
                    <input
                      type="text"
                      placeholder="e.g., V3"
                      className="w-full bg-[#f8f8f6] border border-[#e8e6e1] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Notes</label>
                    <textarea
                      placeholder="What changed in this version?"
                      rows={3}
                      className="w-full bg-[#f8f8f6] border border-[#e8e6e1] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    />
                  </div>
                  <div className="border-2 border-dashed border-[#e8e6e1] rounded-lg p-8 text-center hover:border-blue-500 transition-colors cursor-pointer">
                    <IoCloudUpload size={32} className="mx-auto mb-2 text-gray-400" />
                    <p className="text-sm text-gray-700">Upload edited video</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowModal(null)}
                    className="flex-1 px-4 py-3 rounded-lg border border-[#e8e6e1] hover:border-gray-400"
                  >
                    Cancel
                  </button>
                  <button className="flex-1 px-4 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600">
                    Submit for Review
                  </button>
                </div>
              </>
            )}

            {showModal === 'recordCorrection' && (
              <>
                <h2 className="text-2xl font-bold mb-6">Record Correction Feedback</h2>
                <p className="text-sm text-gray-600 mb-4">
                  Record a video explaining what needs to be corrected, or add a text note with timestamps.
                </p>
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Timestamps (comma separated)</label>
                    <input
                      type="text"
                      placeholder="e.g., 0:05, 0:12, 0:27"
                      className="w-full bg-[#f8f8f6] border border-[#e8e6e1] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Correction Note</label>
                    <textarea
                      placeholder="Describe what needs to be corrected..."
                      rows={4}
                      className="w-full bg-[#f8f8f6] border border-[#e8e6e1] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
                    />
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowModal(null)}
                    className="flex-1 px-4 py-3 rounded-lg border border-[#e8e6e1] hover:border-gray-400"
                  >
                    Cancel
                  </button>
                  <button className="flex-1 px-4 py-3 rounded-lg bg-red-500 text-white hover:bg-red-600">
                    Submit Correction
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PipelineDashboard;
