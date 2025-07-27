import React, { useState, useEffect } from "react";
import "./order.css";
import "./controlled.css";
import "./dropdown.css";
import "./checkbox.css";

export default function Order() {
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("Americano");
  const [orderType, setOrderType] = useState("");
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  // Check login status when page loads
  useEffect(() => {
    const token = localStorage.getItem("token"); // assuming you save JWT after login
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  const handleInputChange = (event) => setInputValue(event.target.value);
  const handleDropdownChange = (event) => setSelectedOption(event.target.value);
  const handleOrderTypeChange = (event) => setOrderType(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!loggedIn) {
      setError("Please sign in before placing an order.");
      return;
    }

    if (!inputValue || !selectedOption || !orderType) {
      setError("Please complete all fields before submitting.");
      return;
    }

    const orderData = {
      name: inputValue,
      drink: selectedOption,
      dineIn: orderType === "Dine in",
    };

    try {
      const token = localStorage.getItem("token"); // include JWT token if needed
      const res = await fetch("http://localhost:3000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "", // send token to backend
        },
        body: JSON.stringify(orderData),
      });

      if (res.ok) {
        const result = await res.json();
        console.log("Order submitted to DB:", result);
        alert("Order submitted successfully.");
        handleRestart();
      } else {
        const errorRes = await res.json();
        setError(errorRes.error || "Failed to submit order.");
      }
    } catch (err) {
      setError("Network error: " + err.message);
    }
  };

  const handleRestart = () => {
    setInputValue("");
    setSelectedOption("Americano");
    setOrderType("");
    setError("");
  };

  return (
    <div className="order-container">
      {!loggedIn ? (
        <p style={{ color: "red" }}>
          Please sign in to place an order.
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Your Name:
            <input type="text" value={inputValue} onChange={handleInputChange} />
          </label>
          <br />

          <label>
            Select a drink:
            <select value={selectedOption} onChange={handleDropdownChange}>
              <option value="Americano">Americano</option>
              <option value="Latte">Latte</option>
              <option value="Cappuccino">Cappuccino</option>
            </select>
          </label>
          <br />

          <label>
            Order Type:
            <select value={orderType} onChange={handleOrderTypeChange}>
              <option value="">-- Select --</option>
              <option value="Dine in">Dine in</option>
              <option value="Take away">Take away</option>
            </select>
          </label>
          <br />

          {error && <p className="error">{error}</p>}

          <button type="submit">Submit Order</button>
          <button
            type="button"
            onClick={handleRestart}
            style={{ marginLeft: "10px" }}
          >
            Restart
          </button>
        </form>
      )}
    </div>
  );
}
