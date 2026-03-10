"use client";

import React from "react";

// ─── Member data ─────────────────────────────────────────────────────────────
// official: null → falls back to wiki link
const MEMBERS: { name: string; href: string }[] = [
  { name: "Fred Durst",  href: "https://freddurst.com" },
  { name: "Wes Borland", href: "https://www.thewesborland.com" },
  { name: "John Otto",   href: "https://en.wikipedia.org/wiki/John_Otto_(drummer)" },
  { name: "DJ Lethal",   href: "https://djlethal.com" },
  { name: "Sam Rivers",  href: "https://en.wikipedia.org/wiki/Sam_Rivers_(bassist)" },
];

export function Hero() {
  return (
    <>
      {/*
        ── Fan Site Bar ─────────────────────────────────────────────────────
        height: 32px, z-index: 200 — sits above the nav (z-50).
        Nav.tsx has been updated to top-8 (32px) to sit flush below this bar.
        ─────────────────────────────────────────────────────────────────────
      */}
      <div
        className="fixed top-0 left-0 right-0 flex items-center justify-center gap-3 flex-wrap"
        style={{
          zIndex: 200,
          height: "32px",
          background: "rgba(8,8,8,0.95)",
          borderBottom: "1px solid rgba(255,100,0,0.2)",
          backdropFilter: "blur(8px)",
          paddingInline: "16px",
          fontSize: "clamp(0.6rem, 0.65vw, 0.9rem)",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "rgba(226,219,208,0.38)",
        }}
      >
        <span style={{
          padding: "1px 7px",
          border: "1px solid rgba(255,100,0,0.4)",
          borderRadius: "2px",
          color: "#ff7700",
        }}>
          Unofficial Fan Site
        </span>
        <span style={{ color: "rgba(226,219,208,0.15)" }}>·</span>
        <span className="hidden sm:inline">Not affiliated with or endorsed by Limp Bizkit</span>
        <span className="hidden sm:inline" style={{ color: "rgba(226,219,208,0.15)" }}>·</span>
        <a
          href="https://limpbizkit.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit", textDecoration: "none", transition: "color 0.15s" }}
          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#ff7700"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "inherit"; }}
        >
          limpbizkit.com ↗
        </a>
        <span style={{ color: "rgba(226,219,208,0.15)" }}>·</span>
        <a
          href="https://en.wikipedia.org/wiki/Limp_Bizkit"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit", textDecoration: "none", transition: "color 0.15s" }}
          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#ff7700"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "inherit"; }}
        >
          Wikipedia ↗
        </a>
      </div>

      <section
        className="relative min-h-screen flex flex-col items-center justify-center px-8 pt-32 pb-36"
        style={{ background: "#080808" }}
      >
        {/* ── SVG Filters ── */}
        <svg className="absolute w-0 h-0 overflow-hidden">
          <defs>
            <filter id="slime" x="-12%" y="-12%" width="124%" height="190%">
              <feMorphology in="SourceGraphic" operator="dilate" radius="1" result="thick" />
              <feTurbulence type="turbulence" baseFrequency="0.010 0.050" numOctaves="2" seed="2" result="wobbleNoise">
                <animate attributeName="seed" dur="1.6s" values="1;2;3;4;5;6" repeatCount="indefinite" />
              </feTurbulence>
              <feDisplacementMap in="thick" in2="wobbleNoise" scale="4" xChannelSelector="R" yChannelSelector="G" result="wobbled" />
              <feTurbulence type="turbulence" baseFrequency="0.002 0.45" numOctaves="1" seed="9" result="tearNoise">
                <animate attributeName="seed" dur="2.4s" values="9;10;11;12;13" repeatCount="indefinite" />
              </feTurbulence>
              <feComponentTransfer in="tearNoise" result="tearNoiseFixed">
                <feFuncA type="table" tableValues="0.5 0.5" />
              </feComponentTransfer>
              <feDisplacementMap in="wobbled" in2="tearNoiseFixed" scale="0" xChannelSelector="R" yChannelSelector="A" result="torn">
                <animate attributeName="scale" dur="3.6s" values="0;0;0;16;0;0;10;0" repeatCount="indefinite" />
              </feDisplacementMap>
              <feMerge><feMergeNode in="torn" /></feMerge>
            </filter>
          </defs>
        </svg>

        {/* Faint grid */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage:
            "linear-gradient(rgba(255,80,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,80,0,0.04) 1px, transparent 1px)",
          backgroundSize: "90px 90px",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 15%, transparent 72%)",
        } as React.CSSProperties} />

        {/* ── Corner: top-left ── */}
        <span
          className="hidden md:block absolute top-28 left-6 md:left-12 leading-loose pointer-events-none"
          style={{ fontSize: "clamp(0.68rem, 0.9vw, 1.1rem)", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(226,219,208,0.45)" }}
        >
          Nu Metal · Jacksonville FL
        </span>

        {/* ── Corner: top-right — member list, each name is a single link ── */}
        <div
          className="hidden md:block absolute top-28 right-6 md:right-12 text-right"
          style={{
            fontSize: "clamp(0.68rem, 0.9vw, 1.1rem)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(226,219,208,0.45)",
            lineHeight: 2.1,
          }}
        >
          {MEMBERS.map((member, i) => (
            <React.Fragment key={member.name}>
              <a
                href={member.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", textDecoration: "none", transition: "color 0.15s", whiteSpace: "nowrap" }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#ff7700"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "inherit"; }}
              >
                {member.name}
              </a>
              {/* Inline years after Sam Rivers */}
              {i === MEMBERS.length - 1 && (
                <span style={{ opacity: 0.5 }}> · 1977–2025</span>
              )}
              {/* Dot between pairs on the same line, line break between pairs */}
              {i < MEMBERS.length - 1 && (
                i % 2 === 0
                  ? <span style={{ opacity: 0.4 }}> · </span>
                  : <br />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* ── Corner: bottom-left ── */}
        <span
          className="hidden md:block absolute bottom-24 left-6 md:left-12 pointer-events-none"
          style={{ fontSize: "clamp(0.68rem, 0.9vw, 1.1rem)", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(226,219,208,0.45)" }}
        >
          40M Records Worldwide
        </span>

        {/* ── MAIN TITLE ── */}
        <div className="relative w-full flex items-center justify-center text-center z-10">
          <div className="hero-fire-wrap" style={{ width: "100%", maxWidth: "1400px", padding: "0 2rem" }}>
            <svg
              viewBox="0 0 1000 520"
              preserveAspectRatio="xMidYMid meet"
              className="hero-title select-none w-full"
              style={{ overflow: "visible" }}
              aria-label="LIMP BIZKIT"
            >
              <defs>
                <linearGradient id="limpGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%"   stopColor="#fffff0" />
                  <stop offset="30%"  stopColor="#ffee88" />
                  <stop offset="65%"  stopColor="#ffc200" />
                  <stop offset="100%" stopColor="#e07800" />
                </linearGradient>
                <linearGradient id="bizkitGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%"   stopColor="#ffdd00" />
                  <stop offset="35%"  stopColor="#ff8800" />
                  <stop offset="70%"  stopColor="#ff3300" />
                  <stop offset="100%" stopColor="#cc1100" />
                </linearGradient>
                <filter id="graffiti" filterUnits="userSpaceOnUse" x="-100" y="-100" width="1200" height="800">
                  <feTurbulence type="fractalNoise" baseFrequency="0.055 0.04" numOctaves="3" seed="3" result="rough" />
                  <feDisplacementMap in="SourceGraphic" in2="rough" scale="2" xChannelSelector="R" yChannelSelector="G" result="roughened" />
                  <feTurbulence type="turbulence" baseFrequency="0.035 0.003" numOctaves="1" seed="6" result="dripNoise">
                    <animate attributeName="seed" dur="16s" values="6;7;8;9;8;7;6" keyTimes="0;0.17;0.33;0.5;0.67;0.83;1" calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1" repeatCount="indefinite" />
                  </feTurbulence>
                  <feComponentTransfer in="dripNoise" result="dripFixed">
                    <feFuncA type="table" tableValues="0.5 0.5" />
                  </feComponentTransfer>
                  <feDisplacementMap in="roughened" in2="dripFixed" xChannelSelector="A" yChannelSelector="R">
                    <animate attributeName="scale" dur="16s" values="0;0;10;10;0;0" keyTimes="0;0.2;0.4;0.6;0.8;1" calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1" repeatCount="indefinite" />
                  </feDisplacementMap>
                </filter>
              </defs>
              <text x="500" y="240" textAnchor="middle" fontFamily="'Permanent Marker', cursive" fontSize="260" fill="url(#limpGrad)" filter="url(#graffiti)">LIMP</text>
              <text x="500" y="490" textAnchor="middle" fontFamily="'Permanent Marker', cursive" fontSize="260" fill="url(#bizkitGrad)" filter="url(#graffiti)">BIZKIT</text>
            </svg>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="w-24 h-px my-8" style={{ background: "rgba(255,120,0,0.5)", filter: "url(#slime)" }} />

        {/* ── Meta ── */}
        <div
          className="flex items-center gap-4 tracking-[0.25em] uppercase mb-10 flex-wrap justify-center"
          style={{ fontSize: "clamp(0.65rem, 0.85vw, 1rem)", color: "rgba(226,219,208,0.4)" }}
        >
          <span>Est. 1995</span>
          <span style={{ color: "#ff7700" }}>·</span>
          <span>Jacksonville, FL</span>
          <span style={{ color: "#ff7700" }}>·</span>
          <span style={{
            padding: "1px 8px",
            border: "1px solid rgba(255,100,0,0.35)",
            borderRadius: "2px",
            color: "#ff7700",
            letterSpacing: "0.2em",
          }}>
            Fan Site
          </span>
        </div>

        {/* ── CTAs ── */}
        <div className="flex gap-4 flex-wrap justify-center">
          <a
            href="#tour"
            className="font-mono font-bold tracking-[0.15em] uppercase transition-all duration-200"
            style={{ padding: "clamp(10px,1vw,14px) clamp(24px,3vw,40px)", fontSize: "clamp(0.72rem, 0.9vw, 1rem)", background: "#ff6600", color: "#080808" }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 28px rgba(255,100,0,0.6)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none"; }}
          >
            Tour Dates
          </a>
          <a
            href="https://open.spotify.com/artist/165ZgPlLkK7bf5bDoFc6Sb"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono tracking-[0.15em] uppercase transition-all duration-200"
            style={{ padding: "clamp(10px,1vw,14px) clamp(24px,3vw,40px)", fontSize: "clamp(0.72rem, 0.9vw, 1rem)", border: "1px solid rgba(226,219,208,0.25)", color: "rgba(226,219,208,0.6)" }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "#ff6600";
              el.style.color = "#ff6600";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "rgba(226,219,208,0.25)";
              el.style.color = "rgba(226,219,208,0.6)";
            }}
          >
            Stream Now
          </a>
        </div>

        {/* ── Scroll hint ── */}
        <div
          className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          style={{ color: "rgba(226,219,208,0.25)" }}
        >
          <span style={{ fontSize: "clamp(0.62rem, 0.75vw, 0.85rem)", letterSpacing: "0.3em", textTransform: "uppercase" }}>Scroll</span>
          <div className="w-px h-12" style={{ background: "linear-gradient(to bottom, rgba(226,219,208,0.25), transparent)" }} />
        </div>

      </section>
    </>
  );
}
