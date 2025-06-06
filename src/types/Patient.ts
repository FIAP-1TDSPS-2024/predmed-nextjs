export interface Patient {
  id: string;
  nome: string;
  cpf?: string;
  email?: string;
  celular?: string;
  dataNascimento?: string;
  sexo?: "M" | "F";
}

export interface CreatePatientData {
  id: number;
  nome: string;
  cpf: string;
  email: string;
  celular: string;
  dataNascimento: string;
  sexo: "M" | "F";
}
