
exports.seed = function(knex) {
  // we want to remove all data before seeding
  // truncate will reset the primary key each time
  return knex('steps').truncate()
    .then(function () {
      // add data into insert
      return knex('steps').insert([
        { recipe_id: 1, step_number: 1, instructions: "Cut up 1 onion and 1 carrot and place into pan."},
        { recipe_id: 1, step_number: 2, instructions: "Cut up 4 lbs of pork into bite sized pieces and place into pan."},
        { recipe_id: 1, step_number: 3, instructions: "Pour 5 tbs of olive oil over the meat and vegitables."},
        { recipe_id: 1, step_number: 4, instructions: "Close lid on pan and fry on high heat for 20 minutes."},
        { recipe_id: 1, step_number: 5, instructions: "Remove lid and gentry stir meat and vegitables until pork is done."},
        { recipe_id: 2, step_number: 1, instructions: "Cut up 4 onions and place into pan."},
        { recipe_id: 2, step_number: 2, instructions: "Place 5 lbs of ground beef into pan."},
        { recipe_id: 2, step_number: 3, instructions: "Pour 5 tbs of olive oil over the meat and vegitables."},
        { recipe_id: 2, step_number: 4, instructions: "Stir and fry on high temperature until ground beef is done."},
        { recipe_id: 3, step_number: 1, instructions: "Pour 5 tbs of olive oil on to the pan."},
        { recipe_id: 3, step_number: 2, instructions: "Crack 12 eggs into pan and stir until whites and yellows mix."},
        { recipe_id: 3, step_number: 3, instructions: "Place 20 slices of bacon into pan."},
        { recipe_id: 3, step_number: 4, instructions: "Stir and fry eggs and bacon for 10 minutes on medium temperature."}
      ]);
    });
};
