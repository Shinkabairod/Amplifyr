import React, { useState } from "react";
import { Check, X, Edit3, ChevronDown, ChevronUp, Calendar, Target, Clock, Zap } from "lucide-react";
import Button from "./Button";

// ============================================================
// DESIGN SYSTEM
// ============================================================
const C = {
  bg: "#f8f8f6",
  surface: "#ffffff",
  border: "#e8e6e1",
  text: "#1a1a1a",
  textSoft: "#6b7280",
  textDim: "#9ca3af",
  approve: "#16a34a",
  reject: "#dc2626",
  warning: "#f59e0b",
  shadow: "0 1px 3px rgba(0,0,0,0.08)",
  shadowHover: "0 4px 12px rgba(0,0,0,0.12)",
};

const PILLAR_COLORS = {
  Authority: "#8b5cf6",
  Education: "#3b82f6",
  Engagement: "#ec4899",
  Conversion: "#10b981",
  Awareness: "#f59e0b",
};

const GOAL_COLORS = {
  awareness: "#3b82f6",
  consideration: "#8b5cf6",
  conversion: "#10b981",
};

// ============================================================
// DEMO DATA
// ============================================================
const DEMO_TOPICS = [
  {
    id: "topic-1",
    scheduled_date: "2025-02-20",
    status: "planned",
    plan_data: {
      topic: "Why 90% of Founders Fail at Content",
      pillar: "Authority",
      hook_type: "Contrarian Stat",
      format: "Talking head with text overlay",
      cta_type: "DM me 'ENGINE'",
      hypothesis: "Contrarian stat hooks are trending +40% this week. Bold percentage claims drive 3x more shares in founder content.",
      expected_goal: "awareness",
      priority_score: 8.7,
      duration_target: "30-45s",
    },
    client_notes: null,
  },
  {
    id: "topic-2",
    scheduled_date: "2025-02-21",
    status: "planned",
    plan_data: {
      topic: "The 3-Step Framework I Use to Script Viral Videos",
      pillar: "Education",
      hook_type: "Framework Reveal",
      format: "Screen recording + voiceover",
      cta_type: "Download template",
      hypothesis: "Framework-based content performs 60% better for educational positioning. Numbered lists create perceived completeness.",
      expected_goal: "consideration",
      priority_score: 7.8,
      duration_target: "45-60s",
    },
    client_notes: null,
  },
  {
    id: "topic-3",
    scheduled_date: "2025-02-22",
    status: "planned",
    plan_data: {
      topic: "I Spent $50k on Content. Here's What Actually Worked.",
      pillar: "Authority",
      hook_type: "Transparency Story",
      format: "Talking head with B-roll",
      cta_type: "Link in bio for full breakdown",
      hypothesis: "Money-spent hooks generate curiosity. Transparency builds trust with skeptical audiences. Budget reveals trending +25%.",
      expected_goal: "awareness",
      priority_score: 9.1,
      duration_target: "30-45s",
    },
    client_notes: null,
  },
  {
    id: "topic-4",
    scheduled_date: "2025-02-18",
    status: "topic_approved",
    plan_data: {
      topic: "The AI Tool That 10x'd My Content Output",
      pillar: "Education",
      hook_type: "Tool Recommendation",
      format: "Screen demo",
      cta_type: "Comment 'AI' for the link",
      hypothesis: "AI tool content has 85% higher save rate. Tool demos drive strong consideration metrics.",
      expected_goal: "consideration",
      priority_score: 8.2,
      duration_target: "45-60s",
    },
    client_notes: "Love this angle!",
  },
  {
    id: "topic-5",
    scheduled_date: "2025-02-17",
    status: "rejected",
    plan_data: {
      topic: "My Morning Routine as a Content Creator",
      pillar: "Engagement",
      hook_type: "Day in the Life",
      format: "Vlog style",
      cta_type: "Follow for more",
      hypothesis: "Morning routine content generates high relatability scores.",
      expected_goal: "engagement",
      priority_score: 5.9,
      duration_target: "60-90s",
    },
    client_notes: "Already covered this angle last week. Too generic.",
  },
];

// ============================================================
// COMPONENTS
// ============================================================

const PriorityBadge = ({ score }) => {
  const color = score >= 8 ? C.approve : score >= 6 ? C.warning : "#ef4444";
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        padding: "4px 10px",
        background: `${color}15`,
        color: color,
        borderRadius: 6,
        fontSize: 13,
        fontWeight: 700,
        fontFamily: "IBM Plex Mono, monospace",
      }}
    >
      <Zap size={12} fill={color} strokeWidth={2} />
      {score.toFixed(1)}
    </div>
  );
};

const PillarBadge = ({ pillar }) => {
  const color = PILLAR_COLORS[pillar] || "#6b7280";
  return (
    <div
      style={{
        display: "inline-flex",
        padding: "4px 10px",
        background: `${color}15`,
        color: color,
        borderRadius: 6,
        fontSize: 12,
        fontWeight: 600,
        fontFamily: "Instrument Sans, sans-serif",
      }}
    >
      {pillar}
    </div>
  );
};

const GoalBadge = ({ goal }) => {
  const color = GOAL_COLORS[goal] || "#6b7280";
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        padding: "4px 10px",
        background: `${color}15`,
        color: color,
        borderRadius: 6,
        fontSize: 12,
        fontWeight: 600,
      }}
    >
      <Target size={12} strokeWidth={2} />
      {goal.charAt(0).toUpperCase() + goal.slice(1)}
    </div>
  );
};

const TopicCard = ({ topic, onApprove, onReject, onModify }) => {
  const [showNotes, setShowNotes] = useState(false);
  const [notes, setNotes] = useState(topic.client_notes || "");
  const [isAnimating, setIsAnimating] = useState(false);

  const handleApprove = () => {
    setIsAnimating(true);
    setTimeout(() => onApprove(topic.id, notes), 300);
  };

  const handleReject = () => {
    const reason = window.prompt("Optional: Why are you rejecting this topic?", "");
    if (reason !== null) {
      setIsAnimating(true);
      setTimeout(() => onReject(topic.id, reason || notes), 300);
    }
  };

  return (
    <div
      style={{
        background: C.surface,
        border: `1px solid ${C.border}`,
        borderRadius: 12,
        padding: 24,
        boxShadow: C.shadow,
        transition: "all 0.3s ease",
        opacity: isAnimating ? 0.5 : 1,
        transform: isAnimating ? "translateX(-20px)" : "translateX(0)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = C.shadowHover;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = C.shadow;
      }}
    >
      {/* Header Row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <PriorityBadge score={topic.plan_data.priority_score} />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              fontSize: 13,
              color: C.textSoft,
              fontFamily: "IBM Plex Mono, monospace",
            }}
          >
            <Calendar size={14} strokeWidth={2} />
            {new Date(topic.scheduled_date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            fontSize: 13,
            color: C.textSoft,
            fontFamily: "IBM Plex Mono, monospace",
          }}
        >
          <Clock size={14} strokeWidth={2} />
          {topic.plan_data.duration_target}
        </div>
      </div>

      {/* Topic Title */}
      <h3
        style={{
          fontSize: 20,
          fontWeight: 700,
          color: C.text,
          marginBottom: 16,
          lineHeight: 1.3,
          fontFamily: "Instrument Sans, sans-serif",
          letterSpacing: "-0.02em",
        }}
      >
        {topic.plan_data.topic}
      </h3>

      {/* Tags */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          marginBottom: 16,
        }}
      >
        <PillarBadge pillar={topic.plan_data.pillar} />
        <div
          style={{
            padding: "4px 10px",
            background: "#f3f4f6",
            color: C.textSoft,
            borderRadius: 6,
            fontSize: 12,
            fontWeight: 600,
          }}
        >
          {topic.plan_data.hook_type}
        </div>
        <div
          style={{
            padding: "4px 10px",
            background: "#f3f4f6",
            color: C.textSoft,
            borderRadius: 6,
            fontSize: 12,
            fontWeight: 600,
          }}
        >
          {topic.plan_data.format}
        </div>
        <div
          style={{
            padding: "4px 10px",
            background: "#f3f4f6",
            color: C.textSoft,
            borderRadius: 6,
            fontSize: 12,
            fontWeight: 600,
          }}
        >
          {topic.plan_data.cta_type}
        </div>
      </div>

      {/* AI Reasoning */}
      <div
        style={{
          padding: 16,
          background: "#fefce8",
          border: "1px solid #fde047",
          borderRadius: 8,
          marginBottom: 16,
        }}
      >
        <div
          style={{
            fontSize: 12,
            fontWeight: 700,
            color: "#854d0e",
            marginBottom: 6,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          AI Reasoning
        </div>
        <div
          style={{
            fontSize: 14,
            color: "#713f12",
            fontStyle: "italic",
            lineHeight: 1.6,
          }}
        >
          {topic.plan_data.hypothesis}
        </div>
      </div>

      {/* Goal Badge */}
      <div style={{ marginBottom: 16 }}>
        <GoalBadge goal={topic.plan_data.expected_goal} />
      </div>

      {/* Notes Section */}
      <div style={{ marginBottom: 16 }}>
        <button
          onClick={() => setShowNotes(!showNotes)}
          style={{
            background: "none",
            border: "none",
            color: C.textSoft,
            fontSize: 13,
            fontWeight: 600,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 4,
            padding: 0,
            fontFamily: "inherit",
          }}
        >
          {showNotes ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          Add notes
        </button>
        {showNotes && (
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Add your feedback or modifications here..."
            style={{
              width: "100%",
              marginTop: 8,
              padding: "10px 14px",
              border: `1px solid ${C.border}`,
              borderRadius: 8,
              fontSize: 14,
              color: C.text,
              background: C.bg,
              outline: "none",
              resize: "vertical",
              fontFamily: "inherit",
              minHeight: 80,
            }}
          />
        )}
      </div>

      {/* Action Buttons */}
      <div style={{ display: "flex", gap: 8 }}>
        <Button
          variant="success"
          size="md"
          icon={Check}
          onClick={handleApprove}
          style={{ flex: 1 }}
        >
          Approve
        </Button>
        <Button
          variant="secondary"
          size="md"
          icon={X}
          onClick={handleReject}
          style={{
            background: `${C.reject}10`,
            color: C.reject,
            border: `1px solid ${C.reject}30`,
          }}
        >
          Reject
        </Button>
        <Button
          variant="ghost"
          size="md"
          icon={Edit3}
          onClick={() => onModify(topic.id)}
        >
          Modify
        </Button>
      </div>
    </div>
  );
};

const CollapsedTopicList = ({ topics, title, icon }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      style={{
        background: C.surface,
        border: `1px solid ${C.border}`,
        borderRadius: 12,
        overflow: "hidden",
      }}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          width: "100%",
          padding: "16px 20px",
          background: "none",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
          fontFamily: "inherit",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {icon}
          <span
            style={{
              fontSize: 16,
              fontWeight: 700,
              color: C.text,
              fontFamily: "Instrument Sans, sans-serif",
            }}
          >
            {title} ({topics.length})
          </span>
        </div>
        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isExpanded && (
        <div
          style={{
            padding: "0 20px 20px 20px",
            borderTop: `1px solid ${C.border}`,
          }}
        >
          {topics.map((topic, i) => (
            <div
              key={topic.id}
              style={{
                padding: "12px 0",
                borderBottom:
                  i < topics.length - 1 ? `1px solid ${C.border}` : "none",
              }}
            >
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: C.text,
                  marginBottom: 4,
                }}
              >
                {topic.plan_data.topic}
              </div>
              <div style={{ fontSize: 13, color: C.textSoft }}>
                {new Date(topic.scheduled_date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
              {topic.client_notes && (
                <div
                  style={{
                    marginTop: 8,
                    padding: 8,
                    background: C.bg,
                    borderRadius: 6,
                    fontSize: 13,
                    color: C.textSoft,
                    fontStyle: "italic",
                  }}
                >
                  "{topic.client_notes}"
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// ============================================================
// MAIN COMPONENT
// ============================================================
export default function TopicApproval() {
  const [topics, setTopics] = useState(DEMO_TOPICS);

  const pendingTopics = topics.filter((t) => t.status === "planned");
  const approvedTopics = topics.filter((t) => t.status === "topic_approved");
  const rejectedTopics = topics.filter((t) => t.status === "rejected");

  const handleApprove = (topicId, notes) => {
    console.log("✅ APPROVE WEBHOOK:", { topicId, notes, status: "topic_approved" });
    setTopics((prev) =>
      prev.map((t) =>
        t.id === topicId
          ? { ...t, status: "topic_approved", client_notes: notes }
          : t
      )
    );
  };

  const handleReject = (topicId, reason) => {
    console.log("❌ REJECT WEBHOOK:", { topicId, reason, status: "rejected" });
    setTopics((prev) =>
      prev.map((t) =>
        t.id === topicId ? { ...t, status: "rejected", client_notes: reason } : t
      )
    );
  };

  const handleModify = (topicId) => {
    alert(`Modify functionality for topic ${topicId} - open modal here`);
  };

  const handleApproveAll = () => {
    if (window.confirm(`Approve all ${pendingTopics.length} pending topics?`)) {
      pendingTopics.forEach((topic) => handleApprove(topic.id, "Batch approved"));
    }
  };

  const handleRejectAll = () => {
    if (window.confirm(`Reject all ${pendingTopics.length} pending topics?`)) {
      const reason = window.prompt("Reason for batch rejection:", "");
      pendingTopics.forEach((topic) => handleReject(topic.id, reason || "Batch rejected"));
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: C.bg,
        padding: 32,
        fontFamily: "Instrument Sans, -apple-system, sans-serif",
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 12,
            }}
          >
            <h1
              style={{
                fontSize: 32,
                fontWeight: 700,
                color: C.text,
                letterSpacing: "-0.03em",
              }}
            >
              Content Approval
            </h1>
            <div
              style={{
                fontSize: 14,
                color: C.textSoft,
                fontFamily: "IBM Plex Mono, monospace",
              }}
            >
              {new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </div>
          </div>

          {/* Status Bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              padding: "16px 20px",
              background: C.surface,
              border: `1px solid ${C.border}`,
              borderRadius: 12,
              boxShadow: C.shadow,
            }}
          >
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: 14,
                  color: C.textSoft,
                  marginBottom: 4,
                  fontWeight: 600,
                }}
              >
                Topics Awaiting Review
              </div>
              <div
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: C.text,
                  fontFamily: "IBM Plex Mono, monospace",
                }}
              >
                {pendingTopics.length}
              </div>
            </div>
            <div
              style={{
                fontSize: 14,
                color: C.textSoft,
                fontFamily: "IBM Plex Mono, monospace",
              }}
            >
              {approvedTopics.length}/{topics.length} approved
            </div>
          </div>

          {/* Batch Actions */}
          {pendingTopics.length > 0 && (
            <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
              <Button
                variant="success"
                size="sm"
                icon={Check}
                onClick={handleApproveAll}
              >
                Approve All
              </Button>
              <Button
                variant="secondary"
                size="sm"
                icon={X}
                onClick={handleRejectAll}
                style={{
                  background: `${C.reject}10`,
                  color: C.reject,
                  border: `1px solid ${C.reject}30`,
                }}
              >
                Reject All
              </Button>
            </div>
          )}
        </div>

        {/* Pending Topics */}
        {pendingTopics.length > 0 ? (
          <div style={{ marginBottom: 32 }}>
            <h2
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: C.text,
                marginBottom: 16,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Clock size={20} strokeWidth={2.5} color={C.warning} />
              Awaiting Review
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {pendingTopics.map((topic) => (
                <TopicCard
                  key={topic.id}
                  topic={topic}
                  onApprove={handleApprove}
                  onReject={handleReject}
                  onModify={handleModify}
                />
              ))}
            </div>
          </div>
        ) : (
          <div
            style={{
              padding: 60,
              textAlign: "center",
              background: C.surface,
              border: `1px solid ${C.border}`,
              borderRadius: 12,
              marginBottom: 32,
            }}
          >
            <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
            <div
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: C.text,
                marginBottom: 8,
              }}
            >
              All caught up!
            </div>
            <div style={{ fontSize: 14, color: C.textSoft }}>
              No topics awaiting review.
            </div>
          </div>
        )}

        {/* Approved Topics */}
        {approvedTopics.length > 0 && (
          <div style={{ marginBottom: 16 }}>
            <CollapsedTopicList
              topics={approvedTopics}
              title="Approved"
              icon={<Check size={20} strokeWidth={2.5} color={C.approve} />}
            />
          </div>
        )}

        {/* Rejected Topics */}
        {rejectedTopics.length > 0 && (
          <div style={{ marginBottom: 16 }}>
            <CollapsedTopicList
              topics={rejectedTopics}
              title="Rejected"
              icon={<X size={20} strokeWidth={2.5} color={C.reject} />}
            />
          </div>
        )}
      </div>
    </div>
  );
}
