"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Link from "next/link";

interface Triagem {
  id: number;
  label: string;
  tag: string;
  tagColor: string;
  expanded?: boolean;
}

const PacienteTriagens = () => {
  const [triagens, setTriagens] = useState<Triagem[]>([
    {
      id: 1,
      label: "Triagem 1",
      tag: "Risco alto de covid",
      tagColor: "bg-[#C62828]",
      expanded: true,
    },
    {
      id: 2,
      label: "Triagem 2",
      tag: "Assintomático",
      tagColor: "bg-[#388E3C]",
      expanded: false,
    },
  ]);

  const toggleTriagem = (id: number) => {
    setTriagens((prev) =>
      prev.map((triagem) =>
        triagem.id === id
          ? { ...triagem, expanded: !triagem.expanded }
          : { ...triagem, expanded: false }
      )
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#E3F2FD] text-black">
      <Header />

      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4 text-black">
          Adriano Sergio Da Silva
        </h1>

        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-semibold text-black">Triagens</h2>
            <Link href="/paciente/1/triagem">
              <button className="bg-blue-500 font-bold text-white rounded w-6 h-6 flex items-center justify-center">
                +
              </button>
            </Link>
          </div>

          <hr className="w-[100%] border-t border-[#9E9E9E] mt-0 my-4"></hr>

          <div className="space-y-2">
            {triagens.map((triagem) => (
              <div key={triagem.id} className="bg-gray-200 rounded-lg p-3">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleTriagem(triagem.id)}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-gray-800 font-medium">
                      {triagem.label}
                    </span>
                    <span
                      className={`text-xs text-white px-2 py-1 rounded-full ${triagem.tagColor}`}
                    >
                      {triagem.tag}
                    </span>
                  </div>
                  <Image
                    src={triagem.expanded ? "/arrow_up.svg" : "/arrow_down.svg"}
                    alt={triagem.expanded ? "Collapse" : "Expand"}
                    width={24}
                    height={24}
                  />
                </div>

                {triagem.expanded && (
                  <div className="mt-3">
                    <h3 className="font-semibold mb-2 text-gray-800">
                      Diagnóstico
                    </h3>
                    <p className="text-gray-700">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur vitae eros diam.
                    </p>
                    <div className="flex justify-end mt-2">
                      <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm">
                        Ver respostas
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PacienteTriagens;
