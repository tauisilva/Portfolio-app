const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
// require('dotenv').config();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Portfolio API - Taui Silva Lima',
      version: '1.0.0',
      description: 'Uma API RESTful desenvolvida para gerenciar informações relacionadas aos meus projetos de portfólio. Oferece endpoints para criar, atualizar, excluir e listar projetos, além de funcionalidades adicionais para exibir detalhes específicos de cada projeto.',
    },
    servers: [
      {
        // url: process.env.BASE_URL || "http://localhost:3000",
        url: "http://localhost:3000",
        description: 'Servidor de desenvolvimento local',
      },
      {
        url: process.env.BASE_URL,
        description: 'Servidor de produção',
      },
    ],
  },
  apis: ['./api/src/index.js'],
};

const specs = swaggerJsdoc(options);

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};
