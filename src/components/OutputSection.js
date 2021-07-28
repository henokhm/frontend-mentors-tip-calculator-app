import "./OutputSection.css";

function OutputSection({ tipDisplay, totalDisplay, handleReset }) {
  return (
    <div className="output-section">
      <div className="output-flex">
        <div>
          <div className="output-title">Tip Amount</div>
          <div className="output-subtitle">/ person</div>
        </div>
        <div className="output-value">${tipDisplay}</div>
      </div>

      <div className="output-flex">
        <div>
          <div className="output-title">Total</div>
          <div className="output-subtitle">/ person</div>
        </div>
        <div className="output-value">${totalDisplay}</div>
      </div>

      <button className="reset-button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default OutputSection;
