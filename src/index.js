const express = require("express");
const connectDB = require("./config/connect");
const digimonRoutes = require("./routes/digimonRoutes");


const app = express();
const PORT = 3000;

// Conectar ao MongoDB Atlas
connectDB();

app.get("/", (req, res) => {
  res.send("Olá! Conectado ao MongoDB Atlas com sucesso.");
});

//Usar as rotas de Digimon
app.use("/digimons", digimonRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
