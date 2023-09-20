const express = require('express');
const next = require('next');
require('dotenv').config();
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(express.json());

  server.get('/sitemap.xml', (req, res) => {
    res.setHeader('Content-Type', 'text/xml');
    res.sendFile(__dirname + '/sitemap.xml');
  });

  server.get('/', (req, res) => {
    res.setHeader('Cache-Control', 'public, max-age=3600');
    return app.render(req, res, '/', req.query);
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  // Обработчик ошибок
  server.use((err, req, res, next) => {
    console.error('Ошибка:', err);
    res.status(500).send('Внутренняя ошибка сервера express...');
  });

  const PORT = process.env.PORT || 3000;

  const start = async () => {
    try {
      server.listen(PORT, () => console.log(`::::::::...The server is running on the port: ${PORT}...::::::::`));
    } catch (err) {
      console.error('Ошибка при запуске сервера:', err);
    }
  };

  start();
});
