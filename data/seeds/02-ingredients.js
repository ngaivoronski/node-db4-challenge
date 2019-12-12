exports.seed = function(knex) {
  // we want to remove all data before seeding
  // truncate will reset the primary key each time
  return knex('ingredients').truncate()
    .then(function () {
      // add data into insert
      return knex('ingredients').insert([
        { name: 'pork (lbs)'},
        { name: 'onion(s)'},
        { name: 'carrot(s)'},
        { name: 'olive oil (oz)'},
        { name: 'ground beef (lbs)'},
        { name: 'bacon (slices)'},
        { name: 'egg(s)'}
      ]);
    });
};