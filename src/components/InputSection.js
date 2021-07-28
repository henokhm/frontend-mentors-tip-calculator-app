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
      <div className="bill-amount-text-input">
        <input
          name="billInput"
          className="text-input"
          value={billInput}
          onChange={handleBillInputChange}
        />
      </div>
      <div>insert percentage options buttons here</div>
      <div>insert custom percentage button here</div>
      <label className="input-label" htmlFor="numPeopleInput">
        Number of People
      </label>
      <br />
      <div className="num-people-text-input">
        <input
          className="text-input"
          name="numPeopleInput"
          value={numPeopleInput}
          onChange={handleNumPeopleInputChange}
        />
      </div>
    </div>
  );
}

export default InputSection;
