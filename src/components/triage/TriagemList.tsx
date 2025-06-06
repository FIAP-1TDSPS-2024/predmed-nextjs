import { useState } from "react";
import TriagemItem from "./TriagemItem";
import TriagemHeader from "./TriagemHeader";
import { TriagemDisplay } from "@/types/TriagemDisplay";

interface TriagemListProps {
  patientId: string | number;
  initialTriagens?: TriagemDisplay[];
}

const TriagemList = ({ patientId, initialTriagens = [] }: TriagemListProps) => {
  const [triagens, setTriagens] = useState<TriagemDisplay[]>(
    initialTriagens.length
      ? initialTriagens
      : [
          {
            id: 1,
            label: "Triagem 1",
            tag: "Risco alto de covid",
            tagColor: "bg-[#C62828]",
            expanded: true,
          },
          {
            id: 2,
            label: "Triagem 2",
            tag: "Assintomático",
            tagColor: "bg-[#388E3C]",
            expanded: false,
          },
        ]
  );

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
        {triagens.map((triagem) => (
          <TriagemItem
            key={triagem.id}
            id={triagem.id}
            label={triagem.label}
            tag={triagem.tag}
            tagColor={triagem.tagColor}
            expanded={!!triagem.expanded}
            onToggle={toggleTriagem}
          />
        ))}
      </div>
    </div>
  );
};

export default TriagemList;
