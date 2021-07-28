import "./SelectableButton.css";

function SelectableButton({ value, isSelected, handleSelected }) {
  return (
    <button
      className={`option ${isSelected ? "selected" : ""}`}
      onClick={() => handleSelected(value)}
    >
      {value}%
    </button>
  );
}

export default SelectableButton;
