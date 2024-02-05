// Importando a conexão com o banco de dados:
const knex = require("../database/knex");

// Importando AppError, para lidar com exceções:
const AppError = require("../utils/AppError");

// Importando a configuração de autenticação do JWT:

const authConfig = require("../configs/auth");

// Importando metodo do JWT:

const { sign } = require("jsonwebtoken");

// Verificar a senha criptografada:
const { compare } = require("bcryptjs");

class SessionsController {
  async create(request, response) {
    const { email, password } = request.body;

    const user = await knex("users").where({ email }).first();

    // Caso o usuário não exista, seja por algum motivo:
    if (!user) {
      throw new AppError("E-mail e/ou senha incorreta", 401);
    }

    // Verificar senha criptografada do banco:

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError("E-mail e/ou senha incorreta", 401);
    }

    // Gerando o token para o usuário

    const {secret, expiresIn} = authConfig.jwt;
    const token = sign({}, secret, {
      subject: String(user.id),
      expiresIn
    })

    return response.json({user, token});
  }
}

module.exports = SessionsController;
