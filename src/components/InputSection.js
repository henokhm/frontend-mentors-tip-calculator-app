import PercentageOptions from "./PercentageOptions";
import "./InputSection.css";

function InputSection({
  billInput,
  setBillInput,
  numPeopleInput,
  setNumPeopleInput,
  selectedPercentage,
  setSelectedPercentage,
  showBillInputError,
  showNumPeopleInputError,
  validateBillInput,
  validateNumPeopleInput,
}) {
  return (
    <div className="input-section">
      <label className="input-label" htmlFor="billInput">
        Bill
      </label>
      {showBillInputError ? (
        <span className="input-error">
          Please enter a non-zero valid amount.
        </span>
      ) : (
        ""
      )}
      <div className="bill-amount-text-input">
        <input
          id="billInput"
          className="text-input"
          value={billInput}
          onChange={(event) => setBillInput(event.target.value)}
          onBlur={validateBillInput}
          style={showBillInputError ? { border: "#f00 solid 2px" } : {}}
        />
      </div>
      <PercentageOptions
        selectedPercentage={selectedPercentage}
        setSelectedPercentage={setSelectedPercentage}
      />
      <label className="input-label" htmlFor="numPeopleInput">
        Number of People
      </label>
      {showNumPeopleInputError ? (
        <span className="input-error">
          Please enter a non-zero integer number.
        </span>
      ) : (
        ""
      )}
      <div className="num-people-text-input">
        <input
          className="text-input"
          id="numPeopleInput"
          value={numPeopleInput}
          onChange={(event) => setNumPeopleInput(event.target.value)}
          onBlur={validateNumPeopleInput}
          style={showNumPeopleInputError ? { border: "#f00 solid 2px" } : {}}
        />
      </div>
    </div>
  );
}

export default InputSection;
