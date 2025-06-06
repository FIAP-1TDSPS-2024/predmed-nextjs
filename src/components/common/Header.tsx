"use client";

import { usePathname, useRouter } from "next/navigation";
import { authService } from "@/services/auth";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleBack = () => {
    // Check if we're on a login page - in this case, log out the user
    if (pathname === "/home") {
      authService.logout();
      router.push("/");
    } else {
      // Otherwise, just go back
      router.back();
    }
  };

  return (
    <header className="bg-[#1565C0] text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold">PredMed</h1>
      </div>
      <div>
        <button
          onClick={handleBack}
          className="bg-white text-[#1565C0] px-3 py-1 rounded-md hover:bg-gray-100 transition-colors"
        >
          Voltar
        </button>
      </div>
    </header>
  );
};

export default Header;
