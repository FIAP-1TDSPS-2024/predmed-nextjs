"use client";

import AppHeader from "@/components/common/AppHeader";
import TriageForm from "@/components/triage/TriageForm";

const CadastrarTriagem = () => {
  // Define questions from perguntas.txt
  const triageQuestions = [
    {
      id: "problemaRespiratorio",
      text: "Você está com dificuldade para respirar?",
    },
    { id: "febre", text: "Você teve febre recentemente?" },
    { id: "tosseSeca", text: "Você está com tosse seca?" },
    { id: "dorGarganta", text: "Você está com dor de garganta?" },
    { id: "coriza", text: "Você está com coriza ou nariz escorrendo?" },
    { id: "dorCabeca", text: "Você está com dor de cabeça?" },
    {
      id: "fadiga",
      text: "Você está se sentindo muito cansado(a) ou com fadiga?",
    },
    { id: "asma", text: "Você tem asma?" },
    {
      id: "doencaPulmonarCronica",
      text: "Você tem alguma doença pulmonar crônica (como bronquite crônica ou enfisema)?",
    },
    { id: "doencaCardiaca", text: "Você tem alguma doença cardíaca?" },
    { id: "diabetes", text: "Você tem diabetes?" },
    { id: "hipertensao", text: "Você tem hipertensão (pressão alta)?" },
    {
      id: "problemasGastro",
      text: "Você teve problemas gastrointestinais recentes (como diarreia, náuseas ou vômito)?",
    },
    {
      id: "viagemExterior",
      text: "Você viajou para o exterior nos últimos 14 dias?",
    },
    {
      id: "contatoInfectado",
      text: "Você teve contato próximo com alguém infectado por COVID-19 (ou outra doença infecciosa relevante)?",
    },
    {
      id: "multidao",
      text: "Você esteve em locais com muita gente recentemente (ex: eventos, festas)?",
    },
    {
      id: "localPublico",
      text: "Você foi a locais públicos fechados nos últimos dias (ex: shopping, supermercado)?",
    },
    {
      id: "familarLocalPublico",
      text: "Alguém que mora com você esteve em locais públicos recentemente?",
    },
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
