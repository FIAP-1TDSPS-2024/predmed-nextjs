import Link from "next/link";
import { StudentCard } from "@/components/StudentCard";
import { Footer } from "@/components/Footer";

const students = [
  {
    name: "Jonas de Jesus Campos de Oliveira",
    rm: "561144",
    image: "/jonas.jpeg",
    github: "https://github.com/jonasdasneves",
    linkedin: "https://www.linkedin.com/in/jonas-campos-8bb8211b3",
  },
  {
    name: "Daniel Santana Corrêa Batista",
    rm: "559622",
    image: "/daniel.png",
    github: "https://github.com/Dejota-04",
    linkedin: "https://www.linkedin.com/in/daniel-santana04",
  },
  {
    name: "Wendell Nascimento Dourado",
    rm: "559336",
    image: "/wendell.jpg",
    github: "https://github.com/wendellnd",
    linkedin: "https://www.linkedin.com/in/wendellnd",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <h1 className="text-4xl font-bold">
            <span className="text-[#1565C0]">CaT</span>
            <span className="text-gray-800">ech</span>
          </h1>
        </div>

        <main className="grid md:grid-cols-3 gap-4 p-4">
          {students.map((student) => (
            <StudentCard key={student.rm} {...student} />
          ))}
        </main>

        <Link
          href="/home"
          className="px-12 py-4 bg-[#1E88E5] text-white font-bold rounded cursor-pointer hover:bg-[#1565C0] transition-colors mt-8"
        >
          Home
        </Link>
      </div>

      <Footer />
    </div>
  );
}
