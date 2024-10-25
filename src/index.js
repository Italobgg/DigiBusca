// Servidor Básico
const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

// Rota inicial
app.get("/", (req, res) => {
  res.send(
    "Olá! Aqui você pode buscar informações sobre o Digimon da sua escolha!"
  );
});

// Rota para listar todos os Digimons
app.get("/digimons", async (req, res) => {
  try {
    const response = await axios.get(
      "https://digimon-api.vercel.app/api/digimon"
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar Digimon" });
  }
});

// Buscar Digimon por nome
app.get('/digimons/name/:name', async (req, res) => {
    const name = req.params.name;
    try {
      const response = await axios.get(`https://digimon-api.vercel.app/api/digimon/name/${name}`);
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar Digimon pelo nome' });
    }
  });
  
  // Buscar Digimon por nível
  app.get('/digimons/level/:level', async (req, res) => {
    const level = req.params.level;
    try {
      const response = await axios.get(`https://digimon-api.vercel.app/api/digimon/level/${level}`);
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar Digimon pelo nível' });
    }
  });
  

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
