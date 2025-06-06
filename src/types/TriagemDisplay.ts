import { Triage } from "./Triage";

// Frontend representation of a triagem item for display purposes
export interface TriagemDisplay {
  id: number;
  label: string;
  tag: string;
  expanded?: boolean;
  answers?: Triage;
}

// This interface can be extended later to include more details
// and connect with the backend API responses
