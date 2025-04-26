import React from "react";
import "./Confirmation.css";

export default function Confirmation({ flight, seat }) {
  return (
    <div className="confirmation">
      <h2>Rezervasyon Onayı</h2>
      <p>Rezervasyonunuz başarıyla tamamlandı!</p>
      <p>
        <strong>Uçuş:</strong> {flight.from} → {flight.to}
      </p>
      <p>
        <strong>Tarih:</strong> {flight.date}
      </p>
      <p>
        <strong>Saat:</strong> {flight.time}
      </p>
      <p>
        <strong>Koltuk:</strong> {seat}
      </p>
    </div>
  );
}
