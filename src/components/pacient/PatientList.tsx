import { Patient } from "@/types/Patient";
import { PatientCard } from "./PatientCard";

interface PatientListProps {
  patients: Patient[];
}

export const PatientList = ({ patients }: PatientListProps) => {
  return (
    <>
      {patients.length > 0 ? (
        patients.map((patient) => (
          <PatientCard key={patient.id} patient={patient} />
        ))
      ) : (
        <div className="mt-4 text-black text-center">
          Nenhum paciente encontrado.
        </div>
      )}
    </>
  );
};
