import { useState } from "react";
import {
  ClipboardList,
  Search,
  Lightbulb,
  Brain,
  FileText,
  Mic,
  Film,
  Send,
  BarChart3,
  RefreshCw,
  User,
  Users,
  PenTool,
  Shield
} from "lucide-react";
import logo from "assets/img/logo/VIDEO1 .svg";
import Button from "components/Button";
import SidebarItem from "components/SidebarItem";

// ============================================================
// DATA: WORKFLOWS WITH LUCIDE ICONS
// ============================================================
const WORKFLOWS = [
  {
    id: "wf0",
    step: 0,
    name: "Onboarding",
    icon: ClipboardList,
    color: "#8b5cf6",
    description: "Client intake and brand blueprint generation",
  },
  {
    id: "wf1",
    step: 1,
    name: "Research",
    icon: Search,
    color: "#ec4899",
    description: "Market analysis and competitor intelligence",
  },
  {
    id: "wf2",
    step: 2,
    name: "Topics",
    icon: Lightbulb,
    color: "#f59e0b",
    description: "Topic ideation and content planning",
  },
  {
    id: "wf3",
    step: 3,
    name: "Decisions",
    icon: Brain,
    color: "#8b5cf6",
    description: "Content decision engine and approval",
  },
  {
    id: "wf4",
    step: 4,
    name: "Scripting",
    icon: FileText,
    color: "#3b82f6",
    description: "Script generation with AI",
  },
  {
    id: "wf5",
    step: 5,
    name: "Recording",
    icon: Mic,
    color: "#ef4444",
    description: "Video recording and capture",
  },
  {
    id: "wf6",
    step: 6,
    name: "Editing",
    icon: Film,
    color: "#06b6d4",
    description: "Automated video editing",
  },
  {
    id: "wf7",
    step: 7,
    name: "Publishing",
    icon: Send,
    color: "#10b981",
    description: "Multi-platform distribution",
  },
  {
    id: "wf8",
    step: 8,
    name: "Analytics",
    icon: BarChart3,
    color: "#8b5cf6",
    description: "Performance tracking",
  },
  {
    id: "wf9",
    step: 9,
    name: "Optimization",
    icon: RefreshCw,
    color: "#f59e0b",
    description: "Strategy optimization loop",
  },
];

// ============================================================
// ONBOARDING FORM DATA
// ============================================================
const ONBOARDING_SECTIONS = [
  {
    id: "business",
    title: "Business Foundation",
    questions: [
      { id: "business_name", label: "Business Name", type: "text", placeholder: "e.g. Amplifyr" },
      { id: "industry", label: "Industry", type: "text", placeholder: "e.g. SaaS, Coaching" },
      { id: "offer", label: "Primary Offer", type: "textarea", placeholder: "What do you sell?" },
    ]
  },
  {
    id: "audience",
    title: "Audience & ICP",
    questions: [
      { id: "target_audience", label: "Target Audience", type: "textarea", placeholder: "Describe your ideal customer" },
      { id: "competitors", label: "Competitors", type: "textarea", placeholder: "@competitor1, @competitor2" },
    ]
  },
];

// ============================================================
// STYLES (LIGHT THEME LIKE SOCIALISTICS)
// ============================================================
const C = {
  bg: "#ffffff",
  sidebar: "#f8f9fa",
  surface: "#ffffff",
  border: "#e5e7eb",
  text: "#111827",
  textSoft: "#6b7280",
  textDim: "#9ca3af",
  primary: "#1e40af",
  primaryLight: "#3b82f6",
  accent: "#8b5cf6",
  hover: "#e5e7eb",
  inset: "inset 0 2px 4px rgba(0,0,0,0.06)",
  shadow: "0 1px 3px rgba(0,0,0,0.1)",
};

// ============================================================
// USER ROLES
// ============================================================
const USER_ROLES = {
  CLIENT: "client",
  EDITOR: "editor",
  COPYWRITER: "copywriter",
  ADMIN: "admin",
};

const ROLE_CONFIG = {
  [USER_ROLES.CLIENT]: {
    label: "Client",
    icon: User,
    workflows: ["wf0", "wf1", "wf2", "wf3", "wf4", "wf5", "wf6", "wf7", "wf8", "wf9"],
  },
  [USER_ROLES.EDITOR]: {
    label: "Editor",
    icon: PenTool,
    workflows: ["wf4", "wf5", "wf6", "wf7", "wf8"],
  },
  [USER_ROLES.COPYWRITER]: {
    label: "Copywriter",
    icon: Users,
    workflows: ["wf3", "wf4", "wf8"],
  },
  [USER_ROLES.ADMIN]: {
    label: "Admin",
    icon: Shield,
    workflows: ["wf0", "wf1", "wf2", "wf3", "wf4", "wf5", "wf6", "wf7", "wf8", "wf9"],
  },
};

// ============================================================
// APP COMPONENT
// ============================================================
export default function ContentGrowthEngine() {
  const [activeWorkflow, setActiveWorkflow] = useState("wf0");
  const [onboardingStep, setOnboardingStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [currentRole, setCurrentRole] = useState(USER_ROLES.CLIENT);

  const currentWorkflow = WORKFLOWS.find(w => w.id === activeWorkflow);
  const roleConfig = ROLE_CONFIG[currentRole];
  const visibleWorkflows = WORKFLOWS.filter(wf => roleConfig.workflows.includes(wf.id));

  return (
    <div style={{
      display: "flex",
      height: "100vh",
      background: C.bg,
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.cdnfonts.com/css/object-sans');

        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { overflow: hidden; }
        ::-webkit-scrollbar { display: none; }
        * { scrollbar-width: none; -ms-overflow-style: none; }
        .btn {
          transition: all 0.15s ease;
          cursor: pointer;
          border: none;
          outline: none;
          font-family: inherit;
        }
        .btn:hover {
          transform: translateY(-1px);
        }
        .card {
          transition: all 0.2s ease;
        }
      `}</style>

      {/* ═══════════════════════════════════════════════════
           SIDEBAR (LEFT NAVIGATION)
           ═══════════════════════════════════════════════════ */}
      <aside style={{
        width: 260,
        background: C.sidebar,
        borderRight: `1px solid ${C.border}`,
        display: "flex",
        flexDirection: "column",
        flexShrink: 0,
      }}>
        {/* Logo */}
        <div style={{
          padding: "24px 20px",
          borderBottom: `1px solid ${C.border}`,
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}>
            <img
              src={logo}
              alt="AmplifyR Logo"
              style={{
                width: 56,
                height: 56,
              }}
            />
            <div>
              <div style={{
                fontSize: 18,
                fontWeight: 500,
                color: C.text,
                letterSpacing: "-0.02em",
                fontFamily: "'Object Sans', -apple-system, sans-serif"
              }}>
                AmplifyR
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav style={{
          flex: 1,
          padding: "16px 12px",
          overflowY: "auto",
        }}>
          {visibleWorkflows.map((wf) => (
            <SidebarItem
              key={wf.id}
              icon={wf.icon}
              label={wf.name}
              isActive={activeWorkflow === wf.id}
              onClick={() => setActiveWorkflow(wf.id)}
              color={wf.color}
            />
          ))}
        </nav>

        {/* Current User Role Display */}
        <div style={{
          padding: "16px",
          borderTop: `1px solid ${C.border}`,
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 12px",
            background: C.bg,
            borderRadius: 8,
            border: `1px solid ${C.border}`,
          }}>
            <roleConfig.icon size={18} color={C.text} strokeWidth={2} />
            <div style={{ flex: 1 }}>
              <div style={{
                fontSize: 13,
                fontWeight: 600,
                color: C.text,
              }}>
                {roleConfig.label}
              </div>
              <div style={{
                fontSize: 11,
                color: C.textDim,
                marginTop: 2,
              }}>
                Access Level
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* ═══════════════════════════════════════════════════
           MAIN CONTENT AREA
           ═══════════════════════════════════════════════════ */}
      <main style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}>

        {/* Content */}
        <div style={{
          flex: 1,
          overflowY: "auto",
          padding: 32,
        }}>
          {/* Page Header */}
          <div style={{ marginBottom: 48 }}>
            <h1 style={{
              fontSize: 28,
              fontWeight: 700,
              color: C.text,
              marginBottom: 8,
              letterSpacing: "-0.03em",
            }}>
              {currentWorkflow.name}
            </h1>
            <p style={{
              fontSize: 15,
              color: C.textSoft,
              fontWeight: 500,
              lineHeight: 1.6,
            }}>
              {currentWorkflow.description}
            </p>
          </div>

          {/* WF0: ONBOARDING */}
          {activeWorkflow === "wf0" && (
            <div style={{ maxWidth: 900 }}>
                {ONBOARDING_SECTIONS[onboardingStep].questions.map(q => (
                  <div key={q.id} style={{ marginBottom: 24 }}>
                    <label style={{
                      display: "block",
                      fontSize: 14,
                      fontWeight: 600,
                      color: C.text,
                      marginBottom: 8,
                      letterSpacing: "-0.01em",
                    }}>
                      {q.label}
                    </label>
                    {q.type === "text" && (
                      <input
                        type="text"
                        placeholder={q.placeholder}
                        value={formData[q.id] || ""}
                        onChange={e => setFormData(p => ({ ...p, [q.id]: e.target.value }))}
                        style={{
                          width: "100%",
                          padding: "10px 14px",
                          border: `1px solid ${C.border}`,
                          borderRadius: 8,
                          fontSize: 14,
                          color: C.text,
                          background: C.bg,
                          outline: "none",
                          fontWeight: 500,
                        }} />
                    )}
                    {q.type === "textarea" && (
                      <textarea
                        placeholder={q.placeholder}
                        value={formData[q.id] || ""}
                        onChange={e => setFormData(p => ({ ...p, [q.id]: e.target.value }))}
                        rows={4}
                        style={{
                          width: "100%",
                          padding: "10px 14px",
                          border: `1px solid ${C.border}`,
                          borderRadius: 8,
                          fontSize: 14,
                          color: C.text,
                          background: C.bg,
                          outline: "none",
                          resize: "vertical",
                          fontFamily: "inherit",
                          fontWeight: 500,
                          lineHeight: 1.6,
                        }} />
                    )}
                  </div>
                ))}

                <div style={{ display: "flex", gap: 12, marginTop: 40 }}>
                  {onboardingStep > 0 && (
                    <Button
                      variant="secondary"
                      size="md"
                      onClick={() => setOnboardingStep(p => p - 1)}
                    >
                      ← Back
                    </Button>
                  )}
                  {onboardingStep < ONBOARDING_SECTIONS.length - 1 ? (
                    <Button
                      variant="primary"
                      size="md"
                      onClick={() => setOnboardingStep(p => p + 1)}
                    >
                      Next →
                    </Button>
                  ) : (
                    <Button
                      variant="success"
                      size="md"
                      onClick={() => {
                        console.log("Submit:", formData);
                        alert("✅ Onboarding data submitted!");
                        setActiveWorkflow("wf1");
                      }}
                    >
                      Generate Blueprint
                    </Button>
                  )}
                </div>
            </div>
          )}

          {/* WF1: RESEARCH */}
          {activeWorkflow === "wf1" && (
            <div style={{ maxWidth: 1200 }}>
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 16,
              }}>
                {[
                  { label: "Instagram Posts", value: "150", color: "#ec4899" },
                  { label: "TikTok Videos", value: "200", color: "#8b5cf6" },
                  { label: "YouTube Shorts", value: "90", color: "#ef4444" },
                ].map((stat, i) => (
                  <div key={i} style={{
                    padding: 24,
                    background: C.surface,
                    borderRadius: 12,
                    textAlign: "center",
                    border: `1px solid ${C.border}`,
                  }}>
                    <div style={{
                      fontSize: 32,
                      fontWeight: 700,
                      color: stat.color,
                      marginBottom: 8,
                      letterSpacing: "-0.02em",
                    }}>
                      {stat.value}
                    </div>
                    <div style={{
                      fontSize: 14,
                      color: C.textSoft,
                      fontWeight: 600,
                    }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* WF2: TOPICS (NEW STEP) */}
          {activeWorkflow === "wf2" && (
            <div style={{ maxWidth: 1200 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { topic: "How to scale your content without burning out", score: "95", trend: "↗ Rising" },
                  { topic: "AI tools that actually save time", score: "88", trend: "🔥 Hot" },
                  { topic: "Behind the scenes of a viral video", score: "82", trend: "↗ Rising" },
                  { topic: "Mistakes founders make with content", score: "79", trend: "→ Stable" },
                ].map((item, i) => (
                  <div key={i} style={{
                    padding: 20,
                    background: C.surface,
                    borderRadius: 12,
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    border: `1px solid ${C.border}`,
                  }}>
                    <div style={{ flex: 1 }}>
                      <div style={{
                        fontSize: 16,
                        fontWeight: 600,
                        color: C.text,
                        marginBottom: 6,
                        letterSpacing: "-0.01em",
                      }}>
                        {item.topic}
                      </div>
                      <div style={{
                        fontSize: 14,
                        color: C.textSoft,
                        fontWeight: 500,
                      }}>
                        {item.trend}
                      </div>
                    </div>
                    <div style={{
                      padding: "8px 16px",
                      background: "#f59e0b20",
                      color: "#f59e0b",
                      borderRadius: 8,
                      fontSize: 15,
                      fontWeight: 700,
                    }}>
                      {item.score}%
                    </div>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => alert(`Approved topic: ${item.topic}`)}
                    >
                      Approve
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* WF3: DECISIONS */}
          {activeWorkflow === "wf3" && (
            <div style={{ maxWidth: 1200 }}>
              <p style={{
                fontSize: 14,
                color: C.textSoft,
                fontWeight: 500,
                lineHeight: 1.6,
              }}>
                Content coming soon...
              </p>
            </div>
          )}

          {/* WF4: SCRIPTING */}
          {activeWorkflow === "wf4" && (
            <div style={{ maxWidth: 1200 }}>
              <p style={{
                fontSize: 14,
                color: C.textSoft,
                fontWeight: 500,
                lineHeight: 1.6,
              }}>
                Content coming soon...
              </p>
            </div>
          )}

          {/* WF5-9: Other workflows */}
          {["wf5", "wf6", "wf7", "wf8", "wf9"].includes(activeWorkflow) && (
            <div style={{ maxWidth: 1200 }}>
              <p style={{
                fontSize: 14,
                color: C.textSoft,
                fontWeight: 500,
                lineHeight: 1.6,
              }}>
                Content coming soon...
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
