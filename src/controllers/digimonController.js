const axios = require("axios");

// Função  lista todos Digimons
exports.getAllDigimons = async (req, res) => {
    try {
        const response = await axios.get("https://digimon-api.vercel.app/api/digimon");
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar Digimon" });
    }
};

// Função busca por nome
exports.getDigimonByName = async (req, res) => {
    const name = req.params.name;
    try {
        const response = await axios.get(`https://digimon-api.vercel.app/api/digimon/name/${name}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar Digimon pelo nome" });
    }
};

//Função busca por level
exports.getDigimonByLevel = async (req, res) => {
    const level = req.params.level;
    try {
        const response = await axios.get(`https://digimon-api.vercel.app/api/digimon/level/${level}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar Digimon por forma" });
    }
}