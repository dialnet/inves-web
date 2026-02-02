export interface GovernanceBody {
  title: string;
  description: string;
  functions?: string[];
  content?: string;
  footer?: string;
  icon?: "Landmark" | "Settings" | "Cpu" | "Users";
}
