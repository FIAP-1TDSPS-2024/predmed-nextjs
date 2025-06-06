import { useState } from "react";
import QuestionItem from "./QuestionItem";

interface TriageFormProps {
  onSubmit: (answers: { [key: string]: boolean }) => void;
  questions: { id: string; text: string }[];
}

const TriageForm = ({ onSubmit, questions }: TriageFormProps) => {
  const [answers, setAnswers] = useState<{ [key: string]: boolean }>(
    Object.fromEntries(questions.map((q) => [q.id, false]))
  );

  const handleToggleAnswer = (questionId: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  const handleGenerateDiagnosis = () => {
    onSubmit(answers);
  };

  return (
    <div className="space-y-4 mt-8">
      {questions.map((question) => (
        <QuestionItem
          key={question.id}
          question={question.text}
          isActive={answers[question.id]}
          onChange={() => handleToggleAnswer(question.id)}
        />
      ))}

      {/* Generate Diagnostic Button */}
      <button
        onClick={handleGenerateDiagnosis}
        className="w-full bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 transition-colors mt-10 font-medium text-lg shadow-sm"
      >
        Gerar diagnóstico
      </button>
    </div>
  );
};

export default TriageForm;
