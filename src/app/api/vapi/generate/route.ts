import { questionsGenerationPrompt } from "@/utils/questionsGenerationPrompt";
import { google } from "@ai-sdk/google";
import { generateText } from "ai";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    { status: "success", message: "hello" },
    { status: 200 }
  );
}

//generate interview questions
export async function POST(request: Request) {
  const { type, techstack, role, level, amount, userid } = await request.json();

  try {
    const result = await generateText({
      model: google("gemini-2.0-flash-001"),
      prompt: questionsGenerationPrompt({
        type,
        techstack,
        role,
        level,
        amount,
      }),
    });

    let questions: string[] = [];
    try {
      questions = JSON.parse(result.text);
    } catch {
      questions = result.text
        .split("\n")
        .map((q) => q.trim().replace(/^[-*0-9.]+\s*/, ""))
        .filter(Boolean);
    }

    return Response.json(
      { status: "success", message: "questions generated", questions },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return Response.json(
      { status: "error", message: "error" },
      { status: 500 }
    );
  }
}
