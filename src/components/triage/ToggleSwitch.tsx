interface ToggleSwitchProps {
  isActive: boolean;
  onChange: () => void;
}

const ToggleSwitch = ({ isActive, onChange }: ToggleSwitchProps) => {
  return (
    <div className="relative cursor-pointer" onClick={onChange}>
      <div
        className={`w-14 h-7 rounded-full transition-colors duration-200 ${
          isActive ? "bg-blue-500" : "bg-gray-600"
        }`}
      ></div>
      <div
        className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-200 ${
          isActive ? "right-1" : "left-1"
        }`}
      ></div>
    </div>
  );
};

export default ToggleSwitch;
