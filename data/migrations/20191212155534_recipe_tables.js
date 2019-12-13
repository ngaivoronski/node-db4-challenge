
exports.up = function(knex) {
    return knex.schema.createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('name', 255)
            .notNullable()
            .unique();
    })
    .createTable('steps', tbl => {
        tbl.increments();
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onDelete("CASCADE") // cascade, restrict, do nothing, set null
            .onUpdate("CASCADE");
        tbl.integer('step_number', 255)
            .notNullable();
        tbl.string('instructions', 255)
            .notNullable();
    })
    .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.string('name', 255)
            .notNullable()
            .unique();
    })
    .createTable('ingredients_to_steps', tbl => {
        tbl.primary(['ingredient_id', 'step_id'])
        tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients')
            .onDelete("CASCADE") // cascade, restrict, do nothing, set null
            .onUpdate("CASCADE")
        tbl.integer('step_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('steps')
            .onDelete("CASCADE") // cascade, restrict, do nothing, set null
            .onUpdate("CASCADE");
        tbl.float('quantity', 255)
            .notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('ingredients_to_steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes');
};
