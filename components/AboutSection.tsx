// File location: app/components/AboutSection.tsx

import React from "react";

export function AboutSection() {
  return (
    <section
      id="about"
      style={{
        paddingInline: "clamp(1.5rem, 6vw, 10rem)",
        paddingBlock: "clamp(4rem, 8vw, 9rem)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 28rem), 1fr))",
          gap: "clamp(3rem, 6vw, 7rem)",
          alignItems: "start",
        }}
      >
        {/* ── Left column — heading + origin story ── */}
        <div>
          <p
            className="uppercase text-green"
            style={{
              fontSize: "clamp(0.62rem, 0.6vw, 0.85rem)",
              letterSpacing: "0.3em",
              marginBottom: "clamp(0.75rem, 1vw, 1.25rem)",
            }}
          >
            About This Site
          </p>

          <h2
            className="font-display text-cream"
            style={{
              fontSize: "clamp(2rem, 3.5vw, 4.5rem)",
              lineHeight: 1.05,
              marginBottom: "clamp(1.5rem, 2.5vw, 2.5rem)",
            }}
          >
            Fan-made.<br />No affiliation.
          </h2>

          <div
            style={{
              width: "clamp(2rem, 3vw, 3rem)",
              height: "1px",
              background: "rgba(255,120,0,0.5)",
              marginBottom: "clamp(1.5rem, 2.5vw, 2.5rem)",
            }}
          />

          <div
            className="text-cream/55"
            style={{
              fontSize: "clamp(0.88rem, 0.9vw, 1.15rem)",
              lineHeight: 1.85,
              display: "flex",
              flexDirection: "column",
              gap: "clamp(0.9rem, 1.2vw, 1.4rem)",
            }}
          >
            <p>
              This started as a passion project — a chance to learn web
              development with a subject worth caring about. Limp Bizkit has
              been a big part of a lot of people's lives, and having a reliable
              place to find tour dates and music felt like something worth
              building.
            </p>
            <p>
              Along the way it became clear the official site had fallen a
              little behind — some out of date info, an SSL hiccup — so rather
              than wait around, this became an opportunity to fill that gap as
              best a fan site can. It's been a great excuse to pick up some new
              skills and put them to use for something genuine.
            </p>
            <p>
              This site is not affiliated with, endorsed by, or operated by the
              band, their management, or any associated label or rights holder.
              All band names, likenesses, and related marks belong to their
              respective owners. Everything here is sourced from the band's own
              official channels and kept as current as possible.
            </p>
          </div>
        </div>

        {/* ── Right column — links + band callout ── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "clamp(1.5rem, 2vw, 2rem)",
          }}
        >
          {/* Official links card */}
          <div
            style={{
              border: "1px solid rgba(255,255,255,0.07)",
              padding: "clamp(1.25rem, 1.8vw, 2rem)",
              background: "rgba(255,255,255,0.02)",
            }}
          >
            <p
              className="uppercase text-cream/30"
              style={{
                fontSize: "clamp(0.6rem, 0.55vw, 0.8rem)",
                letterSpacing: "0.3em",
                marginBottom: "clamp(0.75rem, 1vw, 1.25rem)",
              }}
            >
              Official Channels
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "clamp(0.5rem, 0.7vw, 0.9rem)",
              }}
            >
              {[
                { label: "limpbizkit.com", href: "https://limpbizkit.com" },
                { label: "YouTube", href: "https://www.youtube.com/@limpbizkit" },
                { label: "Instagram", href: "https://www.instagram.com/limpbizkit/" },
                { label: "Spotify", href: "https://open.spotify.com/artist/165ZgPlLkK7bf5bDoFc6Sb" },
                { label: "Wikipedia", href: "https://en.wikipedia.org/wiki/Limp_Bizkit" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/50 hover:text-green transition-colors duration-200 flex items-center justify-between group"
                  style={{
                    fontSize: "clamp(0.78rem, 0.75vw, 1rem)",
                    letterSpacing: "0.1em",
                    textDecoration: "none",
                    paddingBlock: "clamp(0.2rem, 0.3vw, 0.4rem)",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  {label}
                  <span
                    className="text-cream/20 group-hover:text-green transition-colors duration-200"
                    style={{ fontSize: "0.85em" }}
                  >
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Band callout card */}
          <div
            style={{
              border: "1px solid rgba(255,100,0,0.2)",
              padding: "clamp(1.25rem, 1.8vw, 2rem)",
              background: "rgba(255,80,0,0.03)",
            }}
          >
            <p
              className="uppercase text-green"
              style={{
                fontSize: "clamp(0.6rem, 0.55vw, 0.8rem)",
                letterSpacing: "0.3em",
                marginBottom: "clamp(0.75rem, 1vw, 1rem)",
              }}
            >
              A note to the band
            </p>
            <p
              className="text-cream/60"
              style={{
                fontSize: "clamp(0.82rem, 0.8vw, 1.05rem)",
                lineHeight: 1.8,
                marginBottom: "clamp(1rem, 1.5vw, 1.5rem)",
              }}
            >
              If anyone from Limp Bizkit or their team would like to take over
              this site and run it as a proper official presence, that offer
              stands — genuinely and without condition. The goal was always to
              serve the fans.
            </p>
            <a
              href="https://www.instagram.com/limpbzkt_fansite/"
            target="_blank"
            rel="noopener noreferrer"
              className="inline-block uppercase text-cream/40 hover:text-green transition-colors duration-200"
              style={{
                fontSize: "clamp(0.6rem, 0.55vw, 0.8rem)",
                letterSpacing: "0.2em",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              Get in touch →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
