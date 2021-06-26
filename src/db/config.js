// Importando os módulos sqlite3 e sqlite (apenas a função open)
const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

module.exports = () =>
  // Configurando o database
  open({
    filename: "./src/db/rocketq.sqlite",
    driver: sqlite3.Database, // Driver é quem comanda o Database
  });
