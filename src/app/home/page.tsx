"use client";
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="bg-[#1565C0] min-h-screen flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold text-center mb-4">PredMed</h1>

        <input
          type="text"
          placeholder="Email"
          className="mt-4 p-2 pl-3 pr-20 rounded border border-[#9E9E9E] text-black"
        />
        <input
          type="text"
          placeholder="Senha"
          className="mt-4 p-2 pl-3 pr-20 rounded border border-[#9E9E9E] text-black"
        />

        <Link href="/paciente">
          <button className="mt-4 pr-8 pl-8 bg-[#1E88E5] font-bold p-2 rounded hover:bg-[#114c8f] transition-colors">
            Realizar login
          </button>
        </Link>
      </main>
    </>
  );
}
