import api from "./api";
import { Triage, CreateTriageData, Diagnostico } from "../types/Triage";

export const triageQuestions = [
  {
    id: "problemaRespiratorio",
    text: "Você está com dificuldade para respirar?",
  },
  { id: "febre", text: "Você teve febre recentemente?" },
  { id: "tosseSeca", text: "Você está com tosse seca?" },
  { id: "dorGarganta", text: "Você está com dor de garganta?" },
  { id: "coriza", text: "Você está com coriza ou nariz escorrendo?" },
  { id: "dorCabeca", text: "Você está com dor de cabeça?" },
  {
    id: "fadiga",
    text: "Você está se sentindo muito cansado(a) ou com fadiga?",
  },
  { id: "asma", text: "Você tem asma?" },
  {
    id: "doencaPulmonarCronica",
    text: "Você tem alguma doença pulmonar crônica (como bronquite crônica ou enfisema)?",
  },
  { id: "doencaCardiaca", text: "Você tem alguma doença cardíaca?" },
  { id: "diabetes", text: "Você tem diabetes?" },
  { id: "hipertensao", text: "Você tem hipertensão (pressão alta)?" },
  {
    id: "problemasGastro",
    text: "Você teve problemas gastrointestinais recentes (como diarreia, náuseas ou vômito)?",
  },
  {
    id: "viagemExterior",
    text: "Você viajou para o exterior nos últimos 14 dias?",
  },
  {
    id: "contatoInfectado",
    text: "Você teve contato próximo com alguém infectado por COVID-19 (ou outra doença infecciosa relevante)?",
  },
  {
    id: "multidao",
    text: "Você esteve em locais com muita gente recentemente (ex: eventos, festas)?",
  },
  {
    id: "localPublico",
    text: "Você foi a locais públicos fechados nos últimos dias (ex: shopping, supermercado)?",
  },
  {
    id: "familarLocalPublico",
    text: "Alguém que mora com você esteve em locais públicos recentemente?",
  },
];

export const triageService = {
  // Get all triages for a patient
  getPatientTriages: async (patientId: number): Promise<Triage[]> => {
    try {
      const response = await api.get(`/triagem/paciente/${patientId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching triages for patient ${patientId}:`, error);
      throw error;
    }
  },

  // Create a new triage for a patient
  createTriage: async (
    patientId: string,
    triageData: CreateTriageData
  ): Promise<Triage> => {
    try {
      const response = await api.post(`/triagem/${patientId}`, triageData);
      return response.data;
    } catch (error) {
      console.error(`Error creating triage for patient ${patientId}:`, error);
      throw error;
    }
  },

  // Generate a diagnostic for a triage
  generateDiagnostic: async (triageId: string): Promise<Diagnostico> => {
    try {
      const response = await api.post(`/diagnostico/${triageId}`);
      return response.data;
    } catch (error) {
      console.error(
        `Error generating diagnostic for triage ${triageId}:`,
        error
      );
      throw error;
    }
  },
};
