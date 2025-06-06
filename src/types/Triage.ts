// Interface for diagnostics
export interface Diagnostico {
  id: number;
  provavelCovid: boolean;
  dataDiagnostico: string;
}

// Interface for patient data in triage responses
// This extends the Patient interface with additional fields specific to the API response
export interface TriagePaciente {
  id: number;
  nome: string;
  cpf: string;
  email: string;
  celular: string;
  sexo: "M" | "F";
  dataNascimento: string;
}

// Interface for complete triage data
export interface Triage {
  id: number;
  dataTriagem: string;
  paciente: TriagePaciente;
  diagnostico: Diagnostico | null;
  problemaRespiratorio: boolean;
  febre: boolean;
  tosseSeca: boolean;
  dorGarganta: boolean;
  coriza: boolean;
  asma: boolean;
  doencaPulmonarCronica: boolean;
  dorCabeca: boolean;
  doencaCardiaca: boolean;
  diabetes: boolean;
  hipertensao: boolean;
  fadiga: boolean;
  problemasGastro: boolean;
  viagemExterior: boolean;
  contatoInfectado: boolean;
  multidao: boolean;
  localPublico: boolean;
  familarLocalPublico: boolean;
}

// Interface for creating a new triage
export interface CreateTriageData {
  problemaRespiratorio: boolean;
  febre: boolean;
  tosseSeca: boolean;
  dorGarganta: boolean;
  coriza: boolean;
  asma: boolean;
  doencaPulmonarCronica: boolean;
  dorCabeca: boolean;
  doencaCardiaca: boolean;
  diabetes: boolean;
  hipertensao: boolean;
  fadiga: boolean;
  problemasGastro: boolean;
  viagemExterior: boolean;
  contatoInfectado: boolean;
  multidao: boolean;
  localPublico: boolean;
  familarLocalPublico: boolean;
}
