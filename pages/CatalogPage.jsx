import React, { useState } from "react";
import { products } from "../Data/Data";

const mountTypes = ["Barcha", "Devoriy", "Erga qo'yiladigan"];
const powerOptions = [
  "500 VA","1000 VA","1500 VA","2000 VA","2500 VA","3000 VA",
  "5000 VA","7500 VA","10000 VA","15000 VA","20000 VA","30000 VA",
];

/* ===== DETAIL MODAL ===== */
function DetailModal({ product, onClose }) {
  const [activeImg, setActiveImg] = useState(0);
  if (!product) return null;

  const images = product.images || [product.image];
  const isWall = product.type === "Настенный";

  return (
    <div
      style={{ position: "fixed", inset: 0, background: "rgba(8,18,42,.8)", zIndex: 500, display: "flex", alignItems: "center", justifyContent: "center", padding: 16, backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <div
        style={{ background: "#ffffff", borderRadius: 24, width: "100%", maxWidth: 640, overflow: "hidden", boxShadow: "0 40px 80px rgba(0,0,0,.4)", maxHeight: "95vh", overflowY: "auto" }}
        onClick={e => e.stopPropagation()}
      >
        {/* Image */}
        <div style={{ background: "linear-gradient(135deg,#EAF1FF 0%,#F4F7FD 100%)", padding: "28px 28px 20px", display: "flex", flexDirection: "column", alignItems: "center", gap: 14, position: "relative" }}>
          <button
            onClick={onClose}
            style={{ position: "absolute", top: 14, right: 14, width: 36, height: 36, borderRadius: "50%", background: "rgba(0,0,0,.08)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, color: "#475569", fontWeight: 700, lineHeight: 1 }}
          >×</button>

          <img
            src={images[activeImg]}
            alt={product.name}
            style={{ height: 260, maxWidth: "100%", objectFit: "contain", filter: "drop-shadow(0 16px 30px rgba(20,40,90,.18))", transition: "opacity .2s", cursor: "zoom-in" }}
            onClick={() => window.open(images[activeImg], "_blank")}
            title="Kattalashtirish uchun bosing"
          />

          {images.length > 1 && (
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  style={{ width: 52, height: 52, borderRadius: 10, border: "2px solid", borderColor: activeImg === i ? "#1A56C9" : "#D7E4FF", background: "#fff", cursor: "pointer", padding: 4, overflow: "hidden", transition: "border-color .15s", flexShrink: 0 }}
                >
                  <img src={img} alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div style={{ padding: "22px 26px 26px" }}>
          <h2 style={{ fontWeight: 800, fontSize: 22, color: "#0C1A36", marginBottom: 12 }}>{product.name}</h2>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 18 }}>
            {[product.power, isWall ? "Devoriy" : "Erga qo'yiladigan", "110–250V", "220V chiqish"].map(tag => (
              <span key={tag} style={{ padding: "6px 14px", borderRadius: 10, background: "#EAF1FF", color: "#1A56C9", fontWeight: 700, fontSize: 13 }}>{tag}</span>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }} className="max-sm:grid-cols-1">
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

          <a
            href="tel:+998977739899"
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, background: "#1A56C9", color: "#fff", fontWeight: 700, fontSize: 16, padding: "14px 20px", borderRadius: 14, textDecoration: "none", boxShadow: "0 14px 30px rgba(26,86,201,.32)" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.11 2.19 2 2 0 012.11 0h3a2 2 0 012 1.72 12.05 12.05 0 00.66 2.65 2 2 0 01-.45 2.11L6.2 7.61a16 16 0 006.29 6.29l1.13-1.12a2 2 0 012.11-.45 12.05 12.05 0 002.65.66A2 2 0 0122 14.92v2z"/></svg>
            Narxni bilish — +998 97 773 98 99
          </a>
        </div>
      </div>
    </div>
  );
}

/* ===== PRODUCT CARD ===== */
function ProductCard({ prod, onClick }) {
  const isWall = prod.type === "Настенный";
  return (
    <div className="pro-card" onClick={() => onClick(prod)} style={{ display: "flex", flexDirection: "column" }}>
      <div className="pro-card-img" style={{ height: 210, background: "radial-gradient(120% 100% at 50% 30%, var(--primary-soft) 0%, var(--bg) 100%)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
        <span style={{ position: "absolute", top: 10, left: 10, padding: "4px 10px", borderRadius: 999, background: "var(--bg)", border: "1px solid var(--border)", color: "var(--primary)", fontWeight: 700, fontSize: 11, whiteSpace: "nowrap" }}>
          {isWall ? "Devoriy" : "Erga qo'yiladigan"}
        </span>
        <img src={prod.image} alt={prod.name} style={{ height: 170, objectFit: "contain", filter: "drop-shadow(0 8px 16px rgba(20,40,90,.16))", transition: "transform .25s" }} />
      </div>
      <div style={{ padding: "14px 16px 18px", display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ fontWeight: 800, fontSize: 15, color: "var(--text-heading)", marginBottom: 8, lineHeight: 1.3 }}>{prod.name}</div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 12 }}>
          <span style={{ padding: "4px 10px", borderRadius: 8, background: "var(--tag-bg)", color: "var(--tag-text)", fontWeight: 700, fontSize: 12 }}>{prod.power}</span>
          <span style={{ padding: "4px 10px", borderRadius: 8, background: "var(--tag-bg)", color: "var(--tag-text)", fontWeight: 700, fontSize: 12 }}>110–250V</span>
        </div>
        <button style={{ marginTop: "auto", width: "100%", textAlign: "center", background: "var(--primary)", color: "#fff", fontWeight: 700, fontSize: 14, padding: "10px 12px", borderRadius: 11, border: "none", cursor: "pointer", transition: "background .2s" }}>
          Batafsil
        </button>
      </div>
    </div>
  );
}

/* ===== MAIN PAGE ===== */
export default function CatalogPage() {
  const [filterType, setFilterType] = useState("Barcha");
  const [filterPower, setFilterPower] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showFilter, setShowFilter] = useState(false);

  const filtered = products.filter(p => {
    const typeOk = filterType === "Barcha"
      || (filterType === "Devoriy" ? p.type === "Настенный" : p.type === "Напольный");
    const powerOk = !filterPower || p.power === filterPower;
    return typeOk && powerOk;
  });

  const clearAll = () => { setFilterType("Barcha"); setFilterPower(null); };
  const hasFilter = filterType !== "Barcha" || !!filterPower;

  return (
    <div style={{ background: "var(--bg)" }}>
      {/* Header */}
      <section style={{ padding: "48px 0 36px", borderBottom: "1px solid var(--border)" }}>
        <div className="page-container">
          <div style={{ fontWeight: 700, fontSize: 12, letterSpacing: 2, color: "var(--primary)", marginBottom: 10 }}>MAHSULOTLAR</div>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <div>
              <h1 style={{ fontWeight: 800, fontSize: "clamp(28px,3.5vw,44px)", letterSpacing: "-1.2px", color: "var(--text-heading)", lineHeight: 1.06 }}>
                Andeli stabilizatorlari
              </h1>
              <p style={{ marginTop: 10, fontSize: 16, color: "var(--text-body)" }}>
                {products.length} ta model — 500 VA dan 30 000 VA gacha
              </p>
            </div>
            <button
              onClick={() => setShowFilter(f => !f)}
              style={{ display: "flex", alignItems: "center", gap: 8, padding: "11px 20px", borderRadius: 12, border: "1.5px solid", borderColor: showFilter ? "var(--primary)" : "var(--border)", background: showFilter ? "var(--primary-soft)" : "var(--bg-card)", color: showFilter ? "var(--primary)" : "var(--text-nav)", fontWeight: 700, fontSize: 14, cursor: "pointer", transition: "all .15s", whiteSpace: "nowrap" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
              Filtr {hasFilter ? "✓" : ""}
            </button>
          </div>
        </div>
      </section>

      {/* Filter Panel */}
      {showFilter && (
        <section style={{ borderBottom: "1px solid var(--border)", background: "var(--bg-secondary)" }}>
          <div className="page-container" style={{ padding: "20px 40px" }}>
            <div style={{ display: "flex", gap: 32, flexWrap: "wrap", alignItems: "flex-start" }}>
              {/* Type */}
              <div>
                <div style={{ fontWeight: 700, fontSize: 11, color: "var(--text-muted)", letterSpacing: 1.5, marginBottom: 10 }}>TURI</div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {mountTypes.map(t => (
                    <button key={t} onClick={() => { setFilterType(t); setFilterPower(null); }}
                      style={{ padding: "8px 16px", borderRadius: 10, border: "1.5px solid", borderColor: filterType === t ? "var(--primary)" : "var(--border)", background: filterType === t ? "var(--primary)" : "var(--bg-card)", color: filterType === t ? "#fff" : "var(--text-nav)", fontWeight: 600, fontSize: 13, cursor: "pointer", transition: "all .15s" }}
                    >{t}</button>
                  ))}
                </div>
              </div>
              {/* Power */}
              <div style={{ flex: 1, minWidth: 200 }}>
                <div style={{ fontWeight: 700, fontSize: 11, color: "var(--text-muted)", letterSpacing: 1.5, marginBottom: 10 }}>QUVVAT</div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {powerOptions.map(p => (
                    <button key={p} onClick={() => setFilterPower(filterPower === p ? null : p)}
                      style={{ padding: "7px 14px", borderRadius: 10, border: "1.5px solid", borderColor: filterPower === p ? "var(--primary)" : "var(--border)", background: filterPower === p ? "var(--primary)" : "var(--bg-card)", color: filterPower === p ? "#fff" : "var(--text-nav)", fontWeight: 600, fontSize: 13, cursor: "pointer", transition: "all .15s" }}
                    >{p}</button>
                  ))}
                </div>
              </div>
              {hasFilter && (
                <button onClick={clearAll} style={{ alignSelf: "flex-end", padding: "8px 16px", borderRadius: 10, border: "none", background: "#FFE0E0", color: "#B91C1C", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                  Tozalash ×
                </button>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Products Grid */}
      <section style={{ padding: "36px 0 60px" }}>
        <div className="page-container">
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 20px", color: "var(--text-muted)" }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
              <div style={{ fontWeight: 700, fontSize: 18 }}>Mahsulot topilmadi</div>
              <button onClick={clearAll} style={{ marginTop: 16, padding: "10px 24px", borderRadius: 12, background: "var(--primary)", color: "#fff", border: "none", cursor: "pointer", fontWeight: 700 }}>Filterni tozalash</button>
            </div>
          ) : (
            <>
              <div style={{ marginBottom: 20, color: "var(--text-muted)", fontSize: 14 }}>
                {filtered.length} ta mahsulot topildi
              </div>
              <div className="catalog-grid">
                {filtered.map(prod => (
                  <ProductCard key={prod.id} prod={prod} onClick={setSelectedProduct} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA */}
      <section style={{ borderTop: "1px solid var(--border)", padding: "48px 0", background: "var(--bg-secondary)", textAlign: "center" }}>
        <div className="page-container" style={{ maxWidth: 600 }}>
          <h2 style={{ fontWeight: 800, fontSize: "clamp(20px,2.5vw,30px)", color: "var(--text-heading)", marginBottom: 12 }}>
            Qaysi model sizga mos?
          </h2>
          <p style={{ color: "var(--text-body)", fontSize: 15, marginBottom: 24, lineHeight: 1.6 }}>
            Mutaxassisimiz bepul maslahat beradi va uyingiz yoki biznesingiz uchun eng to'g'ri modelni tanlashga yordam beradi.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+998977739899"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--primary)", color: "#fff", fontWeight: 700, fontSize: 15, padding: "13px 24px", borderRadius: 13, textDecoration: "none", boxShadow: "var(--shadow-btn)" }}
            >
              📞 +998 97 773 98 99
            </a>
            <a href="https://t.me/andeli_uz" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--text-heading)", fontWeight: 700, fontSize: 15, padding: "13px 22px", borderRadius: 13, border: "1.5px solid var(--border)", background: "var(--bg-card)", textDecoration: "none" }}
            >
              ✈ Telegram
            </a>
          </div>
        </div>
      </section>

      {selectedProduct && <DetailModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </div>
  );
}
