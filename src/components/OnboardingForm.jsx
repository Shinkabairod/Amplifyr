import React, { useState } from 'react';
import { IoCheckmarkCircle, IoBusiness, IoNavigateOutline, IoFilm, IoTrendingUp, IoRocket } from 'react-icons/io5';

const OnboardingForm = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [showPreview, setShowPreview] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    // Business Foundation
    businessName: '',
    industry: '',
    primaryOffer: '',
    priceRange: '',
    revenueStage: '',
    businessModel: [],

    // Audience & ICP
    targetAudience: '',
    audienceSophistication: '',
    painPoints: '',
    competitors: '',
    aspirationalCreators: '',

    // Content Preferences
    brandTone: [],
    contentStyle: '',
    recordingComfort: '',
    topicsToAvoid: '',
    existingContent: '',
    socialAccountUrls: '',

    // Goals & Strategy
    primaryGoal: '',
    secondaryGoals: [],
    targetKPIs: '',
    riskTolerance: '',
    postingCadence: '',

    // Platforms & Distribution
    primaryPlatform: '',
    secondaryPlatforms: [],
    postingTimes: '',
    timezone: '',
    defaultCTA: ''
  });

  const sections = [
    { id: 0, name: 'Business Foundation', icon: IoBusiness, emoji: '🏢' },
    { id: 1, name: 'Audience & ICP', icon: IoNavigateOutline, emoji: '🎯' },
    { id: 2, name: 'Content Preferences', icon: IoFilm, emoji: '🎬' },
    { id: 3, name: 'Goals & Strategy', icon: IoTrendingUp, emoji: '📈' },
    { id: 4, name: 'Platforms & Distribution', icon: IoRocket, emoji: '📡' }
  ];

  const options = {
    priceRange: ['Under $50', '$50-$500', '$500-$2K', '$2K-$10K', '$10K+'],
    revenueStage: ['Pre-launch', '$0-$10K/mo', '$10K-$50K/mo', '$50K-$100K/mo', '$100K+/mo'],
    businessModel: ['Digital Products', 'Courses', 'Coaching', 'SaaS', 'Agency', 'Membership', 'Affiliate'],
    audienceSophistication: ['Unaware', 'Problem Aware', 'Solution Aware', 'Product Aware', 'Most Aware'],
    brandTone: ['Professional', 'Casual', 'Bold', 'Educational', 'Witty', 'Motivational', 'Minimalist'],
    contentStyle: ['Face-to-camera', 'Faceless', 'Mix', 'AI Avatar'],
    recordingComfort: ['Very comfortable', 'Comfortable', 'Neutral', 'Uncomfortable', 'Need coaching'],
    existingContent: ['None', '1-10 videos', '10-50 videos', '50-100 videos', '100+ videos'],
    primaryGoal: ['Brand Awareness', 'Lead Generation', 'Sales', 'Community', 'Thought Leadership'],
    secondaryGoals: ['Email List Growth', 'Engagement', 'Traffic', 'Partnerships', 'Authority'],
    riskTolerance: ['Conservative', 'Moderate', 'Aggressive', 'Full send'],
    postingCadence: ['1x/week', '3x/week', 'Daily', '2x/day', '3x/day'],
    primaryPlatform: ['IG Reels', 'TikTok', 'YT Shorts', 'LinkedIn', 'X'],
    secondaryPlatforms: ['IG Reels', 'TikTok', 'YT Shorts', 'LinkedIn', 'X'],
    postingTimes: ['Morning (6-9am)', 'Midday (12-2pm)', 'Evening (5-8pm)', 'Night (9-11pm)', 'Optimal (AI-selected)'],
    defaultCTA: ['Link in bio', 'DM for info', 'Comment keyword', 'Check description', 'Visit website']
  };

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleMulti = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(v => v !== value)
        : [...prev[field], value]
    }));
  };

  const handleNext = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const handlePrev = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Form Data:', formData);
    alert('Brand Blueprint Generated! Check console for data.');
  };

  const progress = ((currentSection + 1) / sections.length) * 100;

  return (
    <div className="min-h-screen bg-[#07070b] text-white font-['DM_Sans'] overflow-y-auto">
      <style>{`
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #07070b; }
        ::-webkit-scrollbar-thumb { background: #1a1a2e; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #ff5722; }
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=JetBrains+Mono:wght@400;500&display=swap');
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0e0e16]/80 backdrop-blur-xl border-b border-[#1a1a2e]">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-[#ff5722] to-orange-400 bg-clip-text text-transparent">
                Client Onboarding
              </h1>
              <p className="text-sm text-gray-400 mt-1">Content Growth Engine Setup</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-400">Progress</div>
              <div className="text-2xl font-bold text-[#ff5722]">{Math.round(progress)}%</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="relative h-2 bg-[#1a1a2e] rounded-full overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#ff5722] to-orange-400 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Section Tabs */}
          <div className="flex gap-2 mt-6 overflow-x-auto pb-2">
            {sections.map((section) => {
              const Icon = section.icon;
              const isActive = currentSection === section.id;
              const isCompleted = currentSection > section.id;

              return (
                <button
                  key={section.id}
                  onClick={() => setCurrentSection(section.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-[#ff5722]/20 border-[#ff5722] text-white'
                      : isCompleted
                      ? 'bg-[#0e0e16] border-green-500/30 text-green-400'
                      : 'bg-[#0e0e16] border-[#1a1a2e] text-gray-400 hover:border-gray-700'
                  }`}
                >
                  {isCompleted ? (
                    <IoCheckmarkCircle size={18} />
                  ) : (
                    <Icon size={18} />
                  )}
                  <span className="text-sm font-medium">{section.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Form Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-[#0e0e16] rounded-[14px] border border-[#1a1a2e] p-8 animate-fadeIn">
          {/* Section 0: Business Foundation */}
          {currentSection === 0 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-4xl">{sections[0].emoji}</span>
                <div>
                  <h2 className="text-2xl font-bold">{sections[0].name}</h2>
                  <p className="text-sm text-gray-400">Tell us about your business</p>
                </div>
              </div>

              <InputField
                label="Business Name"
                value={formData.businessName}
                onChange={(v) => updateField('businessName', v)}
                placeholder="e.g., ContentFlow AI"
              />

              <InputField
                label="Industry"
                value={formData.industry}
                onChange={(v) => updateField('industryName', v)}
                placeholder="e.g., Marketing Automation"
              />

              <TextareaField
                label="Primary Offer"
                value={formData.primaryOffer}
                onChange={(v) => updateField('primaryOffer', v)}
                placeholder="What do you sell? Who is it for?"
              />

              <ChipSelect
                label="Price Range"
                options={options.priceRange}
                selected={formData.priceRange}
                onSelect={(v) => updateField('priceRange', v)}
              />

              <ChipSelect
                label="Revenue Stage"
                options={options.revenueStage}
                selected={formData.revenueStage}
                onSelect={(v) => updateField('revenueStage', v)}
              />

              <MultiChipSelect
                label="Business Model"
                options={options.businessModel}
                selected={formData.businessModel}
                onToggle={(v) => toggleMulti('businessModel', v)}
              />
            </div>
          )}

          {/* Section 1: Audience & ICP */}
          {currentSection === 1 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-4xl">{sections[1].emoji}</span>
                <div>
                  <h2 className="text-2xl font-bold">{sections[1].name}</h2>
                  <p className="text-sm text-gray-400">Define your ideal customer</p>
                </div>
              </div>

              <TextareaField
                label="Target Audience"
                value={formData.targetAudience}
                onChange={(v) => updateField('targetAudience', v)}
                placeholder="Who are you trying to reach? Demographics, psychographics..."
              />

              <ChipSelect
                label="Audience Sophistication"
                options={options.audienceSophistication}
                selected={formData.audienceSophistication}
                onSelect={(v) => updateField('audienceSophistication', v)}
              />

              <TextareaField
                label="Pain Points"
                value={formData.painPoints}
                onChange={(v) => updateField('painPoints', v)}
                placeholder="What problems does your audience face?"
              />

              <TextareaField
                label="Competitors"
                value={formData.competitors}
                onChange={(v) => updateField('competitors', v)}
                placeholder="Who else is serving your audience?"
              />

              <TextareaField
                label="Aspirational Creators"
                value={formData.aspirationalCreators}
                onChange={(v) => updateField('aspirationalCreators', v)}
                placeholder="Creators you admire in your niche"
              />
            </div>
          )}

          {/* Section 2: Content Preferences */}
          {currentSection === 2 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-4xl">{sections[2].emoji}</span>
                <div>
                  <h2 className="text-2xl font-bold">{sections[2].name}</h2>
                  <p className="text-sm text-gray-400">Define your content style</p>
                </div>
              </div>

              <MultiChipSelect
                label="Brand Tone"
                options={options.brandTone}
                selected={formData.brandTone}
                onToggle={(v) => toggleMulti('brandTone', v)}
              />

              <ChipSelect
                label="Content Style"
                options={options.contentStyle}
                selected={formData.contentStyle}
                onSelect={(v) => updateField('contentStyle', v)}
              />

              <ChipSelect
                label="Recording Comfort"
                options={options.recordingComfort}
                selected={formData.recordingComfort}
                onSelect={(v) => updateField('recordingComfort', v)}
              />

              <TextareaField
                label="Topics to Avoid"
                value={formData.topicsToAvoid}
                onChange={(v) => updateField('topicsToAvoid', v)}
                placeholder="Any subjects or angles to stay away from?"
              />

              <ChipSelect
                label="Existing Content"
                options={options.existingContent}
                selected={formData.existingContent}
                onSelect={(v) => updateField('existingContent', v)}
              />

              <TextareaField
                label="Social Account URLs"
                value={formData.socialAccountUrls}
                onChange={(v) => updateField('socialAccountUrls', v)}
                placeholder="Instagram, TikTok, YouTube, LinkedIn..."
              />
            </div>
          )}

          {/* Section 3: Goals & Strategy */}
          {currentSection === 3 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-4xl">{sections[3].emoji}</span>
                <div>
                  <h2 className="text-2xl font-bold">{sections[3].name}</h2>
                  <p className="text-sm text-gray-400">Set your objectives</p>
                </div>
              </div>

              <ChipSelect
                label="Primary Goal"
                options={options.primaryGoal}
                selected={formData.primaryGoal}
                onSelect={(v) => updateField('primaryGoal', v)}
              />

              <MultiChipSelect
                label="Secondary Goals"
                options={options.secondaryGoals}
                selected={formData.secondaryGoals}
                onToggle={(v) => toggleMulti('secondaryGoals', v)}
              />

              <TextareaField
                label="Target KPIs (90 days)"
                value={formData.targetKPIs}
                onChange={(v) => updateField('targetKPIs', v)}
                placeholder="e.g., 10K followers, 500 email subscribers, $5K revenue..."
              />

              <ChipSelect
                label="Risk Tolerance"
                options={options.riskTolerance}
                selected={formData.riskTolerance}
                onSelect={(v) => updateField('riskTolerance', v)}
              />

              <ChipSelect
                label="Posting Cadence"
                options={options.postingCadence}
                selected={formData.postingCadence}
                onSelect={(v) => updateField('postingCadence', v)}
              />
            </div>
          )}

          {/* Section 4: Platforms & Distribution */}
          {currentSection === 4 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-4xl">{sections[4].emoji}</span>
                <div>
                  <h2 className="text-2xl font-bold">{sections[4].name}</h2>
                  <p className="text-sm text-gray-400">Choose where to publish</p>
                </div>
              </div>

              <ChipSelect
                label="Primary Platform"
                options={options.primaryPlatform}
                selected={formData.primaryPlatform}
                onSelect={(v) => updateField('primaryPlatform', v)}
              />

              <MultiChipSelect
                label="Secondary Platforms"
                options={options.secondaryPlatforms.filter(p => p !== formData.primaryPlatform)}
                selected={formData.secondaryPlatforms}
                onToggle={(v) => toggleMulti('secondaryPlatforms', v)}
              />

              <ChipSelect
                label="Posting Times"
                options={options.postingTimes}
                selected={formData.postingTimes}
                onSelect={(v) => updateField('postingTimes', v)}
              />

              <InputField
                label="Timezone"
                value={formData.timezone}
                onChange={(v) => updateField('timezone', v)}
                placeholder="e.g., America/New_York"
              />

              <ChipSelect
                label="Default CTA"
                options={options.defaultCTA}
                selected={formData.defaultCTA}
                onSelect={(v) => updateField('defaultCTA', v)}
              />
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-12 pt-8 border-t border-[#1a1a2e]">
            <button
              onClick={handlePrev}
              disabled={currentSection === 0}
              className="px-6 py-3 rounded-lg border border-[#1a1a2e] text-gray-400 hover:text-white hover:border-gray-700 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              ← Previous
            </button>

            {currentSection < sections.length - 1 ? (
              <button
                onClick={handleNext}
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#ff5722] to-orange-400 text-white font-medium hover:shadow-lg hover:shadow-[#ff5722]/30 transition-all"
              >
                Next →
              </button>
            ) : (
              <button
                onClick={() => setShowPreview(true)}
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#ff5722] to-orange-400 text-white font-bold hover:shadow-lg hover:shadow-[#ff5722]/50 transition-all animate-pulse"
              >
                🚀 Generate Brand Blueprint
              </button>
            )}
          </div>
        </div>
      </main>

      {/* Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-[#0e0e16] rounded-[14px] border border-[#1a1a2e] max-w-3xl w-full max-h-[80vh] overflow-y-auto p-8">
            <h2 className="text-2xl font-bold mb-6">Brand Blueprint Preview</h2>

            <div className="space-y-4 font-['JetBrains_Mono'] text-sm">
              {Object.entries(formData).map(([key, value]) => (
                <div key={key} className="border-b border-[#1a1a2e] pb-2">
                  <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">{key}</div>
                  <div className="text-gray-300">
                    {Array.isArray(value) ? value.join(', ') || '—' : value || '—'}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-8">
              <button
                onClick={() => setShowPreview(false)}
                className="flex-1 px-6 py-3 rounded-lg border border-[#1a1a2e] text-gray-400 hover:text-white hover:border-gray-700 transition-all"
              >
                Back to Edit
              </button>
              <button
                onClick={handleSubmit}
                className="flex-1 px-6 py-3 rounded-lg bg-gradient-to-r from-[#ff5722] to-orange-400 text-white font-bold hover:shadow-lg transition-all"
              >
                Confirm & Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Reusable Components
const InputField = ({ label, value, onChange, placeholder }) => (
  <div>
    <label className="block text-xs uppercase tracking-wider text-[#9898b0] mb-2">{label}</label>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-[#07070b] border border-[#1a1a2e] rounded-lg px-[14px] py-[10px] text-white focus:outline-none focus:border-[#ff5722] transition-all"
    />
  </div>
);

const TextareaField = ({ label, value, onChange, placeholder }) => (
  <div>
    <label className="block text-xs uppercase tracking-wider text-[#9898b0] mb-2">{label}</label>
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={3}
      className="w-full bg-[#07070b] border border-[#1a1a2e] rounded-lg px-[14px] py-[10px] text-white focus:outline-none focus:border-[#ff5722] transition-all resize-none"
    />
  </div>
);

const ChipSelect = ({ label, options, selected, onSelect }) => (
  <div>
    <label className="block text-xs uppercase tracking-wider text-[#9898b0] mb-2">{label}</label>
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onSelect(option)}
          className={`px-4 py-2 rounded-lg border transition-all ${
            selected === option
              ? 'bg-[#ff5722]/20 border-[#ff5722] text-[#ff5722]'
              : 'bg-[#07070b] border-[#1a1a2e] text-gray-400 hover:border-[#ff5722]/50'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  </div>
);

const MultiChipSelect = ({ label, options, selected, onToggle }) => (
  <div>
    <label className="block text-xs uppercase tracking-wider text-[#9898b0] mb-2">{label}</label>
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onToggle(option)}
          className={`px-4 py-2 rounded-lg border transition-all ${
            selected.includes(option)
              ? 'bg-[#ff5722]/20 border-[#ff5722] text-[#ff5722]'
              : 'bg-[#07070b] border-[#1a1a2e] text-gray-400 hover:border-[#ff5722]/50'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  </div>
);

export default OnboardingForm;
