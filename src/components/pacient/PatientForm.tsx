"use client";
import { useForm } from "react-hook-form";
import FormInput from "./FormInput";

export type PacienteFormData = {
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
};

const PatientForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PacienteFormData>();

  const onSubmit = (data: PacienteFormData) => {
    console.log(data);
    // Aqui você enviaria os dados para o backend
    alert("Paciente cadastrado com sucesso!");
    reset();

    // Redirecionar ou limpar o formulário após o envio
    window.location.href = "/paciente";
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

      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
      >
        Cadastrar paciente
      </button>
    </form>
  );
};

export default PatientForm;
