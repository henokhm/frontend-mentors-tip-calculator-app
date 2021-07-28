import "./PercentageOptions.css";
import SelectableButton from "./SelectableButton";
import CustomPercentageInput from "./CustomPercentageInput";

function PercentageOptions({ selectedPercentage, setSelectedPercentage }) {
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
              setSelectedPercentage((prev) => value);
            }
          }}
        />
      ))}
      <CustomPercentageInput />
    </div>
  );
}

export default PercentageOptions;
