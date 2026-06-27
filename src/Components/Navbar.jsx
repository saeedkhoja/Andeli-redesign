import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { to: "/", label: "Bosh sahifa" },
  { to: "/catalog", label: "Katalog" },
  { to: "/blogs", label: "Blog" },
  { to: "/aboutus", label: "Biz haqimizda" },
  { to: "/contact", label: "Kontaktlar" },
];

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}
function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}
function MenuIcon() {
  return (
    <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
      <rect width="22" height="2" rx="1" fill="white"/>
      <rect y="7" width="16" height="2" rx="1" fill="white"/>
      <rect y="14" width="22" height="2" rx="1" fill="white"/>
    </svg>
  );
}
function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  );
}

export default function Navbar() {
  const { dark, toggle } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinkStyle = (isActive) => ({
    color: isActive ? "var(--nav-active)" : "var(--text-nav)",
    textDecoration: "none",
    fontWeight: 600,
    fontSize: 14,
    transition: "color .15s",
    padding: "4px 0",
    borderBottom: isActive ? "2px solid var(--primary)" : "2px solid transparent",
  });

  return (
    <>
      <header style={{
        borderBottom: "1px solid var(--border)",
        background: "var(--bg)",
        position: "sticky", top: 0, zIndex: 100,
        transition: "background .3s, border-color .3s",
      }}>
        <div style={{ maxWidth: 1380, margin: "0 auto", padding: "0 40px", display: "flex", alignItems: "center", gap: 32, height: 64 }}>

          {/* Logo */}
          <Link to="/" style={{ fontWeight: 800, fontSize: 22, letterSpacing: "-0.6px", color: "var(--primary)", textDecoration: "none", flexShrink: 0 }}>
            ANDELI
          </Link>

          {/* Desktop Nav */}
          <nav style={{ gap: 20, alignItems: "center" }} className="nav-desktop">
            {navLinks.map(({ to, label }) => (
              <NavLink key={to} to={to} end={to === "/"} style={({ isActive }) => navLinkStyle(isActive)}>
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Right */}
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 10 }}>
            {/* Theme toggle */}
            <button
              onClick={toggle}
              title={dark ? "Light mode" : "Dark mode"}
              style={{ width: 38, height: 38, borderRadius: 10, border: "1.5px solid var(--border)", background: "var(--bg-secondary)", color: "var(--text-nav)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "all .2s", flexShrink: 0 }}
            >
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>

            {/* Phone CTA — hide on small screens */}
            <a href="tel:+998977739899"
              className="phone-cta"
              style={{ alignItems: "center", background: "var(--primary)", color: "#fff", fontWeight: 700, fontSize: 14, padding: "9px 18px", borderRadius: 11, boxShadow: "0 6px 18px rgba(26,86,201,.28)", textDecoration: "none", flexShrink: 0, whiteSpace: "nowrap" }}
            >
              +998 97 773 98 99
            </a>

            {/* Mobile burger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="nav-mobile-btn"
              style={{ width: 40, height: 40, borderRadius: 10, background: "var(--primary)", border: "none", cursor: "pointer", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.55)", zIndex: 200, backdropFilter: "blur(4px)" }}
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div style={{
        position: "fixed", top: 0, right: 0, height: "100%", width: "78%", maxWidth: 320,
        background: "var(--bg)", zIndex: 300, padding: "0",
        boxShadow: "-8px 0 40px rgba(0,0,0,.25)",
        transform: mobileOpen ? "translateX(0)" : "translateX(105%)",
        transition: "transform .3s cubic-bezier(.4,0,.2,1)",
        display: "flex", flexDirection: "column",
      }}>
        {/* Drawer header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 24px", borderBottom: "1px solid var(--border)" }}>
          <span style={{ fontWeight: 800, fontSize: 20, color: "var(--primary)" }}>ANDELI</span>
          <button onClick={() => setMobileOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-nav)", display: "flex" }}>
            <CloseIcon />
          </button>
        </div>

        {/* Nav links */}
        <nav style={{ padding: "16px 16px", display: "flex", flexDirection: "column", gap: 4, flex: 1 }}>
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={() => setMobileOpen(false)}
              style={({ isActive }) => ({
                padding: "13px 16px", borderRadius: 12, textDecoration: "none",
                fontWeight: 600, fontSize: 16,
                background: isActive ? "var(--primary-soft)" : "transparent",
                color: isActive ? "var(--primary)" : "var(--text-nav)",
                transition: "background .15s",
              })}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Drawer footer */}
        <div style={{ padding: "16px 16px 32px", borderTop: "1px solid var(--border)", display: "flex", flexDirection: "column", gap: 10 }}>
          <a href="tel:+998977739899"
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "var(--primary)", color: "#fff", fontWeight: 700, fontSize: 15, padding: "13px", borderRadius: 13, textDecoration: "none" }}
          >
            📞 +998 97 773 98 99
          </a>
          <a href="mailto:andeligroupuz@gmail.com"
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, color: "var(--text-body)", fontWeight: 600, fontSize: 14, padding: "10px", borderRadius: 12, border: "1px solid var(--border)", textDecoration: "none" }}
          >
            ✉ andeligroupuz@gmail.com
          </a>
        </div>
      </div>
    </>
  );
}
