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

          <div className="mt-4 bg-blue-50 p-3 rounded-md border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-1">
              Próximos passos
            </h4>
            {tag === "Risco alto de covid" ? (
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                <li>
                  Entre em contato com o paciente para informar o resultado
                </li>
                <li>Agende uma consulta de acompanhamento em 48 horas</li>
                <li>Encaminhe as orientações de isolamento por e-mail</li>
                <li>Registre o caso no sistema de vigilância epidemiológica</li>
              </ul>
            ) : (
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                <li>
                  Informe ao paciente que não há sinais de risco no momento
                </li>
                <li>Recomende monitoramento de sintomas por 7 dias</li>
                <li>Oriente sobre medidas preventivas gerais</li>
                <li>Agende retorno apenas se surgirem novos sintomas</li>
              </ul>
            )}
          </div>

          <div className="flex justify-end mt-4">
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
