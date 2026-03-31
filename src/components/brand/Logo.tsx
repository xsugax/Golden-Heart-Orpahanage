"use client";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "full" | "icon" | "wordmark";
  theme?: "light" | "dark";
  className?: string;
}

const sizes = {
  sm: { icon: 32, text: "text-sm", sub: "text-[8px]" },
  md: { icon: 40, text: "text-lg", sub: "text-[10px]" },
  lg: { icon: 52, text: "text-2xl", sub: "text-xs" },
  xl: { icon: 72, text: "text-4xl", sub: "text-sm" },
};

export default function Logo({
  size = "md",
  variant = "full",
  theme = "light",
  className = "",
}: LogoProps) {
  const s = sizes[size];

  const textColor = theme === "light" ? "text-navy-900" : "text-white";
  const subColor = theme === "light" ? "text-navy-400" : "text-navy-400";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Icon Mark */}
      {variant !== "wordmark" && (
        <LogoIcon size={s.icon} />
      )}

      {/* Wordmark */}
      {variant !== "icon" && (
        <div className="flex flex-col">
          <span
            className={`${s.text} font-bold ${textColor} leading-tight tracking-tight`}
            style={{ fontFamily: "'Geist', sans-serif" }}
          >
            Golden Heart
          </span>
          <span
            className={`${s.sub} ${subColor} leading-tight tracking-[0.25em] uppercase font-semibold`}
          >
            Orphanage
          </span>
        </div>
      )}
    </div>
  );
}

/**
 * The icon mark — a stylized golden heart cradling a child silhouette
 * with open hands reaching upward. Uses negative space & clean geometry.
 */
export function LogoIcon({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Golden Heart Orphanage logo"
      role="img"
    >
      <defs>
        {/* Golden gradient for the heart */}
        <linearGradient id="heartGold" x1="20" y1="15" x2="100" y2="110" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="50%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>

        {/* Warm ambient glow */}
        <radialGradient id="heartGlow" cx="60" cy="55" r="50" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
        </radialGradient>

        {/* Teal accent gradient */}
        <linearGradient id="tealAccent" x1="45" y1="30" x2="75" y2="80" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2DD4BF" />
          <stop offset="100%" stopColor="#14B8A6" />
        </linearGradient>

        {/* Subtle shadow filter */}
        <filter id="logoShadow" x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#92400E" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Background circle — like UNICEF's clean containment */}
      <circle cx="60" cy="60" r="58" fill="url(#heartGold)" filter="url(#logoShadow)" />

      {/* Inner ambient glow */}
      <circle cx="60" cy="55" r="45" fill="url(#heartGlow)" />

      {/* 
        The Heart — large, geometric, centered
        A bold heart shape using clean bezier curves
        Positioned in the upper portion of the circle
      */}
      <path
        d="M60 95
           C60 95 22 68 22 45
           C22 33 31 23 42 23
           C49 23 55 27 60 33
           C65 27 71 23 78 23
           C89 23 98 33 98 45
           C98 68 60 95 60 95Z"
        fill="white"
        fillOpacity="0.95"
      />

      {/*
        Child silhouette — centered in the heart
        Simple, iconic figure like UNICEF's child
        Head + body reaching upward with joy
      */}
      {/* Child's head */}
      <circle cx="60" cy="46" r="7.5" fill="url(#heartGold)" />

      {/* Child's body — arms reaching up in celebration */}
      <path
        d="M60 53
           L60 72
           M60 58
           L50 49
           M60 58
           L70 49
           M60 72
           L52 84
           M60 72
           L68 84"
        stroke="url(#heartGold)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* 
        Two small protective hands / wings curving around the child
        Represents care, protection, shelter 
      */}
      <path
        d="M38 52 C35 47 36 40 42 38"
        stroke="url(#tealAccent)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      />
      <path
        d="M82 52 C85 47 84 40 78 38"
        stroke="url(#tealAccent)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      />

      {/* Small sparkle / star — hope & aspiration (top-right of heart) */}
      <g transform="translate(80, 28)" opacity="0.9">
        <path
          d="M0 -4 L1.2 -1.2 L4 0 L1.2 1.2 L0 4 L-1.2 1.2 L-4 0 L-1.2 -1.2 Z"
          fill="white"
        />
      </g>

      {/* Second smaller sparkle */}
      <g transform="translate(86, 38)" opacity="0.6">
        <path
          d="M0 -2.5 L0.8 -0.8 L2.5 0 L0.8 0.8 L0 2.5 L-0.8 0.8 L-2.5 0 L-0.8 -0.8 Z"
          fill="white"
        />
      </g>
    </svg>
  );
}

/**
 * Horizontal version for wide spaces (email signatures, letterheads)
 */
export function LogoHorizontal({ theme = "light" }: { theme?: "light" | "dark" }) {
  return <Logo size="md" variant="full" theme={theme} />;
}

/**
 * Stacked version for compact spaces
 */
export function LogoStacked({
  size = "lg",
  theme = "light",
}: {
  size?: "md" | "lg" | "xl";
  theme?: "light" | "dark";
}) {
  const s = sizes[size];
  const textColor = theme === "light" ? "text-navy-900" : "text-white";
  const subColor = theme === "light" ? "text-navy-400" : "text-navy-400";

  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <LogoIcon size={s.icon} />
      <div className="flex flex-col items-center">
        <span
          className={`${s.text} font-bold ${textColor} leading-tight tracking-tight`}
        >
          Golden Heart
        </span>
        <span
          className={`${s.sub} ${subColor} leading-tight tracking-[0.25em] uppercase font-semibold mt-0.5`}
        >
          Orphanage
        </span>
      </div>
    </div>
  );
}
