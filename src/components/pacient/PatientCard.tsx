import Link from "next/link";
import { useRouter } from "next/navigation";
import { Patient } from "@/types/Patient";
import { patientService } from "@/services/patient";
import { useState } from "react";
import Swal from "sweetalert2";

interface PatientCardProps {
  patient: Patient;
}

export const PatientCard = ({ patient }: PatientCardProps) => {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleEdit = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    router.push(`/paciente/cadastrar?id=${patient.id}`);
  };

  const handleDelete = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const result = await Swal.fire({
      title: "Confirmar exclusão",
      text: `Tem certeza que deseja excluir o paciente ${patient.nome}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sim, excluir",
      cancelButtonText: "Cancelar",
    });

    if (result.isConfirmed) {
      try {
        setIsDeleting(true);
        await patientService.deletePatient(patient.id);

        await Swal.fire({
          title: "Excluído!",
          text: "Paciente excluído com sucesso!",
          icon: "success",
          confirmButtonColor: "#1E88E5",
        });

        router.refresh(); // Refresh the page to update the list
      } catch (error) {
        console.error("Erro ao excluir paciente:", error);

        await Swal.fire({
          title: "Erro!",
          text: "Erro ao excluir paciente. Tente novamente.",
          icon: "error",
          confirmButtonColor: "#1E88E5",
        });
      } finally {
        setIsDeleting(false);
      }
    }
  };

  return (
    <Link href={`/paciente/${patient.id}`}>
      <div className="mt-4 p-4 bg-white rounded shadow-md w-full">
        <h2 className="text-xl font-bold text-gray-800">{patient.nome}</h2>
        <div className="flex gap-4 mt-4">
          <button
            className="bg-[#1E88E5] text-white p-2 rounded hover:bg-[#114c8f] transition-colors disabled:bg-gray-400"
            onClick={handleEdit}
            disabled={isDeleting}
          >
            Editar
          </button>
          <button
            className="bg-red-500 text-white p-2 rounded hover:bg-red-700 transition-colors disabled:bg-gray-400"
            onClick={handleDelete}
            disabled={isDeleting}
          >
            {isDeleting ? "Excluindo..." : "Excluir"}
          </button>
        </div>
      </div>
    </Link>
  );
};
