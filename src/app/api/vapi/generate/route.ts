import { parseQuestions } from "@/utils/apiHelperFunctions";
import { prisma } from "@/utils/prismaClient";
import { questionsGenerationPrompt } from "@/utils/questionsGenerationPrompt";
import { google } from "@ai-sdk/google";
import { generateText } from "ai";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json(
      { status: "success", message: "hello" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { status: "error", message: error.message ?? "Unexpected error" },
      { status: 500 }
    );
  }
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

    const questions = parseQuestions(result.text);

    if (!questions.length) {
      return NextResponse.json(
        { status: "error", message: "no questions generated" },
        { status: 500 }
      );
    }

    await prisma.interview.create({
      data: {
        type,
        techstack,
        role,
        level,
        amount,
        status: "finalized",
        userId: userid,
        questions,
      },
    });

    return NextResponse.json(
      { status: "success", message: "Interview generated successfully!" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("POST /api/interviews error:", error);
    return NextResponse.json(
      { status: "error", message: error.message ?? "Unexpected error" },
      { status: 500 }
    );
  }
}
