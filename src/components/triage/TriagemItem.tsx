import Image from "next/image";

interface TriagemItemProps {
  id: number;
  label: string;
  tag: string;
  tagColor: string;
  expanded: boolean;
  onToggle: (id: number) => void;
}

const TriagemItem = ({
  id,
  label,
  tag,
  tagColor,
  expanded,
  onToggle,
}: TriagemItemProps) => {
  return (
    <div className="bg-gray-200 rounded-lg p-3">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => onToggle(id)}
      >
        <div className="flex items-center gap-2">
          <span className="text-gray-800 font-medium">{label}</span>
          <span
            className={`text-xs text-white px-2 py-1 rounded-full ${tagColor}`}
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            vitae eros diam.
          </p>
          <div className="flex justify-end mt-2">
            <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm">
              Ver respostas
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TriagemItem;
