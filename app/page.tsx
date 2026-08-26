"use client";

import { useMemo, useState } from "react";

type Tab = "home" | "discover" | "bookings" | "benefits" | "profile";

type Service = {
  name: string;
  place: string;
  price: number;
  category: string;
  icon: "fitness" | "trainer" | "yoga" | "spa" | "dance" | "massage";
};

const services: Service[] = [
  {
    name: "Siłownia",
    place: "STREFA Fitness Centrum",
    price: 49,
    category: "Sport",
    icon: "fitness",
  },
  {
    name: "Trening personalny",
    place: "STREFA Fitness Centrum",
    price: 90,
    category: "Sport",
    icon: "trainer",
  },
  {
    name: "Joga",
    place: "STREFA Fitness Centrum",
    price: 45,
    category: "Wellness",
    icon: "yoga",
  },
  {
    name: "SPA & Wellness",
    place: "STREFA SPA",
    price: 120,
    category: "Wellness",
    icon: "spa",
  },
  {
    name: "Taniec",
    place: "STREFA Studio",
    price: 55,
    category: "Aktywność",
    icon: "dance",
  },
  {
    name: "Masaż",
    place: "STREFA SPA",
    price: 110,
    category: "Wellness",
    icon: "massage",
  },
];

const categories = ["Wszystko", "Sport", "Wellness", "Aktywność"];

function Icon({
  name,
  size = 24,
}: {
  name: string;
  size?: number;
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "home":
      return (
        <svg {...common}>
          <path d="M3 10.5 12 3l9 7.5" />
          <path d="M5.5 9.5V21h13V9.5" />
          <path d="M9.5 21v-6h5v6" />
        </svg>
      );

    case "search":
      return (
        <svg {...common}>
          <circle cx="10.8" cy="10.8" r="6.5" />
          <path d="m16 16 4.5 4.5" />
        </svg>
      );

    case "calendar":
      return (
        <svg {...common}>
          <rect x="4" y="5" width="16" height="16" rx="2" />
          <path d="M8 3v4M16 3v4M4 10h16" />
          <path d="M8 14h3M8 17h5" />
        </svg>
      );

    case "star":
      return (
        <svg {...common}>
          <path d="m12 3 2.3 5 5.4.7-4 3.8 1 5.4-4.7-2.6-4.7 2.6 1-5.4-4-3.8 5.4-.7L12 3Z" />
        </svg>
      );

    case "user":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="3.5" />
          <path d="M5 20c.8-3.4 3.1-5 7-5s6.2 1.6 7 5" />
        </svg>
      );

    case "fitness":
      return (
        <svg {...common}>
          <path d="M6 8v8M18 8v8M3.5 10v4M20.5 10v4M6 12h12" />
          <path d="M8 6v12M16 6v12" />
        </svg>
      );

    case "trainer":
      return (
        <svg {...common}>
          <circle cx="12" cy="6.5" r="3" />
          <path d="M6.5 21c.6-4.3 2.4-6.5 5.5-6.5s4.9 2.2 5.5 6.5" />
          <path d="M7.5 12.5 4 16M16.5 12.5 20 16" />
        </svg>
      );

    case "yoga":
      return (
        <svg {...common}>
          <circle cx="12" cy="4.5" r="2.2" />
          <path d="M12 7v6M8 10l4 3 4-3M8 20l4-7 4 7" />
        </svg>
      );

    case "spa":
      return (
        <svg {...common}>
          <path d="M5 20c0-7 4-12 7-16 3 4 7 9 7 16" />
          <path d="M7 17c2-1 3.5-1 5 0 1.5-1 3-1 5 0" />
          <path d="M12 10v8" />
        </svg>
      );

    case "dance":
      return (
        <svg {...common}>
          <circle cx="12" cy="4.5" r="2.2" />
          <path d="m12 7 2 5 4 2M12 8l-4 4-3 1M14 12l-1 5 3 4M10 12l-3 5-3 2" />
        </svg>
      );

    case "massage":
      return (
        <svg {...common}>
          <path d="M5 18c3-5 5-9 7-13 2 4 4 8 7 13" />
          <path d="M7 17c1.5 1.5 3.5 1.5 5 0 1.5 1.5 3.5 1.5 5 0" />
          <circle cx="12" cy="5" r="1" />
        </svg>
      );

    case "arrow":
      return (
        <svg {...common}>
          <path d="M5 12h13" />
          <path d="m13 7 5 5-5 5" />
        </svg>
      );

    case "spark":
      return (
        <svg {...common}>
          <path d="M12 3v5M12 16v5M3 12h5M16 12h5M5.6 5.6l3.5 3.5M14.9 14.9l3.5 3.5M18.4 5.6l-3.5 3.5M9.1 14.9l-3.5 3.5" />
        </svg>
      );

    default:
      return null;
  }
}

function ServiceIcon({ icon }: { icon: Service["icon"] }) {
  return (
    <div className="service-icon">
      <Icon name={icon} size={26} />
    </div>
  );
}

export default function HomePage() {
  const [tab, setTab] = useState<Tab>("home");
  const [category, setCategory] = useState("Wszystko");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Service | null>(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const filteredServices = useMemo(() => {
    const query = search.toLowerCase().trim();

    return services.filter((service) => {
      const matchesCategory =
        category === "Wszystko" || service.category === category;

      const matchesSearch =
        !query ||
        service.name.toLowerCase().includes(query) ||
        service.place.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  function reserve() {
    if (!selected) return;

    alert(
      `Rezerwacja: ${selected.name}\n${date || "Wybrany dzień"} — ${
        time || "Wybrana godzina"
      }`
    );

    setSelected(null);
    setDate("");
    setTime("");
  }

  return (
    <main className="strefa-app">
      <div className="app-shell">

        {/* HEADER */}
        <header className="top-header">
          <div>
            <div className="brand">STREFA</div>
            <div className="tagline">Twój czas. Twoja strefa.</div>
          </div>
        </header>

        {/* ================= HOME ================= */}
        {tab === "home" && (
          <div className="home-page">

            {/* HERO */}
            <section className="hero">
              <div className="eyebrow">
                <Icon name="spark" size={15} />
                <span>DLA CIEBIE</span>
              </div>

              <h1>
                Znajdź coś
                <br />
                dla siebie<span className="purple-dot">.</span>
              </h1>

              <p>
                Sport, wellness i dobre chwile.
                <br />
                Wszystko w jednym miejscu.
              </p>
            </section>

            {/* MAIN CARDS */}
            <section className="main-cards">

              {/* DISCOVER */}
              <button
                className="discover-hero-card"
                onClick={() => setTab("discover")}
              >
                <div className="card-number">01</div>

                <div className="card-label">ODKRYWAJ</div>

                <div className="discover-card-content">
                  <div>
                    <h2>
                      Odkryj coś
                      <br />
                      dla siebie
                    </h2>

                    <p>Przeglądaj dostępne usługi</p>
                  </div>

                  <div className="big-search-icon">
                    <Icon name="search" size={30} />
                  </div>
                </div>

                <div className="floating-arrow">
                  <Icon name="arrow" size={18} />
                </div>
              </button>

              {/* POINTS */}
              <button
                className="points-hero-card"
                onClick={() => setTab("benefits")}
              >
                <div className="points-top">
                  <div className="points-icon">
                    <Icon name="star" size={24} />
                  </div>

                  <div className="small-arrow">
                    <Icon name="arrow" size={17} />
                  </div>
                </div>

                <div className="points-label">
                  STREFA PLUS
                </div>

                <div className="points-title">
                  TWOJE PUNKTY
                </div>

                <div className="points-number">
                  320<span> pkt</span>
                </div>

                <div className="points-bottom">
                  <span>Wykorzystaj swoje punkty</span>
                  <Icon name="arrow" size={16} />
                </div>
              </button>
            </section>

            {/* QUICK ACCESS */}
            <section className="quick-section">
              <div className="section-heading">
                <div>
                  <span className="section-label">
                    SZYBKI DOSTĘP
                  </span>
                  <h2>Wszystko pod ręką</h2>
                </div>
              </div>

              <div className="quick-grid">

                <button
                  className="quick-card"
                  onClick={() => setTab("bookings")}
                >
                  <div className="quick-card-icon">
                    <Icon name="calendar" size={24} />
                  </div>

                  <div>
                    <h3>Rezerwacje</h3>
                    <p>Twoje terminy</p>
                  </div>

                  <Icon name="arrow" size={18} />
                </button>

                <button
                  className="quick-card"
                  onClick={() => setTab("benefits")}
                >
                  <div className="quick-card-icon">
                    <Icon name="star" size={24} />
                  </div>

                  <div>
                    <h3>Benefity</h3>
                    <p>320 pkt do wykorzystania</p>
                  </div>

                  <Icon name="arrow" size={18} />
                </button>

              </div>
            </section>

            {/* POPULAR */}
            <section className="popular-section">
              <div className="section-heading">
                <div>
                  <span className="section-label">
                    POLECANE
                  </span>
                  <h2>Popularne usługi</h2>
                </div>

                <button
                  className="text-button"
                  onClick={() => setTab("discover")}
                >
                  Zobacz wszystkie
                  <Icon name="arrow" size={17} />
                </button>
              </div>

              <div className="services-grid">
                {services.slice(0, 4).map((service) => (
                  <button
                    className="service-card"
                    key={service.name}
                    onClick={() => setSelected(service)}
                  >
                    <ServiceIcon icon={service.icon} />

                    <h3>{service.name}</h3>

                    <p>{service.place}</p>

                    <div className="service-bottom">
                      <span>
                        od <strong>{service.price} zł</strong>
                      </span>

                      <span className="card-arrow">
                        <Icon name="arrow" size={16} />
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* ================= DISCOVER ================= */}
        {tab === "discover" && (
          <section className="page-section">
            <div className="page-heading">
              <span className="section-label">ODKRYWAJ</span>
              <h1>Znajdź coś dla siebie</h1>
              <p>
                Wybierz usługę, która pasuje właśnie do Ciebie.
              </p>
            </div>

            <div className="search-box">
              <Icon name="search" size={21} />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Czego szukasz?"
              />
            </div>

            <div className="categories">
              {categories.map((item) => (
                <button
                  key={item}
                  className={
                    category === item
                      ? "category active"
                      : "category"
                  }
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="discover-list">
              {filteredServices.map((service) => (
                <button
                  className="discover-card"
                  key={service.name}
                  onClick={() => setSelected(service)}
                >
                  <ServiceIcon icon={service.icon} />

                  <div className="discover-info">
                    <h3>{service.name}</h3>
                    <p>{service.place}</p>
                    <span>od {service.price} zł</span>
                  </div>

                  <Icon name="arrow" size={20} />
                </button>
              ))}

              {filteredServices.length === 0 && (
                <div className="empty">
                  Nie znaleziono usług.
                  <br />
                  Spróbuj innej nazwy lub kategorii.
                </div>
              )}
            </div>
          </section>
        )}

        {/* ================= BOOKINGS ================= */}
        {tab === "bookings" && (
          <section className="page-section">
            <div className="page-heading">
              <span className="section-label">
                TWOJA STREFA
              </span>

              <h1>Rezerwacje</h1>

              <p>Zarządzaj swoimi terminami.</p>
            </div>

            <div className="empty-panel">
              <div className="large-icon">
                <Icon name="calendar" size={34} />
              </div>

              <h2>Nie masz jeszcze rezerwacji</h2>

              <p>
                Znajdź usługę i zarezerwuj dogodny termin.
              </p>

              <button
                className="primary-button"
                onClick={() => setTab("discover")}
              >
                Znajdź usługę
                <Icon name="arrow" size={18} />
              </button>
            </div>
          </section>
        )}

        {/* ================= BENEFITS ================= */}
        {tab === "benefits" && (
          <section className="page-section">
            <div className="page-heading">
              <span className="section-label">
                STREFA PLUS
              </span>

              <h1>Benefity</h1>

              <p>Wykorzystaj swoje punkty.</p>
            </div>

            <div className="benefits-big-card">
              <div className="benefits-big-icon">
                <Icon name="star" size={30} />
              </div>

              <span>STREFA PLUS</span>

              <small>TWOJE PUNKTY</small>

              <strong>
                320 <em>pkt</em>
              </strong>

              <p>
                Wykorzystaj swoje punkty na dostępne usługi.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <Icon name="fitness" size={25} />
              </div>

              <div>
                <h3>Benefit sportowy</h3>
                <p>
                  Wykorzystaj swoje punkty na aktywność.
                </p>
              </div>

              <strong>320 pkt</strong>
            </div>
          </section>
        )}

        {/* ================= PROFILE ================= */}
        {tab === "profile" && (
          <section className="page-section">
            <div className="page-heading">
              <span className="section-label">
                TWOJA STREFA
              </span>

              <h1>Profil</h1>
            </div>

            <div className="profile-card">
              <div className="profile-avatar">K</div>

              <div>
                <small>Twój profil</small>
                <h2>Kryszna</h2>
              </div>
            </div>

            <div className="profile-row">
              <span>Twoje punkty</span>
              <strong>320 pkt</strong>
            </div>

            <div className="profile-row">
              <span>Rezerwacje</span>
              <strong>0</strong>
            </div>
          </section>
        )}
      </div>

      {/* ================= MODAL ================= */}
      {selected && (
        <div
          className="modal-backdrop"
          onClick={() => setSelected(null)}
        >
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelected(null)}
              aria-label="Zamknij"
            >
              ×
            </button>

            <ServiceIcon icon={selected.icon} />

            <span className="section-label">
              {selected.category}
            </span>

            <h2>{selected.name}</h2>

            <p className="modal-place">
              {selected.place}
            </p>

            <div className="modal-price">
              od <strong>{selected.price} zł</strong>
            </div>

            <div className="modal-fields">
              <label>
                Data

                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </label>

              <label>
                Godzina

                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </label>
            </div>

            <button
              className="primary-button full"
              onClick={reserve}
            >
              Zarezerwuj
              <Icon name="arrow" size={18} />
            </button>

            <button
              className="secondary-button"
              onClick={() => setSelected(null)}
            >
              Anuluj
            </button>
          </div>
        </div>
      )}

      {/* ================= BOTTOM NAV ================= */}
      <nav className="bottom-nav">
        <button
          className={tab === "home" ? "active" : ""}
          onClick={() => setTab("home")}
        >
          <Icon name="home" size={21} />
          <span>Start</span>
        </button>

        <button
          className={tab === "discover" ? "active" : ""}
          onClick={() => setTab("discover")}
        >
          <Icon name="search" size={21} />
          <span>Odkrywaj</span>
        </button>

        <button
          className={tab === "bookings" ? "active" : ""}
          onClick={() => setTab("bookings")}
        >
          <Icon name="calendar" size={21} />
          <span>Rezerwacje</span>
        </button>

        <button
          className={tab === "benefits" ? "active" : ""}
          onClick={() => setTab("benefits")}
        >
          <Icon name="star" size={21} />
          <span>Benefity</span>
        </button>

        <button
          className={tab === "profile" ? "active" : ""}
          onClick={() => setTab("profile")}
        >
          <Icon name="user" size={21} />
          <span>Profil</span>
        </button>
      </nav>

      {/* ================= STYLES ================= */}
      <style jsx global>{`
        :root {
          --bg: #f8f6fa;
          --white: #ffffff;
          --text: #28262d;
          --muted: #96919d;
          --line: #e9e4eb;
          --purple: #9952b4;
          --purple-dark: #704080;
          --purple-soft: #f2e8f5;
          --dark: #28242d;
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background:
            radial-gradient(
              circle at 80% 10%,
              rgba(184, 119, 207, 0.09),
              transparent 28%
            ),
            var(--bg);
          color: var(--text);
          font-family:
            Inter,
            -apple-system,
            BlinkMacSystemFont,
            "SF Pro Display",
            "SF Pro Text",
            Arial,
            sans-serif;
        }

        button,
        input {
          font: inherit;
        }

        button {
          border: 0;
          cursor: pointer;
        }

        .strefa-app {
          min-height: 100vh;
          padding-bottom: 120px;
        }

        .app-shell {
          width: min(1380px, calc(100% - 72px));
          margin: 0 auto;
        }

        /* HEADER */

        .top-header {
          padding-top: 46px;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
        }

        .brand {
          font-size: 22px;
          line-height: 1;
          font-weight: 800;
          letter-spacing: 0.16em;
        }

        .tagline {
          margin-top: 10px;
          color: var(--muted);
          font-size: 15px;
        }

        /* HERO */

        .hero {
          padding-top: 125px;
          padding-bottom: 72px;
          max-width: 720px;
        }

        .eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--purple);
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.2em;
        }

        .hero h1 {
          margin: 24px 0 24px;
          font-size: clamp(58px, 6.5vw, 94px);
          line-height: 0.92;
          letter-spacing: -0.065em;
          font-weight: 850;
        }

        .purple-dot {
          color: var(--purple);
        }

        .hero p {
          margin: 0;
          color: #89848f;
          font-size: 21px;
          line-height: 1.5;
        }

        /* MAIN CARDS */

        .main-cards {
          display: grid;
          grid-template-columns: minmax(0, 1.55fr) minmax(330px, 0.9fr);
          gap: 24px;
        }

        .discover-hero-card,
        .points-hero-card {
          position: relative;
          min-height: 390px;
          border-radius: 30px;
          text-align: left;
          overflow: hidden;
        }

        .discover-hero-card {
          background: var(--white);
          border: 1px solid rgba(225, 219, 228, 0.9);
          padding: 48px;
          box-shadow: 0 18px 55px rgba(50, 35, 58, 0.05);
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .discover-hero-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 25px 70px rgba(50, 35, 58, 0.1);
        }

        .card-number {
          color: #aaa3ae;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
        }

        .card-label,
        .points-label,
        .points-title {
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.22em;
        }

        .card-label {
          margin-top: 18px;
          color: var(--purple);
        }

        .discover-card-content {
          height: 255px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 20px;
        }

        .discover-card-content h2 {
          margin: 0;
          font-size: clamp(38px, 4vw, 58px);
          line-height: 0.95;
          letter-spacing: -0.055em;
          font-weight: 800;
        }

        .discover-card-content p {
          margin: 22px 0 0;
          color: #99939e;
          font-size: 16px;
        }

        .big-search-icon {
          width: 92px;
          height: 92px;
          border-radius: 26px;
          display: grid;
          place-items: center;
          flex-shrink: 0;
          color: var(--purple);
          background: var(--purple-soft);
        }

        .floating-arrow,
        .small-arrow {
          display: grid;
          place-items: center;
          border-radius: 50%;
        }

        .floating-arrow {
          position: absolute;
          top: 42px;
          right: 42px;
          width: 54px;
          height: 54px;
          color: var(--purple);
          background: var(--purple-soft);
        }

        /* POINTS CARD */

        .points-hero-card {
          padding: 42px;
          color: white;
          background:
            radial-gradient(
              circle at 85% 15%,
              rgba(191, 121, 211, 0.32),
              transparent 35%
            ),
            linear-gradient(
              145deg,
              #302c35 0%,
              #28242d 58%,
              #3d2946 100%
            );
          box-shadow: 0 24px 60px rgba(48, 38, 53, 0.16);
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .points-hero-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 30px 70px rgba(48, 38, 53, 0.22);
        }

        .points-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .points-icon {
          width: 58px;
          height: 58px;
          display: grid;
          place-items: center;
          border-radius: 18px;
          color: #d89bea;
          background: rgba(170, 83, 193, 0.2);
        }

        .small-arrow {
          width: 50px;
          height: 50px;
          color: white;
          background: rgba(255, 255, 255, 0.12);
        }

        .points-label {
          margin-top: 38px;
          color: #c58bd2;
        }

        .points-title {
          margin-top: 34px;
          color: #aaa3ad;
        }

        .points-number {
          margin-top: 7px;
          font-size: clamp(60px, 5vw, 82px);
          line-height: 0.95;
          font-weight: 800;
          letter-spacing: -0.06em;
        }

        .points-number span {
          color: #aaa3ad;
          font-size: 25px;
          letter-spacing: -0.02em;
          margin-left: 5px;
        }

        .points-bottom {
          position: absolute;
          left: 42px;
          right: 42px;
          bottom: 30px;
          padding-top: 22px;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #aaa3ad;
          font-size: 14px;
        }

        .points-bottom svg {
          color: white;
        }

        /* SECTIONS */

        .quick-section,
        .popular-section {
          margin-top: 82px;
        }

        .section-heading {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 30px;
          margin-bottom: 25px;
        }

        .section-label {
          display: block;
          color: var(--purple);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.2em;
        }

        .section-heading h2 {
          margin: 9px 0 0;
          font-size: 34px;
          line-height: 1;
          letter-spacing: -0.045em;
        }

        .quick-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .quick-card {
          min-height: 110px;
          padding: 22px 26px;
          border-radius: 24px;
          background: white;
          border: 1px solid var(--line);
          display: flex;
          align-items: center;
          gap: 20px;
          text-align: left;
          color: var(--text);
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .quick-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(40, 30, 45, 0.07);
        }

        .quick-card > svg {
          margin-left: auto;
          color: #aaa3ad;
        }

        .quick-card-icon {
          width: 58px;
          height: 58px;
          border-radius: 18px;
          display: grid;
          place-items: center;
          flex-shrink: 0;
          color: var(--purple);
          background: var(--purple-soft);
        }

        .quick-card h3 {
          margin: 0 0 6px;
          font-size: 18px;
        }

        .quick-card p {
          margin: 0;
          color: #99939e;
          font-size: 14px;
        }

        /* POPULAR */

        .text-button {
          display: flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: var(--purple-dark);
          font-weight: 700;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .service-card {
          min-height: 250px;
          padding: 24px;
          border-radius: 24px;
          background: white;
          border: 1px solid var(--line);
          text-align: left;
          color: var(--text);
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .service-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(40, 30, 45, 0.07);
        }

        .service-icon {
          width: 58px;
          height: 58px;
          display: grid;
          place-items: center;
          border-radius: 18px;
          color: var(--purple);
          background: var(--purple-soft);
          flex-shrink: 0;
        }

        .service-card h3 {
          margin: 25px 0 7px;
          font-size: 18px;
        }

        .service-card p {
          margin: 0;
          color: #99939e;
          font-size: 13px;
        }

        .service-bottom {
          margin-top: 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #99939e;
          font-size: 13px;
        }

        .service-bottom strong {
          color: var(--text);
        }

        .card-arrow {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          color: var(--purple);
          background: var(--purple-soft);
        }

        /* OTHER PAGES */

        .page-section {
          padding-top: 90px;
        }

        .page-heading {
          max-width: 700px;
          margin-bottom: 45px;
        }

        .page-heading h1 {
          margin: 15px 0 12px;
          font-size: clamp(50px, 6vw, 80px);
          line-height: 0.95;
          letter-spacing: -0.06em;
        }

        .page-heading p {
          margin: 0;
          color: #928c97;
          font-size: 19px;
        }

        .search-box {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 18px 22px;
          background: white;
          border: 1px solid var(--line);
          border-radius: 20px;
          margin-bottom: 18px;
        }

        .search-box svg {
          color: var(--purple);
        }

        .search-box input {
          width: 100%;
          border: 0;
          outline: 0;
          background: transparent;
          color: var(--text);
          font-size: 17px;
        }

        .categories {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 25px;
        }

        .category {
          padding: 11px 18px;
          border-radius: 999px;
          background: white;
          border: 1px solid var(--line);
          color: #77717c;
        }

        .category.active {
          color: white;
          background: var(--purple);
          border-color: var(--purple);
        }

        .discover-list {
          display: grid;
          gap: 12px;
        }

        .discover-card {
          padding: 20px;
          display: flex;
          align-items: center;
          gap: 18px;
          border-radius: 22px;
          background: white;
          border: 1px solid var(--line);
          color: var(--text);
          text-align: left;
        }

        .discover-info {
          flex: 1;
        }

        .discover-info h3 {
          margin: 0 0 5px;
          font-size: 18px;
        }

        .discover-info p {
          margin: 0 0 7px;
          color: #99939e;
          font-size: 13px;
        }

        .discover-info span {
          font-size: 13px;
          font-weight: 700;
        }

        .discover-card > svg {
          color: #aaa3ad;
        }

        .empty,
        .empty-panel {
          padding: 70px 30px;
          border-radius: 28px;
          background: white;
          border: 1px solid var(--line);
          text-align: center;
          color: #938d98;
        }

        .empty-panel h2 {
          margin: 20px 0 8px;
          color: var(--text);
        }

        .empty-panel p {
          margin: 0 auto 28px;
          max-width: 400px;
        }

        .large-icon {
          width: 75px;
          height: 75px;
          display: grid;
          place-items: center;
          margin: 0 auto;
          border-radius: 24px;
          color: var(--purple);
          background: var(--purple-soft);
        }

        .primary-button,
        .secondary-button {
          min-height: 52px;
          padding: 0 22px;
          border-radius: 16px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-weight: 700;
        }

        .primary-button {
          color: white;
          background: var(--purple);
        }

        .secondary-button {
          color: var(--text);
          background: #f2eff3;
        }

        .full {
          width: 100%;
        }

        /* BENEFITS */

        .benefits-big-card {
          max-width: 760px;
          padding: 45px;
          border-radius: 30px;
          color: white;
          background:
            radial-gradient(
              circle at 90% 10%,
              rgba(191, 121, 211, 0.3),
              transparent 35%
            ),
            linear-gradient(
              145deg,
              #302c35,
              #29242e
            );
          box-shadow: 0 25px 60px rgba(48, 38, 53, 0.15);
        }

        .benefits-big-icon {
          width: 60px;
          height: 60px;
          display: grid;
          place-items: center;
          border-radius: 18px;
          color: #d79be8;
          background: rgba(170, 83, 193, 0.2);
        }

        .benefits-big-card > span {
          display: block;
          margin-top: 35px;
          color: #c58bd2;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.2em;
        }

        .benefits-big-card small {
          display: block;
          margin-top: 35px;
          color: #aaa3ad;
          font-weight: 700;
          letter-spacing: 0.18em;
        }

        .benefits-big-card strong {
          display: block;
          margin-top: 5px;
          font-size: 76px;
          letter-spacing: -0.06em;
        }

        .benefits-big-card em {
          font-size: 22px;
          color: #aaa3ad;
          font-style: normal;
        }

        .benefits-big-card p {
          color: #aaa3ad;
        }

        .benefit-card {
          max-width: 760px;
          margin-top: 18px;
          padding: 22px;
          display: flex;
          align-items: center;
          gap: 18px;
          border-radius: 22px;
          background: white;
          border: 1px solid var(--line);
        }

        .benefit-icon {
          width: 56px;
          height: 56px;
          display: grid;
          place-items: center;
          border-radius: 18px;
          color: var(--purple);
          background: var(--purple-soft);
        }

        .benefit-card h3 {
          margin: 0 0 5px;
        }

        .benefit-card p {
          margin: 0;
          color: #99939e;
          font-size: 13px;
        }

        .benefit-card strong {
          margin-left: auto;
        }

        /* PROFILE */

        .profile-card {
          max-width: 700px;
          padding: 28px;
          display: flex;
          align-items: center;
          gap: 18px;
          border-radius: 26px;
          background: white;
          border: 1px solid var(--line);
        }

        .profile-avatar {
          width: 70px;
          height: 70px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          color: white;
          background: var(--purple);
          font-size: 26px;
          font-weight: 800;
        }

        .profile-card small {
          color: #99939e;
        }

        .profile-card h2 {
          margin: 5px 0 0;
        }

        .profile-row {
          max-width: 700px;
          padding: 22px 0;
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid var(--line);
        }

        /* MODAL */

        .modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 100;
          padding: 20px;
          display: grid;
          place-items: center;
          background: rgba(25, 21, 29, 0.42);
          backdrop-filter: blur(12px);
        }

        .modal {
          position: relative;
          width: min(500px, 100%);
          padding: 35px;
          border-radius: 30px;
          background: white;
          box-shadow: 0 30px 100px rgba(20, 15, 25, 0.25);
        }

        .modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #f1edf2;
          color: #77717c;
          font-size: 25px;
          line-height: 1;
        }

        .modal h2 {
          margin: 20px 0 6px;
          font-size: 32px;
          letter-spacing: -0.04em;
        }

        .modal-place {
          margin: 0;
          color: #99939e;
        }

        .modal-price {
          margin-top: 22px;
          font-size: 14px;
          color: #99939e;
        }

        .modal-price strong {
          color: var(--text);
          font-size: 23px;
        }

        .modal-fields {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin: 25px 0;
        }

        .modal-fields label {
          display: grid;
          gap: 8px;
          color: #77717c;
          font-size: 13px;
          font-weight: 700;
        }

        .modal-fields input {
          width: 100%;
          min-height: 48px;
          padding: 0 12px;
          border: 1px solid var(--line);
          border-radius: 13px;
          outline: none;
          background: #faf9fb;
        }

        .modal .secondary-button {
          width: 100%;
          margin-top: 10px;
        }

        /* BOTTOM NAV */

        .bottom-nav {
          position: fixed;
          left: 50%;
          bottom: 22px;
          z-index: 90;
          width: min(820px, calc(100% - 30px));
          transform: translateX(-50%);
          padding: 8px;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 4px;
          border: 1px solid rgba(225, 220, 227, 0.95);
          border-radius: 25px;
          background: rgba(255, 255, 255, 0.9);
          box-shadow:
            0 20px 60px rgba(40, 30, 45, 0.14),
            0 3px 10px rgba(40, 30, 45, 0.05);
          backdrop-filter: blur(20px);
        }

        .bottom-nav button {
          min-height: 70px;
          border-radius: 18px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          color: #aaa4ad;
          background: transparent;
        }

        .bottom-nav button span {
          font-size: 12px;
          font-weight: 600;
        }

        .bottom-nav button.active {
          color: var(--purple);
          background: var(--purple-soft);
        }

        /* TABLET */

        @media (max-width: 1000px) {
          .app-shell {
            width: min(100% - 40px, 900px);
          }

          .hero {
            padding-top: 90px;
          }

          .main-cards {
            grid-template-columns: 1fr;
          }

          .points-hero-card {
            min-height: 330px;
          }

          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* MOBILE */

        @media (max-width: 650px) {
          .strefa-app {
            padding-bottom: 105px;
          }

          .app-shell {
            width: calc(100% - 30px);
          }

          .top-header {
            padding-top: 25px;
          }

          .brand {
            font-size: 19px;
          }

          .tagline {
            font-size: 13px;
          }

          .hero {
            padding-top: 75px;
            padding-bottom: 45px;
          }

          .hero h1 {
            font-size: 58px;
          }

          .hero p {
            font-size: 17px;
          }

          .discover-hero-card,
          .points-hero-card {
            min-height: 330px;
            border-radius: 24px;
          }

          .discover-hero-card {
            padding: 30px;
          }

          .discover-card-content {
            height: 220px;
          }

          .discover-card-content h2 {
            font-size: 42px;
          }

          .big-search-icon {
            width: 68px;
            height: 68px;
            border-radius: 20px;
          }

          .floating-arrow {
            top: 28px;
            right: 28px;
          }

          .points-hero-card {
            padding: 30px;
          }

          .points-bottom {
            left: 30px;
            right: 30px;
          }

          .points-number {
            font-size: 65px;
          }

          .quick-section,
          .popular-section {
            margin-top: 60px;
          }

          .section-heading {
            align-items: flex-start;
            flex-direction: column;
            gap: 15px;
          }

          .section-heading h2 {
            font-size: 29px;
          }

          .quick-grid {
            grid-template-columns: 1fr;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }

          .page-section {
            padding-top: 60px;
          }

          .page-heading h1 {
            font-size: 52px;
          }

          .modal-fields {
            grid-template-columns: 1fr;
          }

          .bottom-nav {
            bottom: 12px;
            width: calc(100% - 20px);
            border-radius: 21px;
          }

          .bottom-nav button {
            min-height: 62px;
          }

          .bottom-nav button span {
            font-size: 10px;
          }
        }
      `}</style>
    </main>
  );
}
