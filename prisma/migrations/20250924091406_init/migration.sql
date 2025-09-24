-- CreateTable
CREATE TABLE "public"."Interview" (
    "id" TEXT NOT NULL,
    "type" TEXT,
    "techstack" TEXT,
    "role" TEXT,
    "level" TEXT,
    "amount" INTEGER,
    "status" TEXT,
    "userId" TEXT NOT NULL,
    "questions" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Interview_pkey" PRIMARY KEY ("id")
);
