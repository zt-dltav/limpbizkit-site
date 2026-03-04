"use client";

import { anton } from "@/app/fonts";

import React from "react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-8 pt-32 pb-36 overflow-hidden">

      {/* SVG filter — simple displacement only */}
      <svg className="absolute w-0 h-0 overflow-hidden">
        <defs>
         <filter id="slime" x="-12%" y="-12%" width="124%" height="190%">
  {/* Optional thickening — keep small or remove */}
  <feMorphology
    in="SourceGraphic"
    operator="dilate"
    radius="1"
    result="thick"
  />

  {/* Base wobble (subtle, slow) */}
  <feTurbulence
    type="turbulence"
    baseFrequency="0.010 0.050"
    numOctaves="2"
    seed="2"
    result="wobbleNoise"
  >
    <animate attributeName="seed" dur="1.6s" values="1;2;3;4;5;6" repeatCount="indefinite" />
  </feTurbulence>

  <feDisplacementMap
    in="thick"
    in2="wobbleNoise"
    scale="4"
    xChannelSelector="R"
    yChannelSelector="G"
    result="wobbled"
  />

  {/* Tear noise: high Y frequency = horizontal bands */}
  <feTurbulence
    type="turbulence"
    baseFrequency="0.002 0.45"
    numOctaves="1"
    seed="9"
    result="tearNoise"
  >
    <animate attributeName="seed" dur="2.4s" values="9;10;11;12;13" repeatCount="indefinite" />
  </feTurbulence>

  {/* Force alpha to 0.5 so Y displacement can be “no movement” */}
  <feComponentTransfer in="tearNoise" result="tearNoiseFixed">
    <feFuncA type="table" tableValues="0.5 0.5" />
  </feComponentTransfer>

  {/* X-only tear: X comes from R, Y comes from A (= 0.5 => zero shift) */}
  <feDisplacementMap
    in="wobbled"
    in2="tearNoiseFixed"
    scale="0"
    xChannelSelector="R"
    yChannelSelector="A"
    result="torn"
  >
    {/* Occasional tear spikes */}
    <animate
      attributeName="scale"
      dur="3.6s"
      values="0;0;0;16;0;0;10;0"
      repeatCount="indefinite"
    />
  </feDisplacementMap>

  <feMerge>
    <feMergeNode in="torn" />
  </feMerge>
</filter>
        </defs>
      </svg>

      {/* Faint green grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(61,255,20,0.028) 1px, transparent 1px), linear-gradient(90deg, rgba(61,255,20,0.028) 1px, transparent 1px)",
          backgroundSize: "90px 90px",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 15%, transparent 72%)",
        } as React.CSSProperties}
      ></div>

      {/* Radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "75vw",
          height: "60vh",
          background:
            "radial-gradient(ellipse, rgba(61,255,20,0.05) 0%, transparent 68%)",
        }}
      ></div>

      {/* Corner annotations */}
      <span className="hidden md:block absolute top-28 left-6 md:left-12 text-[0.68rem] tracking-[0.18em] uppercase text-cream/50 leading-loose pointer-events-none">
  Nu Metal · Jacksonville FL
</span>
<span className="hidden md:block absolute top-28 right-6 md:right-12 text-[0.68rem] tracking-[0.18em] uppercase text-cream/50 text-right leading-loose pointer-events-none">
  Fred Durst · Wes Borland
  <br />
  John Otto · DJ Lethal
  <br />
  Sam Rivers · 1977–2025
</span>
<span className="hidden md:block absolute bottom-24 left-6 md:left-12 text-[0.68rem] tracking-[0.18em] uppercase text-cream/50 pointer-events-none">
  40M Records Worldwide
</span>

      {/* Band name */}
<div className="relative w-full flex items-center justify-center text-center">
  <h1
    className={`${anton.className} select-none uppercase`}
    style={{
      fontSize: "clamp(5rem, 18vw, 20rem)",
      // 0.87 is too tight at this size and causes the two lines to collide (especially after the filter).
      lineHeight: "0.95",
      letterSpacing: "-0.01em",
      color: "#3dff14",
      filter: "url(#slime)",
      textShadow: `
        0 0  35px rgba(61,255,20,0.5),
        0 0  80px rgba(61,255,20,0.22),
        0 0 160px rgba(61,255,20,0.1),
        4px  5px 0 rgba(0,70,0,0.95),
        7px  9px 0 rgba(0,35,0,0.55)
      `,
    }}
  >
    <span className="block">LIMP</span>
    <span className="block">BIZKIT</span>
  </h1>

  {/* Scanlines */}
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      background:
        "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.07) 3px, rgba(0,0,0,0.07) 6px)",
    }}
  />
</div>

      {/* Divider */}
      <div className="w-24 h-px bg-green/40 my-8"></div>

      {/* Meta */}
      <div className="flex items-center gap-4 text-xs tracking-[0.25em] uppercase text-cream/40 mb-10 flex-wrap justify-center">
        <span>Est. 1995</span>
        <span className="text-green">·</span>
        <span>Jacksonville, FL</span>
        <span className="text-green">·</span>
        <span>Official Site</span>
      </div>

      {/* CTAs */}
      <div className="flex gap-4 flex-wrap justify-center">
        <a
          href="#tour"
          className="px-8 py-3 bg-green text-bg font-mono text-sm font-bold tracking-[0.15em] uppercase transition-all duration-200"
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.boxShadow =
              "0 0 28px rgba(61,255,20,0.4)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
          }}
        >
          Tour Dates
        </a>
        <a
          href="https://open.spotify.com/artist/165ZgPlLkK7bf5bDoFc6Sb"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 border border-cream/30 text-cream font-mono text-sm tracking-[0.15em] uppercase transition-all duration-200"
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.borderColor = "#3dff14";
            el.style.color = "#3dff14";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.borderColor = "";
            el.style.color = "";
          }}
        >
          Stream Now
        </a>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-cream/30">
        <span className="text-[0.68rem] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-cream/30 to-transparent"></div>
      </div>
    </section>
  );
}
