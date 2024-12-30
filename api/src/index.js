const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const setupSwagger = require('./config/swagger');
const app = express();
setupSwagger(app);

const angularDistPath = path.join(__dirname, '../../dist/portfolio-app/browser');

app.get('*', (req, res) => {
  console.log("Path", angularDistPath)
  res.sendFile(path.join(angularDistPath, 'index.html'));
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
