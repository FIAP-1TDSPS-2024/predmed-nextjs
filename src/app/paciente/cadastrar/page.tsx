"use client";
import Header from "@/components/common/Header";
import PatientForm from "@/components/pacient/PatientForm";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

// Component that uses useSearchParams must be wrapped in Suspense
const PatientHeader = () => {
  const searchParams = useSearchParams();
  const isEditing = searchParams.has("id");

  return (
    <h1 className="text-black text-3xl font-bold text-center m-8">
      {isEditing ? "Editar Paciente" : "Cadastrar Paciente"}
    </h1>
  );
};

const CadastrarPaciente = () => {
  return (
    <>
      <Header></Header>
      <Suspense
        fallback={
          <main>
            <h1 className="text-black text-3xl font-bold text-center m-8">
              Carregando...
            </h1>
            <div className="flex justify-center p-8">
              <div className="w-full max-w-2xl">
                <div className="animate-pulse bg-gray-200 h-96 rounded-md"></div>
              </div>
            </div>
          </main>
        }
      >
        <main>
          <PatientHeader />
          <PatientForm />
        </main>
      </Suspense>
    </>
  );
};

export default CadastrarPaciente;
