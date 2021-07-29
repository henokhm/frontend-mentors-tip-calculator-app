import "./CustomPercentageInput.css";

function CustomPercentageInput({
  userWillEnterCustomPercentage,
  setUserWillEnterCustomPercentage,
  setSelectedPercentage,
}) {
  const display = userWillEnterCustomPercentage ? (
    <input
      className="custom-percentage-input"
      autoFocus
      onBlur={(event) => {
        const { value } = event.target;
        if (value === "") {
          setUserWillEnterCustomPercentage(false);
        } else {
          setSelectedPercentage(value);
        }
      }}
    />
  ) : (
    <button
      className="custom-button"
      onClick={() => setUserWillEnterCustomPercentage(true)}
    >
      Custom
    </button>
  );

  return display;
}

export default CustomPercentageInput;
