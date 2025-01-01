import axios from 'axios';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import setupSwagger from './config/swagger.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const angularDistPath = path.join(__dirname, '../../dist/portfolio-app/browser');
const githubToken = '...';

app.use(cors());
app.use(bodyParser.json());
setupSwagger(app);

/**
 * @swagger
 * /api/repos:
 *   get:
 *     tags:
 *       - Github
 *     summary: Retorna todos os repositorios
 *     description: Retorna uma lista de todos repositorios do github.
 */
app.get('/api/repos', async (req, res) => {
  try {
    const response = await axios.get('https://api.github.com/user/repos', {
      headers: {
        Authorization: `token ${githubToken}`
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar repositorios' });
  }
});

// Serve static files from Angular app's distribution directory
app.use(express.static(angularDistPath));

app.get('*', (req, res) => {
  console.log("Path", angularDistPath);
  res.sendFile(path.join(angularDistPath, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));