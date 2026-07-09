// src/prismaClient.ts
import { PrismaClient } from './generated/prisma/index.js';
import { PrismaLibSql } from '@prisma/adapter-libsql';
import path from 'path';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

if (!globalForPrisma.prisma) {
  // Constrói o caminho absoluto para o dev.db na raiz do projeto
  // Isso evita que o driver se perca dependendo de onde o processo do Node foi iniciado
  const dbPath = `file:${path.resolve(process.cwd(), 'dev.db')}`;
  
  // 1. Acopla o adapter do Prisma 7 com a configuração correta
  const adapter = new PrismaLibSql({
    url: dbPath,
  });

  // 3. Instancia o PrismaClient injetando o adapter
  globalForPrisma.prisma = new PrismaClient({
    adapter,
    log: ['query', 'info', 'warn', 'error'],
  });
}

export const prisma = globalForPrisma.prisma;