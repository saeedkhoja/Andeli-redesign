import React from "react";

const stats = [
  { val: "16+", label: "Yil tajriba", desc: "2010 yildan beri O'zbekistonda" },
  { val: "50+", label: "Model", desc: "Keng assortiment" },
  { val: "12", label: "Oy kafolat", desc: "Rasmiy kafolat" },
  { val: "1200+", label: "Mijoz", desc: "Mamnun xaridorlar" },
];

const values = [
  {
    no: "01",
    icon: "🏆",
    title: "Rasmiy diler",
    desc: "O'zbekistonda Andeli brendining rasmiy va yagona distributorimiz. Barcha mahsulotlar sertifikatlangan.",
  },
  {
    no: "02",
    icon: "✅",
    title: "100% original mahsulot",
    desc: "To'g'ridan-to'g'ri ishlab chiqaruvchidan. Soxta mahsulot yo'q — faqat original Andeli stabilizatorlari.",
  },
  {
    no: "03",
    icon: "💰",
    title: "Eng raqobatbardosh narx",
    desc: "Vositachisiz ishlash orqali eng qulay narxlarni taklif etamiz. Uzum Nasiya bo'lib to'lash mavjud.",
  },
  {
    no: "04",
    icon: "🔧",
    title: "Servis & kafolat",
    desc: "12 oy rasmiy kafolat. O'z servis markazimiz mavjud. Ehtiyot qismlar doim stokda.",
  },
  {
    no: "05",
    icon: "🚚",
    title: "Bepul yetkazib berish",
    desc: "Toshkent bo'ylab bepul yetkazib berish. O'zbekiston bo'ylab tezkor yetkazib berish xizmati.",
  },
  {
    no: "06",
    icon: "💬",
    title: "Professional maslahat",
    desc: "Mutaxassislarimiz sizga eng mos stabilizatorni tanlashda yordam beradi — bepul konsultatsiya.",
  },
];

const team = [
  { role: "Ishlab chiqaruvchi", name: "ANDELI Group Co., Ltd.", desc: "Xitoy · 1983 yildan beri" },
  { role: "Rasmiy distributor", name: "ANDELI Uzbekistan", desc: "Toshkent · 2010 yildan beri" },
];

export default function AboutUsPage() {
  return (
    <div style={{ background: "var(--bg)" }}>

      {/* Hero */}
      <section style={{ borderBottom: "1px solid var(--border)", padding: "60px 40px 52px" }} className="max-md:px-4 max-md:py-10">
        <div style={{ maxWidth: 1380, margin: "0 auto" }}>
          <div style={{ fontWeight: 700, fontSize: 12, letterSpacing: 2, color: "var(--primary)", marginBottom: 14 }}>BIZ HAQIMIZDA</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }} className="max-md:grid-cols-1">
            <div>
              <h1 style={{ fontWeight: 800, fontSize: "clamp(32px,4vw,52px)", lineHeight: 1.04, letterSpacing: "-1.6px", color: "var(--text-heading)", marginBottom: 20 }}>
                O'zbekistonda<br />
                <span style={{ color: "var(--primary)" }}>Andeli rasmiy distributori</span>
              </h1>
              <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--text-body)", maxWidth: 480 }}>
                ANDELI — elektr kuchlanish stabilizatorlarining yetakchi ishlab chiqaruvchisi. 2010 yildan beri O'zbekistonda rasmiy distributor sifatida faoliyat yuritamiz va 1200+ mamnun mijozga xizmat qilamiz.
              </p>
              <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
                <a
                  href="tel:+998977739899"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--primary)", color: "#fff", fontWeight: 700, fontSize: 15, padding: "13px 22px", borderRadius: 13, textDecoration: "none", boxShadow: "var(--shadow-btn)" }}
                >
                  Bog'lanish
                </a>
                <a
                  href="#values"
                  style={{ display: "inline-flex", alignItems: "center", color: "var(--text-heading)", fontWeight: 700, fontSize: 15, padding: "13px 22px", borderRadius: 13, border: "1.5px solid var(--border)", background: "var(--bg-card)", textDecoration: "none" }}
                >
                  Batafsil →
                </a>
              </div>
            </div>

            {/* Image */}
            <div style={{ borderRadius: 20, overflow: "hidden", border: "1px solid var(--border)" }}>
              <img
                src="/img/hero-product.png"
                alt="Andeli Stabilizator"
                style={{ width: "100%", height: 340, objectFit: "cover", objectPosition: "center", display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", borderBottom: "1px solid var(--border)" }} className="max-md:grid-cols-2">
        {stats.map((s, i) => (
          <div key={i} style={{ padding: "28px 32px", borderRight: i < 3 ? "1px solid var(--border)" : "none" }} className="max-md:even:border-r-0">
            <div style={{ fontWeight: 800, fontSize: 40, color: "var(--text-heading)", lineHeight: 1 }}>
              <span style={{ color: "var(--primary)" }}>{s.val}</span>
            </div>
            <div style={{ fontWeight: 700, fontSize: 15, color: "var(--text-heading)", marginTop: 6 }}>{s.label}</div>
            <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 3 }}>{s.desc}</div>
          </div>
        ))}
      </section>

      {/* Values */}
      <section id="values" style={{ padding: "60px 40px" }} className="max-md:px-4 max-md:py-10">
        <div style={{ maxWidth: 1380, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div style={{ fontWeight: 700, fontSize: 12, letterSpacing: 2, color: "var(--primary)", marginBottom: 10 }}>NIMA UCHUN ANDELI</div>
            <h2 style={{ fontWeight: 800, fontSize: "clamp(26px,3vw,38px)", letterSpacing: "-1.2px", color: "var(--text-heading)" }}>Bizning afzalliklarimiz</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} className="max-md:grid-cols-1 max-lg:grid-cols-2">
            {values.map(v => (
              <div
                key={v.no}
                style={{ padding: "26px 24px", borderRadius: 18, border: "1px solid var(--border)", background: "var(--bg-card)", transition: "box-shadow .2s, transform .2s" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 20px 40px rgba(26,86,201,.12)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
              >
                <div style={{ fontSize: 28, marginBottom: 14 }}>{v.icon}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <span style={{ fontWeight: 800, fontSize: 12, color: "var(--primary)", background: "var(--primary-soft)", padding: "3px 10px", borderRadius: 6 }}>{v.no}</span>
                  <h3 style={{ fontWeight: 800, fontSize: 16, color: "var(--text-heading)" }}>{v.title}</h3>
                </div>
                <p style={{ color: "var(--text-body)", fontSize: 14, lineHeight: 1.6 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand story */}
      <section style={{ borderTop: "1px solid var(--border)", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: 1380, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr" }} className="max-md:grid-cols-1">
          <div style={{ padding: "52px 40px", borderRight: "1px solid var(--border)" }} className="max-md:px-4 max-md:py-10 max-md:border-r-0 max-md:border-b">
            <div style={{ fontWeight: 700, fontSize: 12, letterSpacing: 2, color: "var(--primary)", marginBottom: 14 }}>KOMPANIYA HAQIDA</div>
            <h2 style={{ fontWeight: 800, fontSize: "clamp(22px,2.5vw,32px)", letterSpacing: "-0.8px", color: "var(--text-heading)", marginBottom: 18 }}>2010 yildan beri ishonchli hamkor</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, color: "var(--text-body)", fontSize: 15, lineHeight: 1.7 }}>
              <p>ANDELI O'zbekistonda elektr kuchlanish stabilizatorlari va elektrotexnika uskunalarining ishonchli ta'minotchisi. Uy va sanoat texnikasini kuchlanish o'zgarishlaridan himoya qilish bo'yicha zamonaviy yechimlar taklif etamiz.</p>
              <p>Keng assortimentdagi 220V stabilizatorlarimiz texnikani kuchlanish sakrashlaridan himoya qilib, uning xizmat muddatini uzaytiradi. Barcha ANDELI yechimlari ishonchlilik, samaradorlik va sifat talablariga javob beradi.</p>
              <p>Asosiy maqsadimiz — Toshkent va butun O'zbekiston bo'ylab mijozlarimizga sifatli uskunalarni raqobatbardosh narxda taqdim etish.</p>
            </div>
          </div>
          <div style={{ padding: "52px 40px" }} className="max-md:px-4 max-md:py-10">
            <div style={{ fontWeight: 700, fontSize: 12, letterSpacing: 2, color: "var(--primary)", marginBottom: 14 }}>HAMKORLAR</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {team.map(t => (
                <div key={t.role} style={{ padding: "20px 22px", borderRadius: 16, border: "1px solid var(--border)", background: "var(--bg-card)" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, color: "var(--primary)", marginBottom: 6 }}>{t.role.toUpperCase()}</div>
                  <div style={{ fontWeight: 800, fontSize: 18, color: "var(--text-heading)", marginBottom: 4 }}>{t.name}</div>
                  <div style={{ fontSize: 13, color: "var(--text-muted)" }}>{t.desc}</div>
                </div>
              ))}

              {/* Certifications */}
              <div style={{ padding: "20px 22px", borderRadius: 16, border: "1px solid var(--border)", background: "var(--bg-card)" }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, color: "var(--primary)", marginBottom: 10 }}>SERTIFIKATLAR</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {["ISO 9001", "CE", "O'z DSt", "GOST"].map(cert => (
                    <span key={cert} style={{ padding: "5px 14px", borderRadius: 8, background: "var(--primary-soft)", color: "var(--primary)", fontWeight: 700, fontSize: 13 }}>{cert}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "60px 40px", textAlign: "center", borderTop: "1px solid var(--border)" }} className="max-md:px-4 max-md:py-10">
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontWeight: 800, fontSize: "clamp(24px,3vw,36px)", letterSpacing: "-0.8px", color: "var(--text-heading)", marginBottom: 14 }}>Stabilizator kerakmi?</h2>
          <p style={{ color: "var(--text-body)", fontSize: 16, marginBottom: 28, lineHeight: 1.6 }}>Mutaxassislarimiz sizga eng mos modelni tanlashda bepul yordam beradi.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="tel:+998977739899"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--primary)", color: "#fff", fontWeight: 700, fontSize: 16, padding: "15px 28px", borderRadius: 14, textDecoration: "none", boxShadow: "var(--shadow-btn)" }}
            >
              📞 +998 97 773 98 99
            </a>
            <a
              href="mailto:andeligroupuz@gmail.com"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--text-heading)", fontWeight: 700, fontSize: 16, padding: "15px 26px", borderRadius: 14, border: "1.5px solid var(--border)", background: "var(--bg-card)", textDecoration: "none" }}
            >
              ✉ andeligroupuz@gmail.com
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
