import { Triage } from "@/types/Triage";
import { triageQuestions } from "@/services/triage";

interface AnswersModalProps {
  answers: Triage;
  onClose: () => void;
}

const AnswersModal = ({ answers, onClose }: AnswersModalProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 max-w-xl w-full max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">
            Respostas da Triagem
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="space-y-3">
          {triageQuestions.map((question) => {
            const answer = answers[question.id as keyof Triage] as boolean;
            return (
              <div key={question.id} className="border-b pb-2">
                <p className="font-medium text-gray-800">{question.text}</p>
                <p
                  className={`mt-1 ${
                    answer ? "text-red-600 font-medium" : "text-green-600"
                  }`}
                >
                  {answer ? "Sim" : "Não"}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-200 text-gray-800 px-5 py-2 rounded font-medium hover:bg-gray-300 transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnswersModal;
