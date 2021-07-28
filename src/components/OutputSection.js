import "./OutputSection.css";

function OutputSection({ handleReset }) {
  return (
    <div className="output-section">
      <div className="output-flex">
        <div>
          <div className="output-title">Tip Amount</div>
          <div className="output-subtitle">/ person</div>
        </div>
        <div className="output-value">$4.27</div>
      </div>

      <div className="output-flex">
        <div>
          <div className="output-title">Total</div>
          <div className="output-subtitle">/ person</div>
        </div>
        <div className="output-value">$32.79</div>
      </div>

      <button className="reset-button" onclick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default OutputSection;
