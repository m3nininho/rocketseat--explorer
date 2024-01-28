
// Importando as configurações feita no knexfile
const config = require('../../../knexfile');

// Importando o knex
const knex = require("knex")

// Criando a conexão 
const connection = knex(config.development)

// exportando a conexão
module.exports = connection;