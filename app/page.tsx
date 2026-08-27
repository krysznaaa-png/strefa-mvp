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

const timeSlots = [
  "09:00",
  "10:00",
  "11:30",
  "12:30",
  "13:30",
  "15:00",
  "16:30",
  "18:00",
  "19:30",
  "20:00",
];

function Icon({
  name,
  size = 24,
  className = "",
}: {
  name: string;
  size?: number;
  className?: string;
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
    className,
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

    case "check":
      return (
        <svg {...common}>
          <path d="m5 12 4 4L19 6" />
        </svg>
      );

    default:
      return null;
  }
}

function ServiceIcon({ icon }: { icon: Service["icon"] }) {
  return (
    <div className="service-icon">
      <Icon name={icon} size={27} />
    </div>
  );
}

function formatDate(value: string) {
  const date = new Date(`${value}T12:00:00`);

  return {
    weekday: new Intl.DateTimeFormat("pl-PL", {
      weekday: "short",
    })
      .format(date)
      .replace(".", ""),
    day: date.getDate(),
    month: new Intl.DateTimeFormat("pl-PL", {
      month: "short",
    })
      .format(date)
      .replace(".", ""),
    full: new Intl.DateTimeFormat("pl-PL", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date),
  };
}

export default function HomePage() {
  const [tab, setTab] = useState<Tab>("home");
  const [category, setCategory] = useState("Wszystko");
  const [search, setSearch] = useState("");

  const [selected, setSelected] = useState<Service | null>(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const availableDates = useMemo(() => {
    const dates: string[] = [];
    const today = new Date();

    for (let i = 1; dates.length < 12; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      if (date.getDay() !== 0) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");

        dates.push(`${year}-${month}-${day}`);
      }
    }

    return dates;
  }, []);

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const matchesCategory =
        category === "Wszystko" || service.category === category;

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

  function openBooking(service: Service) {
    setSelected(service);
    setSelectedDate("");
    setSelectedTime("");
  }

  function closeBooking() {
    setSelected(null);
    setSelectedDate("");
    setSelectedTime("");
  }

  function reserve() {
    if (!selectedDate || !selectedTime) {
      alert("Wybierz dzień i godzinę.");
      return;
    }

    if (!selected) return;

    const dateInfo = formatDate(selectedDate);

    alert(
      `Rezerwacja: ${selected.name}\n${dateInfo.full} — ${selectedTime}`
    );

    closeBooking();
  }

  return (
    <main>
      <div className="app-shell">
        {/* HEADER */}
        <header className="top-header">
          <div>
            <div className="brand">STREFA</div>
            <div className="tagline">
              Twój czas. <span>Twoja strefa.</span>
            </div>
          </div>

          <button
            className="profile-mini"
            onClick={() => setTab("profile")}
            aria-label="Profil"
          >
            K
          </button>
        </header>

        {/* HOME */}
        {tab === "home" && (
          <>
            <section className="hero">
              <div className="eyebrow">
                <Icon name="spark" size={15} />
                <span>WITAJ W STREFIE</span>
              </div>

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

              <div className="hero-actions">
                <button
                  className="quick-action"
                  onClick={openDiscover}
                >
                  <span className="quick-icon">
                    <Icon name="search" size={21} />
                  </span>

                  <span className="quick-copy">
                    <strong>Odkrywaj</strong>
                    <small>Znajdź usługę</small>
                  </span>

                  <Icon name="arrow" size={17} />
                </button>

                <button
                  className="quick-action"
                  onClick={() => setTab("bookings")}
                >
                  <span className="quick-icon">
                    <Icon name="calendar" size={21} />
                  </span>

                  <span className="quick-copy">
                    <strong>Rezerwacje</strong>
                    <small>Twoje terminy</small>
                  </span>

                  <Icon name="arrow" size={17} />
                </button>

                <button
                  className="quick-action"
                  onClick={() => setTab("benefits")}
                >
                  <span className="quick-icon">
                    <Icon name="star" size={21} />
                  </span>

                  <span className="quick-copy">
                    <strong>Benefity</strong>
                    <small>Twoje punkty</small>
                  </span>

                  <Icon name="arrow" size={17} />
                </button>
              </div>
            </section>

            <section className="section">
              <div className="section-heading">
                <div>
                  <span className="section-label">POLECANE</span>
                  <h2>Popularne usługi</h2>
                </div>

                <button
                  className="text-button"
                  onClick={openDiscover}
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
                    onClick={() => openBooking(service)}
                  >
                    <ServiceIcon icon={service.icon} />

                    <h3>{service.name}</h3>

                    <p>{service.place}</p>

                    <div className="service-bottom">
                      <span>
                        od <strong>{service.price} zł</strong>
                      </span>

                      <span className="card-arrow">
                        <Icon name="arrow" size={17} />
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </section>
          </>
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
                  onClick={() => openBooking(service)}
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

              <h2>Nie masz jeszcze rezerwacji</h2>

              <p>
                Znajdź usługę i zarezerwuj dogodny termin.
              </p>

              <button
                className="primary-button"
                onClick={openDiscover}
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

            <div className="points-card">
              <div className="points-icon">
                <Icon name="star" size={30} />
              </div>

              <div>
                <small>Twoje punkty</small>
                <strong>320 pkt</strong>
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

              <strong>320 pkt</strong>
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
              <strong>320 pkt</strong>
            </div>

            <div className="profile-row">
              <span>Rezerwacje</span>
              <strong>0</strong>
            </div>
          </section>
        )}
      </div>

      {/* BOOKING MODAL */}
      {selected && (
        <div
          className="modal-backdrop"
          onClick={closeBooking}
        >
          <div
            className="modal booking-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={closeBooking}
              aria-label="Zamknij"
            >
              ×
            </button>

            <ServiceIcon icon={selected.icon} />

            <span className="section-label">
              {selected.category}
            </span>

            <h2>{selected.name}</h2>

            <p className="modal-place">{selected.place}</p>

            <div className="modal-price">
              od <strong>{selected.price} zł</strong>
            </div>

            {/* DZIEŃ */}
            <div className="booking-section">
              <div className="booking-section-head">
                <div>
                  <span className="booking-kicker">TERMIN</span>
                  <h3>Wybierz dzień</h3>
                </div>

                {selectedDate && (
                  <span className="booking-selected-label">
                    {formatDate(selectedDate).full}
                  </span>
                )}
              </div>

              <div className="date-boxes">
                {availableDates.map((date) => {
                  const info = formatDate(date);
                  const active = selectedDate === date;

                  return (
                    <button
                      type="button"
                      key={date}
                      className={
                        active ? "date-box active" : "date-box"
                      }
                      onClick={() => {
                        setSelectedDate(date);
                        setSelectedTime("");
                      }}
                    >
                      <span className="date-weekday">
                        {info.weekday}
                      </span>

                      <strong>{info.day}</strong>

                      <span className="date-month">
                        {info.month}
                      </span>

                      {active && (
                        <span className="date-check">
                          <Icon name="check" size={12} />
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* GODZINA */}
            <div className="booking-section">
              <div className="booking-section-head">
                <div>
                  <span className="booking-kicker">
                    DOSTĘPNE GODZINY
                  </span>

                  <h3>Wybierz godzinę</h3>
                </div>

                {!selectedDate && (
                  <span className="booking-hint">
                    Najpierw wybierz dzień
                  </span>
                )}
              </div>

              <div className="time-boxes">
                {timeSlots.map((time) => {
                  const active = selectedTime === time;
                  const disabled = !selectedDate;

                  return (
                    <button
                      type="button"
                      key={time}
                      disabled={disabled}
                      className={[
                        "time-box",
                        active ? "active" : "",
                        disabled ? "disabled" : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* PODSUMOWANIE */}
            {selectedDate && selectedTime && (
              <div className="booking-summary">
                <div className="summary-icon">
                  <Icon name="calendar" size={19} />
                </div>

                <div>
                  <span>WYBRANY TERMIN</span>

                  <strong>
                    {formatDate(selectedDate).full}
                    {" · "}
                    {selectedTime}
                  </strong>
                </div>
              </div>
            )}

            <button
              className="primary-button full"
              onClick={reserve}
            >
              Zarezerwuj termin
              <Icon name="arrow" size={18} />
            </button>

            <button
              className="secondary-button"
              onClick={closeBooking}
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
            <Icon name="home" size={22} />
          </span>
          <span>Start</span>
        </button>

        <button
          className={tab === "discover" ? "active" : ""}
          onClick={() => setTab("discover")}
        >
          <span className="nav-icon">
            <Icon name="search" size={22} />
          </span>
          <span>Odkrywaj</span>
        </button>

        <button
          className={tab === "bookings" ? "active" : ""}
          onClick={() => setTab("bookings")}
        >
          <span className="nav-icon">
            <Icon name="calendar" size={22} />
          </span>
          <span>Rezerwacje</span>
        </button>

        <button
          className={tab === "benefits" ? "active" : ""}
          onClick={() => setTab("benefits")}
        >
          <span className="nav-icon">
            <Icon name="star" size={22} />
          </span>
          <span>Benefity</span>
        </button>

        <button
          className={tab === "profile" ? "active" : ""}
          onClick={() => setTab("profile")}
        >
          <span className="nav-icon">
            <Icon name="user" size={22} />
          </span>
          <span>Profil</span>
        </button>
      </nav>
    </main>
  );
}
