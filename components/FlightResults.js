import React from "react";
import "./FlightResults.css";

export default function FlightResults({ flights, onSelect }) {
  return (
    <div className="results-container">
      <h2>Uçuşlar</h2>
      {flights.length === 0 ? (
        <p>Uygun uçuş bulunamadı.</p>
      ) : (
        flights.map((flight) => (
          <div key={flight.id} className="flight-card">
            <div>
              <strong>
                {flight.from} → {flight.to}
              </strong>
              <p>
                {flight.date} - {flight.time}
              </p>
            </div>
            <div>
              <p>{flight.price}₺</p>
              <button onClick={() => onSelect(flight)}>Seç</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
