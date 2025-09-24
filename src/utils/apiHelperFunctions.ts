// Helper: parse AI output safely
export function parseQuestions(text: string): string[] {
  try {
    return JSON.parse(text);
  } catch {
    return text
      .split("\n")
      .map((q) => q.trim().replace(/^[-*0-9.]+\s*/, ""))
      .filter(Boolean);
  }
}
