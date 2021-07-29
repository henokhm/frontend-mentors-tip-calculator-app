import { useState } from "react";

import "./PercentageOptions.css";
import SelectableButton from "./SelectableButton";
import CustomPercentageInput from "./CustomPercentageInput";

function PercentageOptions({ selectedPercentage, setSelectedPercentage }) {
  const [userWillEnterCustomPercentage, setUserWillEnterCustomPercentage] =
    useState(false);

  const percentageOptions = [5, 10, 15, 25, 50];

  return (
    <div>
      {percentageOptions.map((value) => (
        <SelectableButton
          key={value}
          value={value}
          isSelected={selectedPercentage === value}
          handleSelected={(value) => {
            if (selectedPercentage !== value) {
              setSelectedPercentage(value);
            }
          }}
        />
      ))}
      <CustomPercentageInput
        userWillEnterCustomPercentage={userWillEnterCustomPercentage}
        setUserWillEnterCustomPercentage={setUserWillEnterCustomPercentage}
        setSelectedPercentage={setSelectedPercentage}
      />
    </div>
  );
}

export default PercentageOptions;
