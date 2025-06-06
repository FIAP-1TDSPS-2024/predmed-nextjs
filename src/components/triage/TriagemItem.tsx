import { Triage } from "@/types/Triage";
import Image from "next/image";
import { useState } from "react";
import AnswersModal from "./AnswersModal";

interface TriagemItemProps {
  id: number;
  label: string;
  tag: string;
  expanded: boolean;
  answers?: Triage;
  onToggle: (id: number) => void;
}

const TriagemItem = ({
  id,
  label,
  tag,
  expanded,
  answers,
  onToggle,
}: TriagemItemProps) => {
  const [showAnswers, setShowAnswers] = useState(false);
  return (
    <div className="bg-gray-200 rounded-lg p-3">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => onToggle(id)}
      >
        <div className="flex items-center gap-2">
          <span className="text-gray-800 font-medium">{label}</span>
          <span
            className={`text-xs text-white px-2 py-1 rounded-full ${
              tag === "Risco alto de covid" ? "bg-[#C62828]" : "bg-[#388E3C]"
            }`}
          >
            {tag}
          </span>
        </div>
        <Image
          src={expanded ? "/arrow_up.svg" : "/arrow_down.svg"}
          alt={expanded ? "Collapse" : "Expand"}
          width={24}
          height={24}
        />
      </div>

      {expanded && (
        <div className="mt-3">
          <h3 className="font-semibold mb-2 text-gray-800">Diagnóstico</h3>
          <p className="text-gray-700">
            {tag === "Risco alto de covid"
              ? "Paciente apresenta risco alto de COVID-19. Recomenda-se isolamento e monitoramento."
              : "Paciente assintomático. Não há indicação de risco elevado no momento."}
          </p>
          <div className="flex justify-end mt-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowAnswers(true);
              }}
              className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600 transition-colors"
            >
              Ver respostas
            </button>
          </div>
        </div>
      )}

      {showAnswers && answers && (
        <AnswersModal answers={answers} onClose={() => setShowAnswers(false)} />
      )}
    </div>
  );
};

export default TriagemItem;
