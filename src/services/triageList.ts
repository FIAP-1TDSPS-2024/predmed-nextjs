import { triageService } from "./triage";
import { Triage } from "../types/Triage";
import { TriagemDisplay } from "../types/TriagemDisplay";

export const triageListService = {
  /**
   * Fetches triages for a patient and formats them for display
   * @param patientId - ID of the patient
   * @returns Promise with formatted triage data
   */
  getFormattedPatientTriages: async (
    patientId: number
  ): Promise<TriagemDisplay[]> => {
    try {
      // Fetch triages using the existing service
      const triages: Triage[] = await triageService.getPatientTriages(
        patientId
      );

      // Format the triages for display
      const formattedTriages: TriagemDisplay[] = triages.map(
        (triage, index) => {
          // Determine tag and color based on diagnostic status
          let tag = "Assintomático";
          let tagColor = "bg-[#388E3C]"; // Green for asymptomatic

          if (triage.diagnostico) {
            if (triage.diagnostico.provavelCovid) {
              tag = "Risco alto de covid";
              tagColor = "bg-[#C62828]"; // Red for high risk
            } else {
              tag = "Assintomático";
              tagColor = "bg-[#388E3C]"; // Green for asymptomatic
            }
          }

          // Format date to create a readable label (e.g., "Triagem - 06/06/2025")
          const date = new Date(triage.dataTriagem);
          const formattedDate = date.toLocaleDateString("pt-BR");
          const label = `Triagem - ${formattedDate}`;

          return {
            id: triage.id,
            label,
            tag,
            tagColor,
            expanded: index === 0,
            TriageItem: triage, // Include the full triage item for further details
          };
        }
      );

      return formattedTriages;
    } catch (error) {
      console.error(
        `Error formatting triages for patient ${patientId}:`,
        error
      );
      throw error;
    }
  },
};
