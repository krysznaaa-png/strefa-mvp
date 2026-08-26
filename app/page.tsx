"use client";

import { useMemo, useState } from "react";

type Tab = "home" | "discover" | "bookings" | "benefits" | "profile";

type Service = {
  name: string;
  place: string;
  price: number;
  category: string;
  rating: string;
  reviews: number;
  icon: "fitness" | "trainer" | "yoga" | "spa" | "dance" | "massage";
};

const services: Service[] = [
  {
    name: "Siłownia",
    place: "STREFA Fitness Centrum",
    price: 49,
    category: "Sport",
    rating: "4.9",
    reviews: 128,
    icon: "fitness",
  },
  {
    name: "Trening personalny",
    place: "STREFA Fitness Centrum",
    price: 90,
    category: "Sport",
    rating: "4.9",
    reviews: 84,
    icon: "trainer",
  },
  {
    name: "Joga",
    place: "STREFA Fitness Centrum",
    price: 45,
    category: "Wellness",
    rating: "4.9",
    reviews: 86,
    icon: "yoga",
  },
  {
    name: "SPA & Wellness",
    place: "STREFA SPA",
    price: 120,
    category: "Premium",
    rating: "4.9",
    reviews: 214,
    icon: "spa",
  },
  {
    name: "Taniec",
    place: "STREFA Studio",
    price: 55,
    category: "Aktywność",
    rating: "4.8",
    reviews: 71,
    icon: "dance",
  },
  {
    name: "Masaż",
    place: "STREFA SPA",
    price: 110,
    category: "Wellness",
    rating: "4.9",
    reviews: 156,
    icon: "massage",
  },
];

const categories = ["Wszystko", "Sport", "Wellness", "Aktywność", "Premium"];

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

    case "heart":
      return (
        <svg {...common}>
          <path d="M20.8 8.8c0 5-8.8 10.2-8.8 10.2S3.2 13.8 3.2 8.8A4.8 4.8 0 0 1 12 6.2a4.8 4.8 0 0 1 8.8 2.6Z" />
        </svg>
      );

    case "tag":
      return (
        <svg {...common}>
          <path d="M20 13 13 20l-9-9V4h7l9 9Z" />
          <circle cx="8" cy="8" r="1" />
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

function QuickCard({
  icon,
  title,
  subtitle,
  onClick,
}: {
  icon: string;
  title: string;
  subtitle: string;
  onClick: () => void;
}) {
  return (
    <button className="quick-card" onClick={onClick}>
      <div className="quick-card-icon">
        <Icon name={icon} size={21} />
      </div>

      <div className="quick-card-text">
        <strong>{title}</strong>
        <span>{subtitle}</span>
      </div>

      <Icon name="arrow" size={18} />
    </button>
  );
}

export default function HomePage() {
  const [tab, setTab] = useState<Tab>("home");
  const [category, setCategory] = useState("Wszystko");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Service | null>(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const points = 320;
  const bookingsCount = 0;

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

    const selectedDate = date || "wybrany dzień";
    const selectedTime = time || "wybraną godzinę";

    alert(
      `Rezerwacja: ${selected.name}\n${selectedDate} — ${selectedTime}`
    );

    setSelected(null);
    setDate("");
    setTime("");
  }

  return (
    <main>
      <div className="app-shell">
        {/* HEADER */}
        <header className="top-header">
          <div>
            <div className="brand">STREFA</div>
            <div className="tagline">Twój czas. Twoja strefa.</div>
          </div>

          <button
            className="avatar"
            onClick={() => setTab("profile")}
            aria-label="Profil"
          >
            K
          </button>
        </header>

        {/* HOME */}
        {tab === "home" && (
          <div className="home-page">
            <section className="hero">
              <div className="eyebrow">
                <Icon name="spark" size={14} />
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

            {/* MAIN FEATURE CARDS */}
            <section className="feature-grid">
              <button
                className="discover-feature"
                onClick={() => setTab("discover")}
              >
                <div className="feature-number">01</div>

                <div className="feature-label">ODKRYWAJ</div>

                <h2>
                  Znajdź coś
                  <br />
                  dla siebie
                </h2>

                <p>Przeglądaj dostępne usługi</p>

                <div className="feature-icon">
                  <Icon name="search" size={28} />
                </div>

                <div className="feature-arrow">
                  <Icon name="arrow" size={18} />
                </div>
              </button>

              <button
                className="points-feature"
                onClick={() => setTab("benefits")}
              >
                <div className="points-glow" />

                <div className="points-top">
                  <div className="points-badge">
                    <Icon name="star" size={19} />
                  </div>

                  <div className="points-arrow">
                    <Icon name="arrow" size={18} />
                  </div>
                </div>

                <div className="points-label">STREFA PLUS</div>

                <div className="points-caption">TWOJE PUNKTY</div>

                <div className="points-value">
                  {points}
                  <span>pkt</span>
                </div>

                <div className="points-bottom">
                  <span>Wykorzystaj swoje punkty</span>
                  <Icon name="arrow" size={17} />
                </div>
              </button>
            </section>

            {/* QUICK ACCESS */}
            <section className="quick-section">
              <div className="section-heading compact">
                <div>
                  <span className="section-label">SZYBKI DOSTĘP</span>
                  <h2>Wszystko pod ręką</h2>
                </div>
              </div>

              <div className="quick-grid">
                <QuickCard
                  icon="calendar"
                  title="Rezerwacje"
                  subtitle="Twoje terminy"
                  onClick={() => setTab("bookings")}
                />

                <QuickCard
                  icon="star"
                  title="Benefity"
                  subtitle={`${points} pkt do wykorzystania`}
                  onClick={() => setTab("benefits")}
                />

                <QuickCard
                  icon="heart"
                  title="Ulubione"
                  subtitle="Twoje miejsca"
                  onClick={() => alert("Ulubione miejsca pojawią się tutaj.")}
                />

                <QuickCard
                  icon="tag"
                  title="Oferty specjalne"
                  subtitle="Promocje STREFY"
                  onClick={() => setTab("discover")}
                />
              </div>
            </section>

            {/* POPULAR SERVICES */}
            <section className="popular-section">
              <div className="section-heading">
                <div>
                  <span className="section-label">POPULARNE USŁUGI</span>
                  <h2>Polecane dla Ciebie</h2>
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
                    <div className="service-top">
                      <span className="service-category">
                        {service.category}
                      </span>

                      <span className="favorite">
                        <Icon name="heart" size={17} />
                      </span>
                    </div>

                    <div className="service-image">
                      <ServiceIcon icon={service.icon} />
                    </div>

                    <div className="service-content">
                      <h3>{service.name}</h3>

                      <p>{service.place}</p>

                      <div className="service-meta">
                        <span className="rating">
                          ★ {service.rating}
                          <small> ({service.reviews})</small>
                        </span>

                        <span className="service-price">
                          od {service.price} zł
                        </span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </section>

            {/* PLUS BANNER */}
            <section className="plus-banner">
              <div className="plus-banner-icon">
                <Icon name="star" size={27} />
              </div>

              <div className="plus-banner-text">
                <span>STREFA PLUS</span>
                <h3>Więcej korzyści, więcej dla Ciebie.</h3>
                <p>
                  Zbieraj punkty i wymieniaj je na wyjątkowe benefity.
                </p>
              </div>

              <div className="plus-banner-decoration">✦</div>

              <button
                onClick={() => setTab("benefits")}
                className="primary-button"
              >
                Zobacz benefity
                <Icon name="arrow" size={17} />
              </button>
            </section>
          </div>
        )}

        {/* DISCOVER */}
        {tab === "discover" && (
          <section className="page-section">
            <div className="page-heading">
              <span className="section-label">STREFA</span>
              <h1>Odkrywaj</h1>
              <p>Znajdź coś, co pasuje właśnie do Ciebie.</p>
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
                    <span className="discover-category">
                      {service.category}
                    </span>

                    <h3>{service.name}</h3>

                    <p>{service.place}</p>

                    <span className="discover-price">
                      od {service.price} zł
                    </span>
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

        {/* BOOKINGS */}
        {tab === "bookings" && (
          <section className="page-section">
            <div className="page-heading">
              <span className="section-label">TWOJA STREFA</span>
              <h1>Rezerwacje</h1>
              <p>Zarządzaj swoimi terminami.</p>
            </div>

            <div className="empty-panel">
              <div className="large-icon">
                <Icon name="calendar" size={34} />
              </div>

              <h2>
                {bookingsCount === 0
                  ? "Nie masz jeszcze rezerwacji"
                  : "Twoje rezerwacje"}
              </h2>

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

        {/* BENEFITS */}
        {tab === "benefits" && (
          <section className="page-section">
            <div className="page-heading">
              <span className="section-label">STREFA PLUS</span>
              <h1>Benefity</h1>
              <p>Wykorzystaj swoje punkty.</p>
            </div>

            <div className="benefits-hero">
              <div>
                <span>TWOJE PUNKTY</span>

                <strong>
                  {points}
                  <small> pkt</small>
                </strong>

                <p>Wykorzystaj je na wyjątkowe benefity.</p>
              </div>

              <div className="benefits-star">
                <Icon name="star" size={38} />
              </div>
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

              <strong>{points} pkt</strong>
            </div>
          </section>
        )}

        {/* PROFILE */}
        {tab === "profile" && (
          <section className="page-section">
            <div className="page-heading">
              <span className="section-label">TWOJA STREFA</span>
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
              <strong>{points} pkt</strong>
            </div>

            <div className="profile-row">
              <span>Rezerwacje</span>
              <strong>{bookingsCount}</strong>
            </div>
          </section>
        )}
      </div>

      {/* MODAL */}
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

      {/* BOTTOM NAV */}
      <nav className="bottom">
        <button
          className={tab === "home" ? "active" : ""}
          onClick={() => setTab("home")}
        >
          <span className="nav-icon">
            <Icon name="home" size={21} />
          </span>
          <span>Start</span>
        </button>

        <button
          className={tab === "discover" ? "active" : ""}
          onClick={() => setTab("discover")}
        >
          <span className="nav-icon">
            <Icon name="search" size={21} />
          </span>
          <span>Odkrywaj</span>
        </button>

        <button
          className={tab === "bookings" ? "active" : ""}
          onClick={() => setTab("bookings")}
        >
          <span className="nav-icon">
            <Icon name="calendar" size={21} />
          </span>
          <span>Rezerwacje</span>
        </button>

        <button
          className={tab === "benefits" ? "active" : ""}
          onClick={() => setTab("benefits")}
        >
          <span className="nav-icon">
            <Icon name="star" size={21} />
          </span>
          <span>Benefity</span>
        </button>

        <button
          className={tab === "profile" ? "active" : ""}
          onClick={() => setTab("profile")}
        >
          <span className="nav-icon">
            <Icon name="user" size={21} />
          </span>
          <span>Profil</span>
        </button>
      </nav>
    </main>
  );
}
