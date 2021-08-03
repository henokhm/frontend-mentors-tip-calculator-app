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

  const calculateTip = () => {
    const tipAmount = (billInput * selectedPercentage) / 100;
    const tipPerPerson = tipAmount / numPeopleInput;
    const totalAmount = parseInt(billInput) + tipAmount;
    const totalPerPerson = totalAmount / numPeopleInput;

    if (!isNaN(tipPerPerson) && !isNaN(totalPerPerson)) {
      setTipDisplay(tipAmount / numPeopleInput);
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
          calculateTip={calculateTip}
        />
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
