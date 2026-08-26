'use client';
import {useState} from "react";
import {CalendarDays, CreditCard, Gift, Home, Search, UserRound, Star, Bell, Dumbbell, ChevronRight} from "lucide-react";

const services=[
 {name:"Siłownia",place:"STREFA Fitness Centrum",price:49,icon:"🏋️"},
 {name:"SPA & Wellness",place:"STREFA SPA",price:120,icon:"🧖"},
 {name:"Trening personalny",place:"z trenerem",price:90,icon:"🧑‍🏫"},
 {name:"Escape room",place:"STREFA Fun",price:80,icon:"🗝️"},
];
export default function HomePage(){
 const [tab,setTab]=useState("home");
 const [selected,setSelected]=useState<string|null>(null);
 const [toast,setToast]=useState("");
 const notify=(s:string)=>{setToast(s);setTimeout(()=>setToast(""),2200)};
 return <main>
  <header><div className="brand">STREFA</div><button className="icon"><Bell size={20}/><i/></button></header>
  {tab==="home" && <section className="page">
   <div className="hello"><div><span>Dzień dobry,</span><h1>Krzysia 👋</h1></div><div className="avatar">K</div></div>
   <div className="hero"><div><small>Twój portfel</small><strong>248,50 zł</strong><p>+ 320 pkt Loyalty</p></div><button onClick={()=>setTab("wallet")}>Zobacz <ChevronRight size={16}/></button></div>
   <div className="quick"><button onClick={()=>setTab("discover")}><Search/><span>Znajdź usługę</span></button><button onClick={()=>setTab("bookings")}><CalendarDays/><span>Moje rezerwacje</span></button></div>
   <div className="sectionTitle"><h2>Polecane dla Ciebie</h2><button onClick={()=>setTab("discover")}>Wszystkie</button></div>
   <div className="cards">{services.slice(0,3).map(s=><article className="service" key={s.name} onClick={()=>setSelected(s.name)}><div className="photo">{s.icon}</div><div><b>{s.name}</b><span>{s.place}</span><strong>od {s.price} zł</strong></div></article>)}</div>
   <div className="sectionTitle"><h2>Twoje benefity</h2><button onClick={()=>setTab("benefits")}>Zobacz</button></div>
   <div className="benefit"><div className="gift"><Gift/></div><div><b>Benefit sportowy</b><span>Wykorzystano 2 z 8 wejść</span><div className="progress"><i style={{width:"25%"}}/></div></div><strong>6 wejść</strong></div>
  </section>}
  {tab==="discover" && <section className="page"><div className="topTitle"><h1>Odkrywaj</h1><div className="search"><Search size={18}/><input placeholder="Czego szukasz?" /></div></div><div className="chips"><button>Wszystko</button><button>Fitness</button><button>SPA</button><button>Trenerzy</button><button>Rozrywka</button></div><div className="cards">{services.map(s=><article className="service large" key={s.name} onClick={()=>setSelected(s.name)}><div className="photo">{s.icon}</div><div><b>{s.name}</b><span>{s.place}</span><strong>od {s.price} zł</strong></div><ChevronRight/></article>)}</div></section>}
  {tab==="bookings" && <section className="page"><div className="topTitle"><h1>Rezerwacje</h1></div><div className="booking"><span className="date">28<br/><small>SIE</small></span><div><b>Trening personalny</b><span>STREFA Fitness · 18:00</span><small>Potwierdzona</small></div><ChevronRight/></div><div className="booking muted"><span className="date">02<br/><small>WRZ</small></span><div><b>SPA & Wellness</b><span>STREFA SPA · 16:30</span><small>Potwierdzona</small></div><ChevronRight/></div></section>}
  {tab==="wallet" && <section className="page"><div className="topTitle"><h1>Portfel</h1></div><div className="wallet"><small>Dostępne środki</small><strong>248,50 zł</strong><button onClick={()=>notify("Dodawanie środków — moduł płatności w przygotowaniu")}>+ Dodaj środki</button></div><h2 className="sub">Ostatnie operacje</h2>{["Trening personalny · −90 zł","Wpłata · +200 zł","Siłownia · −49 zł"].map((x,i)=><div className="transaction" key={x}><span>{i===1?"↗":"↙"}</span><div><b>{x.split(" · ")[0]}</b><small>26 sierpnia 2026</small></div><strong>{x.split(" · ")[1]}</strong></div>)}</section>}
  {tab==="benefits" && <section className="page"><div className="topTitle"><h1>Benefity</h1></div><div className="benefit big"><div className="gift"><Gift/></div><div><b>Benefit sportowy</b><span>8 wejść / miesiąc</span><div className="progress"><i style={{width:"25%"}}/></div><small>Wykorzystano 2 · pozostało 6</small></div></div><div className="benefit big"><div className="gift"><Star/></div><div><b>Loyalty</b><span>320 punktów dostępnych</span><button onClick={()=>notify("Katalog nagród — w przygotowaniu")}>Wymień punkty</button></div></div></section>}
  {tab==="profile" && <section className="page"><div className="profile"><div className="avatar bigAvatar">K</div><h1>Krzysia</h1><span>Klient STREFA</span></div><div className="menu">{["Dane osobowe","Pełnomocnictwa","Preferencje powiadomień","Historia aktywności"].map(x=><button key={x} onClick={()=>notify(x+" — moduł w przygotowaniu")}>{x}<ChevronRight/></button>)}</div></section>}
  <nav>{[[Home,"home","Start"],[Search,"discover","Odkrywaj"],[CalendarDays,"bookings","Rezerwacje"],[Gift,"benefits","Benefity"],[UserRound,"profile","Profil"]].map(([I,k,l]:any)=><button className={tab===k?"active":""} onClick={()=>setTab(k)} key={k}><I size={21}/><span>{l}</span></button>)}</nav>
  {selected && <div className="modal" onClick={()=>setSelected(null)}><div className="sheet" onClick={e=>e.stopPropagation()}><button className="close" onClick={()=>setSelected(null)}>×</button><div className="bigEmoji">✨</div><h2>{selected}</h2><p>Wybierz dogodny termin i zarezerwuj usługę. Cena oraz dostępne benefity zostaną pokazane przed potwierdzeniem.</p><button className="primary" onClick={()=>{setSelected(null);setTab("bookings");notify("Rezerwacja utworzona — wersja demonstracyjna")}}>Wybierz termin</button></div></div>}
  {toast&&<div className="toast">{toast}</div>}
 </main>
}