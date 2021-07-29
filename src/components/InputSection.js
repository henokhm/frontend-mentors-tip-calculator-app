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
          id="billInput"
          className="text-input"
          value={billInput}
          onChange={handleBillInputChange}
        />
      </div>
      <PercentageOptions
        selectedPercentage={selectedPercentage}
        setSelectedPercentage={setSelectedPercentage}
      />
      <label className="input-label" htmlFor="numPeopleInput">
        Number of People
      </label>
      <br />
      <div className="num-people-text-input">
        <input
          className="text-input"
          id="numPeopleInput"
          value={numPeopleInput}
          onChange={handleNumPeopleInputChange}
        />
      </div>

      <div className="temp">
        <p>Bill input is {billInput}</p>
        <p>Number of people input is{numPeopleInput}</p>
        <p>Selected percentage is {selectedPercentage}</p>
      </div>
    </div>
  );
}

export default InputSection;
