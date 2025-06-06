import api from "./api";
import { Triage, CreateTriageData, Diagnostico } from "../types/Triage";

export const triageService = {
  // Get all triages for a patient
  getPatientTriages: async (patientId: string): Promise<Triage[]> => {
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
      const response = await api.post(
        `/triagem/paciente/${patientId}`,
        triageData
      );
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
