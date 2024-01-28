const { Router } = require("express");

const TagsController = require("../controllers/TagsController");

const tagsRoutes = Router();

// Criando instancias

const tagsController = new TagsController();

tagsRoutes.get("/:user_id", tagsController.index);


// Exportando
module.exports = tagsRoutes;
