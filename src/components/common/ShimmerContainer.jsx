// src/components/common/ShimmerContainer.jsx
import React from "react";

/**
 * ShimmerContainer
 * - Render skeleton saat loading, children saat siap.
 * Props:
 * - isLoading: boolean
 * - skeleton: ReactNode | () => ReactNode
 * - children: ReactNode
 * - as: string | React.ElementType (default 'div')
 * - className: string
 * - ariaLabel: string (opsional)
 */
export default function ShimmerContainer({
  isLoading,
  skeleton,
  children,
  as: As = "div",
  className = "",
  ariaLabel = "Loading content",
}) {
  const renderSkeleton =
    typeof skeleton === "function" ? skeleton() : skeleton || null;

  return (
    <As
      className={className}
      aria-busy={isLoading ? "true" : "false"}
      aria-live="polite"
      aria-label={isLoading ? ariaLabel : undefined}
      role={isLoading ? "status" : undefined}
    >
      {isLoading ? renderSkeleton : children}
    </As>
  );
}
