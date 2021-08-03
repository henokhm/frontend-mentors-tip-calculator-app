import PercentageOptions from "./PercentageOptions";
import "./InputSection.css";

function InputSection({
  billInput,
  setBillInput,
  numPeopleInput,
  setNumPeopleInput,
  selectedPercentage,
  setSelectedPercentage,
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
        />
      </div>
      <PercentageOptions
        selectedPercentage={selectedPercentage}
        setSelectedPercentage={(value) => setSelectedPercentage(value)}
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
        />
      </div>
    </div>
  );
}

export default InputSection;
