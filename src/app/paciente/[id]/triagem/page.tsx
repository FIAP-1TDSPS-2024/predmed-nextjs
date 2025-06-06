"use client";

import AppHeader from "@/components/common/AppHeader";
import TriageForm from "@/components/triage/TriageForm";

const CadastrarTriagem = () => {
  // Define questions
  const triageQuestions = [
    { id: "question1", text: "Respirou nos últimos 15 dias?" },
    { id: "question2", text: "Teve febre nos últimos 15 dias?" }, // This should be changed to a different question in a real scenario
  ];

  const handleGenerateDiagnosis = (answers: { [key: string]: boolean }) => {
    console.log("Diagnosis data:", answers);
    alert("Diagnóstico gerado com sucesso!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader title="PredMed" />

      {/* Main content */}
      <main className="flex-grow bg-blue-50 px-4">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold text-black text-center my-6 border-b border-gray-300 pb-4">
            Nova triagem
          </h2>

          <TriageForm
            questions={triageQuestions}
            onSubmit={handleGenerateDiagnosis}
          />
        </div>
      </main>
    </div>
  );
};

export default CadastrarTriagem;
