
exports.up = function(knex) {
    return knex.schema.createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('name', 255)
            .notNullable()
            .unique();
    })
    .createTable('instructions', tbl => {
        tbl.increments();

        tbl.integer('step', 255)
            .notNullable()
            .unique();

        tbl.string('todo', 255)
            .notNullable();
        
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onDelete("CASCADE") // cascade, restrict, do nothing, set null
            .onUpdate("CASCADE");
    })
    .createTable('ingredients', tbl => {
        tbl.increments();

        tbl.string('name', 255)
            .notNullable()
            .unique();

        tbl.float('quantity', 255)
            .notNullable();
    })
    .createTable('recipes_to_ingredients', tbl => {
        tbl.primary(['recipe_id', 'ingredient_id'])
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onDelete("CASCADE") // cascade, restrict, do nothing, set null
            .onUpdate("CASCADE");
        tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients')
            .onDelete("CASCADE") // cascade, restrict, do nothing, set null
            .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('recipes_to_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('instructions')
    .dropTableIfExists('recipes');
};
