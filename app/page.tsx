{/* HOME */}
{tab === "home" && (
  <>
    <section className="home-hero">
      <div className="hero-copy">
        <div className="eyebrow">
          <Icon name="spark" size={15} />
          <span>DLA CIEBIE</span>
        </div>

        <h1>
          Znajdź coś
          <br />
          dla siebie<span className="hero-dot">.</span>
        </h1>

        <p>
          Sport, wellness i dobre chwile.
          <br />
          Wszystko w jednym miejscu.
        </p>
      </div>

      {/* PROFIL — tylko dyskretne kółko */}
      <button
        className="home-profile"
        onClick={() => setTab("profile")}
        aria-label="Profil"
      >
        K
      </button>
    </section>

    {/* GŁÓWNE KARTY */}
    <section className="home-feature-grid">

      {/* ODKRYWAJ */}
      <button
        className="feature-card discover-feature"
        onClick={openDiscover}
      >
        <div className="feature-top">
          <span className="feature-label">ODKRYWAJ</span>

          <div className="feature-icon">
            <Icon name="search" size={25} />
          </div>
        </div>

        <div className="feature-content">
          <h2>Odkrywaj usługi</h2>

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
        onClick={() => setTab("benefits")}
      >
        <div className="points-glow" />

        <div className="feature-top">
          <span className="feature-label">STREFA PLUS</span>

          <div className="points-icon">
            <Icon name="star" size={23} />
          </div>
        </div>

        <div className="points-content">
          <span className="points-caption">TWOJE PUNKTY</span>

          <div className="points-number">
            320
            <small>pkt</small>
          </div>

          <p>Wykorzystaj swoje punkty</p>
        </div>
      </button>

    </section>

    {/* SZYBKI DOSTĘP */}
    <section className="home-quick-section">
      <div className="section-heading compact">
        <div>
          <span className="section-label">SZYBKI DOSTĘP</span>
          <h2>Wszystko pod ręką</h2>
        </div>
      </div>

      <div className="quick-grid">

        <button
          className="quick-card"
          onClick={() => setTab("bookings")}
        >
          <div className="quick-card-icon">
            <Icon name="calendar" size={22} />
          </div>

          <div>
            <strong>Rezerwacje</strong>
            <small>Twoje terminy</small>
          </div>
        </button>

        <button
          className="quick-card"
          onClick={() => setTab("benefits")}
        >
          <div className="quick-card-icon">
            <Icon name="star" size={22} />
          </div>

          <div>
            <strong>Benefity</strong>
            <small>320 pkt do wykorzystania</small>
          </div>
        </button>

      </div>
    </section>
  </>
)}
