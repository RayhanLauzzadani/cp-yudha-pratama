// src/components/common/Skeleton.jsx
import React from "react";

export function Skeleton({ className = "", rounded = "rounded-lg" }) {
  return (
    <div className={`relative overflow-hidden bg-gray-200 ${rounded} ${className}`}>
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.2s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
    </div>
  );
}

export const SkeletonLine = ({ w = "w-3/4" }) => (
  <Skeleton className={`h-3 ${w} rounded`} />
);

export const SkeletonBlock = ({ h = "h-40" }) => (
  <Skeleton className={`${h}`} />
);

export const SkeletonAvatar = ({ size = "h-12 w-12" }) => (
  <Skeleton className={`${size} rounded-full`} />
);

export const SkeletonChip = ({ w = "w-16" }) => (
  <Skeleton className={`h-6 ${w} rounded-full`} />
);
