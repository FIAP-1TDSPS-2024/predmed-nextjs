import { useState, useEffect } from "react";
import TriagemItem from "./TriagemItem";
import TriagemHeader from "./TriagemHeader";
import { TriagemDisplay } from "@/types/TriagemDisplay";
import { triageListService } from "@/services/triageList";

interface TriagemListProps {
  patientId: number;
  initialTriagens?: TriagemDisplay[];
}

const TriagemList = ({ patientId, initialTriagens = [] }: TriagemListProps) => {
  const [triagens, setTriagens] = useState<TriagemDisplay[]>(
    initialTriagens.length ? initialTriagens : []
  );
  const [loading, setLoading] = useState<boolean>(initialTriagens.length === 0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTriagens = async () => {
      if (initialTriagens.length > 0) return;

      try {
        setLoading(true);
        const patientTriages =
          await triageListService.getFormattedPatientTriages(patientId);
        setTriagens(patientTriages);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch triages:", err);
        setError(
          "Não foi possível carregar as triagens. Tente novamente mais tarde."
        );
        setTriagens([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTriagens();
  }, [patientId]);

  const toggleTriagem = (id: number) => {
    setTriagens((prev) =>
      prev.map((triagem) =>
        triagem.id === id
          ? { ...triagem, expanded: !triagem.expanded }
          : { ...triagem, expanded: false }
      )
    );
  };

  return (
    <div className="mb-4">
      <TriagemHeader patientId={patientId} />

      <div className="space-y-2">
        {loading ? (
          <div className="py-4 text-center">
            <div className="animate-pulse text-gray-600">
              Carregando triagens...
            </div>
          </div>
        ) : error ? (
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <p className="text-red-700">{error}</p>
            <button
              className="mt-2 text-sm text-blue-600 hover:text-blue-800"
              onClick={() => window.location.reload()}
            >
              Tentar novamente
            </button>
          </div>
        ) : triagens.length === 0 ? (
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <p className="text-gray-600">
              Nenhuma triagem encontrada para este paciente.
            </p>
          </div>
        ) : (
          triagens.map((triagem) => (
            <TriagemItem
              key={triagem.id}
              id={triagem.id}
              label={triagem.label}
              tag={triagem.tag}
              tagColor={triagem.tagColor}
              expanded={!!triagem.expanded}
              onToggle={toggleTriagem}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TriagemList;
