import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

/* ===== ANIMATION HOOK ===== */
function useInView() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold: 0.12 });
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

/* ===== BLOG DATA ===== */
const blogs = [
  {
    id: 1,
    image: "/Blogs/img1.jpg",
    category: "Maslahat",
    date: "14 Iyul, 2025",
    readTime: "6 daqiqa",
    title: "Uy uchun qaysi stabilizatorni tanlash kerak? To'liq qo'llanma",
    excerpt: "Kuchlanish sakrashlari uy texnikangizga jiddiy zarar etkazishi mumkin. Ushbu maqolada quvvat hisoblash, tur tanlash va eng muhim mezonlar haqida gaplashamiz.",
    content: {
      intro: "O'zbekistonda elektr tarmog'idagi kuchlanish muammolari — bu ko'pchilik uy xo'jaliklari uchun tanish muammo. Kuchlanish sakrashlari muzlatgich, televizor, kompyuter va boshqa qimmatbaho texnikani ishdan chiqarishi mumkin. Stabilizator — bu muammoning eng ishonchli yechimi.",
      sections: [
        {
          title: "Stabilizator quvvatini qanday hisoblash kerak?",
          text: "Barcha ulangan jihozlarning umumiy quvvatini hisoblang va uni 1.3 ga ko'paytiring (xavfsizlik zahirasi). Masalan, muzlatgich (200 W) + televizor (150 W) + konditsioner (1500 W) + kompyuter (300 W) = 2150 W × 1.3 = 2795 VA. Shu holda SVC-D3000VA modeli ideal."
        },
        {
          title: "Devoriy yoki erga qo'yiladigan?",
          text: "Devoriy (nastenniy) modellar — kichik va o'rta quvvat uchun (500–15000 VA). Devorda joy egallamas, ko'rinishi chiroyli. Erga qo'yiladigan modellar — yuqori quvvat uchun (5000–30000 VA). Katta xonalar, butun uy uchun."
        },
        {
          title: "Kirish kuchlanishi diapazoni nima?",
          text: "Andeli stabilizatorlari 110V dan 250V gacha bo'lgan kirish kuchlanishida ishlaydi. Bu O'zbekistondagi eng past va eng yuqori kuchlanish holatlari uchun ham yetarli. Chiqishda doimo barqaror 220V ± 5% ta'minlanadi."
        },
        {
          title: "Maslahat",
          text: "Agar tarmoqdagi kuchlanish tez-tez 180V dan pastga tushsa yoki 240V dan oshsa — albatta stabilizator o'rnating. Texnikangizning xizmat muddati 2–3 barobar uzayadi. 12 oy kafolat va bepul yetkazib berish bilan Andeli — eng ishonchli tanlov."
        }
      ]
    }
  },
  {
    id: 2,
    image: "/Blogs/img2.jpg",
    category: "Mahsulot sharhi",
    date: "15 Iyul, 2025",
    readTime: "8 daqiqa",
    title: "ANDELI SVC-D5000VA — 2025 yil eng ko'p sotilgan model sharhi",
    excerpt: "Raqamli displey, real vaqt monitoring va kuchli himoya tizimi bilan SVC-D5000VA nima uchun O'zbekistonda №1 tanlov? Batafsil texnik sharh.",
    content: {
      intro: "ANDELI SVC-D5000VA — uy va kichik ofislar uchun eng optimal model. 5000 VA quvvati bilan bu stabilizator konditsioner, muzlatgich, televizor va kompyuterni bir vaqtda himoya qila oladi.",
      sections: [
        {
          title: "Texnik xususiyatlar",
          text: "Kirish kuchlanishi: 110–250V. Chiqish: 220V ± 5%. Quvvat: 5000 VA (4000 W). Javob berish vaqti: < 20 ms. Ishlash harorati: -10°C dan +40°C gacha. Og'irligi: 14 kg. Kafolat: 12 oy."
        },
        {
          title: "Raqamli displey va monitoring",
          text: "SVC-D5000VA ning old panelida katta raqamli displey mavjud. Unda kirish kuchlanishi, chiqish kuchlanishi va joriy ish rejimi ko'rsatiladi. Bu real vaqtda tarmoq holatini nazorat qilish imkonini beradi. Ortiq kuchlanish (OVER-V) va past kuchlanish (UNDER-V) hollatida avtomatik o'chadi."
        },
        {
          title: "Kimlar uchun mos?",
          text: "2 xonali kvartira uchun (konditsioner + muzlatgich + 2 televizor + router). Kichik ofis uchun (3–5 ta kompyuter + printer + konditsioner). Savdo nuqtasi uchun (kassa, monitor, muzlatgich). Xulosa: agar sizning umumiy yuklamangiz 4000 W dan oshmasa — bu model siz uchun."
        },
        {
          title: "Narx/sifat nisbati",
          text: "O'zbekiston bozoridagi shu quvvatdagi stabilizatorlar ichida Andeli SVC-D5000VA eng yaxshi narx/sifat nisbatiga ega. Raqobatchilarga nisbatan 20–30% arzonroq, lekin sifat jihatidan yuqori. 12 oy rasmiy kafolat, servis markazi Toshkentda."
        }
      ]
    }
  },
  {
    id: 3,
    image: "/Blogs/img3.jpg",
    category: "Texnik",
    date: "16 Iyul, 2025",
    readTime: "10 daqiqa",
    title: "ANDELI SVC-D20000VA — butun uy uchun kuchli himoya",
    excerpt: "20 000 VA — bu faqat katta uy uchun emas, balki kirishda o'rnatiladigan asosiy himoya qurilmasi. Qanday o'rnatish va nima uchun kerakligi haqida.",
    content: {
      intro: "SVC-D20000VA — xususiy uylar, yirik kvartiralar va kichik ishlab chiqarish uchun mo'ljallangan yuqori quvvatli stabilizator. Kirish panelida o'rnatilganda butun uyni bir vaqtda himoya qiladi.",
      sections: [
        {
          title: "Nima uchun 20 000 VA kerak?",
          text: "Yirik xususiy uyda elektr iste'moli: 2 ta konditsioner (5000 W) + muzlatgich + muzlatgich kamera (600 W) + elektr pech (2000 W) + suv isitgich (2000 W) + boshqa jihozlar = 12 000–16 000 W. Zahira bilan: 20 000 VA to'g'ri keladi."
        },
        {
          title: "Kirish panelida o'rnatish",
          text: "SVC-D20000VA ni elektr hisoblagich va taqsimlovchi panel orasiga o'rnatish mumkin. Bu holda butun uy tarmoqlari himoyalanadi. Elektrik mutaxassis tomonidan o'rnatilishi shart. Andeli servis muhandislari bepul maslahat va o'rnatishda yordam beradi."
        },
        {
          title: "Texnik xususiyatlar",
          text: "Quvvat: 20 000 VA (16 000 W). Kirish: 110–250V. Chiqish: 220V ± 5%. Samaradorlik: >98%. 3 fazali modellar ham mavjud (SVC-D20000VA-3). Korpus: po'lat, bo'yoq bilan qoplangan. Og'irligi: 58 kg."
        },
        {
          title: "Investitsiya va tejash",
          text: "SVC-D20000VA narxi 1 ta yirik jihozning ta'mirlash narxidan kamroq bo'lishi mumkin. Masalan, konditsioner kompressori ta'miri: $300–500. Stabilizator bu xarajatni bir marta to'lab, yillar davomida barcha jihozlarni himoya qiladi."
        }
      ]
    }
  },
  {
    id: 4,
    image: "/Blogs/img4.jpg",
    category: "Maslahat",
    date: "17 Iyul, 2025",
    readTime: "5 daqiqa",
    title: "Stabilizator o'rnatishda eng ko'p qilinadigan 5 ta xato",
    excerpt: "Ko'p xaridorlar stabilizator sotib olgach, noto'g'ri foydalanadi. Bu xatolar stabilizatorning samaradorligini kamaytiradi yoki texnikani himoya qilmaydi.",
    content: {
      intro: "Stabilizator sotib olish birinchi qadam. Ikkinchi — uni to'g'ri o'rnatish va ishlatish. Quyida eng keng tarqalgan 5 ta xatoni va ularni qanday bartaraf etishni tushuntiramiz.",
      sections: [
        {
          title: "1-xato: Kam quvvatli model tanlash",
          text: "Jihozlarning umumiy quvvatini hisoblamasdan 'kichikroq arzon model' olish — eng keng tarqalgan xato. Kam quvvatli stabilizator ortiq yuklamada qiziydi va o'chib qoladi. Har doim 30% zahira bilan hisoblang."
        },
        {
          title: "2-xato: Yopiq joyga o'rnatish",
          text: "Stabilizator sovitish uchun havo aylanishiga muhtoj. Shkaf, devor yaqini yoki tor joyga o'rnatmang. Atrofida kamida 20–30 sm bo'sh joy qoldiring. Ventilatsiyasi yaxshi xonada ushlab turing."
        },
        {
          title: "3-xato: Bir vaqtda barcha jihozlarni ulash",
          text: "Elektr ulanganidan keyin stabilizatorga barcha jihozlarni bir vaqtda ulash kuchlanish sakrashiga olib keladi. Avval stabilizatorni yoqing, barqaror ishlashini kutib (5–10 soniya), keyin jihozlarni asta-sekin ulang."
        },
        {
          title: "4-xato: Uzun simdan foydalanish",
          text: "Stabilizatordan jihozlargacha bo'lgan sim uzunligi optimal bo'lishi kerak. Juda uzun va ingichka sim qo'shimcha kuchlanish tushishiga olib keladi. Standart kesimli (2.5 mm²) sim va qisqa masofa tavsiya etiladi."
        }
      ]
    }
  },
  {
    id: 5,
    image: "/Blogs/img5.jpg",
    category: "Mahsulot sharhi",
    date: "18 Iyul, 2025",
    readTime: "7 daqiqa",
    title: "ANDELI SDW-D10000VA — devoriy stabilizator sharhi",
    excerpt: "SDW seriyasi — zamonaviy, kompakt va kuchli. 10 000 VA quvvat bilan devorga osib qo'yiladigan bu model katta kvartira va server xonalari uchun ideal.",
    content: {
      intro: "SDW-D10000VA — ANDELI ning devoriy seriyasidagi eng kuchli modellardan biri. 10 000 VA quvvati bilan u katta kvartiralar, ofislar va server xonalari uchun mo'ljallangan.",
      sections: [
        {
          title: "Nima uchun devoriy model?",
          text: "Devoriy (SDW) modellari erga qo'yiladigan modellarga nisbatan bir qancha afzalliklarga ega: joy tejaydi, ko'rinishi zamonaviy, xonada joy egallamas. Bolalar va hayvonlar uchun xavfsiz — yerda emas, devorda."
        },
        {
          title: "10 000 VA — kim uchun?",
          text: "3 xonali kvartira: 2 konditsioner (4000 W) + muzlatgich (200 W) + stinol (150 W) + 3 televizor (300 W) + kompyuterlar (600 W) + boshqalar (500 W) = ~5750 W. 1.3 koeffitsient bilan 7475 VA. SDW-D10000VA uchun qulay zahira mavjud."
        },
        {
          title: "Ikki tomonlama himoya tizimi",
          text: "SDW-D10000VA da ikki bosqichli himoya: 1) Kuchlanish filtri — elektr shovqinlarini filtrlaydi; 2) AVR (Automatic Voltage Regulator) — kuchlanishni stabilizatsiya qiladi. Bu ikki bosqich birga ishlashda maksimal himoya ta'minlaydi."
        },
        {
          title: "O'rnatish va kafolat",
          text: "Devorda o'rnatish uchun maxsus kronshteynlar to'plamga kiradi. O'rnatish qo'llanmasi o'zbek tilida. Kafolat: 12 oy. Servis markazi: Toshkent. Ehtiyot qismlar mavjud. Bepul yetkazib berish Toshkent bo'ylab."
        }
      ]
    }
  },
  {
    id: 6,
    image: "/Blogs/img6.jpg",
    category: "Sanoat",
    date: "19 Iyul, 2025",
    readTime: "12 daqiqa",
    title: "Sanoat uchun uch fazali stabilizator: ANDELI SVC-D75000VA-3",
    excerpt: "Yirik korxonalar va sanoat ob'ektlari uchun 75 000 VA quvvatli uch fazali stabilizator. Qanday ishlaydi, kim uchun va qanday o'rnatiladi?",
    content: {
      intro: "Sanoat ob'ektlari, yirik savdo markazlari va ishlab chiqarish korxonalari uchun bir fazali stabilizatorlar yetarli emas. Ularga uch fazali tizim kerak. ANDELI SVC-D75000VA-3 — shu sohaning yetakchi mahsuloti.",
      sections: [
        {
          title: "Uch fazali tarmoq nima?",
          text: "Sanoat ob'ektlari odatda 380V uch fazali tarmoqdan foydalanadi. Uch fazali stabilizator har uchala fazani bir vaqtda va mustaqil ravishda stabilizatsiya qiladi. Bu simmetrik yuklanishni va uskunalarning uzluksiz ishlashini ta'minlaydi."
        },
        {
          title: "75 000 VA — qanday ob'ektlar uchun?",
          text: "Yirik savdo markazi (SuperMarket): 8–10 ta konditsioner + muzlatgich vitrinalar + kassa sistemalari + yoritish = 50 000–70 000 VA. Ishlab chiqarish sexi: CNC stanoklar, kompressorlar, tekshirish uskunalari. Mehmonxona: 50–100 xona + oshxona + sauva + havza = 60 000–80 000 VA."
        },
        {
          title: "Texnik parametrlar",
          text: "Quvvat: 75 000 VA (3×25 kVA). Kirish: 3×(300–430V). Chiqish: 3×380V ± 2%. Samaradorlik: >98%. Himoya: ortiq kuchlanish, past kuchlanish, faza yo'qolishi, chastota. Sovitish: majburiy (ventilyator). Og'irligi: 850 kg."
        },
        {
          title: "O'rnatish va texnik xizmat",
          text: "Maxsus zamin va kabel tayyorlash talab etiladi. ANDELI muhandislari ob'ektga chiqib loyiha tayyorlaydi, o'rnatadi va ishga tushiradi. Yillik texnik xizmat ko'rsatish shartnomasi imzolash mumkin. Kafolat: 18 oy."
        }
      ]
    }
  },
];

const categories = ["Barchasi", "Maslahat", "Mahsulot sharhi", "Texnik", "Sanoat"];
const catColors = {
  "Maslahat":      { bg: "#EAF4FF", color: "#1A56C9" },
  "Mahsulot sharhi": { bg: "#F0FDF4", color: "#16A34A" },
  "Texnik":        { bg: "#FFF7ED", color: "#EA580C" },
  "Sanoat":        { bg: "#F5F3FF", color: "#7C3AED" },
};

/* ===== BLOG DETAIL VIEW ===== */
function BlogDetail({ blog, onBack }) {
  const [ref, inView] = useInView();
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "48px 40px 80px" }} className="max-md:px-4">
      <button onClick={onBack} style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--primary)", fontWeight: 700, fontSize: 14, background: "none", border: "none", cursor: "pointer", marginBottom: 28, padding: 0 }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 5 5 12 12 19"/></svg>
        Orqaga
      </button>

      {/* Header */}
      <div ref={ref}>
        <div className={`anim-fade${inView ? " in-view" : ""}`} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
          <span style={{ padding: "5px 14px", borderRadius: 999, background: catColors[blog.category]?.bg || "#EAF1FF", color: catColors[blog.category]?.color || "#1A56C9", fontWeight: 700, fontSize: 13 }}>
            {blog.category}
          </span>
          <span style={{ color: "var(--text-muted)", fontSize: 13 }}>{blog.date} · {blog.readTime}</span>
        </div>

        <h1 className={`anim-up${inView ? " in-view" : ""}`} style={{ fontWeight: 800, fontSize: "clamp(24px,3vw,36px)", lineHeight: 1.2, letterSpacing: "-0.8px", color: "var(--text-heading)", marginBottom: 24 }}>
          {blog.title}
        </h1>
      </div>

      {/* Cover image */}
      <div className="anim-scale in-view" style={{ borderRadius: 20, overflow: "hidden", marginBottom: 32, border: "1px solid var(--border)" }}>
        <img
          src={blog.image}
          alt={blog.title}
          style={{ width: "100%", height: "clamp(200px,35vw,380px)", objectFit: "cover" }}
          onError={e => { e.target.parentElement.style.background = "var(--primary-soft)"; e.target.style.display = "none"; }}
        />
      </div>

      {/* Intro */}
      <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--text-body)", marginBottom: 36, fontWeight: 500, borderLeft: "4px solid var(--primary)", paddingLeft: 20, background: "var(--primary-soft)", borderRadius: "0 12px 12px 0", padding: "16px 20px" }}>
        {blog.content.intro}
      </p>

      {/* Sections */}
      {blog.content.sections.map((sec, i) => (
        <div key={i} style={{ marginBottom: 28 }}>
          <h3 style={{ fontWeight: 800, fontSize: 20, color: "var(--text-heading)", marginBottom: 10, display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 28, height: 28, borderRadius: 8, background: "var(--primary)", color: "#fff", fontSize: 13, fontWeight: 800, flexShrink: 0 }}>{i + 1}</span>
            {sec.title}
          </h3>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--text-body)", paddingLeft: 38 }}>{sec.text}</p>
        </div>
      ))}

      {/* CTA */}
      <div style={{ marginTop: 48, padding: 28, borderRadius: 20, border: "1px solid var(--border)", background: "var(--bg-secondary)", textAlign: "center" }}>
        <h3 style={{ fontWeight: 800, fontSize: 20, color: "var(--text-heading)", marginBottom: 10 }}>Stabilizator kerakmi?</h3>
        <p style={{ color: "var(--text-body)", marginBottom: 20, fontSize: 15 }}>Mutaxassisimiz siz uchun mos modelni tanlashda yordam beradi.</p>
        <a href="tel:+998977739899" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--primary)", color: "#fff", fontWeight: 700, fontSize: 15, padding: "13px 24px", borderRadius: 13, textDecoration: "none", boxShadow: "var(--shadow-btn)" }}>
          📞 +998 97 773 98 99
        </a>
      </div>
    </div>
  );
}

/* ===== BLOG CARD ===== */
function BlogCard({ blog, onClick, delay = 0 }) {
  const [ref, inView] = useInView();
  const catStyle = catColors[blog.category] || { bg: "var(--primary-soft)", color: "var(--primary)" };
  return (
    <div
      ref={ref}
      className={`anim-up delay-${delay}${inView ? " in-view" : ""}`}
      onClick={() => onClick(blog)}
      style={{ display: "flex", flexDirection: "column", borderRadius: 20, border: "1px solid var(--border)", background: "var(--bg-card)", overflow: "hidden", cursor: "pointer", transition: "box-shadow .2s, transform .2s" }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 20px 40px rgba(26,86,201,.12)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
    >
      <div style={{ height: 210, overflow: "hidden", background: "var(--bg-secondary)", flexShrink: 0 }}>
        <img
          src={blog.image}
          alt={blog.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .4s" }}
          onMouseEnter={e => { e.target.style.transform = "scale(1.05)"; }}
          onMouseLeave={e => { e.target.style.transform = ""; }}
          onError={e => { e.target.parentElement.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--primary-soft);font-size:56px;">📰</div>`; }}
        />
      </div>
      <div style={{ padding: "18px 20px 22px", display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
          <span style={{ padding: "4px 12px", borderRadius: 999, background: catStyle.bg, color: catStyle.color, fontWeight: 700, fontSize: 12 }}>{blog.category}</span>
          <span style={{ color: "var(--text-muted)", fontSize: 12 }}>{blog.date}</span>
          <span style={{ color: "var(--text-muted)", fontSize: 12 }}>· {blog.readTime}</span>
        </div>
        <h2 style={{ fontWeight: 800, fontSize: 17, color: "var(--text-heading)", lineHeight: 1.35, marginBottom: 10, flex: 1 }}>{blog.title}</h2>
        <p style={{ fontSize: 14, color: "var(--text-body)", lineHeight: 1.65, marginBottom: 14 }}>{blog.excerpt}</p>
        <div style={{ display: "flex", alignItems: "center", gap: 5, color: "var(--primary)", fontWeight: 700, fontSize: 13 }}>
          Batafsil o'qish
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </div>
      </div>
    </div>
  );
}

/* ===== MAIN ===== */
export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState("Barchasi");
  const [openBlog, setOpenBlog] = useState(null);
  const location = useLocation();
  const [headerRef, headerIn] = useInView();

  useEffect(() => {
    if (location.state?.blog) setOpenBlog(location.state.blog);
  }, [location.state]);

  const filtered = activeCategory === "Barchasi" ? blogs : blogs.filter(b => b.category === activeCategory);
  const featured = blogs[0];

  if (openBlog) return <BlogDetail blog={openBlog} onBack={() => setOpenBlog(null)} />;

  return (
    <div style={{ background: "var(--bg)" }}>

      {/* Header */}
      <section style={{ padding: "52px 0 40px", borderBottom: "1px solid var(--border)" }}>
        <div className="page-container">
          <div ref={headerRef}>
            <div className={`anim-fade${headerIn ? " in-view" : ""}`} style={{ fontWeight: 700, fontSize: 12, letterSpacing: 2, color: "var(--primary)", marginBottom: 12 }}>BLOG</div>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
              <div>
                <h1 className={`anim-up${headerIn ? " in-view" : ""}`} style={{ fontWeight: 800, fontSize: "clamp(28px,4vw,48px)", letterSpacing: "-1.4px", color: "var(--text-heading)", lineHeight: 1.04 }}>
                  Andeli Blog
                </h1>
                <p className={`anim-up delay-2${headerIn ? " in-view" : ""}`} style={{ marginTop: 10, fontSize: 16, color: "var(--text-body)", maxWidth: 480 }}>
                  Stabilizatorlar, elektr xavfsizligi va texnikangizni himoya qilish bo'yicha mutaxassis maqolalar.
                </p>
              </div>
              <div className={`anim-right${headerIn ? " in-view" : ""}`} style={{ fontSize: 14, color: "var(--text-muted)" }}>{blogs.length} ta maqola</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section style={{ padding: "36px 0 0" }}>
        <div className="page-container">
          <div
            onClick={() => setOpenBlog(featured)}
            className="two-col-grid anim-scale in-view"
            style={{ borderRadius: 22, border: "1px solid var(--border)", background: "var(--bg-card)", overflow: "hidden", cursor: "pointer", transition: "box-shadow .2s" }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 24px 50px rgba(26,86,201,.14)"; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = ""; }}
          >
            <div style={{ height: 340, overflow: "hidden", background: "var(--bg-secondary)" }} className="max-md:h-48">
              <img src={featured.image} alt={featured.title} style={{ width: "100%", height: "100%", objectFit: "cover" }}
                onError={e => { e.target.parentElement.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--primary-soft);font-size:64px;">📰</div>`; }} />
            </div>
            <div style={{ padding: "36px 36px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                <span style={{ padding: "5px 14px", borderRadius: 999, background: "#EAF1FF", color: "#1A56C9", fontWeight: 700, fontSize: 12 }}>⭐ Tavsiya etilgan</span>
                <span style={{ color: "var(--text-muted)", fontSize: 13 }}>{featured.date}</span>
              </div>
              <h2 style={{ fontWeight: 800, fontSize: "clamp(18px,2.2vw,26px)", color: "var(--text-heading)", lineHeight: 1.3, marginBottom: 14 }}>{featured.title}</h2>
              <p style={{ fontSize: 15, color: "var(--text-body)", lineHeight: 1.65, marginBottom: 22 }}>{featured.excerpt}</p>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--primary)", fontWeight: 700, fontSize: 14 }}>
                Batafsil o'qish <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category filter + Grid */}
      <section style={{ padding: "36px 0 60px" }}>
        <div className="page-container">
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 28 }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                style={{ padding: "8px 18px", borderRadius: 12, border: "1.5px solid", borderColor: activeCategory === cat ? "var(--primary)" : "var(--border)", background: activeCategory === cat ? "var(--primary)" : "var(--bg-card)", color: activeCategory === cat ? "#fff" : "var(--text-nav)", fontWeight: 600, fontSize: 14, cursor: "pointer", transition: "all .15s" }}>
                {cat} {cat !== "Barchasi" && `(${blogs.filter(b => b.category === cat).length})`}
              </button>
            ))}
          </div>
          <div className="blog-grid">
            {filtered.slice(1).map((blog, i) => (
              <BlogCard key={blog.id} blog={blog} onClick={setOpenBlog} delay={Math.min(i + 1, 6)} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ borderTop: "1px solid var(--border)", padding: "52px 0", background: "var(--bg-secondary)", textAlign: "center" }}>
        <div className="page-container" style={{ maxWidth: 560 }}>
          <div style={{ fontWeight: 700, fontSize: 12, letterSpacing: 2, color: "var(--primary)", marginBottom: 14 }}>MASLAHAT KERAKMI?</div>
          <h2 style={{ fontWeight: 800, fontSize: "clamp(22px,2.5vw,32px)", color: "var(--text-heading)", marginBottom: 12 }}>Mutaxassisimiz bilan bog'laning</h2>
          <p style={{ fontSize: 15, color: "var(--text-body)", marginBottom: 28, lineHeight: 1.6 }}>Bepul maslahat oling va uyingiz uchun ideal stabilizatorni tanlang.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+998977739899" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--primary)", color: "#fff", fontWeight: 700, fontSize: 15, padding: "13px 24px", borderRadius: 13, textDecoration: "none", boxShadow: "var(--shadow-btn)" }}>
              📞 +998 97 773 98 99
            </a>
            <a href="https://t.me/andeli_uz" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--text-heading)", fontWeight: 700, fontSize: 15, padding: "13px 22px", borderRadius: 13, border: "1.5px solid var(--border)", background: "var(--bg-card)", textDecoration: "none" }}>
              ✈ Telegram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
