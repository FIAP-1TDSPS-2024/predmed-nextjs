import { useState } from "react";
import QuestionItem from "./QuestionItem";

interface TriageFormProps {
  onSubmit: (answers: { [key: string]: boolean }) => void;
  questions: { id: string; text: string }[];
  isSubmitting?: boolean;
}

const TriageForm = ({
  onSubmit,
  questions,
  isSubmitting = false,
}: TriageFormProps) => {
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
        disabled={isSubmitting}
        className={`w-full ${
          isSubmitting ? "bg-blue-300" : "bg-blue-500 hover:bg-blue-600"
        } text-white py-3 px-4 rounded-md transition-colors mt-10 font-medium text-lg shadow-sm`}
      >
        {isSubmitting ? "Processando..." : "Gerar diagnóstico"}
      </button>
    </div>
  );
};

export default TriageForm;
