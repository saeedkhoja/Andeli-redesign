import React from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Bosh sahifa" },
  { to: "/catalog", label: "Katalog" },
  { to: "/blogs", label: "Blog" },
  { to: "/aboutus", label: "Biz haqimizda" },
  { to: "/contact", label: "Kontaktlar" },
];

function Footer() {
  return (
    <footer style={{
      background: "var(--bg-secondary)",
      borderTop: "1px solid var(--border)",
      padding: "48px 40px 32px",
      transition: "background .3s"
    }}>
      <div style={{ maxWidth: 1380, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 36, paddingBottom: 32, borderBottom: "1px solid var(--border)" }}>
          {/* Brand */}
          <div style={{ maxWidth: 260 }}>
            <div style={{ fontWeight: 800, fontSize: 24, color: "var(--primary)", marginBottom: 12 }}>ANDELI</div>
            <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.6 }}>
              O'zbekistonda Andeli stabilizatorlarining rasmiy distributorimiz. 2010 yildan beri.
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
              {["t.me/andeli_uz", ""].map((_, i) => (
                <div key={i} style={{ width: 34, height: 34, borderRadius: "50%", background: "var(--primary-soft)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--primary)">
                    {i === 0
                      ? <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.69 7.96c-.12.58-.47.72-.94.44l-2.6-1.92-1.25 1.21c-.14.14-.26.26-.53.26l.19-2.66 4.87-4.4c.21-.19-.05-.29-.32-.1l-6.02 3.79-2.59-.81c-.56-.18-.57-.56.13-.83l10.12-3.9c.46-.17.87.11.63.96z"/>
                      : <path d="M17 2h-10c-1.66 0-3 1.34-3 3v14c0 1.66 1.34 3 3 3h10c1.66 0 3-1.34 3-3v-14c0-1.66-1.34-3-3-3zm-5 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm5.5-9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm-5.5 1.5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5z"/>
                    }
                  </svg>
                </div>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: 12, letterSpacing: 2, color: "var(--primary)", marginBottom: 16 }}>SAHIFALAR</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {navLinks.map(({ to, label }) => (
                <Link key={to} to={to} style={{ color: "var(--text-body)", textDecoration: "none", fontSize: 15, fontWeight: 500, transition: "color .15s" }}>
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Work hours */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: 12, letterSpacing: 2, color: "var(--primary)", marginBottom: 16 }}>ISH VAQTI</h4>
            <div style={{ color: "var(--text-body)", fontSize: 14, lineHeight: 2 }}>
              <div>Dushanba – Juma</div>
              <div style={{ fontWeight: 700, color: "var(--text-heading)" }}>9:00 – 17:00</div>
              <div style={{ marginTop: 8 }}>Shanba</div>
              <div style={{ fontWeight: 700, color: "var(--text-heading)" }}>9:00 – 14:00</div>
              <div style={{ marginTop: 8, color: "var(--text-muted)" }}>Yakshanba — Dam olish</div>
            </div>
          </div>

          {/* Contacts */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: 12, letterSpacing: 2, color: "var(--primary)", marginBottom: 16 }}>KONTAKTLAR</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 14 }}>
              <div>
                <div style={{ color: "var(--text-muted)", fontSize: 12, fontWeight: 600 }}>TELEFON</div>
                <a href="tel:+998977739899" style={{ color: "var(--text-heading)", fontWeight: 700, textDecoration: "none" }}>+998 97 773 98 99</a>
              </div>
              <div>
                <div style={{ color: "var(--text-muted)", fontSize: 12, fontWeight: 600 }}>EMAIL</div>
                <a href="mailto:andeligroupuz@gmail.com" style={{ color: "var(--text-heading)", fontWeight: 700, textDecoration: "none" }}>andeligroupuz@gmail.com</a>
              </div>
              <div>
                <div style={{ color: "var(--text-muted)", fontSize: 12, fontWeight: 600 }}>MANZIL</div>
                <div style={{ color: "var(--text-heading)", fontWeight: 600 }}>Toshkent, O'zbekiston</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ color: "var(--text-muted)", fontSize: 13 }}>© 2013–2026 ANDELI.uz · Barcha huquqlar himoyalangan</p>
          <a
            href="tel:+998977739899"
            style={{
              display: "inline-flex", alignItems: "center",
              background: "var(--primary)", color: "#fff",
              fontWeight: 700, fontSize: 14, padding: "10px 18px", borderRadius: 11,
              textDecoration: "none"
            }}
          >
            +998 97 773 98 99
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
