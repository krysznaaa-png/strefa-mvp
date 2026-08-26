"use client";

import { useMemo, useState } from "react";

type Service = {
  name: string;
  place: string;
  price: number;
  category: string;
  icon: string;
};

const services: Service[] = [
  {
    name: "Siłownia",
    place: "STREFA Fitness Centrum",
    price: 49,
    category: "Sport",
    icon: "🏋️",
  },
  {
    name: "Trening personalny",
    place: "STREFA Fitness Centrum",
    price: 90,
    category: "Sport",
    icon: "💪",
  },
  {
    name: "Joga",
    place: "STREFA Fitness Centrum",
    price: 45,
    category: "Sport",
    icon: "🧘",
  },
  {
    name: "SPA & Wellness",
    place: "STREFA SPA",
    price: 120,
    category: "Wellness",
    icon: "🧖",
  },
  {
    name: "Masaż relaksacyjny",
    place: "STREFA SPA",
    price: 150,
    category: "Wellness",
    icon: "💆",
  },
  {
    name: "Sauna",
    place: "STREFA SPA",
    price: 60,
    category: "Wellness",
    icon: "🔥",
  },
  {
    name: "Escape room",
    place: "STREFA Fun",
    price: 80,
    category: "Rozrywka",
    icon: "🔐",
  },
  {
    name: "Bilard",
    place: "STREFA Fun",
    price: 35,
    category: "Rozrywka",
    icon: "🎱",
  },
];

const categories = ["Wszystko", "Sport", "Wellness", "Rozrywka"];

type Tab = "home" | "discover" | "bookings" | "benefits" | "profile";

export default function HomePage() {
  const [tab, setTab] = useState<Tab>("home");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Wszystko");

  const [selected, setSelected] = useState<Service | null>(null);
  const [day, setDay] = useState("28 sierpnia");
  const [time, setTime] = useState("18:00");

  const [toast, setToast] = useState("");

  const filteredServices = useMemo(() => {
    const query = search.trim().toLowerCase();

    return services.filter((service) => {
      const matchesSearch =
        query === "" ||
        service.name.toLowerCase().includes(query) ||
        service.place.toLowerCase().includes(query);

      const matchesCategory =
        category === "Wszystko" || service.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  function notify(message: string) {
    setToast(message);

    window.setTimeout(() => {
      setToast("");
    }, 2500);
  }

  function openService(service: Service) {
    setSelected(service);
  }

  function reserve() {
    if (!selected) return;

    notify(
      `Zarezerwowano: ${selected.name} — ${day}, ${time}`
    );

    setSelected(null);
    setTab("bookings");
  }

  return (
    <main className="app">
      <header className="topbar">
        <div>
          <div className="logo">STREFA</div>
          <p className="subtitle">Twój czas. Twoja strefa.</p>
        </div>

        <button
          className="profile-button"
          onClick={() => setTab("profile")}
          aria-label="Profil"
        >
          K
        </button>
      </header>

      {tab === "home" && (
        <section className="page">
          <div className="hero">
            <div>
              <span className="eyebrow">WITAJ W STREFIE</span>
              <h1>
                Znajdź coś
                <br />
                dla siebie.
              </h1>

              <p>
                Sport, wellness i rozrywka
                <br />
                w jednym miejscu.
              </p>
            </div>

            <div className="hero-icon">✦</div>
          </div>

          <div className="quick-actions">
            <button
              className="quick-card"
              onClick={() => setTab("discover")}
            >
              <span>🔎</span>
              <strong>Odkrywaj</strong>
              <small>Znajdź usługę</small>
            </button>

            <button
              className="quick-card"
              onClick={() => setTab("bookings")}
            >
              <span>📅</span>
              <strong>Rezerwacje</strong>
              <small>Twoje terminy</small>
            </button>

            <button
              className="quick-card"
              onClick={() => setTab("benefits")}
            >
              <span>🎁</span>
              <strong>Benefity</strong>
              <small>Twoje punkty</small>
            </button>
          </div>

          <div className="section-heading">
            <div>
              <span className="eyebrow">POLECANE</span>
              <h2>Popularne usługi</h2>
            </div>

            <button
              className="text-button"
              onClick={() => setTab("discover")}
            >
              Zobacz wszystkie →
            </button>
          </div>

          <div className="service-grid">
            {services.slice(0, 4).map((service) => (
              <button
                className="service-card"
                key={service.name}
                onClick={() => openService(service)}
              >
                <div className="service-icon">{service.icon}</div>

                <div className="service-info">
                  <h3>{service.name}</h3>
                  <p>{service.place}</p>

                  <span className="price">
                    od {service.price} zł
                  </span>
                </div>

                <span className="arrow">→</span>
              </button>
            ))}
          </div>
        </section>
      )}

      {tab === "discover" && (
        <section className="page">
          <div className="page-header">
            <span className="eyebrow">STREFA</span>
            <h1>Odkrywaj</h1>
            <p>Znajdź coś, co pasuje do Ciebie.</p>
          </div>

          <input
            className="search"
            type="search"
            placeholder="🔎  Czego szukasz?"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

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

          <div className="section-heading compact">
            <h2>Usługi</h2>
            <span className="count">{filteredServices.length}</span>
          </div>

          <div className="service-list">
            {filteredServices.length > 0 ? (
              filteredServices.map((service) => (
                <button
                  className="service-card"
                  key={service.name}
                  onClick={() => openService(service)}
                >
                  <div className="service-icon">{service.icon}</div>

                  <div className="service-info">
                    <h3>{service.name}</h3>
                    <p>{service.place}</p>

                    <span className="price">
                      od {service.price} zł
                    </span>
                  </div>

                  <span className="arrow">→</span>
                </button>
              ))
            ) : (
              <div className="empty">
                <div>🔎</div>
                <h3>Nie znaleziono usług</h3>
                <p>
                  Spróbuj innej nazwy lub kategorii.
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {tab === "bookings" && (
        <section className="page">
          <div className="page-header">
            <span className="eyebrow">TWOJA STREFA</span>
            <h1>Rezerwacje</h1>
            <p>Twoje zaplanowane aktywności.</p>
          </div>

          <div className="empty large">
            <div className="empty-icon">📅</div>

            <h2>Nie masz jeszcze rezerwacji</h2>

            <p>
              Znajdź usługę i wybierz dogodny termin.
            </p>

            <button
              className="primary"
              onClick={() => setTab("discover")}
            >
              Znajdź usługę
            </button>
          </div>
        </section>
      )}

      {tab === "benefits" && (
        <section className="page">
          <div className="page-header">
            <span className="eyebrow">STREFA BENEFITÓW</span>
            <h1>Benefity</h1>
            <p>Wykorzystaj swoje punkty.</p>
          </div>

          <div className="points-card">
            <span>Twoje punkty</span>
            <strong>320 pkt</strong>

            <div className="progress">
              <div className="progress-bar" />
            </div>

            <small>
              Jeszcze 180 pkt do kolejnego benefitu
            </small>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">🎁</div>

            <div>
              <h3>Benefit sportowy</h3>
              <p>Wykorzystaj swoje punkty</p>
            </div>

            <strong>320 pkt</strong>
          </div>
        </section>
      )}

      {tab === "profile" && (
        <section className="page">
          <div className="page-header">
            <span className="eyebrow">TWOJA STREFA</span>
            <h1>Profil</h1>
          </div>

          <div className="profile-card">
            <div className="avatar">K</div>

            <div>
              <span>Twój profil</span>
              <h2>Kryszia</h2>
            </div>
          </div>

          <div className="settings-list">
            <button>
              <span>👤</span>
              Dane profilu
              <b>→</b>
            </button>

            <button>
              <span>🔔</span>
              Powiadomienia
              <b>→</b>
            </button>

            <button>
              <span>⚙️</span>
              Ustawienia
              <b>→</b>
            </button>
          </div>
        </section>
      )}

      {selected && (
        <div
          className="modal-background"
          onClick={() => setSelected(null)}
        >
          <div
            className="modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelected(null)}
              aria-label="Zamknij"
            >
              ×
            </button>

            <div className="modal-icon">
              {selected.icon}
            </div>

            <span className="eyebrow">
              {selected.category}
            </span>

            <h2>{selected.name}</h2>

            <p className="modal-place">
              {selected.place}
            </p>

            <div className="modal-price">
              od {selected.price} zł
            </div>

            <div className="modal-fields">
              <label>
                Data
                <input
                  type="text"
                  value={day}
                  onChange={(event) =>
                    setDay(event.target.value)
                  }
                />
              </label>

              <label>
                Godzina
                <input
                  type="time"
                  value={time}
                  onChange={(event) =>
                    setTime(event.target.value)
                  }
                />
              </label>
            </div>

            <button className="primary full" onClick={reserve}>
              Zarezerwuj
            </button>

            <button
              className="secondary full"
              onClick={() => setSelected(null)}
            >
              Anuluj
            </button>
          </div>
        </div>
      )}

      {toast && <div className="toast">{toast}</div>}

      <nav className="bottom-nav">
        <button
          className={tab === "home" ? "nav-item active" : "nav-item"}
          onClick={() => setTab("home")}
        >
          <span>⌂</span>
          Start
        </button>

        <button
          className={
            tab === "discover" ? "nav-item active" : "nav-item"
          }
          onClick={() => setTab("discover")}
        >
          <span>⌕</span>
          Odkrywaj
        </button>

        <button
          className={
            tab === "bookings" ? "nav-item active" : "nav-item"
          }
          onClick={() => setTab("bookings")}
        >
          <span>□</span>
          Rezerwacje
        </button>

        <button
          className={
            tab === "benefits" ? "nav-item active" : "nav-item"
          }
          onClick={() => setTab("benefits")}
        >
          <span>🎁</span>
          Benefity
        </button>

        <button
          className={
            tab === "profile" ? "nav-item active" : "nav-item"
          }
          onClick={() => setTab("profile")}
        >
          <span>●</span>
          Profil
        </button>
      </nav>
    </main>
  );
}
