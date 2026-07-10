import { prisma } from '../src/prismaClient.js';
import { defaultResponseDto } from '../dto/defaultResponseDto.js';
import { usuarioDto } from '../dto/usuario/usuarioDto.js';
import { errorResponseDto } from '../dto/errorResponseDto.js';
import { paginate } from '../utils/paginate.js';

//const prisma = new PrismaClient();

export const getAll = async (req: any, res: any) => {
    try {
        const page = Number.parseInt(req.query.page) || 1;
        const limit = Number.parseInt(req.query.limit) || 10;

        //Aqui tinha feito sem paginação
        // const usuarios = await prisma.usuario.findMany({
        //     orderBy: { id: 'asc' },
        //     select: {
        //         id: true,
        //         nome: true,
        //     }
        // });

        //Paginado
        const usuarios = await paginate(prisma.usuario, {
            page,
            limit,
            orderBy: { id: 'asc' },
            select: {
                id: true,
                nome: true,
            }
        });
        const data = usuarios.data.map((usuario: any) => usuarioDto.fromEntity(usuario));
        const response = new defaultResponseDto(data, page, limit, data.length);
        res.json(response);
    } catch (error) {
        console.error(error);
        const errorResponse = new errorResponseDto({
            status_code: 500,
            code: 'INTERNAL_SERVER_ERROR',
            message: 'Erro interno do servidor.'
        });
        return res.status(500).json(errorResponse);
    }
};

export const getById = async (req: any, res: any) => {
    try {
        const id = parseInt(req.params.id);
        const usuario = await prisma.usuario.findUnique({
            where: { id },
        });
        
        if (!usuario) {
            const errorResponse = new errorResponseDto({
                status_code: 404,
                code: 'NOT_FOUND',
                message: 'Usuário não encontrado'
            });
            return res.status(404).json(errorResponse);
        }

        const usuarioDtoInstance = usuarioDto.fromEntity(usuario);
        const response = new defaultResponseDto(usuarioDtoInstance, 1, 0, 1, [], 200);
        res.json(response);
    } catch (error) {
        console.error(error);
        const errorResponse = new errorResponseDto({
            status_code: 500,
            code: 'INTERNAL_SERVER_ERROR',
            message: 'Erro interno do servidor.'
        });
        return res.status(500).json(errorResponse);
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
        const usuarioDtoInstance = usuarioDto.fromEntity(usuario);

        const response = new defaultResponseDto(usuarioDtoInstance, 1, 0, 1, [], 201);
        res.status(201).json(response);
    } catch (error) {
        console.error(error);
        const errorResponse = new errorResponseDto({
            status_code: 500,
            code: 'INTERNAL_SERVER_ERROR',
            message: 'Erro interno do servidor.'
        });
        return res.status(500).json(errorResponse);
    }
}

export const update = async (req: any, res: any) => {
    try {
        const id = parseInt(req.params.id)
        const payload = {
            nome: req.body.nome,
            cpf: req.body.cpf,
            data_uniao: req.body.data_uniao,
            data_batismo: req.body.data_batismo,
            idade: req.body.idade,
            tipo_membro: req.body.tipo_membro
        };
        const usuarioUpdate = await prisma.usuario.update({
            where: { id },
            data: payload
        });
        const usuarioDtoInstance = usuarioDto.fromEntity(usuarioUpdate);

        const response = new defaultResponseDto(usuarioDtoInstance, 1, 0, 1, [], 200);
        res.json(response);
    } catch (error) {
        console.error(error);
        const errorResponse = new errorResponseDto({
            status_code: 400,
            code: 'UPDATE_ERROR',
            message: 'Não foi possível atualizar o usuário.'
        });
        return res.status(400).json(errorResponse);
    }
}
