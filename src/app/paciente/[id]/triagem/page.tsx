"use client";

import AppHeader from "@/components/common/AppHeader";
import TriageForm from "@/components/triage/TriageForm";
import { triageService, triageQuestions } from "@/services/triage";
import { useRouter, useParams } from "next/navigation";
import { useState } from "react";
import type { CreateTriageData } from "@/types/Triage";
import Swal from "sweetalert2";

const CadastrarTriagem = () => {
  const router = useRouter();
  const params = useParams();
  const patientId = params.id as string;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleGenerateDiagnosis = async (answers: {
    [key: string]: boolean;
  }) => {
    try {
      setIsSubmitting(true);

      // Step 1: Create the triage
      const triageData: CreateTriageData = {
        problemaRespiratorio: answers.problemaRespiratorio,
        febre: answers.febre,
        tosseSeca: answers.tosseSeca,
        dorGarganta: answers.dorGarganta,
        coriza: answers.coriza,
        asma: answers.asma,
        doencaPulmonarCronica: answers.doencaPulmonarCronica,
        dorCabeca: answers.dorCabeca,
        doencaCardiaca: answers.doencaCardiaca,
        diabetes: answers.diabetes,
        hipertensao: answers.hipertensao,
        fadiga: answers.fadiga,
        problemasGastro: answers.problemasGastro,
        viagemExterior: answers.viagemExterior,
        contatoInfectado: answers.contatoInfectado,
        multidao: answers.multidao,
        localPublico: answers.localPublico,
        familarLocalPublico: answers.familarLocalPublico,
      };

      const createdTriage = await triageService.createTriage(
        patientId,
        triageData
      );

      // Step 2: Generate diagnostic using the triage ID
      const triageId = createdTriage.id.toString();
      triageService.generateDiagnostic(triageId);

      // Success alert with SweetAlert2
      await Swal.fire({
        title: "Sucesso!",
        text: "Diagnóstico gerado com sucesso!",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#3085d6",
      });

      // Step 3: Redirect back to patient page
      router.push(`/paciente/${patientId}`);
    } catch (error) {
      console.error("Error in triage/diagnosis process:", error);
      // Error alert with SweetAlert2
      await Swal.fire({
        title: "Erro!",
        text: "Erro ao gerar diagnóstico. Por favor, tente novamente.",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#d33",
      });
    } finally {
      setIsSubmitting(false);
    }
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
            isSubmitting={isSubmitting}
          />
        </div>
      </main>
    </div>
  );
};

export default CadastrarTriagem;
