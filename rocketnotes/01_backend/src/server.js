require("express-async-errors");

const migrationsRun = require("./database/sqlite/migrations")

// Importando o AppError

const AppError = require("./utils/AppError");

// Importando o express

const express = require("express");


// Selecionando as rotas

const routes = require("./routes");

migrationsRun();


const app = express();

// definindo o padrão do corpo da requisição

app.use(express.json());

// Utilizando as rotas

app.use(routes);


// Errors:

app.use((error, request, response, next) => {

  // erro do lado do cliente:
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }
  console.log(error)

  //   erro do servidor, caso tenha:
  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

// Definiu o numero da porta que o API vai receber e retornar as requisições

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
