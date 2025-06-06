"use client";
import Header from "@/components/common/Header";
import PatientForm from "@/components/pacient/PatientForm";
import { useSearchParams } from "next/navigation";

const CadastrarPaciente = () => {
  const searchParams = useSearchParams();
  const isEditing = searchParams.has("id");

  return (
    <>
      <Header></Header>
      <main>
        <h1 className="text-black text-3xl font-bold text-center m-8">
          {isEditing ? "Editar Paciente" : "Cadastrar Paciente"}
        </h1>
        <PatientForm />
      </main>
    </>
  );
};

export default CadastrarPaciente;
