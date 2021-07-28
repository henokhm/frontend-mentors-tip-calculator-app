import { useState } from "react";
import "./InputSection.css";

function InputSection() {
  const [billInput, setBillInput] = useState("");
  const [numPeopleInput, setNumPeopleInput] = useState("");

  const handleBillInputChange = (event) => {
    // TODO: Error handling
    setBillInput(event.target.value);
  };

  const handleNumPeopleInputChange = (event) => {
    // TODO: Error handling
    setNumPeopleInput(event.target.value);
  };

  return (
    <div className="input-section">
      <label className="input-label" htmlFor="billInput">
        Bill
      </label>
      <br />
      <input
        name="billInput"
        className="text-input bill-amount-text-input"
        value={billInput}
        onChange={handleBillInputChange}
      />
      <div>insert percentage options buttons here</div>
      <div>insert custom percentage button here</div>
      <label className="input-label" htmlFor="numPeopleInput">
        Number of People
      </label>
      <br />
      <input
        className="text-input num-people-text-input"
        name="numPeopleInput"
        value={numPeopleInput}
        onChange={handleNumPeopleInputChange}
      />
    </div>
  );
}

export default InputSection;
