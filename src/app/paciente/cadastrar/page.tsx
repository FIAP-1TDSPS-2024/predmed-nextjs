import Header from "@/components/Header";

const CadastrarPaciente = () => {
  return (
    <>
      <Header></Header>
      <main>
        <h1 className="text-black text-2xl font-bold text-center">
          Cadastrar Paciente
        </h1>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nome do Paciente"
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="CPF"
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Email"
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Telefone"
            className="p-2 border border-gray-300 rounded"
          />
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
