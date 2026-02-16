import React, { useState } from 'react';
import {
  IoRocketOutline,
  IoCheckmarkCircle,
  IoCloseCircle,
  IoTimeOutline,
  IoChevronUp,
  IoChevronDown,
  IoToggle,
  IoCalendarOutline,
  IoLinkOutline,
  IoTrendingUp,
  IoRefresh,
  IoPlayCircle
} from 'react-icons/io5';
import { FaInstagram, FaTiktok, FaYoutube, FaLinkedin } from 'react-icons/fa';

const PublishingCenter = () => {
  const [queueVideos, setQueueVideos] = useState([
    {
      id: 1,
      title: 'Why your content strategy is backwards',
      thumbnail: '#',
      scheduledTime: '2024-01-20 14:00',
      platforms: {
        instagram: true,
        tiktok: true,
        youtube: false,
        linkedin: true
      },
      status: 'Scheduled'
    },
    {
      id: 2,
      title: '5 brutal truths about building online',
      thumbnail: '#',
      scheduledTime: '2024-01-20 18:00',
      platforms: {
        instagram: true,
        tiktok: true,
        youtube: true,
        linkedin: false
      },
      status: 'Scheduled'
    },
    {
      id: 3,
      title: 'Behind the scenes: My content process',
      thumbnail: '#',
      scheduledTime: '2024-01-21 10:00',
      platforms: {
        instagram: true,
        tiktok: false,
        youtube: true,
        linkedin: true
      },
      status: 'Scheduled'
    },
    {
      id: 4,
      title: 'How I went from 0 to 100K in 90 days',
      thumbnail: '#',
      scheduledTime: '2024-01-21 15:00',
      platforms: {
        instagram: false,
        tiktok: true,
        youtube: true,
        linkedin: true
      },
      status: 'Scheduled'
    },
    {
      id: 5,
      title: 'The framework that changed everything',
      thumbnail: '#',
      scheduledTime: '2024-01-21 19:00',
      platforms: {
        instagram: true,
        tiktok: true,
        youtube: false,
        linkedin: true
      },
      status: 'Scheduled'
    }
  ]);

  const platforms = [
    {
      id: 'instagram',
      name: 'Instagram',
      icon: FaInstagram,
      color: '#E1306C',
      connected: true,
      scheduled: 4,
      lastPublished: '2h ago',
      bestTimes: ['9:00 AM', '1:00 PM', '6:00 PM'],
      caption: "Everyone says post daily. I did—and gained 147 followers in 6 months.\n\nThen I learned what top creators actually do:\n\n❌ Not more content\n✅ Strategic content\n\nFramework in bio 🔗\n\n#ContentStrategy #CreatorEconomy"
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      icon: FaTiktok,
      color: '#00f2ea',
      connected: true,
      scheduled: 4,
      lastPublished: '4h ago',
      bestTimes: ['7:00 AM', '12:00 PM', '9:00 PM'],
      caption: "POV: You just learned why posting daily killed your growth 💀\n\nSpent $50K on coaches. Posted 3x/day for 6 months. Got 147 followers.\n\nThen discovered the top 1% secret: strategic > consistent\n\n#ContentCreator #GrowthStrategy"
    },
    {
      id: 'youtube',
      name: 'YouTube',
      icon: FaYoutube,
      color: '#FF0000',
      connected: true,
      scheduled: 3,
      lastPublished: '1d ago',
      bestTimes: ['2:00 PM', '5:00 PM', '8:00 PM'],
      caption: "Why Your Content Strategy Is Backwards (And How To Fix It)\n\nIn this video, I break down why posting daily might be killing your growth.\n\n🔗 Get the framework: [link]\n\n#ContentStrategy #CreatorEconomy"
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: FaLinkedin,
      color: '#0077B5',
      connected: false,
      scheduled: 4,
      lastPublished: '3d ago',
      bestTimes: ['8:00 AM', '12:00 PM', '5:00 PM'],
      caption: "Everyone told me to post daily.\n\nI followed the advice religiously.\n\nResult? 147 followers in 6 months and $50K spent on coaches.\n\nThen I discovered what the top 1% actually do...\n\n[Read more in comments]"
    }
  ];

  const publicationLog = [
    { id: 1, title: 'The mindset shift that unlocked growth', platform: 'Instagram', status: 'Published', time: '2h ago', postId: 'ig_12345', url: 'https://instagram.com/p/12345' },
    { id: 2, title: 'The mindset shift that unlocked growth', platform: 'TikTok', status: 'Published', time: '2h ago', postId: 'tt_67890', url: 'https://tiktok.com/@user/video/67890' },
    { id: 3, title: 'Case study: 10x reach in 30 days', platform: 'YouTube', status: 'Published', time: '4h ago', postId: 'yt_abc123', url: 'https://youtube.com/watch?v=abc123' },
    { id: 4, title: 'POV: You discovered the content hack', platform: 'TikTok', status: 'Published', time: '6h ago', postId: 'tt_xyz789', url: 'https://tiktok.com/@user/video/xyz789' },
    { id: 5, title: 'Stop doing this if you want to grow', platform: 'Instagram', status: 'Failed', time: '8h ago', postId: 'ig_error', url: null },
    { id: 6, title: 'The framework that changed everything', platform: 'LinkedIn', status: 'Published', time: '1d ago', postId: 'li_post123', url: 'https://linkedin.com/posts/post123' },
    { id: 7, title: 'Behind the scenes: My content process', platform: 'YouTube', status: 'Published', time: '1d ago', postId: 'yt_def456', url: 'https://youtube.com/watch?v=def456' },
    { id: 8, title: '5 brutal truths about building online', platform: 'Instagram', status: 'Published', time: '2d ago', postId: 'ig_54321', url: 'https://instagram.com/p/54321' },
    { id: 9, title: '5 brutal truths about building online', platform: 'TikTok', status: 'Published', time: '2d ago', postId: 'tt_abc456', url: 'https://tiktok.com/@user/video/abc456' },
    { id: 10, title: 'How I went from 0 to 100K', platform: 'YouTube', status: 'Failed', time: '2d ago', postId: 'yt_error', url: null }
  ];

  const ctaStrategies = [
    { cta: 'Link in bio', usage: 45, avgCTR: '3.2%', performance: 'High' },
    { cta: 'DM for info', usage: 25, avgCTR: '2.8%', performance: 'Medium' },
    { cta: 'Comment keyword', usage: 20, avgCTR: '4.1%', performance: 'High' },
    { cta: 'Check description', usage: 10, avgCTR: '1.9%', performance: 'Low' }
  ];

  const [selectedCTA, setSelectedCTA] = useState('Link in bio');

  const timelineHours = Array.from({ length: 24 }, (_, i) => i);
  const currentHour = new Date().getHours();

  const togglePlatform = (videoId, platform) => {
    setQueueVideos(prev =>
      prev.map(v =>
        v.id === videoId
          ? { ...v, platforms: { ...v.platforms, [platform]: !v.platforms[platform] } }
          : v
      )
    );
  };

  const moveVideo = (videoId, direction) => {
    setQueueVideos(prev => {
      const idx = prev.findIndex(v => v.id === videoId);
      if (direction === 'up' && idx > 0) {
        const newQueue = [...prev];
        [newQueue[idx], newQueue[idx - 1]] = [newQueue[idx - 1], newQueue[idx]];
        return newQueue;
      }
      if (direction === 'down' && idx < prev.length - 1) {
        const newQueue = [...prev];
        [newQueue[idx], newQueue[idx + 1]] = [newQueue[idx + 1], newQueue[idx]];
        return newQueue;
      }
      return prev;
    });
  };

  const getScheduledAtHour = (scheduledTime) => {
    const hour = new Date(scheduledTime).getHours();
    return hour;
  };

  const platformColors = {
    instagram: '#E1306C',
    tiktok: '#00f2ea',
    youtube: '#FF0000',
    linkedin: '#0077B5'
  };

  return (
    <div className="min-h-screen bg-[#07070b] text-white font-['DM_Sans']">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=JetBrains+Mono:wght@400;500&display=swap');
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        .pulse { animation: pulse 2s ease-in-out infinite; }
      `}</style>

      {/* HEADER */}
      <header className="bg-[#0e0e16] border-b border-[#1a1a2e] p-6">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-lg bg-gradient-to-br from-[#ff5722] to-orange-400">
              <IoRocketOutline size={28} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Distribution Center</h1>
              <div className="flex items-center gap-2 mt-1">
                <span className="px-2 py-0.5 rounded text-xs font-['JetBrains_Mono'] bg-green-500/20 text-green-400 border border-green-500/30">
                  WF6
                </span>
                <span className="text-sm text-gray-400">Multi-Platform Publishing</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-[1800px] mx-auto p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT COLUMN: SCHEDULING QUEUE */}
          <div className="lg:col-span-2 space-y-6">
            {/* Scheduling Queue */}
            <div className="bg-[#0e0e16] rounded-lg border border-[#1a1a2e] p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold">Scheduling Queue</h2>
                <span className="text-sm text-gray-400">{queueVideos.length} videos</span>
              </div>

              <div className="space-y-3">
                {queueVideos.map((video, idx) => (
                  <div
                    key={video.id}
                    className="bg-[#07070b] rounded-lg border border-[#1a1a2e] p-4 hover:border-[#ff5722]/50 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      {/* Thumbnail */}
                      <div className="w-24 h-16 bg-gray-800 rounded flex items-center justify-center flex-shrink-0">
                        <IoPlayCircle size={32} className="text-gray-600" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold text-sm leading-tight">{video.title}</h3>
                          <div className="flex items-center gap-2 ml-4">
                            <button
                              onClick={() => moveVideo(video.id, 'up')}
                              disabled={idx === 0}
                              className="p-1 rounded hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed"
                            >
                              <IoChevronUp size={16} />
                            </button>
                            <button
                              onClick={() => moveVideo(video.id, 'down')}
                              disabled={idx === queueVideos.length - 1}
                              className="p-1 rounded hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed"
                            >
                              <IoChevronDown size={16} />
                            </button>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                          <IoTimeOutline size={14} />
                          <span className="font-['JetBrains_Mono']">{video.scheduledTime}</span>
                        </div>

                        {/* Platform Toggles */}
                        <div className="flex items-center gap-2">
                          {Object.entries(video.platforms).map(([platform, enabled]) => {
                            const platformData = platforms.find(p => p.id === platform);
                            const Icon = platformData?.icon;
                            return (
                              <button
                                key={platform}
                                onClick={() => togglePlatform(video.id, platform)}
                                className={`flex items-center gap-1 px-2 py-1 rounded text-xs transition-all ${
                                  enabled
                                    ? 'text-white border'
                                    : 'text-gray-600 bg-gray-800 border border-gray-700'
                                }`}
                                style={enabled ? {
                                  backgroundColor: `${platformColors[platform]}20`,
                                  borderColor: platformColors[platform],
                                  color: platformColors[platform]
                                } : {}}
                              >
                                {Icon && <Icon size={12} />}
                                <span className="capitalize">{platform}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Posting Calendar Timeline */}
            <div className="bg-[#0e0e16] rounded-lg border border-[#1a1a2e] p-6">
              <h2 className="text-lg font-bold mb-6">24-Hour Timeline</h2>

              <div className="relative">
                {/* Timeline */}
                <div className="flex gap-1 mb-4">
                  {timelineHours.map(hour => (
                    <div key={hour} className="flex-1 min-w-0">
                      <div className={`h-12 rounded-sm border border-[#1a1a2e] relative ${
                        hour === currentHour ? 'bg-[#ff5722]/20 border-[#ff5722]' : 'bg-[#07070b]'
                      }`}>
                        {/* Scheduled posts at this hour */}
                        {queueVideos
                          .filter(v => getScheduledAtHour(v.scheduledTime) === hour)
                          .map(video => (
                            <div key={video.id} className="absolute inset-x-0 top-0 flex gap-0.5 p-0.5">
                              {Object.entries(video.platforms)
                                .filter(([_, enabled]) => enabled)
                                .map(([platform]) => (
                                  <div
                                    key={platform}
                                    className="flex-1 h-2 rounded-sm"
                                    style={{ backgroundColor: platformColors[platform] }}
                                    title={`${platform} - ${video.title}`}
                                  />
                                ))}
                            </div>
                          ))}

                        {/* Current time indicator */}
                        {hour === currentHour && (
                          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-[#ff5722] pulse" />
                        )}
                      </div>
                      <div className="text-[10px] text-gray-500 text-center mt-1 font-['JetBrains_Mono']">
                        {String(hour).padStart(2, '0')}:00
                      </div>
                    </div>
                  ))}
                </div>

                {/* Legend */}
                <div className="flex items-center gap-4 text-xs text-gray-400">
                  {platforms.map(platform => {
                    const Icon = platform.icon;
                    return (
                      <div key={platform.id} className="flex items-center gap-1">
                        <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: platform.color }} />
                        <Icon size={12} />
                        <span>{platform.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Publication Log */}
            <div className="bg-[#0e0e16] rounded-lg border border-[#1a1a2e] p-6">
              <h2 className="text-lg font-bold mb-6">Publication Log</h2>

              <div className="space-y-2">
                {publicationLog.map(log => (
                  <div
                    key={log.id}
                    className="flex items-center justify-between p-3 rounded-lg bg-[#07070b] border border-[#1a1a2e] hover:border-[#ff5722]/50 transition-all"
                  >
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      {log.status === 'Published' && <IoCheckmarkCircle size={18} className="text-green-400 flex-shrink-0" />}
                      {log.status === 'Failed' && <IoCloseCircle size={18} className="text-red-400 flex-shrink-0" />}
                      {log.status === 'Scheduled' && <IoTimeOutline size={18} className="text-gray-400 flex-shrink-0" />}

                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium truncate">{log.title}</div>
                        <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
                          <span style={{ color: platformColors[log.platform.toLowerCase()] }}>{log.platform}</span>
                          <span>•</span>
                          <span>{log.time}</span>
                          {log.postId && (
                            <>
                              <span>•</span>
                              <span className="font-['JetBrains_Mono']">{log.postId}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    {log.url && (
                      <a
                        href={log.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1 rounded bg-white/5 hover:bg-white/10 text-xs text-gray-400 hover:text-white transition-all ml-3"
                      >
                        <IoLinkOutline size={14} />
                        View
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
            {/* Platform Cards */}
            <div className="grid grid-cols-1 gap-4">
              {platforms.map(platform => {
                const Icon = platform.icon;
                return (
                  <div
                    key={platform.id}
                    className="bg-[#0e0e16] rounded-lg border border-[#1a1a2e] p-5 hover:border-[#ff5722]/50 transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="p-2 rounded-lg"
                          style={{ backgroundColor: `${platform.color}20` }}
                        >
                          <Icon size={24} style={{ color: platform.color }} />
                        </div>
                        <div>
                          <h3 className="font-bold">{platform.name}</h3>
                          <div className="flex items-center gap-2 text-xs mt-1">
                            {platform.connected ? (
                              <span className="flex items-center gap-1 text-green-400">
                                <IoCheckmarkCircle size={12} />
                                Connected
                              </span>
                            ) : (
                              <span className="flex items-center gap-1 text-red-400">
                                <IoCloseCircle size={12} />
                                Not Connected
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Scheduled</div>
                        <div className="text-lg font-bold font-['JetBrains_Mono']">{platform.scheduled}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Last Published</div>
                        <div className="text-sm text-gray-300">{platform.lastPublished}</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-xs text-gray-500 mb-2">Best Posting Times</div>
                      <div className="flex gap-2">
                        {platform.bestTimes.map((time, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-2 py-1 rounded font-['JetBrains_Mono']"
                            style={{
                              backgroundColor: `${platform.color}20`,
                              color: platform.color
                            }}
                          >
                            {time}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-xs text-gray-500 mb-2">Caption Preview</div>
                      <div className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                        {platform.caption}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Strategy Panel */}
            <div className="bg-[#0e0e16] rounded-lg border border-[#1a1a2e] p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold">CTA Strategy</h2>
                <button className="p-2 rounded hover:bg-white/10 transition-all">
                  <IoRefresh size={18} />
                </button>
              </div>

              <div className="mb-4">
                <div className="text-xs text-gray-500 mb-2">Current CTA</div>
                <div className="px-3 py-2 rounded bg-[#ff5722]/20 border border-[#ff5722] text-[#ff5722] text-sm font-medium">
                  {selectedCTA}
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-xs text-gray-500 mb-3">Performance History</div>
                {ctaStrategies.map(strategy => (
                  <button
                    key={strategy.cta}
                    onClick={() => setSelectedCTA(strategy.cta)}
                    className={`w-full text-left p-3 rounded-lg border transition-all ${
                      selectedCTA === strategy.cta
                        ? 'bg-[#ff5722]/10 border-[#ff5722]'
                        : 'bg-[#07070b] border-[#1a1a2e] hover:border-[#ff5722]/50'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="text-sm font-medium">{strategy.cta}</div>
                      <span className={`text-xs px-2 py-0.5 rounded ${
                        strategy.performance === 'High' ? 'bg-green-500/20 text-green-400' :
                        strategy.performance === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {strategy.performance}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <div className="flex items-center gap-1">
                        <IoTrendingUp size={12} />
                        <span>CTR: {strategy.avgCTR}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <IoCalendarOutline size={12} />
                        <span>Used: {strategy.usage}x</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-[#1a1a2e]">
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#ff5722] text-white hover:bg-[#ff5722]/90 transition-all text-sm font-medium">
                  <IoRefresh size={16} />
                  Enable Auto-Rotation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublishingCenter;
