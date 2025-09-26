interface QuestionsGenerationPromptProps {
  type: string;
  techstack: string;
  role: string;
  level: string;
  amount: number;
}

export const questionsGenerationPrompt = ({
  type,
  techstack,
  role,
  level,
  amount,
}: QuestionsGenerationPromptProps) => {
  return `
You are an expert interview question generator.  
Your task is to generate exactly **${amount} unique interview questions and keep per question in between 20 to 40 words**.

### Job Context
- Role: ${role}  
- Experience level: ${level}  
- Tech stack: ${techstack}  
- Question type focus: ${type} (if "technical", focus on coding, architecture problem-solving. If "behavioral", focus on teamwork, decision-making, communication). 

Please return only the questions, without any additional text.

The questions are going to be read by an voice assistant so do not use "/" or "*" or any other special characters which might break the voice assistant.

Return the questions formatted should be like this: ["Question 1", "Question 2", "Question 3", "Question 4"]

Thank you <#`;
};

export function formateDate(date: Date) {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
