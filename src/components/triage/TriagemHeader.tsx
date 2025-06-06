import Link from "next/link";

interface TriagemHeaderProps {
  patientId: string | number;
}

const TriagemHeader = ({ patientId }: TriagemHeaderProps) => {
  return (
    <>
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold text-black">Triagens</h2>
        <Link href={`/paciente/${patientId}/triagem`}>
          <button className="bg-blue-500 font-bold text-white rounded w-6 h-6 flex items-center justify-center">
            +
          </button>
        </Link>
      </div>
      <hr className="w-[100%] border-t border-[#9E9E9E] mt-0 my-4"></hr>
    </>
  );
};

export default TriagemHeader;
