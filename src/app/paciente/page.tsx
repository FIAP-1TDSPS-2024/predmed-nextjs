"use client";

import Link from "next/link";

import { Footer } from "@/components/Footer";
import Header from "@/components/Header";

const Paciente = () => {
  return (
    <>
      <Header></Header>
      <main className="bg-[#E3F2FD] min-h-screen flex flex-col items-center justify-center text-white">
        <Link href="/paciente/cadastrar">
          <button className="mt-4 pr-8 pl-8 bg-[#1E88E5] font-bold p-2 rounded hover:bg-[#114c8f] transition-colors">
            Cadastrar paciente
          </button>
        </Link>

        <input
          type="text"
          placeholder="Buscar paciente..."
          className="mt-4 p-2 pl-3 pr-20 rounded border border-[#9E9E9E] text-black"
        />

        <h1 className="text-2xl text-black font-bold mt-4">Pacientes</h1>
        <hr className="w-[80%] border-t border-[#9E9E9E] mt-0 my-4"></hr>

        <Link href="/paciente/1">
          <div className="mt-4 p-4 bg-white rounded shadow-md w-full max-w-md">
            <h2 className="text-xl font-bold text-gray-800">
              Nome do Paciente
            </h2>
            <p className="text-gray-600">
              Informações adicionais sobre o paciente.
            </p>
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
      </main>
      <Footer></Footer>
    </>
  );
};

export default Paciente;
