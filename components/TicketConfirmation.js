import React from "react";
import "./TicketConfirmation.css";

export default function TicketConfirmation({ flight, seat, onConfirm }) {
  return (
    <div className="ticket-confirmation">
      <h2>Bilet Onayı</h2>
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
        <strong>Koltuk No:</strong> {seat}
      </p>
      <button onClick={onConfirm}>Devam Et</button>
    </div>
  );
}
