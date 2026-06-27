import React, { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { products } from "../Data/Data";
import { useTheme } from "../src/context/ThemeContext";

/* ===================== SCROLL ANIMATION HOOK ===================== */
function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold: 0.15, ...options });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function Anim({ children, cls = "anim-up", delay = 0, tag: Tag = "div", style = {}, ...rest }) {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      className={`${cls}${inView ? " in-view" : ""}${delay ? ` delay-${delay}` : ""}`}
      style={style}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* ===================== HERO CAROUSEL ===================== */
const lightSlides = [
  { src: "/img/hero-product.png", label: "SVC-D30000VA · 30 000 VA" },
  { src: "/img/hero-slide-light.png", label: "SDW-15000VA · Devoriy" },
];
const darkSlides = [
  { src: "/img/hero-product-dark.png", label: "SVC-D30000VA · 30 000 VA" },
  { src: "/img/hero-slide-dark.png", label: "SDW-15000VA · Devoriy" },
];

function HeroCarousel({ dark }) {
  const slides = dark ? darkSlides : lightSlides;
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const goTo = useCallback((i) => {
    setCurrent(i);
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setCurrent(c => (c + 1) % slides.length), 4500);
  }, [slides.length]);

  useEffect(() => {
    timerRef.current = setInterval(() => setCurrent(c => (c + 1) % slides.length), 4500);
    return () => clearInterval(timerRef.current);
  }, [slides.length]);

  // Reset index when dark mode changes
  useEffect(() => { setCurrent(0); }, [dark]);

  return (
    <div className="hero-carousel" style={{ height: "100%", minHeight: 420, background: dark ? "#0A0F1E" : "#F0F4FA" }}>
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`hero-slide ${i === current ? "active" : "inactive"}`}
          style={{ inset: 0, position: "absolute" }}
        >
          <img
            src={slide.src}
            alt={slide.label}
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      ))}

      {/* Dots */}
      <div style={{ position: "absolute", bottom: 18, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 8, zIndex: 10 }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{ width: i === current ? 24 : 8, height: 8, borderRadius: 4, border: "none", cursor: "pointer", background: i === current ? "#fff" : "rgba(255,255,255,.4)", transition: "all .3s ease", padding: 0 }}
          />
        ))}
      </div>

      {/* Slide label badge */}
      <div style={{ position: "absolute", bottom: 46, right: 20, background: "rgba(255,255,255,.92)", borderRadius: 10, padding: "7px 14px", backdropFilter: "blur(8px)", animation: "andFloat 5s ease-in-out infinite", zIndex: 10 }}>
        <div style={{ fontWeight: 800, fontSize: 13, color: "#1A56C9" }}>{slides[current].label}</div>
        <div style={{ fontSize: 10, color: "#7A879C", fontWeight: 600, marginTop: 1 }}>110–250V · 220V chiqish</div>
      </div>

      {/* Floating badge top */}
      <div style={{ position: "absolute", top: 20, left: 20, background: "rgba(255,255,255,.92)", borderRadius: 10, padding: "7px 13px", backdropFilter: "blur(8px)", animation: "andFloat2 6s ease-in-out infinite", zIndex: 10 }}>
        <div style={{ fontWeight: 800, fontSize: 13, color: "#1A56C9" }}>12 oy kafolat</div>
        <div style={{ fontSize: 10, color: "#7A879C", fontWeight: 600, marginTop: 1 }}>RASMIY · ORIGINAL</div>
      </div>
    </div>
  );
}

/* ===================== HERO SECTION ===================== */
function Hero() {
  const { dark } = useTheme();
  const [titleRef, titleIn] = useInView();
  const [descRef, descIn] = useInView();

  return (
    <section className="hero-grid">
      {/* Left */}
      <div style={{
        padding: "54px 46px",
        display: "flex", flexDirection: "column", justifyContent: "center",
        background: dark ? "transparent" : "radial-gradient(120% 120% at 0% 0%, #F7FAFF 0%, #FFFFFF 60%)",
      }}>
        <Anim cls="anim-fade" style={{ display: "inline-flex", alignItems: "center", gap: 9, alignSelf: "flex-start", padding: "7px 13px", borderRadius: 999, background: "var(--primary-soft)", border: "1px solid var(--primary-border)", color: dark ? "#9EC0FF" : "var(--primary)", fontWeight: 700, fontSize: 12, letterSpacing: 1, whiteSpace: "nowrap" }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--primary)", animation: "andDot 1.6s ease-in-out infinite" }} />
          RASMIY DILER · O'ZBEKISTON
        </Anim>

        <div ref={titleRef}>
          <h1 className={`anim-left${titleIn ? " in-view" : ""}`} style={{ fontWeight: 800, fontSize: "clamp(28px,3.8vw,52px)", lineHeight: 1.04, letterSpacing: "-1.6px", color: "var(--text-heading)", marginTop: 16 }}>
            Andeli stabilizatorlari —
          </h1>
          <h1 className={`anim-left delay-2${titleIn ? " in-view" : ""}`} style={{ fontWeight: 800, fontSize: "clamp(28px,3.8vw,52px)", lineHeight: 1.04, letterSpacing: "-1.6px", color: "var(--primary)" }}>
            16 yillik ishonch
          </h1>
        </div>

        <div ref={descRef}>
          <p className={`anim-up delay-2${descIn ? " in-view" : ""}`} style={{ marginTop: 16, fontSize: "clamp(14px,1.4vw,17px)", lineHeight: 1.65, color: "var(--text-body)", maxWidth: 440 }}>
            Original mahsulot, to'g'ridan-to'g'ri ishlab chiqaruvchidan. Texnikangizni kuchlanish sakrashlaridan ishonchli himoya qiling.
          </p>

          <div className={`anim-up delay-3${descIn ? " in-view" : ""}`} style={{ display: "flex", gap: 10, marginTop: 24, flexWrap: "wrap" }}>
            <Link to="/catalog" style={{ display: "inline-flex", alignItems: "center", background: "var(--primary)", color: "#fff", fontWeight: 700, fontSize: "clamp(14px,1.4vw,15px)", padding: "12px 22px", borderRadius: 13, boxShadow: "var(--shadow-btn)", textDecoration: "none" }}>
              Katalogni ko'rish
            </Link>
            <Link to="/contact" style={{ display: "inline-flex", alignItems: "center", color: "var(--text-heading)", fontWeight: 700, fontSize: "clamp(14px,1.4vw,15px)", padding: "12px 20px", borderRadius: 13, border: "1.5px solid var(--border)", background: "var(--bg-card)", textDecoration: "none" }}>
              Bog'lanish →
            </Link>
          </div>

          <div className={`anim-up delay-4${descIn ? " in-view" : ""}`} style={{ display: "flex", gap: 16, marginTop: 24, flexWrap: "wrap" }}>
            {["12 oy kafolat", "100% original", "Bepul yetkazib berish"].map(text => (
              <div key={text} style={{ display: "flex", alignItems: "center", gap: 7, color: "var(--text-heading)", fontWeight: 600, fontSize: 13 }}>
                <span style={{ display: "inline-flex", width: 20, height: 20, borderRadius: "50%", background: "#E7F5EC", color: "#1B9C57", alignItems: "center", justifyContent: "center", fontSize: 11, flexShrink: 0 }}>✓</span>
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right — Carousel */}
      <HeroCarousel dark={dark} />
    </section>
  );
}

/* ===================== STATS ===================== */
function useCounter(target, duration = 1800) {
  const [val, setVal] = useState(0);
  const started = useRef(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const ease = t => 1 - Math.pow(1 - t, 3);
        const tick = now => {
          const p = Math.min(1, (now - start) / duration);
          setVal(Math.round(target * ease(p)));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target, duration]);
  return [val, ref];
}

function Stats() {
  const [years, r1] = useCounter(16);
  const [mdls, r2] = useCounter(50);
  const [months, r3] = useCounter(12);
  const [clients, r4] = useCounter(1200);

  const items = [
    { ref: r1, val: years, unit: " yil", label: "Tajriba", i: 0 },
    { ref: r2, val: mdls, unit: "+", label: "Modellar", i: 1 },
    { ref: r3, val: months, unit: " oy", label: "Kafolat", i: 2 },
    { ref: r4, val: clients.toLocaleString("ru"), unit: "+", label: "Mamnun mijozlar", i: 3 },
  ];

  return (
    <div className="stats-grid">
      {items.map(({ ref, val, unit, label, i }) => (
        <div key={i} ref={ref} style={{ padding: "24px 28px", borderRight: i < 3 ? "1px solid var(--border)" : "none" }}>
          <div className="count-animate" style={{ fontWeight: 800, fontSize: "clamp(28px,2.5vw,40px)", color: "var(--text-heading)", lineHeight: 1 }}>
            {val}<span style={{ color: "var(--primary)", fontSize: "clamp(16px,1.8vw,22px)" }}>{unit}</span>
          </div>
          <div style={{ color: "var(--text-muted)", fontSize: 13, fontWeight: 600, marginTop: 6 }}>{label}</div>
        </div>
      ))}
    </div>
  );
}

/* ===================== ALL PRODUCTS ===================== */
function ProductCard({ prod, onClick, delay = 0 }) {
  const [ref, inView] = useInView();
  const isWall = prod.type === "Настенный";
  return (
    <div
      ref={ref}
      className={`pro-card anim-scale delay-${delay}${inView ? " in-view" : ""}`}
      onClick={() => onClick(prod)}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div className="pro-card-img" style={{ height: 195, background: "radial-gradient(120% 100% at 50% 30%, var(--primary-soft) 0%, var(--bg) 100%)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
        <span style={{ position: "absolute", top: 10, left: 10, padding: "4px 10px", borderRadius: 999, background: "var(--bg)", border: "1px solid var(--border)", color: "var(--primary)", fontWeight: 700, fontSize: 11, whiteSpace: "nowrap" }}>
          {isWall ? "Devoriy" : "Erga qo'yiladigan"}
        </span>
        <img src={prod.image} alt={prod.name} style={{ height: 160, objectFit: "contain", filter: "drop-shadow(0 8px 16px rgba(20,40,90,.16))", transition: "transform .3s" }} />
      </div>
      <div style={{ padding: "14px 16px 16px", display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ fontWeight: 800, fontSize: 15, color: "var(--text-heading)", marginBottom: 8, lineHeight: 1.3 }}>{prod.name}</div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 12 }}>
          <span style={{ padding: "4px 10px", borderRadius: 8, background: "var(--tag-bg)", color: "var(--tag-text)", fontWeight: 700, fontSize: 12 }}>{prod.power}</span>
          <span style={{ padding: "4px 10px", borderRadius: 8, background: "var(--tag-bg)", color: "var(--tag-text)", fontWeight: 700, fontSize: 12 }}>110–250V</span>
        </div>
        <button style={{ marginTop: "auto", width: "100%", textAlign: "center", background: "var(--primary)", color: "#fff", fontWeight: 700, fontSize: 13, padding: "10px", borderRadius: 11, border: "none", cursor: "pointer", transition: "background .2s" }}>
          Batafsil
        </button>
      </div>
    </div>
  );
}

function DetailModal({ product, onClose }) {
  const [activeImg, setActiveImg] = useState(0);
  if (!product) return null;
  const images = product.images || [product.image];
  const isWall = product.type === "Настенный";

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(8,18,42,.8)", zIndex: 500, display: "flex", alignItems: "center", justifyContent: "center", padding: 16, backdropFilter: "blur(6px)" }} onClick={onClose}>
      <div style={{ background: "#ffffff", borderRadius: 24, width: "100%", maxWidth: 640, overflow: "hidden", boxShadow: "0 40px 80px rgba(0,0,0,.4)", maxHeight: "95vh", overflowY: "auto" }} onClick={e => e.stopPropagation()}>
        <div style={{ background: "linear-gradient(135deg,#EAF1FF 0%,#F4F7FD 100%)", padding: "28px 28px 20px", display: "flex", flexDirection: "column", alignItems: "center", gap: 14, position: "relative" }}>
          <button onClick={onClose} style={{ position: "absolute", top: 14, right: 14, width: 36, height: 36, borderRadius: "50%", background: "rgba(0,0,0,.08)", border: "none", cursor: "pointer", fontSize: 20, color: "#475569", fontWeight: 700 }}>×</button>
          <img src={images[activeImg]} alt={product.name} style={{ height: 260, maxWidth: "100%", objectFit: "contain", filter: "drop-shadow(0 16px 30px rgba(20,40,90,.18))", cursor: "zoom-in" }} onClick={() => window.open(images[activeImg], "_blank")} title="Kattalashtirish uchun bosing" />
          {images.length > 1 && (
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
              {images.map((img, i) => (
                <button key={i} onClick={() => setActiveImg(i)} style={{ width: 52, height: 52, borderRadius: 10, border: "2px solid", borderColor: activeImg === i ? "#1A56C9" : "#D7E4FF", background: "#fff", cursor: "pointer", padding: 4, overflow: "hidden" }}>
                  <img src={img} alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                </button>
              ))}
            </div>
          )}
        </div>
        <div style={{ padding: "22px 26px 26px" }}>
          <h2 style={{ fontWeight: 800, fontSize: 22, color: "#0C1A36", marginBottom: 12 }}>{product.name}</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 18 }}>
            {[product.power, isWall ? "Devoriy" : "Erga qo'yiladigan", "110–250V", "220V chiqish"].map(tag => (
              <span key={tag} style={{ padding: "6px 14px", borderRadius: 10, background: "#EAF1FF", color: "#1A56C9", fontWeight: 700, fontSize: 13 }}>{tag}</span>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }}>
            {[
              { label: "Turi", value: isWall ? "Devoriy (nastenniy)" : "Erga qo'yiladigan" },
              { label: "Quvvat", value: product.power },
              { label: "Kirish kuchlanishi", value: "110 – 250 V" },
              { label: "Chiqish kuchlanishi", value: "220 V ± 5%" },
              { label: "Kafolat", value: "12 oy" },
              { label: "Yetkazib berish", value: "Bepul" },
            ].map(({ label, value }) => (
              <div key={label} style={{ padding: "10px 14px", borderRadius: 12, background: "#F7F9FC", border: "1px solid #EAEDF4" }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: "#7A879C", letterSpacing: 0.5, marginBottom: 3 }}>{label.toUpperCase()}</div>
                <div style={{ fontWeight: 700, fontSize: 14, color: "#0C1A36" }}>{value}</div>
              </div>
            ))}
          </div>
          <a href="tel:+998977739899" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, background: "#1A56C9", color: "#fff", fontWeight: 700, fontSize: 16, padding: "14px 20px", borderRadius: 14, textDecoration: "none", boxShadow: "0 14px 30px rgba(26,86,201,.32)" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.11 2.19 2 2 0 012.11 0h3a2 2 0 012 1.72 12.05 12.05 0 00.66 2.65 2 2 0 01-.45 2.11L6.2 7.61a16 16 0 006.29 6.29l1.13-1.12a2 2 0 012.11-.45 12.05 12.05 0 002.65.66A2 2 0 0122 14.92v2z"/></svg>
            Narxni bilish — +998 97 773 98 99
          </a>
        </div>
      </div>
    </div>
  );
}

function AllProducts() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filter, setFilter] = useState("Barcha");
  const [titleRef, titleIn] = useInView();

  const filtered = filter === "Barcha" ? products
    : filter === "Devoriy" ? products.filter(p => p.type === "Настенный")
    : products.filter(p => p.type === "Напольный");

  return (
    <section style={{ padding: "56px 0", borderTop: "1px solid var(--border)" }}>
      <div className="page-container">
        <div ref={titleRef} style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 28 }}>
          <div>
            <div className={`anim-fade${titleIn ? " in-view" : ""}`} style={{ fontWeight: 700, fontSize: 12, letterSpacing: 2, color: "var(--primary)", marginBottom: 10 }}>MAHSULOTLAR</div>
            <h2 className={`anim-up${titleIn ? " in-view" : ""}`} style={{ fontWeight: 800, fontSize: "clamp(24px,3vw,38px)", letterSpacing: "-1.2px", color: "var(--text-heading)" }}>
              Barcha stabilizatorlar
            </h2>
          </div>
          <div className={`anim-right${titleIn ? " in-view" : ""}`} style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {["Barcha", "Devoriy", "Erga qo'yiladigan"].map(f => (
              <button key={f} onClick={() => setFilter(f)}
                style={{ padding: "8px 16px", borderRadius: 11, border: "1.5px solid", borderColor: filter === f ? "var(--primary)" : "var(--border)", background: filter === f ? "var(--primary)" : "var(--bg-card)", color: filter === f ? "#fff" : "var(--text-nav)", fontWeight: 600, fontSize: 13, cursor: "pointer", transition: "all .15s" }}>
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="catalog-grid">
          {filtered.map((prod, i) => (
            <ProductCard key={prod.id} prod={prod} onClick={setSelectedProduct} delay={Math.min((i % 6) + 1, 6)} />
          ))}
        </div>
      </div>

      {selectedProduct && <DetailModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </section>
  );
}

/* ===================== ABOUT ===================== */
function About() {
  const [ref, inView] = useInView();
  const values = [
    { no: "01", t: "Rasmiy diler", d: "O'zbekistonda rasmiy distributor." },
    { no: "02", t: "100% original", d: "To'g'ridan-to'g'ri ishlab chiqaruvchidan." },
    { no: "03", t: "Eng yaxshi narx", d: "Bozordagi eng raqobatbardosh narxlar." },
    { no: "04", t: "Servis & kafolat", d: "12 oy rasmiy kafolat." },
  ];
  return (
    <section style={{ borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1380, margin: "0 auto" }} className="two-col-grid">
        <div ref={ref} style={{ padding: "48px 40px", display: "flex", flexDirection: "column", justifyContent: "center", borderRight: "1px solid var(--border)" }}>
          <div className={`anim-fade${inView ? " in-view" : ""}`} style={{ fontWeight: 700, fontSize: 12, letterSpacing: 2, color: "var(--primary)", marginBottom: 12 }}>BIZ HAQIMIZDA</div>
          <h2 className={`anim-left${inView ? " in-view" : ""}`} style={{ fontWeight: 800, fontSize: "clamp(22px,2.8vw,36px)", lineHeight: 1.08, letterSpacing: "-1px", color: "var(--text-heading)", marginBottom: 14 }}>
            2010 yildan beri O'zbekistonda
          </h2>
          <p className={`anim-up delay-2${inView ? " in-view" : ""}`} style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text-body)", maxWidth: 420, marginBottom: 20 }}>
            Andeli stabilizatorlarining rasmiy distributorimiz — faqat original mahsulot, sifat kafolati va eng yaxshi narx.
          </p>
          <Link to="/aboutus" className={`anim-up delay-3${inView ? " in-view" : ""}`} style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--primary)", fontWeight: 700, fontSize: 14, textDecoration: "none", border: "1.5px solid var(--primary)", padding: "9px 18px", borderRadius: 11, alignSelf: "flex-start" }}>
            Batafsil ma'lumot →
          </Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          {values.map((v, i) => (
            <Anim key={v.no} cls="anim-scale" delay={i + 1} style={{ padding: "24px", borderRight: i % 2 === 0 ? "1px solid var(--border)" : "none", borderBottom: i < 2 ? "1px solid var(--border)" : "none" }}>
              <div style={{ fontWeight: 800, fontSize: 22, color: "var(--primary)", marginBottom: 8 }}>{v.no}</div>
              <div style={{ fontWeight: 800, fontSize: 15, color: "var(--text-heading)", marginBottom: 6 }}>{v.t}</div>
              <div style={{ color: "var(--text-muted)", fontSize: 13, lineHeight: 1.5 }}>{v.d}</div>
            </Anim>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===================== CONTACT ===================== */
function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", model: "" });
  const [sent, setSent] = useState(false);
  const [ref, inView] = useInView();

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", phone: "", model: "" });
  }

  const contacts = [
    { ic: "☎", k: "TELEFON", v: "+998 97 773 98 99", href: "tel:+998977739899" },
    { ic: "✉", k: "EMAIL", v: "andeligroupuz@gmail.com", href: "mailto:andeligroupuz@gmail.com" },
    { ic: "⌖", k: "MANZIL", v: "Toshkent, O'zbekiston", href: "#" },
    { ic: "◷", k: "ISH VAQTI", v: "Dush–Juma 9:00–17:00", href: "#" },
  ];

  return (
    <section id="contact" style={{ borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1380, margin: "0 auto" }} className="two-col-grid">
        <div ref={ref} style={{ padding: "48px 40px" }}>
          <div className={`anim-fade${inView ? " in-view" : ""}`} style={{ fontWeight: 700, fontSize: 12, letterSpacing: 2, color: "var(--primary)", marginBottom: 12 }}>KONTAKTLAR</div>
          <h2 className={`anim-up${inView ? " in-view" : ""}`} style={{ fontWeight: 800, fontSize: "clamp(22px,2.8vw,34px)", letterSpacing: "-1px", color: "var(--text-heading)", marginBottom: 22 }}>Biz bilan bog'laning</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {contacts.map((c, i) => (
              <Anim key={c.k} cls="anim-left" delay={i + 1} tag="a" href={c.href} style={{ display: "flex", alignItems: "center", gap: 14, padding: 14, border: "1px solid var(--border)", borderRadius: 14, background: "var(--bg-card)", textDecoration: "none" }}>
                <div style={{ width: 40, height: 40, borderRadius: 11, background: "var(--primary-soft)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, color: "var(--primary)", fontSize: 16, flexShrink: 0 }}>{c.ic}</div>
                <div>
                  <div style={{ color: "var(--text-muted)", fontSize: 11, fontWeight: 600, letterSpacing: 0.5 }}>{c.k}</div>
                  <div style={{ fontWeight: 700, fontSize: 15, color: "var(--text-heading)", marginTop: 1 }}>{c.v}</div>
                </div>
              </Anim>
            ))}
          </div>
        </div>
        <Anim cls="anim-right" style={{ padding: "48px 40px", background: "var(--bg-secondary)", borderLeft: "1px solid var(--border)" }}>
          <div style={{ fontWeight: 800, fontSize: 20, color: "var(--text-heading)", marginBottom: 18 }}>Buyurtma qoldiring</div>
          {sent ? (
            <div style={{ padding: 22, borderRadius: 16, background: "#E7F5EC", border: "1px solid #BBE8CC", color: "#1B9C57", fontWeight: 700, fontSize: 16 }}>
              ✓ Arizangiz yuborildi! Tez orada bog'lanamiz.
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <input className="design-input" placeholder="Ism Familiya" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required />
              <input className="design-input" placeholder="+998 __ ___ __ __" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} required />
              <input className="design-input" placeholder="Qaysi model qiziqtiradi?" value={form.model} onChange={e => setForm(f => ({ ...f, model: e.target.value }))} />
              <button type="submit" style={{ background: "var(--primary)", color: "#fff", fontWeight: 700, fontSize: 15, padding: "14px", borderRadius: 13, border: "none", cursor: "pointer", boxShadow: "var(--shadow-btn)" }}>
                Yuborish
              </button>
            </form>
          )}
        </Anim>
      </div>
    </section>
  );
}

/* ===================== HOME ===================== */
export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <AllProducts />
      <About />
      <ContactSection />
    </>
  );
}
