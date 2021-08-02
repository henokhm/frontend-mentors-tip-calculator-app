import { useState } from "react";

import "./App.css";
import SplitterLogo from "./images/logo.svg";
import InputSection from "./components/InputSection";
import OutputSection from "./components/OutputSection";

function App() {
  const [billInput, setBillInput] = useState("");
  const [numPeopleInput, setNumPeopleInput] = useState("");
  const [selectedPercentage, setSelectedPercentage] = useState(undefined);
  const [tipDisplay, setTipDisplay] = useState(0);
  const [totalDisplay, setTotalDisplay] = useState(0);
  const [showBillInputError, setShowBillInputError] = useState(false);
  const [showNumPeopleInputError, setShowNumPeopleInputError] = useState(false);

  const validateBillInput = () => {
    const regEx = /^\d+(\.\d+)?$/;
    // matches only strings where each char is a digit and there is at
    // most one decimal point
    if (billInput !== "" && billInput.match(regEx)) {
      setShowBillInputError(false);
      setBillInput(parseFloat(billInput));
      calculateTip();
    } else {
      resetOutPut();
      setShowBillInputError(true);
    }
  };

  const validateNumPeopleInput = () => {
    const regEx = /^\d+$/;
    // matches only strings where each char is a digit
    if (
      numPeopleInput !== "" &&
      numPeopleInput.match(regEx) &&
      parseInt(numPeopleInput) > 0
    ) {
      setShowNumPeopleInputError(false);
      setNumPeopleInput(parseInt(numPeopleInput));
      calculateTip();
    } else {
      resetOutPut();
      setShowNumPeopleInputError(true);
    }
  };

  const calculateTip = () => {
    console.log("calculate tip was called");
    if (!showBillInputError && !showNumPeopleInputError) {
      const tipAmount = (billInput * selectedPercentage) / 100;
      setTipDisplay(tipAmount / numPeopleInput);
      const totalAmount = billInput + tipAmount;
      setTotalDisplay(totalAmount / numPeopleInput);
    }
  };

  const handleReset = () => {
    console.log("reset called");
    setBillInput("");
    setNumPeopleInput("");
    setSelectedPercentage(undefined);
    setTipDisplay(0);
    setTotalDisplay(0);
    setShowBillInputError(false);
    setShowNumPeopleInputError(false);
  };

  const resetOutPut = () => {
    setTipDisplay(0);
    setTotalDisplay(0);
  };

  return (
    <div className="App">
      <img src={SplitterLogo} alt="Splitter logo" className="logo" />
      <div className="container">
        <InputSection
          billInput={billInput}
          setBillInput={setBillInput}
          numPeopleInput={numPeopleInput}
          setNumPeopleInput={setNumPeopleInput}
          selectedPercentage={selectedPercentage}
          setSelectedPercentage={setSelectedPercentage}
          showBillInputError={showBillInputError}
          showNumPeopleInputError={showNumPeopleInputError}
          validateBillInput={validateBillInput}
          validateNumPeopleInput={validateNumPeopleInput}
        />
        <div className="temp">
          <p>Bill input is {billInput}</p>
          <p>Number of people input is{numPeopleInput}</p>
          <p>Selected percentage is {selectedPercentage}</p>
        </div>
        <OutputSection
          tipDisplay={tipDisplay.toFixed(2)}
          totalDisplay={totalDisplay.toFixed(2)}
          handleReset={handleReset}
        />
      </div>
    </div>
  );
}

export default App;
