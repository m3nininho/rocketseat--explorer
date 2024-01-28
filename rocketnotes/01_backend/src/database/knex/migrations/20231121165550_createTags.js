exports.up = (knex) =>
  knex.schema.createTable("tags", (table) => {
    table.increments("id");
    table.text("name").notNullable();

    // onDelete("CASCADE") - Se eu deletar a nota que esta vinculada a tag, vai deletar tudo junto:
    table.integer("note_id").references("id").inTable("notes").onDelete("CASCADE");

    table.integer("user_id").references("id").inTable("users");
    
  });

exports.down = (knex) => knex.schema.dropTable("tags");
