-- CreateEnum
CREATE TYPE "Aptitude" AS ENUM ('APTE', 'INAPTE');

-- CreateEnum
CREATE TYPE "EpOptionnel" AS ENUM ('ESPAGNOL', 'ALLEMAND', 'ITALIEN', 'ARABE', 'PORTUGAIS', 'RUSSE', 'TECHNOLOGIE', 'ECONOMIE_FAMILIALE');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MASCULIN', 'FEMININ');

-- CreateEnum
CREATE TYPE "PresenceType" AS ENUM ('PRESENT', 'ABSENT');

-- CreateEnum
CREATE TYPE "Statut" AS ENUM ('PU', 'PR', 'CL');

-- CreateEnum
CREATE TYPE "TypeEtablissement" AS ENUM ('COLLEGE', 'LYCEE', 'MIXTE_LYCEE_COLLEGE', 'COLLEGE_PRIVE', 'COLLEGE_PRIVE_MIXTE', 'LYCEE_PRIVE_MIXTE');

-- CreateTable
CREATE TABLE "Contact" (
    "id" SERIAL NOT NULL,
    "prenom" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "description" TEXT,
    "phone" TEXT,
    "adresse" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "posts" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "content" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "authorId" TEXT NOT NULL,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "candidats" (
    "id" SERIAL NOT NULL,
    "prenoms" VARCHAR(255) NOT NULL,
    "nom" VARCHAR(255) NOT NULL,
    "date_naissance" DATE NOT NULL,
    "lieu_naissance" VARCHAR(255) NOT NULL,
    "sexe" VARCHAR(255) NOT NULL DEFAULT 'M',
    "aptitude" VARCHAR(255) NOT NULL DEFAULT 'Apte',
    "section" VARCHAR(255) NOT NULL DEFAULT 'Moderne',
    "option" VARCHAR(255) NOT NULL DEFAULT 'ESPAGNOL',
    "etat" BOOLEAN NOT NULL DEFAULT true,
    "etablissement_id" INTEGER NOT NULL,

    CONSTRAINT "candidats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "anonymats" (
    "id" SERIAL NOT NULL,
    "code" VARCHAR(255) NOT NULL,
    "candidatId" INTEGER NOT NULL,

    CONSTRAINT "anonymats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "zones" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "responsable" TEXT NOT NULL,
    "contact" TEXT NOT NULL,

    CONSTRAINT "zones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "centres" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "slug" TEXT,
    "contact" TEXT,
    "zoneId" INTEGER NOT NULL,

    CONSTRAINT "centres_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "etablissements" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "slug" VARCHAR(255) NOT NULL,
    "zoneId" INTEGER NOT NULL,

    CONSTRAINT "etablissements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "groupes" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "slug" VARCHAR(255) NOT NULL,
    "total" DOUBLE PRECISION NOT NULL DEFAULT 0,

    CONSTRAINT "groupes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jurys" (
    "id" SERIAL NOT NULL,
    "numero" INTEGER NOT NULL,
    "centre_id" INTEGER,
    "president" TEXT,

    CONSTRAINT "jurys_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "matieres" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),
    "slug" INTEGER,
    "coefficient" INTEGER NOT NULL,

    CONSTRAINT "matieres_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notes" (
    "id" SERIAL NOT NULL,
    "candidat_id" INTEGER NOT NULL,
    "matiere_id" INTEGER NOT NULL,
    "score" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "groupe_id" INTEGER NOT NULL,

    CONSTRAINT "notes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "resultats" (
    "id" SERIAL NOT NULL,
    "candidat_id" INTEGER NOT NULL,
    "total" DOUBLE PRECISION DEFAULT 0,
    "moyenne" DOUBLE PRECISION DEFAULT 0,
    "rang" INTEGER,

    CONSTRAINT "resultats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mark" (
    "id" SERIAL NOT NULL,
    "candidatId" INTEGER NOT NULL,
    "numcorrection" TEXT NOT NULL,
    "red" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "dic" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "tsq" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "svt" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "lv1" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "mat" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "hg" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "ec" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "sp" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "part" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "orale" DOUBLE PRECISION NOT NULL DEFAULT 0,

    CONSTRAINT "Mark_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Contact_email_key" ON "Contact"("email");

-- CreateIndex
CREATE UNIQUE INDEX "anonymat_code_unique" ON "anonymats"("code");

-- CreateIndex
CREATE UNIQUE INDEX "anonymats_candidatId_key" ON "anonymats"("candidatId");

-- CreateIndex
CREATE UNIQUE INDEX "etablissements_slug_unique" ON "etablissements"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "matieres_name_unique" ON "matieres"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Mark_candidatId_key" ON "Mark"("candidatId");

-- CreateIndex
CREATE UNIQUE INDEX "Mark_numcorrection_key" ON "Mark"("numcorrection");

-- AddForeignKey
ALTER TABLE "candidats" ADD CONSTRAINT "candidats_etablissement_id_foreign" FOREIGN KEY ("etablissement_id") REFERENCES "etablissements"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "anonymats" ADD CONSTRAINT "anonymats_candidatId_fkey" FOREIGN KEY ("candidatId") REFERENCES "candidats"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "centres" ADD CONSTRAINT "centres_zoneId_fkey" FOREIGN KEY ("zoneId") REFERENCES "zones"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "etablissements" ADD CONSTRAINT "etablissements_zoneId_fkey" FOREIGN KEY ("zoneId") REFERENCES "zones"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jurys" ADD CONSTRAINT "jurys_centre__id_foreign" FOREIGN KEY ("centre_id") REFERENCES "centres"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notes" ADD CONSTRAINT "notes_candidat_id_foreign" FOREIGN KEY ("candidat_id") REFERENCES "candidats"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "notes" ADD CONSTRAINT "notes_matiere_id_foreign" FOREIGN KEY ("matiere_id") REFERENCES "matieres"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "resultats" ADD CONSTRAINT "resultats_candidat_id_foreign" FOREIGN KEY ("candidat_id") REFERENCES "candidats"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Mark" ADD CONSTRAINT "Mark_candidatId_fkey" FOREIGN KEY ("candidatId") REFERENCES "candidats"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
