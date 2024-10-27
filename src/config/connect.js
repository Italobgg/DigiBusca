const { MongoClient } = require("mongodb");

// URL de conexão ao MongoDB Atlas
const url = "mongodb+srv://user:123qwe@digibusca.ayiig.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

async function connectDB() {
    try {
        await client.connect();
        console.log("Conectado ao MongoDB Atlas com sucesso!");
    } catch (error) {
        console.error("Erro ao conectar ao MongoDB Atlas:", error.message);
        process.exit(1);
    }
}

module.exports = connectDB; 
