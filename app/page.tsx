'use client';

import { useMemo, useState } from 'react';

const services = [
  { name: 'Siłownia', place: 'STREFA Fitness Centrum', price: 49, category: 'Sport', icon: '🏋️' },
  { name: 'SPA & Wellness', place: 'STREFA SPA', price: 120, category: 'Wellness', icon: '🧖' },
  { name: 'Trening personalny', place: 'STREFA Fitness Centrum', price: 90, category: 'Sport', icon: '💪' },
  { name: 'Escape room', place: 'STREFA Fun', price: 80, category: 'Rozrywka', icon: '🔐' },
  { name: 'Masaż relaksacyjny', place: 'STREFA SPA', price: 150, category: 'Wellness', icon: '💆' },
  { name: 'Joga', place: 'STREFA Fitness Centrum', price: 45, category: 'Sport', icon: '🧘' },
  { name: 'Bilard', place: 'STREFA Fun', price: 35, category: 'Rozrywka', icon: '🎱' },
  { name: 'Sauna', place: 'STREFA SPA', price: 60, category: 'Wellness', icon: '🔥' },
];

const categories = ['Wszystko', 'Sport', 'Wellness', 'Rozrywka'];

export default function HomePage() {
  const [tab, setTab] = useState('home');
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('Wszystko');
  const [selected, setSelected] = useState<string | null>(null);
  const [day, setDay] = useState('28 sierpnia');
  const [time, setTime] = useState('18:00');
  const [toast, setToast] = useState('');
  
const availableDates = [
  { date: '28 sierpnia', day: 'PT' },
  { date: '29 sierpnia', day: 'SOB' },
  { date: '30 sierpnia', day: 'ND' },
  { date: '31 sierpnia', day: 'PN' },
  { date: '1 września', day: 'WT' },
];

const availableTimes = [
  '09:00',
  '10:00',
  '11:30',
  '13:00',
  '15:30',
  '17:00',
  '18:00',
  '19:30',
];
  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const matchesSearch =
        service.name.toLowerCase().includes(search.toLowerCase()) ||
        service.place.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === 'Wszystko' || service.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  const notify = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(''), 2500);
  };

  const openDiscover = () => {
    setTab('discover');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="app">
      <style jsx global>{`
        * { box-sizing: border-box; }

        body {
          margin: 0;
          background: #f5f6f7;
          font-family: Arial, Helvetica, sans-serif;
          color: #17191c;
        }

        button {
          font: inherit;
          cursor: pointer;
        }

        .app {
          width: 100%;
          max-width: 650px;
          min-height: 100vh;
          margin: 0 auto;
          background: #f8f9fa;
          padding-bottom: 95px;
        }

        .header {
          height: 76px;
          background: white;
          border-bottom: 1px solid #e7e7e7;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 24px;
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .brand {
          font-size: 24px;
          font-weight: 900;
          letter-spacing: 6px;
        }

        .bell {
          border: 0;
          background: transparent;
          font-size: 24px;
          position: relative;
        }

        .dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #ef4444;
          position: absolute;
          top: 2px;
          right: 1px;
        }

        .content {
          padding: 28px 24px;
        }

        .hello {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
        }

        .hello small {
          color: #8d9299;
          font-size: 15px;
        }

        .hello h1 {
          margin: 5px 0 0;
          font-size: 32px;
        }

        .avatar {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: #17191c;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 20px;
        }

        .wallet {
          background: #191b1f;
          color: white;
          border-radius: 25px;
          padding: 25px;
          margin-bottom: 18px;
        }

        .wallet small {
          color: #aeb2b8;
        }

        .wallet-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 8px;
        }

        .wallet strong {
          font-size: 34px;
        }

        .wallet button {
          border: 0;
          border-radius: 13px;
          background: white;
          padding: 12px 18px;
        }

        .quick {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 30px;
        }

        .quick button {
          border: 1px solid #e2e3e5;
          background: white;
          border-radius: 17px;
          padding: 17px 12px;
          font-weight: 700;
        }

        .section-title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        }

        .section-title h2 {
          margin: 0;
          font-size: 20px;
        }

        .section-title button {
          border: 0;
          background: transparent;
          color: #8a8e94;
        }

        .service {
          width: 100%;
          border: 1px solid #e4e5e7;
          background: white;
          border-radius: 20px;
          padding: 13px;
          display: flex;
          align-items: center;
          gap: 14px;
          text-align: left;
          margin-bottom: 12px;
        }

        .service-icon {
          width: 70px;
          height: 70px;
          border-radius: 15px;
          background: #eef0f2;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          flex-shrink: 0;
        }

        .service-info {
          flex: 1;
        }

        .service-info h3 {
          margin: 0 0 6px;
          font-size: 17px;
        }

        .service-info p {
          margin: 0 0 7px;
          color: #8b9097;
          font-size: 14px;
        }

        .price {
          font-weight: 800;
        }

        .page-title {
          font-size: 30px;
          margin: 5px 0 20px;
        }

        .search {
          width: 100%;
          padding: 17px 18px;
          border-radius: 16px;
          border: 1px solid #dedfe1;
          background: white;
          font-size: 16px;
          outline: none;
          margin-bottom: 15px;
        }

        .categories {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          padding-bottom: 8px;
          margin-bottom: 20px;
        }

        .category {
          white-space: nowrap;
          border: 1px solid #dedfe1;
          background: white;
          padding: 10px 16px;
          border-radius: 20px;
        }

        .category.active {
          background: #191b1f;
          color: white;
          border-color: #191b1f;
        }

        .empty {
          background: white;
          border-radius: 20px;
          padding: 40px 20px;
          text-align: center;
          color: #8b9097;
        }

        .modal-bg {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,.45);
          display: flex;
          align-items: flex-end;
          justify-content: center;
          z-index: 50;
        }

        .modal {
          width: 100%;
          max-width: 650px;
          background: white;
          border-radius: 28px 28px 0 0;
          padding: 25px;
        }

        .modal h2 {
          margin-top: 0;
        }

        .modal-row {
          display: flex;
          gap: 10px;
          margin: 12px 0;
        }

        .modal input {
          width: 100%;
          border: 1px solid #ddd;
          border-radius: 13px;
          padding: 14px;
        }

        .primary {
          width: 100%;
          border: 0;
          background: #191b1f;
          color: white;
          border-radius: 15px;
          padding: 16px;
          font-weight: 700;
          margin-top: 10px;
        }

        .close {
          width: 100%;
          border: 0;
          background: #f1f2f3;
          border-radius: 15px;
          padding: 14px;
          margin-top: 8px;
        }

        .bottom {
          position: fixed;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          max-width: 650px;
          height: 82px;
          background: rgba(255,255,255,.97);
          border-top: 1px solid #e5e5e5;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          z-index: 20;
        }

        .bottom button {
          border: 0;
          background: transparent;
          color: #9a9da3;
          font-size: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
        }

        .bottom button.active {
          color: #17191c;
          font-weight: 700;
        }

        .bottom span:first-child {
          font-size: 22px;
        }

        .toast {
          position: fixed;
          left: 50%;
          bottom: 100px;
          transform: translateX(-50%);
          background: #191b1f;
          color: white;
          padding: 13px 20px;
          border-radius: 14px;
          z-index: 100;
        }
      `}</style>

      <header className="header">
        <div className="brand">STREFA</div>
        <button className="bell" onClick={() => notify('Brak nowych powiadomień')}>
          🔔
          <span className="dot" />
        </button>
      </header>

      <div className="content">
        {tab === 'home' && (
          <>
            <div className="hello">
              <div>
                <small>Dzień dobry,</small>
                <h1>Krzysia 👋</h1>
              </div>
              <div className="avatar">K</div>
            </div>

            <div className="wallet">
              <small>Twój portfel</small>
              <div className="wallet-row">
                <div>
                  <strong>248,50 zł</strong>
                  <div style={{ color: '#aeb2b8', marginTop: 5 }}>+ 320 pkt Loyalty</div>
                </div>
                <button onClick={() => setTab('wallet')}>Zobacz →</button>
              </div>
            </div>

            <div className="quick">
              <button onClick={openDiscover}>🔎 Znajdź usługę</button>
              <button onClick={() => setTab('bookings')}>📅 Moje rezerwacje</button>
            </div>

            <div className="section-title">
              <h2>Polecane dla Ciebie</h2>
              <button onClick={openDiscover}>Wszystkie</button>
            </div>

            {services.slice(0, 3).map((service) => (
              <button
                className="service"
                key={service.name}
                onClick={() => setSelected(service.name)}
              >
                <div className="service-icon">{service.icon}</div>
                <div className="service-info">
                  <h3>{service.name}</h3>
                  <p>{service.place}</p>
                  <span className="price">od {service.price} zł</span>
                </div>
                <span>›</span>
              </button>
            ))}
          </>
        )}

        {tab === 'discover' && (
          <>
            <h1 className="page-title">Odkrywaj</h1>

            <input
              className="search"
              placeholder="🔎  Czego szukasz?"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <div className="categories">
              {categories.map((item) => (
                <button
                  key={item}
                  className={`category ${category === item ? 'active' : ''}`}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="section-title">
              <h2>Usługi</h2>
              <span style={{ color: '#8b9097' }}>{filteredServices.length}</span>
            </div>

            {filteredServices.length > 0 ? (
              filteredServices.map((service) => (
                <button
                  className="service"
                  key={service.name}
                  onClick={() => setSelected(service.name)}
                >
                  <div className="service-icon">{service.icon}</div>
                  <div className="service-info">
                    <h3>{service.name}</h3>
                    <p>{service.place}</p>
                    <span className="price">od {service.price} zł</span>
                  </div>
                  <span>›</span>
                </button>
              ))
            ) : (
              <div className="empty">
                Nie znaleziono usług.<br />
                Spróbuj innej nazwy lub kategorii.
              </div>
            )}
          </>
        )}

        {tab === 'bookings' && (
          <>
            <h1 className="page-title">Rezerwacje</h1>
            <div className="empty">
              📅<br /><br />
              Nie masz jeszcze żadnych rezerwacji.
              <br /><br />
              <button className="primary" onClick={openDiscover}>
                Znajdź usługę
              </button>
            </div>
          </>
        )}

        {tab === 'wallet' && (
          <>
            <h1 className="page-title">Portfel</h1>
            <div className="wallet">
              <small>Dostępne środki</small>
              <div style={{ marginTop: 8 }}>
                <strong>248,50 zł</strong>
              </div>
            </div>

            <div className="section-title">
              <h2>Historia</h2>
            </div>

            <div className="service">
              <div className="service-icon">🎁</div>
              <div className="service-info">
                <h3>Punkty Loyalty</h3>
                <p>Bonus za aktywność</p>
                <span className="price">+320 pkt</span>
              </div>
            </div>
          </>
        )}

        {tab === 'benefits' && (
          <>
            <h1 className="page-title">Benefity</h1>
            <div className="service">
              <div className="service-icon">🎁</div>
              <div className="service-info">
                <h3>Benefit sportowy</h3>
                <p>Wykorzystaj swoje punkty</p>
                <span className="price">320 pkt</span>
              </div>
            </div>
          </>
        )}

        {tab === 'profile' && (
          <>
            <h1 className="page-title">Profil</h1>
            <div className="hello">
              <div>
                <small>Twój profil</small>
                <h1>Krzysia</h1>
              </div>
              <div className="avatar">K</div>
            </div>
          </>
        )}
      </div>

      {selected && (
  <div className="modal-bg" onClick={() => setSelected(null)}>
    <div className="modal" onClick={(e) => e.stopPropagation()}>
      
      <h2>{selected}</h2>
      <p>Wybierz dogodny termin rezerwacji.</p>

      <h3 className="booking-label">Dostępne dni</h3>

      <div className="date-grid">
        {availableDates.map((item) => (
          <button
            key={item.date}
            className={`date-box ${day === item.date ? 'active' : ''}`}
            onClick={() => setDay(item.date)}
          >
            <strong>{item.date.split(' ')[0]}</strong>
            <span>{item.day}</span>
          </button>
        ))}
      </div>

      <h3 className="booking-label">Dostępne godziny</h3>

      <div className="time-grid">
        {availableTimes.map((item) => (
          <button
            key={item}
            className={`time-box ${time === item ? 'active' : ''}`}
            onClick={() => setTime(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="booking-summary">
        <strong>Wybrany termin</strong>
        <span>📅 {day}</span>
        <span>🕐 {time}</span>
      </div>

      <button
        className="primary"
        onClick={() => {
          setSelected(null);
          notify(`Zarezerwowano ${selected} – ${day}, ${time}`);
        }}
      >
        Zarezerwuj
      </button>

      <button
        className="close"
        onClick={() => setSelected(null)}
      >
        Anuluj
      </button>

    </div>
  </div>
)}

            <button className="close" onClick={() => setSelected(null)}>
              Anuluj
            </button>
          </div>
        </div>
      )}

      {toast && <div className="toast">{toast}</div>}

      <nav className="bottom">
        <button
          className={tab === 'home' ? 'active' : ''}
          onClick={() => setTab('home')}
        >
          <span>⌂</span>
          Start
        </button>

        <button
          className={tab === 'discover' ? 'active' : ''}
          onClick={() => setTab('discover')}
        >
          <span>⌕</span>
          Odkrywaj
        </button>

        <button
          className={tab === 'bookings' ? 'active' : ''}
          onClick={() => setTab('bookings')}
        >
          <span>▣</span>
          Rezerwacje
        </button>

        <button
          className={tab === 'benefits' ? 'active' : ''}
          onClick={() => setTab('benefits')}
        >
          <span>🎁</span>
          Benefity
        </button>

        <button
          className={tab === 'profile' ? 'active' : ''}
          onClick={() => setTab('profile')}
        >
          <span>●</span>
          Profil
        </button>
      </nav>
    </main>
  );
}
