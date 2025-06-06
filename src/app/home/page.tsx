"use client";
import React from "react";
import { LoginForm } from "../../components/auth/LoginForm";

export default function Home() {
  return (
    <>
      <main className="bg-[#1565C0] min-h-screen flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold text-center mb-4">PredMed</h1>
        <LoginForm />
      </main>
    </>
  );
}
