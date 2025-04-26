import React, { useState } from "react";
import "./Payment.css";

export default function Payment({ flight, seat, onPaymentSuccess }) {
  const [cardNumber, setCardNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [error, setError] = useState("");

  const handlePayment = (e) => {
    e.preventDefault();

    if (
      cardNumber.length !== 16 ||
      name.trim() === "" ||
      expiry.length < 4 ||
      cvv.length !== 3
    ) {
      setError("Lütfen tüm alanları doğru şekilde doldurun.");
      return;
    }

    setError("");
    onPaymentSuccess();
  };

  return (
    <form className="payment-form" onSubmit={handlePayment}>
      <h2>Ödeme Bilgileri</h2>

      <input
        type="text"
        placeholder="Kart Numarası (16 hane)"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        maxLength={16}
      />
      <input
        type="text"
        placeholder="Kart Üzerindeki İsim"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Son Kullanma (MM/YY)"
        value={expiry}
        onChange={(e) => setExpiry(e.target.value)}
      />
      <input
        type="text"
        placeholder="CVV"
        value={cvv}
        onChange={(e) => setCvv(e.target.value)}
        maxLength={3}
      />

      {error && <p className="error">{error}</p>}
      <button type="submit">Ödeme Yap</button>
    </form>
  );
}
