exports.seed = function(knex) {
  // we want to remove all data before seeding
  // truncate will reset the primary key each time
  return knex('ingredients_to_steps').truncate()
    .then(function () {
      // add data into insert
      return knex('ingredients_to_steps').insert([
        { step_id: 1, ingredient_id: 2, quantity: 1 },
        { step_id: 1, ingredient_id: 3, quantity: 1 },
        { step_id: 2, ingredient_id: 1, quantity: 4 },
        { step_id: 3, ingredient_id: 4, quantity: 5 },
        { step_id: 6, ingredient_id: 2, quantity: 4 },
        { step_id: 7, ingredient_id: 5, quantity: 5 },
        { step_id: 8, ingredient_id: 4, quantity: 5 },
        { step_id: 10, ingredient_id: 4, quantity: 5 },
        { step_id: 11, ingredient_id: 6, quantity: 12 },
        { step_id: 12, ingredient_id: 7, quantity: 20 },
      ]);
    });
};
