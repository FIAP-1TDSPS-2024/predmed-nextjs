"use client";

import { useParams } from "next/navigation";
import Header from "@/components/common/Header";
import PatientHeader from "@/components/triage/PatientHeader";
import TriagemList from "@/components/triage/TriagemList";

const PacienteTriagens = () => {
  const params = useParams();
  const patientId = params.id as string;

  return (
    <div className="flex flex-col min-h-screen bg-[#E3F2FD] text-black">
      <Header />

      <div className="p-4">
        <PatientHeader patientName="Adriano Sergio Da Silva" />
        <TriagemList patientId={patientId} />
      </div>
    </div>
  );
};

export default PacienteTriagens;
