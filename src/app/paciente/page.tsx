"use client";

import { useEffect, useState } from "react";
import { Footer } from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { SearchBar } from "@/components/pacient/SearchBar";
import { PatientList } from "@/components/pacient/PatientList";
import { ActionButton } from "@/components/pacient/ActionButton";
import { Patient } from "@/types/Patient";
import { patientService } from "@/services/patient";

const Paciente = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [filteredPatients, setFilteredPatients] = useState<Patient[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        // Fetch patients from the backend
        const response = await patientService.getPatients();
        setPatients(response);
        setFilteredPatients(response);
      } catch (error) {
        console.error("Error fetching patients:", error);
      }
    };

    // Call the fetch function when the component mounts
    fetchPatients();
  }, []);

  useEffect(() => {
    // Filter patients based on the search term
    const filtered = patients.filter((patient) =>
      patient.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPatients(filtered);
  }, [searchTerm, patients]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header></Header>
      <main className="m-8 flex flex-col text-white flex-grow">
        {/* Button to navigate to patient registration page */}
        <ActionButton
          href="/paciente/cadastrar"
          label="Cadastrar paciente"
          icon="+"
        />

        {/* Search input for filtering patients */}
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <h1 className="text-2xl text-black font-bold mt-4">Pacientes</h1>
        <hr className="border-t border-[#9E9E9E] mt-0 my-4"></hr>

        <PatientList patients={filteredPatients} />
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Paciente;
