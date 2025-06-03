import Image from "next/image";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const SearchBar = ({ searchTerm, setSearchTerm }: SearchBarProps) => {
  return (
    <div className="relative mt-4">
      <input
        type="text"
        placeholder="Buscar paciente..."
        className="p-2 pl-3 pr-10 rounded border border-[#9E9E9E] text-black w-full"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center justify-center">
        <Image src="/search.svg" alt="Search" width={24} height={24} />
      </div>
    </div>
  );
};
