// swagger.ts
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import dotenv from 'dotenv';

dotenv.config();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Mcontrol API',
      version: '1.0.0',
      description: 'Documentação da API do sistema Mcontrol',
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT}`,
        description: 'Servidor de desenvolvimento',
      },
    ],
  },
  apis: [
    './controller/*.ts',
    './controller/**/*.ts',
  ],
};

export const swaggerSpec = swaggerJSDoc(options);
export { swaggerUi };