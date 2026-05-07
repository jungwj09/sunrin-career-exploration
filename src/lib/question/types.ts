export interface QuestionOption {
  label: string;
  text: string;
  club: string;
}

export interface QuestionQuestion {
  id: number;
  text: string;
  options: QuestionOption[];
}

export interface QuestionData {
  major: string;
  majorLabel: string;
  questions: QuestionQuestion[];
}

export type MajorKey = "infosec" | "software" | "it-management" | "condi";