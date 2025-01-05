import axios from 'axios';
import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import setupSwagger from './config/swagger.js';

// Resolvendo __filename e __dirname para TypeScript
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app: Application = express();
const angularDistPath: string = path.join(__dirname, '../../dist/portfolio-app/browser');
const githubToken: string = '...';

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
app.get('/api/repos', async (req: Request, res: Response): Promise<void> => {
  try {
    const response = await axios.get('https://api.github.com/user/repos', {
      headers: {
        Authorization: `token ${githubToken}`,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar repositorios' });
  }
});

// Servindo arquivos estáticos do diretório de distribuição do Angular
app.use(express.static(angularDistPath));

app.get('*', (req: Request, res: Response): void => {
  console.log('Path', angularDistPath);
  res.sendFile(path.join(angularDistPath, 'index.html'));
});

const PORT: number = parseInt(process.env.PORT || '3000', 10);
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
