"use client";

import { useMemo, useState } from "react";

type Tab =
  | "home"
  | "discover"
  | "bookings"
  | "benefits"
  | "profile";

type Service = {
  name: string;
  place: string;
  price: number;
  category: string;
  icon:
    | "fitness"
    | "trainer"
    | "yoga"
    | "spa"
    | "dance"
    | "massage";
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

const categories = [
  "Wszystko",
  "Sport",
  "Wellness",
  "Aktywność",
];

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

function ServiceIcon({
  icon,
}: {
  icon: Service["icon"];
}) {
  return (
    <div className="service-icon">
      <Icon name={icon} size={27} />
    </div>
  );
}

export default function HomePage() {
  const [tab, setTab] = useState<Tab>("home");
  const [category, setCategory] = useState("Wszystko");
  const [search, setSearch] = useState("");
  const [selected, setSelected] =
    useState<Service | null>(null);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const matchesCategory =
        category === "Wszystko" ||
        service.category === category;

      const query = search.toLowerCase().trim();

      const matchesSearch =
        !query ||
        service.name.toLowerCase().includes(query) ||
        service.place.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  function openDiscover() {
    setTab("discover");
  }

  function reserve() {
    if (!selected) return;

    const selectedDate =
      date || "wybrany dzień";

    const selectedTime =
      time || "wybraną godzinę";

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

        {/* =====================================
            HOME
        ===================================== */}

        {tab === "home" && (
          <>
            <section className="home-hero">

              <div className="hero-copy">

                <div className="eyebrow">
                  <Icon
                    name="spark"
                    size={15}
                  />

                  <span>DLA CIEBIE</span>
                </div>

                <h1>
                  Znajdź coś
                  <br />
                  dla siebie
                  <span className="hero-dot">
                    .
                  </span>
                </h1>

                <p>
                  Sport, wellness i dobre chwile.
                  <br />
                  Wszystko w jednym miejscu.
                </p>

              </div>

              {/* PROFIL */}

              <button
                className="home-profile"
                onClick={() =>
                  setTab("profile")
                }
                aria-label="Profil"
              >
                K
              </button>

            </section>

            {/* =================================
                FEATURE CARDS
            ================================= */}

            <section className="home-feature-grid">

              {/* ODKRYWAJ */}

              <button
                className="feature-card discover-feature"
                onClick={openDiscover}
              >

                <div className="feature-top">

                  <span className="feature-label">
                    ODKRYWAJ
                  </span>

                  <div className="feature-icon">
                    <Icon
                      name="search"
                      size={25}
                    />
                  </div>

                </div>

                <div className="feature-content">

                  <h2>
                    Odkrywaj usługi
                  </h2>

                  <p>
                    Sport, wellness i aktywność
                    <br />
                    w jednym miejscu.
                  </p>

                </div>

              </button>

              {/* PUNKTY */}

              <button
                className="feature-card points-feature"
                onClick={() =>
                  setTab("benefits")
                }
              >

                <div className="points-glow" />

                <div className="feature-top">

                  <span className="feature-label">
                    STREFA PLUS
                  </span>

                  <div className="points-icon">
                    <Icon
                      name="star"
                      size={23}
                    />
                  </div>

                </div>

                <div className="points-content">

                  <span className="points-caption">
                    TWOJE PUNKTY
                  </span>

                  <div className="points-number">
                    320
                    <small>
                      pkt
                    </small>
                  </div>

                  <p>
                    Wykorzystaj swoje punkty
                  </p>

                </div>

              </button>

            </section>

            {/* =================================
                QUICK ACCESS
            ================================= */}

            <section className="home-quick-section">

              <div className="section-heading compact">

                <div>

                  <span className="section-label">
                    SZYBKI DOSTĘP
                  </span>

                  <h2>
                    Wszystko pod ręką
                  </h2>

                </div>

              </div>

              <div className="quick-grid">

                {/* REZERWACJE */}

                <button
                  className="quick-card"
                  onClick={() =>
                    setTab("bookings")
                  }
                >

                  <div className="quick-card-icon">
                    <Icon
                      name="calendar"
                      size={22}
                    />
                  </div>

                  <div>

                    <strong>
                      Rezerwacje
                    </strong>

                    <small>
                      Twoje terminy
                    </small>

                  </div>

                </button>

                {/* BENEFITY */}

                <button
                  className="quick-card"
                  onClick={() =>
                    setTab("benefits")
                  }
                >

                  <div className="quick-card-icon">
                    <Icon
                      name="star"
                      size={22}
                    />
                  </div>

                  <div>

                    <strong>
                      Benefity
                    </strong>

                    <small>
                      320 pkt do wykorzystania
                    </small>

                  </div>

                </button>

              </div>

            </section>
          </>
        )}

        {/* =====================================
            DISCOVER
        ===================================== */}

        {tab === "discover" && (
          <section className="page-section">

            <div className="page-heading">

              <span className="section-label">
                STREFA
              </span>

              <h1>
                Odkrywaj
              </h1>

              <p>
                Znajdź usługę, która pasuje
                właśnie do Ciebie.
              </p>

            </div>

            <div className="search-box">

              <Icon
                name="search"
                size={21}
              />

              <input
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
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
                  onClick={() =>
                    setCategory(item)
                  }
                >
                  {item}
                </button>
              ))}

            </div>

            <div className="discover-list">

              {filteredServices.map(
                (service) => (
                  <button
                    className="discover-card"
                    key={service.name}
                    onClick={() =>
                      setSelected(service)
                    }
                  >

                    <ServiceIcon
                      icon={service.icon}
                    />

                    <div className="discover-info">

                      <h3>
                        {service.name}
                      </h3>

                      <p>
                        {service.place}
                      </p>

                      <span>
                        od {service.price} zł
                      </span>

                    </div>

                  </button>
                )
              )}

              {filteredServices.length === 0 && (
                <div className="empty">

                  Nie znaleziono usług.

                  <br />

                  Spróbuj innej nazwy
                  lub kategorii.

                </div>
              )}

            </div>

          </section>
        )}

        {/* =====================================
            BOOKINGS
        ===================================== */}

        {tab === "bookings" && (
          <section className="page-section">

            <div className="page-heading">

              <span className="section-label">
                TWOJA STREFA
              </span>

              <h1>
                Rezerwacje
              </h1>

              <p>
                Zarządzaj swoimi terminami.
              </p>

            </div>

            <div className="empty-panel">

              <div className="large-icon">

                <Icon
                  name="calendar"
                  size={34}
                />

              </div>

              <h2>
                Nie masz jeszcze
                rezerwacji
              </h2>

              <p>
                Znajdź usługę i zarezerwuj
                dogodny termin.
              </p>

              <button
                className="primary-button"
                onClick={openDiscover}
              >

                Znajdź usługę

              </button>

            </div>

          </section>
        )}

        {/* =====================================
            BENEFITS
        ===================================== */}

        {tab === "benefits" && (
          <section className="page-section">

            <div className="page-heading">

              <span className="section-label">
                STREFA PLUS
              </span>

              <h1>
                Benefity
              </h1>

              <p>
                Wykorzystaj swoje punkty.
              </p>

            </div>

            <div className="points-card">

              <div className="points-icon">

                <Icon
                  name="star"
                  size={30}
                />

              </div>

              <div>

                <small>
                  Twoje punkty
                </small>

                <strong>
                  320 pkt
                </strong>

              </div>

            </div>

            <div className="benefit-card">

              <div className="benefit-icon">

                <Icon
                  name="fitness"
                  size={25}
                />

              </div>

              <div>

                <h3>
                  Benefit sportowy
                </h3>

                <p>
                  Wykorzystaj swoje punkty
                  na aktywność.
                </p>

              </div>

              <strong>
                320 pkt
              </strong>

            </div>

          </section>
        )}

        {/* =====================================
            PROFILE
        ===================================== */}

        {tab === "profile" && (
          <section className="page-section">

            <div className="page-heading">

              <span className="section-label">
                TWOJA STREFA
              </span>

              <h1>
                Profil
              </h1>

            </div>

            <div className="profile-card">

              <div className="profile-avatar">
                K
              </div>

              <div>

                <small>
                  Twój profil
                </small>

                <h2>
                  Kryszna
                </h2>

              </div>

            </div>

            <div className="profile-row">

              <span>
                Twoje punkty
              </span>

              <strong>
                320 pkt
              </strong>

            </div>

            <div className="profile-row">

              <span>
                Rezerwacje
              </span>

              <strong>
                0
              </strong>

            </div>

          </section>
        )}

      </div>

      {/* =====================================
          MODAL REZERWACJI
      ===================================== */}

      {selected && (
        <div
          className="modal-backdrop"
          onClick={() =>
            setSelected(null)
          }
        >

          <div
            className="modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <button
              className="modal-close"
              onClick={() =>
                setSelected(null)
              }
              aria-label="Zamknij"
            >
              ×
            </button>

            <ServiceIcon
              icon={selected.icon}
            />

            <span className="section-label">
              {selected.category}
            </span>

            <h2>
              {selected.name}
            </h2>

            <p className="modal-place">
              {selected.place}
            </p>

            <div className="modal-price">

              od{" "}

              <strong>
                {selected.price} zł
              </strong>

            </div>

            <div className="modal-fields">

              <label>

                Data

                <input
                  type="date"
                  value={date}
                  onChange={(e) =>
                    setDate(e.target.value)
                  }
                />

              </label>

              <label>

                Godzina

                <input
                  type="time"
                  value={time}
                  onChange={(e) =>
                    setTime(e.target.value)
                  }
                />

              </label>

            </div>

            <button
              className="primary-button full"
              onClick={reserve}
            >
              Zarezerwuj
            </button>

            <button
              className="secondary-button"
              onClick={() =>
                setSelected(null)
              }
            >
              Anuluj
            </button>

          </div>

        </div>
      )}

      {/* =====================================
          BOTTOM NAV
      ===================================== */}

      <nav className="bottom">

        <button
          className={
            tab === "home"
              ? "active"
              : ""
          }
          onClick={() =>
            setTab("home")
          }
        >

          <span className="nav-icon">
            <Icon
              name="home"
              size={22}
            />
          </span>

          <span>
            Start
          </span>

        </button>

        <button
          className={
            tab === "discover"
              ? "active"
              : ""
          }
          onClick={() =>
            setTab("discover")
          }
        >

          <span className="nav-icon">
            <Icon
              name="search"
              size={22}
            />
          </span>

          <span>
            Odkrywaj
          </span>

        </button>

        <button
          className={
            tab === "bookings"
              ? "active"
              : ""
          }
          onClick={() =>
            setTab("bookings")
          }
        >

          <span className="nav-icon">
            <Icon
              name="calendar"
              size={22}
            />
          </span>

          <span>
            Rezerwacje
          </span>

        </button>

        <button
          className={
            tab === "benefits"
              ? "active"
              : ""
          }
          onClick={() =>
            setTab("benefits")
          }
        >

          <span className="nav-icon">
            <Icon
              name="star"
              size={22}
            />
          </span>

          <span>
            Benefity
          </span>

        </button>

        <button
          className={
            tab === "profile"
              ? "active"
              : ""
          }
          onClick={() =>
            setTab("profile")
          }
        >

          <span className="nav-icon">
            <Icon
              name="user"
              size={22}
            />
          </span>

          <span>
            Profil
          </span>

        </button>

      </nav>

    </main>
  );
}
