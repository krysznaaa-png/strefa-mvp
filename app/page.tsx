/* =====================================================
   STREFA — NOWY WYBÓR TERMINU
   ===================================================== */

.booking-modal {
  max-height: 88vh;
  overflow-y: auto;
}

.booking-section {
  margin-top: 24px;
}

.booking-section-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
}

.booking-kicker {
  display: block;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  opacity: 0.55;
  margin-bottom: 5px;
}

.booking-section-head h3 {
  margin: 0;
  font-size: 18px;
  font-weight: 750;
}

.booking-selected-label,
.booking-hint {
  font-size: 12px;
  font-weight: 650;
  opacity: 0.6;
}

/* DNI */

.date-boxes {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 8px;
}

.date-box {
  position: relative;
  min-height: 78px;
  padding: 10px 6px;
  border: 1px solid rgba(40, 40, 45, 0.10);
  border-radius: 18px;
  background: #f7f7f8;
  color: #28282d;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  cursor: pointer;
  transition:
    transform 0.15s ease,
    background 0.15s ease,
    border-color 0.15s ease;
}

.date-box:active {
  transform: scale(0.97);
}

.date-box.active {
  background: #28282d;
  color: white;
  border-color: #28282d;
}

.date-weekday {
  font-size: 10px;
  font-weight: 750;
  text-transform: uppercase;
  opacity: 0.55;
}

.date-box.active .date-weekday {
  opacity: 0.7;
}

.date-box strong {
  font-size: 24px;
  line-height: 1;
  font-weight: 800;
}

.date-month {
  font-size: 10px;
  opacity: 0.55;
  text-transform: uppercase;
}

.date-check {
  position: absolute;
  top: 7px;
  right: 7px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  color: #28282d;
}

/* GODZINY */

.time-boxes {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 8px;
}

.time-box {
  min-height: 48px;
  border: 1px solid rgba(40, 40, 45, 0.10);
  border-radius: 14px;
  background: #f7f7f8;
  color: #28282d;
  font-size: 14px;
  font-weight: 750;
  cursor: pointer;
  transition:
    transform 0.15s ease,
    background 0.15s ease;
}

.time-box:active {
  transform: scale(0.97);
}

.time-box.active {
  background: #2895b3;
  border-color: #2895b3;
  color: white;
}

.time-box.disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

/* PODSUMOWANIE */

.booking-summary {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 20px;
  padding: 14px;
  border-radius: 16px;
  background: rgba(40, 149, 179, 0.09);
}

.summary-icon {
  width: 38px;
  height: 38px;
  flex: 0 0 38px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(40, 149, 179, 0.15);
  color: #2895b3;
}

.booking-summary span {
  display: block;
  font-size: 11px;
  opacity: 0.55;
  margin-bottom: 3px;
}

.booking-summary strong {
  display: block;
  font-size: 14px;
  font-weight: 750;
}

/* PRZYCISK */

.booking-modal .primary-button.full {
  margin-top: 20px;
}

.booking-modal .secondary-button {
  margin-top: 8px;
}

/* TELEFON / IPAD */

@media (max-width: 520px) {
  .date-boxes {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .time-boxes {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .date-box {
    min-height: 72px;
    border-radius: 16px;
  }

  .date-box strong {
    font-size: 22px;
  }
}
