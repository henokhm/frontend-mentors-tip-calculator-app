import "./App.css";
import SplitterLogo from "./images/logo.svg";

import InputSection from "./components/InputSection";
import OutputSection from "./components/OutputSection";

function App() {
  const handleReset = () => {
    console.log("reset called");
  };

  return (
    <div className="App">
      <img src={SplitterLogo} alt="Splitter logo" className="logo" />
      <div className="container">
        <InputSection />
        <OutputSection
          tipDisplay={4.27}
          totalDisplay={32.79}
          handleReset={handleReset}
        />
      </div>
    </div>
  );
}

export default App;
