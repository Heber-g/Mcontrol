import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// Import controller module. Use require without file extension and handle both CommonJS and ES module default export

import usuarioController from '../controller/usuarioController.js'; //  Caminho explícito

import { swaggerUi, swaggerSpec } from '../config/swagger.js';

// Carrega as variáveis do arquivo .env para o process.env
dotenv.config();

// const swaggerUi = require('swagger-ui-express');
// const swaggerSpec = require('./config/swagger');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// Support both CommonJS export and ES module default export
app.use('/usuarios', usuarioController);

app.get('/api/pessoas', (req, res) => {
  res.json([{ id: 1, nome: 'Héber Garcia', email: 'heber@email.com' }]);
});

// Lê a porta do .env ou usa a 5555 como padrão se não estiver definida
const PORT = process.env.PORT || 5555;

app.listen(PORT, () => {
  console.log(`Back-end rodando em http://localhost:${PORT}`);
});