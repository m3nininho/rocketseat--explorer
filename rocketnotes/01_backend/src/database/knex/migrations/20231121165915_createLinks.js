exports.up = (knex) =>
  knex.schema.createTable("links", (table) => {
    table.increments("id");
    table.text("url").notNullable();

    // onDelete("CASCADE") - Se eu deletar a nota que esta vinculada a tag, vai deletar tudo junto:
    table.integer("note_id").references("id").inTable("notes").onDelete("CASCADE");
    table.timestamp("created_at").default(knex.fn.now());

  });

exports.down = (knex) => knex.schema.dropTable("links");
