"use client";

import { useState } from "react";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import { SearchBar } from "@/components/pacient/SearchBar";
import { PatientList } from "@/components/pacient/PatientList";
import { ActionButton } from "@/components/pacient/ActionButton";
import { Patient } from "@/types/Patient";

const Paciente = () => {
  // Define sample patient data (in a real app, this would come from an API)
  const patients: Patient[] = [
    { id: "1", name: "Adriano Sergio Da Silva" },
    { id: "2", name: "Teste Oliveira" },
    { id: "3", name: "Teste Paciente" },
  ];

  // State for the search term
  const [searchTerm, setSearchTerm] = useState("");

  // Filter patients based on search term
  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
