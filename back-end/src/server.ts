import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Carrega as variáveis do arquivo .env para o process.env
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/pessoas', (req, res) => {
  res.json([{ id: 1, nome: 'Héber Garcia', email: 'heber@email.com' }]);
});

// Lê a porta do .env ou usa a 5555 como padrão se não estiver definida
const PORT = process.env.PORT || 5555;

app.listen(PORT, () => {
  console.log(`Back-end rodando em http://localhost:${PORT}`);
});