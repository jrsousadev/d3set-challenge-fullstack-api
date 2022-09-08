-- CreateTable
CREATE TABLE "peoples" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "peoples_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "peoplePhones" (
    "id" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "peopleId" TEXT,

    CONSTRAINT "peoplePhones_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "peoples_id_key" ON "peoples"("id");

-- CreateIndex
CREATE UNIQUE INDEX "peoplePhones_phone_key" ON "peoplePhones"("phone");

-- AddForeignKey
ALTER TABLE "peoplePhones" ADD CONSTRAINT "peoplePhones_peopleId_fkey" FOREIGN KEY ("peopleId") REFERENCES "peoples"("id") ON DELETE SET NULL ON UPDATE CASCADE;
