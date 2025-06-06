import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

import { Input } from "./Input";
import { Button } from "./Button";
import { authService } from "../../services/auth";

export const LoginForm: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      Swal.fire({
        title: "Erro!",
        text: "Por favor preencha todos os campos",
        icon: "error",
        confirmButtonColor: "#1E88E5",
      });
      return;
    }

    setIsLoading(true);

    try {
      await authService.login({
        emailFuncionario: email,
        senhaFuncionario: password,
      });

      // Navigate to patient page on success
      router.push("/paciente");
    } catch (error) {
      console.error("Login error:", error);

      Swal.fire({
        title: "Erro!",
        text: "Senha inválida, tente novamente",
        icon: "error",
        confirmButtonColor: "#1E88E5",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center w-full max-w-xs"
    >
      <Input
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mt-4"
      />

      <Input
        placeholder="Senha"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mt-4"
      />

      <Button type="submit" isLoading={isLoading}>
        Realizar login
      </Button>
    </form>
  );
};
