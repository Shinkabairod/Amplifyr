import React from "react";

/**
 * Reusable Button Component
 * Variants: primary, secondary, accent, success
 */
const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "left",
  className = "",
  disabled = false,
  ...props
}) => {
  const variants = {
    primary: {
      background: "#1e40af",
      color: "#ffffff",
      hover: "#1e3a8a",
    },
    secondary: {
      background: "#f3f4f6",
      color: "#111827",
      hover: "#e5e7eb",
      border: "1px solid #e5e7eb",
    },
    accent: {
      background: "#8b5cf6",
      color: "#ffffff",
      hover: "#7c3aed",
    },
    success: {
      background: "#10b981",
      color: "#ffffff",
      hover: "#059669",
    },
    ghost: {
      background: "transparent",
      color: "#6b7280",
      hover: "#f3f4f6",
    },
  };

  const sizes = {
    sm: {
      padding: "6px 12px",
      fontSize: 13,
      iconSize: 14,
    },
    md: {
      padding: "8px 16px",
      fontSize: 14,
      iconSize: 16,
    },
    lg: {
      padding: "10px 20px",
      fontSize: 15,
      iconSize: 18,
    },
  };

  const variantStyle = variants[variant];
  const sizeStyle = sizes[size];

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn ${className}`}
      style={{
        padding: sizeStyle.padding,
        background: variantStyle.background,
        color: variantStyle.color,
        border: variantStyle.border || "none",
        borderRadius: 8,
        fontSize: sizeStyle.fontSize,
        fontWeight: 600,
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        transition: "all 0.15s ease",
        fontFamily: "inherit",
        outline: "none",
        letterSpacing: "-0.01em",
        whiteSpace: "nowrap",
      }}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.background = variantStyle.hover;
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          e.currentTarget.style.background = variantStyle.background;
        }
      }}
      {...props}
    >
      {Icon && iconPosition === "left" && (
        <Icon size={sizeStyle.iconSize} strokeWidth={2} />
      )}
      {children}
      {Icon && iconPosition === "right" && (
        <Icon size={sizeStyle.iconSize} strokeWidth={2} />
      )}
    </button>
  );
};

export default Button;
