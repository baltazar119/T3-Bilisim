import React, { useState } from "react";
import "./FlightSearch.css";

const cities = ["İstanbul", "Ankara", "İzmir", "Antalya", "Trabzon"];

export default function FlightSearch({ setFlights }) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (from === to) {
      setError("Kalkış ve varış şehirleri aynı olamaz.");
      return;
    }

    const dummyFlights = [
      { id: 1, from, to, date, time: "10:00", price: 1200 },
      { id: 2, from, to, date, time: "15:30", price: 1350 },
      { id: 3, from, to, date, time: "21:00", price: 1100 },
    ];

    setFlights(dummyFlights);
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <h2>Uçuş Ara</h2>

      <div className="form-group">
        <label>Kalkış:</label>
        <select value={from} onChange={(e) => setFrom(e.target.value)} required>
          <option value="">Şehir seç</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Varış:</label>
        <select value={to} onChange={(e) => setTo(e.target.value)} required>
          <option value="">Şehir seç</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Tarih:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      {error && <p className="error">{error}</p>}

      <button type="submit" className="search-btn">
        Uçuşları Bul
      </button>
    </form>
  );
}
