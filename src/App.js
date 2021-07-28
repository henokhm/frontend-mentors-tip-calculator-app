import "./App.css";
import SplitterLogo from "./images/logo.svg";

import InputSection from "./components/InputSection";
import OutputSection from "./components/OutputSection";

function App() {
  return (
    <div className="App">
      <img src={SplitterLogo} alt="Splitter logo" className="logo" />
      <div className="container">
        <InputSection />
        <OutputSection />
      </div>
    </div>
  );
}

export default App;
