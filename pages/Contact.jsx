import React, { useState } from "react";

const workDays = [
  { day: "Dushanba", time: "9:00 – 17:00" },
  { day: "Seshanba", time: "9:00 – 17:00" },
  { day: "Chorshanba", time: "9:00 – 17:00" },
  { day: "Payshanba", time: "9:00 – 17:00" },
  { day: "Juma", time: "9:00 – 17:00" },
  { day: "Shanba", time: "9:00 – 14:00" },
  { day: "Yakshanba", time: "Dam olish" },
];

const contactItems = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.11 2.19 2 2 0 012.11 0h3a2 2 0 012 1.72 12.05 12.05 0 00.66 2.65 2 2 0 01-.45 2.11L6.2 7.61a16 16 0 006.29 6.29l1.13-1.12a2 2 0 012.11-.45 12.05 12.05 0 002.65.66A2 2 0 0122 14.92v2z"/>
      </svg>
    ),
    label: "TELEFON",
    value: "+998 97 773 98 99",
    href: "tel:+998977739899",
    sub: "Har kuni 9:00 – 20:00",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: "EMAIL",
    value: "andeligroupuz@gmail.com",
    href: "mailto:andeligroupuz@gmail.com",
    sub: "24 soat ichida javob beramiz",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/>
      </svg>
    ),
    label: "MANZIL",
    value: "Toshkent, Usta Shirin ko'chasi 125",
    href: "https://yandex.ru/maps/?pt=69.245972,41.355908",
    sub: "Do'kon: Jomiy 13B",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
      </svg>
    ),
    label: "TELEGRAM",
    value: "@andeli_uz",
    href: "https://t.me/andeli_uz",
    sub: "Tezkor javob",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", model: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
    setForm({ name: "", phone: "", model: "", message: "" });
  }

  return (
    <div style={{ background: "var(--bg)" }}>

      {/* Header */}
      <section style={{ padding: "52px 40px 40px", borderBottom: "1px solid var(--border)" }} className="max-md:px-4 max-md:py-10">
        <div style={{ maxWidth: 1380, margin: "0 auto" }}>
          <div style={{ fontWeight: 700, fontSize: 12, letterSpacing: 2, color: "var(--primary)", marginBottom: 12 }}>KONTAKTLAR</div>
          <h1 style={{ fontWeight: 800, fontSize: "clamp(30px,4vw,48px)", letterSpacing: "-1.4px", color: "var(--text-heading)", marginBottom: 14 }}>
            Biz bilan <span style={{ color: "var(--primary)" }}>bog'laning</span>
          </h1>
          <p style={{ fontSize: 17, color: "var(--text-body)", maxWidth: 520, lineHeight: 1.6 }}>
            Stabilizator tanlashda yordam kerakmi? Mutaxassislarimiz bepul maslahat beradi va siz uchun eng mos modelni topadi.
          </p>
        </div>
      </section>

      {/* Contact cards + Form */}
      <section style={{ padding: "48px 40px" }} className="max-md:px-4 max-md:py-8">
        <div style={{ maxWidth: 1380, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }} className="max-md:grid-cols-1">

          {/* Left: contact info */}
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 28 }} className="max-md:grid-cols-1">
              {contactItems.map(c => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  style={{ display: "flex", gap: 14, padding: "18px 18px", borderRadius: 16, border: "1px solid var(--border)", background: "var(--bg-card)", textDecoration: "none", transition: "box-shadow .2s, transform .2s" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 28px rgba(26,86,201,.12)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
                >
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: "var(--primary-soft)", color: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {c.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: 1, color: "var(--text-muted)", marginBottom: 3 }}>{c.label}</div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: "var(--text-heading)", marginBottom: 2 }}>{c.value}</div>
                    <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{c.sub}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Work hours */}
            <div style={{ padding: "24px", borderRadius: 18, border: "1px solid var(--border)", background: "var(--bg-card)" }}>
              <div style={{ fontWeight: 700, fontSize: 12, letterSpacing: 2, color: "var(--primary)", marginBottom: 14 }}>ISH VAQTI</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {workDays.map(w => (
                  <div key={w.day} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderBottom: "1px solid var(--border)" }}>
                    <span style={{ fontSize: 14, color: "var(--text-body)", fontWeight: 500 }}>{w.day}</span>
                    <span style={{ fontSize: 14, fontWeight: 700, color: w.time === "Dam olish" ? "var(--text-muted)" : "var(--text-heading)" }}>{w.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div style={{ padding: "32px", borderRadius: 22, border: "1px solid var(--border)", background: "var(--bg-card)", height: "fit-content" }}>
            <h2 style={{ fontWeight: 800, fontSize: 22, color: "var(--text-heading)", marginBottom: 6 }}>Buyurtma qoldiring</h2>
            <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 24, lineHeight: 1.5 }}>
              Formani to'ldiring — biz siz bilan 30 daqiqa ichida bog'lanamiz.
            </p>

            {sent ? (
              <div style={{ padding: 24, borderRadius: 16, background: "#E7F5EC", border: "1px solid #BBE8CC" }}>
                <div style={{ fontSize: 24, marginBottom: 10 }}>✅</div>
                <div style={{ fontWeight: 800, fontSize: 18, color: "#1B6B3A", marginBottom: 6 }}>Arizangiz qabul qilindi!</div>
                <p style={{ color: "#2D7A4F", fontSize: 14, lineHeight: 1.5 }}>Mutaxassisimiz 30 daqiqa ichida siz bilan bog'lanadi.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 700, letterSpacing: 0.5, color: "var(--text-muted)", marginBottom: 6 }}>ISM FAMILIYA *</label>
                  <input
                    className="design-input"
                    placeholder="Masalan: Alisher Rahimov"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    required
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 700, letterSpacing: 0.5, color: "var(--text-muted)", marginBottom: 6 }}>TELEFON *</label>
                  <input
                    className="design-input"
                    placeholder="+998 __ ___ __ __"
                    value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    required
                    type="tel"
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 700, letterSpacing: 0.5, color: "var(--text-muted)", marginBottom: 6 }}>QAYSI MODEL QIZIQTIRADI?</label>
                  <input
                    className="design-input"
                    placeholder="Masalan: SVC-D5000VA yoki bilmayman"
                    value={form.model}
                    onChange={e => setForm(f => ({ ...f, model: e.target.value }))}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 700, letterSpacing: 0.5, color: "var(--text-muted)", marginBottom: 6 }}>XABAR (ixtiyoriy)</label>
                  <textarea
                    className="design-input"
                    placeholder="Qo'shimcha ma'lumot yoki savolingiz..."
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    rows={3}
                    style={{ resize: "vertical" }}
                  />
                </div>
                <button
                  type="submit"
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "var(--primary)", color: "#fff", fontWeight: 700, fontSize: 16, padding: "15px", borderRadius: 14, border: "none", cursor: "pointer", boxShadow: "var(--shadow-btn)", marginTop: 4 }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  Yuborish
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map */}
      <section style={{ padding: "0 40px 60px" }} className="max-md:px-4 max-md:pb-10">
        <div style={{ maxWidth: 1380, margin: "0 auto" }}>
          <div style={{ fontWeight: 700, fontSize: 12, letterSpacing: 2, color: "var(--primary)", marginBottom: 14 }}>MANZIL</div>
          <h2 style={{ fontWeight: 800, fontSize: "clamp(22px,2.5vw,30px)", letterSpacing: "-0.8px", color: "var(--text-heading)", marginBottom: 20 }}>Bizni qanday topish mumkin</h2>
          <div style={{ borderRadius: 20, overflow: "hidden", border: "1px solid var(--border)", boxShadow: "0 4px 20px rgba(0,0,0,.08)" }}>
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=69.245969%2C41.355724&z=18&pt=69.245972%2C41.355908%2Cpm2rdm"
              width="100%"
              height="420"
              frameBorder="0"
              allowFullScreen
              title="ANDELI joylashuvi"
              style={{ display: "block" }}
            />
          </div>
          <div style={{ display: "flex", gap: 20, marginTop: 16, flexWrap: "wrap" }}>
            <div style={{ padding: "14px 20px", borderRadius: 12, border: "1px solid var(--border)", background: "var(--bg-card)", fontSize: 14 }}>
              <span style={{ fontWeight: 700, color: "var(--text-heading)" }}>📍 Asosiy ofis: </span>
              <span style={{ color: "var(--text-body)" }}>Toshkent sh., Usta Shirin ko'chasi 125</span>
            </div>
            <div style={{ padding: "14px 20px", borderRadius: 12, border: "1px solid var(--border)", background: "var(--bg-card)", fontSize: 14 }}>
              <span style={{ fontWeight: 700, color: "var(--text-heading)" }}>🏪 Do'kon: </span>
              <span style={{ color: "var(--text-body)" }}>Jomiy 13B</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
