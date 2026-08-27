"use client";

import { useMemo, useState } from "react";

type Tab = "home" | "discover" | "bookings" | "benefits" | "profile";

type ServiceIconName =
  | "fitness"
  | "trainer"
  | "yoga"
  | "spa"
  | "dance"
  | "massage";

type Service = {
  id: string;
  name: string;
  place: string;
  price: number;
  category: string;
  icon: ServiceIconName;
};

type Reservation = {
  id: string;
  service: Service;
  date: string;
  time: string;
};

const services: Service[] = [
  {
    id: "gym",
    name: "Siłownia",
    place: "STREFA Fitness Centrum",
    price: 49,
    category: "Sport",
    icon: "fitness",
  },
  {
    id: "trainer",
    name: "Trening personalny",
    place: "STREFA Fitness Centrum",
    price: 90,
    category: "Sport",
    icon: "trainer",
  },
  {
    id: "yoga",
    name: "Joga",
    place: "STREFA Fitness Centrum",
    price: 45,
    category: "Wellness",
    icon: "yoga",
  },
  {
    id: "spa",
    name: "SPA & Wellness",
    place: "STREFA SPA",
    price: 120,
    category: "Wellness",
    icon: "spa",
  },
  {
    id: "dance",
    name: "Taniec",
    place: "STREFA Studio",
    price: 55,
    category: "Aktywność",
    icon: "dance",
  },
  {
    id: "massage",
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

    case "chevron-left":
      return (
        <svg {...common}>
          <path d="m15 18-6-6 6-6" />
        </svg>
      );

    case "chevron-right":
      return (
        <svg {...common}>
          <path d="m9 18 6-6-6-6" />
        </svg>
      );

    default:
      return null;
  }
}

function ServiceIcon({
  icon,
}: {
  icon: ServiceIconName;
}) {
  return (
    <div className="service-icon">
      <Icon name={icon} size={27} />
    </div>
  );
}

function toDateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function parseDate(value: string) {
  return new Date(`${value}T12:00:00`);
}

function formatFullDate(value: string) {
  return new Intl.DateTimeFormat("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(parseDate(value));
}

function formatShortDate(value: string) {
  const date = parseDate(value);

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
  };
}

function formatMonth(value: Date) {
  return new Intl.DateTimeFormat("pl-PL", {
    month: "long",
    year: "numeric",
  }).format(value);
}

function getMonthCalendar(month: Date) {
  const year = month.getFullYear();
  const monthIndex = month.getMonth();

  const firstDay = new Date(year, monthIndex, 1);
  const daysInMonth = new Date(
    year,
    monthIndex + 1,
    0
  ).getDate();

  const mondayIndex =
    firstDay.getDay() === 0
      ? 6
      : firstDay.getDay() - 1;

  const cells: Array<
    string | null
  > = [];

  for (let i = 0; i < mondayIndex; i++) {
    cells.push(null);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    cells.push(
      toDateKey(new Date(year, monthIndex, day))
    );
  }

  while (cells.length % 7 !== 0) {
    cells.push(null);
  }

  return cells;
}

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export default function Home() {
  const [tab, setTab] = useState<Tab>("home");

  const [category, setCategory] =
    useState("Wszystko");

  const [search, setSearch] = useState("");

  const [selectedService, setSelectedService] =
    useState<Service | null>(null);

  const [selectedDate, setSelectedDate] =
    useState("");

  const [selectedTime, setSelectedTime] =
    useState("");

  const [calendarMonth, setCalendarMonth] =
    useState(() => {
      const now = new Date();
      return new Date(
        now.getFullYear(),
        now.getMonth(),
        1
      );
    });

  const [reservations, setReservations] =
    useState<Reservation[]>([]);

  const filteredServices = useMemo(() => {
    const query = search.toLowerCase().trim();

    return services.filter((service) => {
      const categoryMatch =
        category === "Wszystko" ||
        service.category === category;

      const searchMatch =
        !query ||
        service.name.toLowerCase().includes(query) ||
        service.place.toLowerCase().includes(query);

      return categoryMatch && searchMatch;
    });
  }, [category, search]);

  const calendarDays = useMemo(
    () => getMonthCalendar(calendarMonth),
    [calendarMonth]
  );

  const today = new Date();

  function openDiscover() {
    setTab("discover");
  }

  function openBooking(service: Service) {
    setSelectedService(service);
    setSelectedDate("");
    setSelectedTime("");
    setTab("bookings");

    const now = new Date();

    setCalendarMonth(
      new Date(
        now.getFullYear(),
        now.getMonth(),
        1
      )
    );
  }

  function closeBooking() {
    setSelectedService(null);
    setSelectedDate("");
    setSelectedTime("");
  }

  function reserve() {
    if (!selectedService) return;

    if (!selectedDate || !selectedTime) {
      alert("Wybierz dzień i godzinę.");
      return;
    }

    const reservation: Reservation = {
      id: `${selectedService.id}-${selectedDate}-${selectedTime}-${Date.now()}`,
      service: selectedService,
      date: selectedDate,
      time: selectedTime,
    };

    setReservations((current) => [
      ...current,
      reservation,
    ]);

    setSelectedService(null);
    setSelectedDate("");
    setSelectedTime("");

    setTab("bookings");

    alert(
      `Rezerwacja została dodana.\n\n${selectedService.name}\n${formatFullDate(
        selectedDate
      )} · ${selectedTime}`
    );
  }

  function previousMonth() {
    setCalendarMonth(
      (current) =>
        new Date(
          current.getFullYear(),
          current.getMonth() - 1,
          1
        )
    );
  }

  function nextMonth() {
    setCalendarMonth(
      (current) =>
        new Date(
          current.getFullYear(),
          current.getMonth() + 1,
          1
        )
    );
  }

  function isDateAvailable(dateKey: string) {
    const date = parseDate(dateKey);

    if (date < new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    )) {
      return false;
    }

    if (date.getDay() === 0) {
      return false;
    }

    return true;
  }

  function removeReservation(id: string) {
    setReservations((current) =>
      current.filter(
        (reservation) => reservation.id !== id
      )
    );
  }

  return (
    <main className="app">

      {/* =====================================================
          HOME
          ===================================================== */}

      {tab === "home" && (
        <>
          <header className="header">
            <div>
              <div className="logo">
                STREFA
              </div>

              <div className="tagline">
                Twoja strefa.{" "}
                <span>Twoje miejsce.</span>
              </div>
            </div>

            <button
              className="avatar"
              aria-label="Profil"
              onClick={() => setTab("profile")}
            >
              K
            </button>
          </header>

          <section className="hero-cards">

            <button
              className="feature-card discover-card"
              onClick={openDiscover}
            >
              <div className="card-icon">
                <Icon
                  name="search"
                  size={34}
                />
              </div>

              <div className="card-content">
                <div className="eyebrow">
                  ODKRYWAJ
                </div>

                <h1>
                  Znajdź coś
                  <br />
                  dla siebie
                </h1>

                <div className="accent-line" />

                <p>
                  Sport <span>•</span> wellness{" "}
                  <span>•</span>
                  <br />
                  aktywności i więcej
                </p>
              </div>

              <div className="card-arrow">
                <Icon
                  name="arrow"
                  size={25}
                />
              </div>
            </button>

            <button
              className="feature-card points-card"
              onClick={() => setTab("benefits")}
            >
              <div className="card-icon">
                <Icon
                  name="star"
                  size={34}
                />
              </div>

              <div className="card-content">
                <div className="eyebrow">
                  TWOJE PUNKTY
                </div>

                <div className="points">
                  <strong>320</strong>
                  <span>pkt</span>
                </div>

                <div className="accent-line" />

                <p>
                  Wykorzystaj
                  <br />
                  swoje punkty
                </p>
              </div>

              <div className="card-arrow">
                <Icon
                  name="arrow"
                  size={25}
                />
              </div>
            </button>

          </section>

          <section className="quick-section">
            <div className="section-label">
              SZYBKI DOSTĘP
            </div>

            <div className="quick-grid">

              <button
                className="quick-card"
                onClick={() => {
                  setSelectedService(null);
                  setTab("bookings");
                }}
              >
                <div className="quick-icon">
                  <Icon
                    name="calendar"
                    size={27}
                  />
                </div>

                <div>
                  <h2>Rezerwacje</h2>
                  <p>
                    {reservations.length > 0
                      ? `${reservations.length} ${
                          reservations.length === 1
                            ? "termin"
                            : "terminy"
                        }`
                      : "Twoje terminy"}
                  </p>
                </div>

                <Icon
                  className="quick-arrow"
                  name="arrow"
                  size={24}
                />
              </button>

              <button
                className="quick-card"
                onClick={() =>
                  setTab("benefits")
                }
              >
                <div className="quick-icon">
                  <Icon
                    name="star"
                    size={27}
                  />
                </div>

                <div>
                  <h2>Benefity</h2>
                  <p>
                    Twoje korzyści
                  </p>
                </div>

                <Icon
                  className="quick-arrow"
                  name="arrow"
                  size={24}
                />
              </button>

            </div>
          </section>
        </>
      )}

      {/* =====================================================
          ODKRYWAJ
          ===================================================== */}

      {tab === "discover" && (
        <section className="page">

          <div className="page-top">
            <div className="page-heading">
              <span className="section-label">
                STREFA
              </span>

              <h1>Odkrywaj</h1>

              <p>
                Znajdź coś, co pasuje właśnie
                do Ciebie.
              </p>
            </div>

            <button
              className="back-button"
              onClick={() => setTab("home")}
            >
              <Icon
                name="home"
                size={17}
              />
              Start
            </button>
          </div>

          <div className="search-box">
            <Icon
              name="search"
              size={21}
            />

            <input
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
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
            {filteredServices.map((service) => (
              <button
                key={service.id}
                className="discover-item"
                onClick={() =>
                  openBooking(service)
                }
              >
                <ServiceIcon
                  icon={service.icon}
                />

                <div className="discover-info">
                  <h3>{service.name}</h3>

                  <p>{service.place}</p>

                  <span className="discover-price">
                    od {service.price} zł
                  </span>
                </div>

                <Icon
                  name="arrow"
                  size={20}
                />
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

      {/* =====================================================
          REZERWACJE
          ===================================================== */}

      {tab === "bookings" && (
        <section className="page">

          <div className="page-top">
            <div className="page-heading">
              <span className="section-label">
                TWOJA STREFA
              </span>

              <h1>Rezerwacje</h1>

              <p>
                Zarządzaj swoimi terminami.
              </p>
            </div>

            <button
              className="back-button"
              onClick={() => setTab("home")}
            >
              <Icon
                name="home"
                size={17}
              />
              Start
            </button>
          </div>

          {selectedService ? (
            <div className="booking-layout">

              {/* SERVICE */}

              <div className="booking-service-card">
                <ServiceIcon
                  icon={selectedService.icon}
                />

                <h2>
                  {selectedService.name}
                </h2>

                <p className="booking-service-place">
                  {selectedService.place}
                </p>

                <div className="booking-service-price">
                  od{" "}
                  <strong>
                    {selectedService.price} zł
                  </strong>
                </div>

                <div className="selected-service">
                  <span className="selected-service-label">
                    WYBRANA USŁUGA
                  </span>

                  <strong>
                    {selectedService.name}
                  </strong>

                  <button
                    className="change-service"
                    onClick={openDiscover}
                  >
                    Zmień usługę →
                  </button>
                </div>
              </div>

              {/* CALENDAR */}

              <div className="calendar-card">

                <div className="calendar-head">

                  <div className="calendar-title">
                    <small>
                      TERMIN
                    </small>

                    <h2>
                      {formatMonth(
                        calendarMonth
                      )}
                    </h2>
                  </div>

                  <div className="calendar-controls">
                    <button
                      className="calendar-control"
                      onClick={
                        previousMonth
                      }
                      aria-label="Poprzedni miesiąc"
                    >
                      <Icon
                        name="chevron-left"
                        size={19}
                      />
                    </button>

                    <button
                      className="calendar-control"
                      onClick={nextMonth}
                      aria-label="Następny miesiąc"
                    >
                      <Icon
                        name="chevron-right"
                        size={19}
                      />
                    </button>
                  </div>

                </div>

                <div className="calendar-week">
                  {[
                    "Pon",
                    "Wt",
                    "Śr",
                    "Czw",
                    "Pt",
                    "Sob",
                    "Nd",
                  ].map((day) => (
                    <span key={day}>
                      {day}
                    </span>
                  ))}
                </div>

                <div className="calendar-grid">
                  {calendarDays.map(
                    (dateKey, index) => {
                      if (!dateKey) {
                        return (
                          <div
                            key={`empty-${index}`}
                            className="calendar-day empty-day"
                          />
                        );
                      }

                      const date =
                        parseDate(dateKey);

                      const available =
                        isDateAvailable(
                          dateKey
                        );

                      const selected =
                        selectedDate ===
                        dateKey;

                      const todayDate =
                        isSameDay(
                          date,
                          today
                        );

                      return (
                        <button
                          key={dateKey}
                          className={[
                            "calendar-day",
                            !available
                              ? "disabled"
                              : "",
                            selected
                              ? "selected"
                              : "",
                            todayDate
                              ? "today"
                              : "",
                          ]
                            .filter(Boolean)
                            .join(" ")}
                          disabled={!available}
                          onClick={() => {
                            setSelectedDate(
                              dateKey
                            );
                            setSelectedTime("");
                          }}
                        >
                          <strong>
                            {date.getDate()}
                          </strong>

                          {todayDate && (
                            <small>
                              dziś
                            </small>
                          )}
                        </button>
                      );
                    }
                  )}
                </div>

                <div className="time-section">

                  <div className="time-section-head">
                    <div>
                      <small>
                        GODZINA
                      </small>

                      <h3>
                        Wybierz godzinę
                      </h3>
                    </div>

                    <span>
                      {selectedDate
                        ? formatFullDate(
                            selectedDate
                          )
                        : "Najpierw wybierz dzień"}
                    </span>
                  </div>

                  <div className="time-grid">
                    {timeSlots.map(
                      (time) => {
                        const disabled =
                          !selectedDate;

                        const active =
                          selectedTime ===
                          time;

                        return (
                          <button
                            key={time}
                            className={[
                              "time-button",
                              active
                                ? "active"
                                : "",
                              disabled
                                ? "disabled"
                                : "",
                            ]
                              .filter(Boolean)
                              .join(" ")}
                            disabled={
                              disabled
                            }
                            onClick={() =>
                              setSelectedTime(
                                time
                              )
                            }
                          >
                            {time}
                          </button>
                        );
                      }
                    )}
                  </div>
                </div>

                {selectedDate &&
                  selectedTime && (
                    <div className="confirmation-card">

                      <div className="confirmation-icon">
                        <Icon
                          name="calendar"
                          size={20}
                        />
                      </div>

                      <div>
                        <small>
                          WYBRANY TERMIN
                        </small>

                        <strong>
                          {formatFullDate(
                            selectedDate
                          )}
                          {" · "}
                          {selectedTime}
                        </strong>
                      </div>

                    </div>
                  )}

                <div style={{ marginTop: 18 }}>
                  <button
                    className="primary-button full-width"
                    disabled={
                      !selectedDate ||
                      !selectedTime
                    }
                    onClick={reserve}
                  >
                    Zarezerwuj termin
                    <Icon
                      name="arrow"
                      size={18}
                    />
                  </button>
                </div>

              </div>
            </div>
          ) : reservations.length === 0 ? (
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
                Znajdź usługę, wybierz dzień
                i godzinę, a następnie
                zarezerwuj swój termin.
              </p>

              <button
                className="primary-button"
                onClick={openDiscover}
              >
                Znajdź usługę
                <Icon
                  name="arrow"
                  size={18}
                />
              </button>

            </div>
          ) : (
            <div className="reservation-list">

              {reservations.map(
                (reservation) => {
                  const date =
                    formatShortDate(
                      reservation.date
                    );

                  return (
                    <div
                      className="reservation-card"
                      key={reservation.id}
                    >

                      <div className="reservation-date">
                        <small>
                          {date.month}
                        </small>

                        <strong>
                          {date.day}
                        </strong>
                      </div>

                      <div className="reservation-info">
                        <h3>
                          {reservation.service.name}
                        </h3>

                        <p>
                          {reservation.service.place}
                        </p>

                        <p
                          style={{
                            marginTop: 6,
                          }}
                        >
                          {formatFullDate(
                            reservation.date
                          )}
                        </p>
                      </div>

                      <div>
                        <div className="reservation-time">
                          {reservation.time}
                        </div>

                        <button
                          style={{
                            marginTop: 8,
                            padding: 0,
                            background:
                              "transparent",
                            color:
                              "#9c96a1",
                            fontSize: 11,
                            fontWeight: 600,
                          }}
                          onClick={() =>
                            removeReservation(
                              reservation.id
                            )
                          }
                        >
                          Usuń
                        </button>
                      </div>

                    </div>
                  );
                }
              )}

              <button
                className="primary-button"
                onClick={openDiscover}
                style={{
                  marginTop: 10,
                  width: "fit-content",
                }}
              >
                Dodaj kolejną rezerwację
                <Icon
                  name="arrow"
                  size={18}
                />
              </button>

            </div>
          )}
        </section>
      )}

      {/* =====================================================
          BENEFITY
          ===================================================== */}

      {tab === "benefits" && (
        <section className="page">

          <div className="page-top">
            <div className="page-heading">
              <span className="section-label">
                STREFA PLUS
              </span>

              <h1>Benefity</h1>

              <p>
                Wykorzystaj swoje punkty.
              </p>
            </div>

            <button
              className="back-button"
              onClick={() => setTab("home")}
            >
              <Icon
                name="home"
                size={17}
              />
              Start
            </button>
          </div>

          <div className="benefits-layout">

            <div className="benefit-points">
              <small>
                TWOJE PUNKTY
              </small>

              <strong>
                320 pkt
              </strong>

              <p>
                Zbieraj punkty i wykorzystuj
                je na aktywności dostępne
                w Strefie.
              </p>
            </div>

            <div className="benefit-item">
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

          </div>
        </section>
      )}

      {/* =====================================================
          PROFILE
          ===================================================== */}

      {tab === "profile" && (
        <section className="page profile-layout">

          <div className="page-top">
            <div className="page-heading">
              <span className="section-label">
                TWOJA STREFA
              </span>

              <h1>Profil</h1>

              <p>
                Twoje dane i aktywność.
              </p>
            </div>

            <button
              className="back-button"
              onClick={() => setTab("home")}
            >
              <Icon
                name="home"
                size={17}
              />
              Start
            </button>
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
              {reservations.length}
            </strong>
          </div>

        </section>
      )}

      {/* =====================================================
          BOTTOM NAV
          ===================================================== */}

      <nav className="bottom-nav">

        <button
          className={
            tab === "home"
              ? "nav-item active"
              : "nav-item"
          }
          onClick={() => {
            closeBooking();
            setTab("home");
          }}
        >
          <span className="nav-active">
            <Icon
              name="home"
              size={25}
            />
          </span>

          <span>Start</span>
        </button>

        <button
          className={
            tab === "discover"
              ? "nav-item active"
              : "nav-item"
          }
          onClick={() => {
            closeBooking();
            setTab("discover");
          }}
        >
          <span className="nav-active">
            <Icon
              name="search"
              size={25}
            />
          </span>

          <span>Odkrywaj</span>
        </button>

        <button
          className={
            tab === "bookings"
              ? "nav-item active"
              : "nav-item"
          }
          onClick={() => setTab("bookings")}
        >
          <span className="nav-active">
            <Icon
              name="calendar"
              size={25}
            />
          </span>

          <span>Rezerwacje</span>
        </button>

        <button
          className={
            tab === "benefits"
              ? "nav-item active"
              : "nav-item"
          }
          onClick={() => {
            closeBooking();
            setTab("benefits");
          }}
        >
          <span className="nav-active">
            <Icon
              name="star"
              size={25}
            />
          </span>

          <span>Benefity</span>
        </button>

        <button
          className={
            tab === "profile"
              ? "nav-item active"
              : "nav-item"
          }
          onClick={() => {
            closeBooking();
            setTab("profile");
          }}
        >
          <span className="nav-active">
            <Icon
              name="user"
              size={25}
            />
          </span>

          <span>Profil</span>
        </button>

      </nav>
    </main>
  );
}
