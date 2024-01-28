// imports:

// Drive do banco de dados
const sqlite3 = require("sqlite3");

// Responsavel por conectar
const sqlite = require("sqlite");

// Responsavel pela organização do arquivo
const path = require("path");

async function sqliteConnection() {
  const database = await sqlite.open({
    // onde vai ficar salvo o arquivo
    filename: path.resolve(__dirname, "..", "database.db"),
    driver: sqlite3.Database,
  });

  return database;
}

module.exports = sqliteConnection