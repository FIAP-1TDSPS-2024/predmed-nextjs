"use client";
import Header from "@/components/Header";
import PatientForm from "@/components/pacient/PatientForm";

const CadastrarPaciente = () => {
  return (
    <>
      <Header></Header>
      <main>
        <h1 className="text-black text-3xl font-bold text-center m-8">
          Cadastrar Paciente
        </h1>
        <PatientForm />
      </main>
    </>
  );
};

export default CadastrarPaciente;
