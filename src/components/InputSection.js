import PercentageOptions from "./PercentageOptions";
import "./InputSection.css";

function InputSection({
  billInput,
  setBillInput,
  numPeopleInput,
  setNumPeopleInput,
  selectedPercentage,
  setSelectedPercentage,
  calculateTip,
}) {
  return (
    <div className="input-section">
      <label className="input-label" htmlFor="billInput">
        Bill
      </label>
      <div className="bill-amount-text-input">
        <input
          id="billInput"
          className="text-input"
          value={billInput}
          onChange={(event) => setBillInput(event.target.value)}
          onBlur={calculateTip}
        />
      </div>
      <PercentageOptions
        selectedPercentage={selectedPercentage}
        setSelectedPercentage={setSelectedPercentage}
      />
      <label className="input-label" htmlFor="numPeopleInput">
        Number of People
      </label>
      <div className="num-people-text-input">
        <input
          className="text-input"
          id="numPeopleInput"
          value={numPeopleInput}
          onChange={(event) => setNumPeopleInput(event.target.value)}
          onBlur={calculateTip}
        />
      </div>
    </div>
  );
}

export default InputSection;
