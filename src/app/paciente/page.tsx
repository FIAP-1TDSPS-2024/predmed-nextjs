"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { Footer } from "@/components/Footer";
import Header from "@/components/Header";

// Define an interface for patient data
interface Patient {
  id: string;
  name: string;
}

const Paciente = () => {
  // Define sample patient data (in a real app, this would come from an API)
  const patients: Patient[] = [
    { id: "1", name: "Adriano Sergio Da Silva" },
    { id: "1", name: "Teste Oliveira" },
    { id: "1", name: "Teste Paciente" }
  ];
  
  // State for the search term
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filter patients based on search term
  const filteredPatients = patients.filter(patient => 
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header></Header>
      <main className="m-8 flex flex-col text-white flex-grow">
        {/* Button to navigate to patient registration page */}
        <Link href="/paciente/cadastrar">
          <button className="mt-4 pr-8 pl-8 bg-[#1E88E5] font-bold p-2 rounded hover:bg-[#114c8f] transition-colors">
            <span className="mr-2">+</span>
            Cadastrar paciente
          </button>
        </Link>        {/* Search input for filtering patients */}
        <div className="relative mt-4">
          <input
            type="text"
            placeholder="Buscar paciente..."
            className="p-2 pl-3 pr-10 rounded border border-[#9E9E9E] text-black w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center justify-center">
            <Image src="/search.svg" alt="Search" width={24} height={24} />
          </div>
        </div>

        <h1 className="text-2xl text-black font-bold mt-4">Pacientes</h1>
        <hr className="border-t border-[#9E9E9E] mt-0 my-4"></hr>

        {filteredPatients.length > 0 ? (
          filteredPatients.map((patient, index) => (
            <Link href={`/paciente/${patient.id}`} key={index}>
              <div className="mt-4 p-4 bg-white rounded shadow-md w-full">
                <h2 className="text-xl font-bold text-gray-800">
                  {patient.name}
                </h2>
                <div className="flex gap-4 mt-4">
                  <button className="bg-[#1E88E5] text-white p-2 rounded hover:bg-[#114c8f] transition-colors">
                    Editar
                  </button>
                  <button className="bg-red-500 text-white p-2 rounded hover:bg-red-700 transition-colors">
                    Excluir
                  </button>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="mt-4 text-black text-center">
            Nenhum paciente encontrado.
          </div>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Paciente;
