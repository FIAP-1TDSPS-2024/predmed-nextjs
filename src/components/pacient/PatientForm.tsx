"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

import FormInput from "./FormInput";
import FormRadio from "./FormRadio";

import { patientService, CreatePatientData } from "@/services/patient";

export type PacienteFormData = {
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
  dataNascimento: string;
  sexo: string;
};

const PatientForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PacienteFormData>();

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: PacienteFormData) => {
    try {
      setIsLoading(true);

      // Format the data for the API
      const patientData: CreatePatientData = {
        id: 0,
        nome: data.nome,
        cpf: data.cpf,
        email: data.email,
        celular: data.telefone,
        dataNascimento: data.dataNascimento,
        sexo: data.sexo as "M" | "F",
      };

      // Send data to the backend via patientService
      await patientService.createPatient(patientData);

      // Show success message
      Swal.fire({
        title: "Sucesso!",
        text: "Paciente cadastrado com sucesso!",
        icon: "success",
        confirmButtonColor: "#1E88E5",
      });

      reset();

      // Redirect to patient list
      router.push("/paciente");
    } catch (error) {
      console.error("Error creating patient:", error);

      Swal.fire({
        title: "Erro!",
        text: "Ocorreu um erro ao cadastrar o paciente. Tente novamente.",
        icon: "error",
        confirmButtonColor: "#1E88E5",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className="flex flex-col gap-4 items-center justify-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormInput
        id="nome"
        placeholder="Nome do Paciente"
        register={register}
        rules={{ required: "Nome é obrigatório" }}
        error={errors.nome}
      />

      <FormInput
        id="cpf"
        placeholder="CPF"
        register={register}
        rules={{
          required: "CPF é obrigatório",
          pattern: {
            value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$|^\d{11}$/,
            message: "CPF inválido. Formato: 12345678900 ou 123.456.789-00",
          },
        }}
        error={errors.cpf}
      />

      <FormInput
        id="email"
        placeholder="Email"
        register={register}
        rules={{
          required: "Email é obrigatório",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Email inválido",
          },
        }}
        error={errors.email}
      />

      <FormInput
        id="telefone"
        placeholder="Telefone"
        register={register}
        rules={{
          required: "Telefone é obrigatório",
          pattern: {
            value: /^(\(\d{2}\)\s*)?\d{4,5}-\d{4}$|^\d{10,11}$/,
            message: "Telefone inválido. Ex: 1199887766 ou (11) 9988-7766",
          },
        }}
        error={errors.telefone}
      />

      <FormInput
        id="dataNascimento"
        placeholder="Data de Nascimento"
        type="date"
        register={register}
        rules={{ required: "Data de nascimento é obrigatória" }}
        error={errors.dataNascimento}
      />

      <FormRadio
        id="sexo"
        label="Sexo"
        options={[
          { value: "M", label: "Masculino" },
          { value: "F", label: "Feminino" },
        ]}
        register={register}
        rules={{ required: "Sexo é obrigatório" }}
        error={errors.sexo}
      />

      <button
        type="submit"
        disabled={isLoading}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <span className="flex items-center justify-center">
            Processando...
          </span>
        ) : (
          "Cadastrar paciente"
        )}
      </button>
    </form>
  );
};

export default PatientForm;
