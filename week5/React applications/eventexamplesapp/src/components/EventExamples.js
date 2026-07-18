import React, { useState } from "react";

function EventExamples() {
  const [count, setCount] = useState(5);
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");

  // Increment counter
  const increment = () => {
    setCount(count + 1);
    sayHello();
  };

  // Decrement counter
  const decrement = () => {
    setCount(count - 1);
  };

  // Hello message
  const sayHello = () => {
    alert("Hello!! Member1");
  };

  // Welcome message
  const sayWelcome = (msg) => {
    alert(msg);
  };

  // Synthetic event
  const handlePress = () => {
    alert("I was clicked");
  };

  // Currency conversion (INR to Euro)
  const handleSubmit = () => {
    if (amount === "") {
      setCurrency("");
      return;
    }

    const euro = (parseFloat(amount) / 90).toFixed(2);
    setCurrency(euro);
  };

  return (
    <div style={{ padding: "10px" }}>
      <p>{count}</p>

      <button onClick={increment}>Increment</button>
      <br /><br />

      <button onClick={decrement}>Decrement</button>
      <br /><br />

      <button onClick={() => sayWelcome("welcome")}>
        Say welcome
      </button>
      <br /><br />

      <button onClick={handlePress}>
        Click on me
      </button>

      <br /><br /><br />

      <h1 style={{ color: "green" }}>
        Currency Convertor!!!
      </h1>

      <table>
        <tbody>
          <tr>
            <td>Amount:</td>
            <td>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </td>
          </tr>

          <tr>
            <td>Currency:</td>
            <td>
              <input
                type="text"
                value={currency}
                readOnly
              />
            </td>
          </tr>

          <tr>
            <td></td>
            <td>
              <br />
              <button onClick={handleSubmit}>
                Submit
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default EventExamples;