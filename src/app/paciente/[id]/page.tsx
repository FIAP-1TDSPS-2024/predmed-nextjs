"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "@/components/common/Header";
import PatientHeader from "@/components/triage/PatientHeader";
import TriagemList from "@/components/triage/TriagemList";
import { patientService } from "@/services/patient";

const PacienteTriagens = () => {
  const params = useParams();
  const patientId = params.id as string;
  const [patientName, setPatientName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        setLoading(true);
        const patient = await patientService.getPatient(patientId);
        setPatientName(patient.nome);
      } catch (error) {
        console.error("Failed to fetch patient data:", error);
        setPatientName("Paciente");
      } finally {
        setLoading(false);
      }
    };

    fetchPatientData();
  }, [patientId]);

  return (
    <div className="flex flex-col min-h-screen bg-[#E3F2FD] text-black">
      <Header />

      <div className="p-4">
        {loading ? (
          <div className="animate-pulse h-16 bg-gray-200 rounded-lg mb-4"></div>
        ) : (
          <PatientHeader patientName={patientName} />
        )}
        <TriagemList patientId={Number(patientId)} />
      </div>
    </div>
  );
};

export default PacienteTriagens;
