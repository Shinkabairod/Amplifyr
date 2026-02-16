import React from "react";

const C = {
  bg: "#ffffff",
  hover: "#e5e7eb",
  active: "#e0e3e8",
  border: "#e5e7eb",
  text: "#111827",
  textSoft: "#6b7280",
  textDim: "#9ca3af",
  inset: "inset 0 2px 4px rgba(0,0,0,0.1)",
};

/**
 * Reusable Sidebar Item Component
 */
const SidebarItem = ({ icon: Icon, label, isActive, onClick, color }) => {
  return (
    <div
      className="sidebar-item"
      onClick={onClick}
      style={{
        padding: "10px 14px",
        marginBottom: 4,
        display: "flex",
        alignItems: "center",
        gap: 12,
        background: isActive ? C.active : "transparent",
        borderRadius: 8,
        border: "1px solid transparent",
        boxShadow: isActive ? C.inset : "none",
        cursor: "pointer",
        transition: "all 0.15s ease",
      }}
      onMouseEnter={(e) => {
        if (!isActive) {
          e.currentTarget.style.background = C.hover;
        }
      }}
      onMouseLeave={(e) => {
        if (!isActive) {
          e.currentTarget.style.background = "transparent";
        }
      }}
    >
      <Icon size={20} color="#111827" strokeWidth={2} />
      <div style={{ flex: 1 }}>
        <div
          style={{
            fontSize: 14,
            fontWeight: isActive ? 600 : 500,
            color: isActive ? C.text : C.textSoft,
            letterSpacing: "-0.01em",
          }}
        >
          {label}
        </div>
      </div>
    </div>
  );
};

export default SidebarItem;
