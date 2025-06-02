"use client";
import Header from "@/components/Header";
import { useForm } from "react-hook-form";

type PacienteFormData = {
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
};

const CadastrarPaciente = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<PacienteFormData>();

  const onSubmit = (data: PacienteFormData) => {
    console.log(data);
    // Aqui você enviaria os dados para o backend
    alert("Paciente cadastrado com sucesso!");
    reset();

    // Redirecionar ou limpar o formulário após o envio
    window.location.href = '/paciente';
  };

  return (
    <>
      <Header></Header>
      <main>
        <h1 className="text-black text-3xl font-bold text-center m-8">
          Cadastrar Paciente
        </h1>
        <form className="flex flex-col gap-4 items-center justify-center" onSubmit={handleSubmit(onSubmit)}>          <div className="w-full max-w-md">
            <input
              type="text"
              placeholder="Nome do Paciente"
              className={`p-2 pl-3 pr-20 w-full rounded border ${errors.nome ? 'border-red-500' : 'border-[#9E9E9E]'} text-black`}
              {...register("nome", { required: "Nome é obrigatório" })}
            />
            {errors.nome && <p className="text-red-500 text-sm mt-1">{errors.nome.message}</p>}
          </div>
          
          <div className="w-full max-w-md">
            <input
              type="text"
              placeholder="CPF"
              className={`p-2 pl-3 pr-20 w-full rounded border ${errors.cpf ? 'border-red-500' : 'border-[#9E9E9E]'} text-black`}
              {...register("cpf", { 
                required: "CPF é obrigatório",
                pattern: {
                  value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$|^\d{11}$/,
                  message: "CPF inválido. Formato: 12345678900 ou 123.456.789-00"
                }
              })}
            />
            {errors.cpf && <p className="text-red-500 text-sm mt-1">{errors.cpf.message}</p>}
          </div>
          
          <div className="w-full max-w-md">
            <input
              type="text"
              placeholder="Email"
              className={`p-2 pl-3 pr-20 w-full rounded border ${errors.email ? 'border-red-500' : 'border-[#9E9E9E]'} text-black`}
              {...register("email", { 
                required: "Email é obrigatório",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Email inválido"
                }
              })}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
          
          <div className="w-full max-w-md">
            <input
              type="text"
              placeholder="Telefone"
              className={`p-2 pl-3 pr-20 w-full rounded border ${errors.telefone ? 'border-red-500' : 'border-[#9E9E9E]'} text-black`}
              {...register("telefone", { 
                required: "Telefone é obrigatório",
                pattern: {
                  value: /^(\(\d{2}\)\s*)?\d{4,5}-\d{4}$|^\d{10,11}$/,
                  message: "Telefone inválido. Ex: 1199887766 ou (11) 9988-7766"
                }
              })}
            />
            {errors.telefone && <p className="text-red-500 text-sm mt-1">{errors.telefone.message}</p>}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
          >
            Cadastrar paciente
          </button>
        </form>
      </main>
    </>
  );
};

export default CadastrarPaciente;
