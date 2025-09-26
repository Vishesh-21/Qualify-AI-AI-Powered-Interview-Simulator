export interface Interview {
  id: string;
  role: string | null;
  level: string | null;
  type: string | null;
  techstack: string | null;
  status: string | null;
  amount: number | null;
  userId: string;
  questions: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface InterviewCardProps {
  interview: Interview;
}

export interface InterviewProps {
  interviews: Interview[];
}
