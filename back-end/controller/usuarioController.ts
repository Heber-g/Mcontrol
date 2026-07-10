// ../controller/usuarioController.ts
import express from 'express';
import * as usuarioController from '../service/usuarioService.js';

const router = express.Router();

/**
 * @openapi
 * {
 * "components": {
 * "schemas": {
 * "Usuario": {
 * "type": "object",
 * "required": ["cpf", "nome", "idade"],
 * "properties": {
 * "cpf": { "type": "string", "description": "CPF único do usuário." },
 * "nome": { "type": "string", "description": "Nome completo do usuário." },
 * "data_uniao": { "type": "string", "format": "date-time", "nullable": true, "description": "Data de união ao ministério." },
 * "data_batismo": { "type": "string", "format": "date-time", "nullable": true, "description": "Data de batismo do usuário." },
 * "idade": { "type": "integer", "description": "Idade do usuário." },
 * "tipo_membro": { "type": "string", "nullable": true, "description": "Cargo ou tipo de membro." }
 * }
 * }
 * }
 * }
 * }
 */

/**
 * @openapi
 * {
 * "/usuarios": {
 * "get": {
 * "summary": "Retorna a lista de usuários registrados",
 * "description": "Retorna uma lista simplificada contendo apenas o ID e o Nome.",
 * "responses": {
 * "200": {
 * "description": "Lista de usuários obtiva com sucesso.",
 * "content": {
 * "application/json": {
 * "schema": {
 * "type": "array",
 * "items": {
 * "type": "object",
 * "properties": {
 * "id": { "type": "integer" },
 * "nome": { "type": "string" }
 * }
 * }
 * }
 * }
 * }
 * },
 * "500": { "description": "Erro interno do servidor." }
 * }
 * }
 * }
 * }
 */
router.get('/', usuarioController.getAll);

/**
 * @openapi
 * {
 * "/usuarios/{id}": {
 * "get": {
 * "summary": "Retorna um usuário específico",
 * "description": "Retorna as informações de um usuário com base no ID fornecido.",
 * "parameters": [
 * {
 * "name": "id",
 * "in": "path",
 * "required": true,
 * "schema": { "type": "integer" }
 * }
 * ],
 * "responses": {
 * "200": {
 * "description": "Usuário encontrado com sucesso.",
 * "content": {
 * "application/json": {
 * "schema": { "$ref": "#/components/schemas/Usuario" }
 * }
 * }
 * },
 * "404": { "description": "Usuário não encontrado." },
 * "500": { "description": "Erro interno do servidor." }
 * }
 * }
 * }
 * }
 */
router.get('/:id', usuarioController.getById);

/**
 * @openapi
 * {
 * "/usuarios": {
 * "post": {
 * "summary": "Cria um novo usuário",
 * "description": "Registra um novo usuário no sistema.",
 * "requestBody": {
 * "required": true,
 * "content": {
 * "application/json": {
 * "schema": { "$ref": "#/components/schemas/Usuario" }
 * }
 * }
 * },
 * "responses": {
 * "201": {
 * "description": "Usuário criado com sucesso.",
 * "content": {
 * "application/json": {
 * "schema": { "$ref": "#/components/schemas/Usuario" }
 * }
 * }
 * },
 * "500": { "description": "Erro interno do servidor." }
 * }
 * }
 * }
 * }
 */
router.post('/', usuarioController.create);

/**
 * @openapi
 * {
 * "/usuarios/{id}": {
 * "put": {
 * "summary": "Atualiza um usuário existente",
 * "description": "Atualiza as informações de um usuário no sistema.",
 * "parameters": [
 * {
 * "name": "id",
 * "in": "path",
 * "required": true,
 * "schema": { "type": "integer" }
 * }
 * ],
 * "requestBody": {
 * "required": true,
 * "content": {
 * "application/json": {
 * "schema": { "$ref": "#/components/schemas/Usuario" }
 * }
 * }
 * },
 * "responses": {
 * "200": {
 * "description": "Usuário atualizado com sucesso.",
 * "content": {
 * "application/json": {
 * "schema": { "$ref": "#/components/schemas/Usuario" }
 * }
 * }
 * },
 * "500": { "description": "Erro interno do servidor." }
 * }
 * }
 * }
 * }
 */
router.put('/:id', usuarioController.update);

export default router;