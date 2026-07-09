-- CreateTable
CREATE TABLE "usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cpf" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "data_uniao" DATETIME,
    "data_batismo" DATETIME,
    "idade" INTEGER NOT NULL,
    "tipo_membro" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_cpf_key" ON "usuario"("cpf");
