import { prisma } from '../src/prismaClient.js';
//const prisma = new PrismaClient();

export const getAll = async (req: any, res: any) => {
    try {
        const usuarios = await prisma.usuario.findMany({
            orderBy: { id: 'asc' },
            select: {
                id: true,
                nome: true,
            }
        });
        res.json(usuarios);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const create = async (req: any, res: any) => {
    try{
        const payload = {
            nome: req.body.nome,
            cpf: req.body.cpf,
            data_uniao: req.body.data_uniao,
            data_batismo: req.body.data_batismo,
            idade: req.body.idade,
            tipo_membro: req.body.tipo_membro
        };
        const usuario = await prisma.usuario.create({ data: payload });
        res.status(201).json(usuario);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};