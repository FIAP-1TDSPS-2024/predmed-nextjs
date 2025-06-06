"use client";

import { useState } from "react";

const CadastrarTriagem = () => {
  const [question1Answer, setQuestion1Answer] = useState(false);
  const [question2Answer, setQuestion2Answer] = useState(false);

  const handleGenerateDiagnosis = () => {
    console.log("Diagnosis data:", { question1Answer, question2Answer });
    alert("Diagnóstico gerado com sucesso!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white py-6">
        <h1 className="text-3xl font-bold text-center">PredMed</h1>
      </header>

      {/* Main content */}
      <main className="flex-grow bg-blue-50 px-4">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold text-black text-center my-6 border-b border-gray-300 pb-4">
            Nova triagem
          </h2>

          <div className="space-y-4 mt-8">
            {/* Question 1 */}
            <div className="bg-gray-200/80 rounded-lg p-4 flex justify-between items-center">
              <span className="text-black font-medium">
                Respirou nos últimos 15 dias?
              </span>
              <div
                className="relative cursor-pointer"
                onClick={() => setQuestion1Answer(!question1Answer)}
              >
                <div
                  className={`w-14 h-7 rounded-full transition-colors duration-200 ${
                    question1Answer ? "bg-blue-500" : "bg-gray-600"
                  }`}
                ></div>
                <div
                  className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-200 ${
                    question1Answer ? "right-1" : "left-1"
                  }`}
                ></div>
              </div>
            </div>

            {/* Question 2 */}
            <div className="bg-gray-200/80 rounded-lg p-4 flex justify-between items-center">
              <span className="text-black font-medium">
                Respirou nos últimos 15 dias?
              </span>
              <div
                className="relative cursor-pointer"
                onClick={() => setQuestion2Answer(!question2Answer)}
              >
                <div
                  className={`w-14 h-7 rounded-full transition-colors duration-200 ${
                    question2Answer ? "bg-blue-500" : "bg-gray-600"
                  }`}
                ></div>
                <div
                  className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-200 ${
                    question2Answer ? "right-1" : "left-1"
                  }`}
                ></div>
              </div>
            </div>

            {/* Generate Diagnostic Button */}
            <button
              onClick={handleGenerateDiagnosis}
              className="w-full bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 transition-colors mt-10 font-medium text-lg shadow-sm"
            >
              Gerar diagnóstico
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CadastrarTriagem;
