const { Router } = require("express");

const UsersController = require("../controllers/UsersController");

const usersRoutes = Router();



// Criando instancias

const usersController = new UsersController();

usersRoutes.post("/",usersController.create);
usersRoutes.put("/:id", usersController.update)

// Exportando
module.exports = usersRoutes;
