
exports.seed = function(knex) {
  // we want to remove all data before seeding
  // truncate will reset the primary key each time
  return knex('recipes').truncate()
    .then(function () {
      // add data into insert
      return knex('recipes').insert([
        { name: 'steam fried pork'},
        { name: 'ground beef'},
        { name: 'bacon omelette'}
      ]);
    });
};