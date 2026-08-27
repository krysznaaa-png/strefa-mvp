"use client";

import {
  Search,
  CalendarDays,
  Star,
  UserRound,
  House,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  return (
    <main className="app">
      {/* HEADER */}
      <header className="header">
        <div>
          <div className="logo">STREFA</div>
          <div className="tagline">
            Twoja strefa. <span>Twoje miejsce.</span>
          </div>
        </div>

        <button className="avatar" aria-label="Profil">
          K
        </button>
      </header>

      {/* MAIN CARDS */}
      <section className="hero-cards">
        {/* DISCOVER */}
        <button className="feature-card discover-card">
          <div className="card-icon">
            <Search size={34} strokeWidth={1.8} />
          </div>

          <div className="card-content">
            <div className="eyebrow">ODKRYWAJ</div>

            <h1>
              Znajdź coś
              <br />
              dla siebie
            </h1>

            <div className="accent-line" />

            <p>
              Sport <span>•</span> wellness <span>•</span>
              <br />
              aktywności i więcej
            </p>
          </div>

          <div className="card-arrow">
            <ArrowRight size={25} strokeWidth={1.8} />
          </div>
        </button>

        {/* POINTS */}
        <button className="feature-card points-card">
          <div className="card-icon">
            <Star size={34} strokeWidth={1.8} />
          </div>

          <div className="card-content">
            <div className="eyebrow">TWOJE PUNKTY</div>

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
            <ArrowRight size={25} strokeWidth={1.8} />
          </div>
        </button>
      </section>

      {/* QUICK ACCESS */}
      <section className="quick-section">
        <div className="section-label">SZYBKI DOSTĘP</div>

        <div className="quick-grid">
          <button className="quick-card">
            <div className="quick-icon">
              <CalendarDays size={27} strokeWidth={1.8} />
            </div>

            <div>
              <h2>Rezerwacje</h2>
              <p>Twoje terminy</p>
            </div>

            <ArrowRight className="quick-arrow" size={24} />
          </button>

          <button className="quick-card">
            <div className="quick-icon">
              <Star size={27} strokeWidth={1.8} />
            </div>

            <div>
              <h2>Benefity</h2>
              <p>Twoje korzyści</p>
            </div>

            <ArrowRight className="quick-arrow" size={24} />
          </button>
        </div>
      </section>

      {/* BOTTOM NAV */}
      <nav className="bottom-nav">
        <button className="nav-item active">
          <div className="nav-active">
            <House size={25} strokeWidth={1.8} />
          </div>
          <span>Start</span>
        </button>

        <button className="nav-item">
          <Search size={25} strokeWidth={1.8} />
          <span>Odkrywaj</span>
        </button>

        <button className="nav-item">
          <CalendarDays size={25} strokeWidth={1.8} />
          <span>Rezerwacje</span>
        </button>

        <button className="nav-item">
          <Star size={25} strokeWidth={1.8} />
          <span>Benefity</span>
        </button>

        <button className="nav-item">
          <UserRound size={25} strokeWidth={1.8} />
          <span>Profil</span>
        </button>
      </nav>
    </main>
  );
}
