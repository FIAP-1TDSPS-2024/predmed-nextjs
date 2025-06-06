// Frontend representation of a triagem item for display purposes
export interface TriagemDisplay {
  id: number;
  label: string;
  tag: string;
  tagColor: string;
  expanded?: boolean;
}

// This interface can be extended later to include more details
// and connect with the backend API responses
