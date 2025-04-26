import React, { useState, useEffect } from "react";
import "./SeatSelection.css";

export default function SeatSelection({ flight, onSeatSelect }) {
  const [seats, setSeats] = useState([]);
  const [selectedSeat, setSelectedSeat] = useState(null);

  useEffect(() => {
    const generatedSeats = Array.from({ length: 30 }, (_, i) => ({
      number: i + 1,
      available: Math.random() > 0.3, // %70 ihtimalle boş
    }));
    setSeats(generatedSeats);
  }, []);

  const handleSeatClick = (seatNumber) => {
    setSelectedSeat(seatNumber);
    onSeatSelect(seatNumber); // 👈 BU SATIR KRİTİK: App.js'e koltuk bildiriliyor
  };

  return (
    <div className="seat-page">
      <h2>
        {flight.from} → {flight.to} - Koltuk Seçimi
      </h2>
      <div className="seat-container">
        {seats.map((seat) => {
          const isSelected = selectedSeat === seat.number;
          return (
            <button
              key={seat.number}
              disabled={!seat.available}
              className={`seat ${
                !seat.available
                  ? "taken"
                  : isSelected
                  ? "selected"
                  : "available"
              }`}
              onClick={() => handleSeatClick(seat.number)}
            >
              {seat.number}
            </button>
          );
        })}
      </div>

      {selectedSeat && (
        <div className="seat-info">
          Seçilen Koltuk: <strong>{selectedSeat}</strong>
        </div>
      )}
    </div>
  );
}
