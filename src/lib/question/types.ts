// 공통
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

// 학과 추천용
export interface MajorQuestionOption {
  label: string;
  text: string;
  major: MajorKey;
}

export interface MajorQuestionQuestion {
  id: number;
  text: string;
  options: MajorQuestionOption[];
}

export interface MajorQuestionData {
  questions: MajorQuestionQuestion[];
}