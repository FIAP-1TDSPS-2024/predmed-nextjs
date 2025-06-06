import ToggleSwitch from "./ToggleSwitch";

interface QuestionItemProps {
  question: string;
  isActive: boolean;
  onChange: () => void;
}

const QuestionItem = ({ question, isActive, onChange }: QuestionItemProps) => {
  return (
    <div className="bg-gray-200/80 rounded-lg p-4 flex justify-between items-center">
      <span className="text-black font-medium">{question}</span>
      <ToggleSwitch isActive={isActive} onChange={onChange} />
    </div>
  );
};

export default QuestionItem;
