import Link from "next/link";
import { Patient } from "@/types/Patient";

interface PatientCardProps {
  patient: Patient;
}

export const PatientCard = ({ patient }: PatientCardProps) => {
  return (
    <Link href={`/paciente/${patient.id}`}>
      <div className="mt-4 p-4 bg-white rounded shadow-md w-full">
        <h2 className="text-xl font-bold text-gray-800">{patient.name}</h2>
        <div className="flex gap-4 mt-4">
          <button className="bg-[#1E88E5] text-white p-2 rounded hover:bg-[#114c8f] transition-colors">
            Editar
          </button>
          <button className="bg-red-500 text-white p-2 rounded hover:bg-red-700 transition-colors">
            Excluir
          </button>
        </div>
      </div>
    </Link>
  );
};
