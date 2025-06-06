import api from "./api";
import { CreatePatientData, Patient } from "../types/Patient";

export const patientService = {
  // Get all patients
  getPatients: async (): Promise<Patient[]> => {
    try {
      const response = await api.get("/pacientes");
      return response.data;
    } catch (error) {
      console.error("Error fetching patients:", error);
      throw error;
    }
  },

  // Get a single patient
  getPatient: async (id: string): Promise<Patient> => {
    try {
      const response = await api.get(`/pacientes/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching patient ${id}:`, error);
      throw error;
    }
  },

  // Create a new patient
  createPatient: async (patientData: CreatePatientData): Promise<Patient> => {
    try {
      const response = await api.post("/pacientes", patientData);
      return response.data;
    } catch (error) {
      console.error("Error creating patient:", error);
      throw error;
    }
  },

  // Update a patient
  updatePatient: async (
    id: string,
    patientData: Partial<CreatePatientData>
  ): Promise<Patient> => {
    try {
      const response = await api.put(`/pacientes/${id}`, patientData);
      return response.data;
    } catch (error) {
      console.error(`Error updating patient ${id}:`, error);
      throw error;
    }
  },

  // Delete a patient
  deletePatient: async (id: string): Promise<void> => {
    try {
      await api.delete(`/pacientes/${id}`);
    } catch (error) {
      console.error(`Error deleting patient ${id}:`, error);
      throw error;
    }
  },
};
