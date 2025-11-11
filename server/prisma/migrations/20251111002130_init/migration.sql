-- CreateEnum
CREATE TYPE "TaskStatus" AS ENUM ('not_started', 'started', 'complete', 'deleted');

-- CreateTable
CREATE TABLE "Task" (
    "task_id" SERIAL NOT NULL,
    "task_title" TEXT NOT NULL,
    "task_description" TEXT,
    "task_status" "TaskStatus" NOT NULL DEFAULT 'not_started',
    "task_owner" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("task_id")
);
