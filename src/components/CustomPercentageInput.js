import { useState } from "react";

import "./CustomPercentageInput.css";

function CustomPercentageInput({ setSelectedPercentage }) {
  const [userWillEnterCustomPercentage, setUserWillEnterCustomPercentage] =
    useState(false);

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
