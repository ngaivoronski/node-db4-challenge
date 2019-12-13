const db = require("../data/db-config");

module.exports = {
    getIngredients,
    getIngredientsById,
    getRecipesWithIngredient,
}

function getIngredients() {
    return db('ingredients');
}

function getIngredientsById(id) {
    return db('ingredients').where({id}).first();
}

function getRecipesWithIngredient(id) {
    return db('ingredients')
    .select("recipes.name")
    .join("ingredients_to_steps","ingredients.id", "=", "ingredients_to_steps.ingredient_id")
    .join("steps", "ingredients_to_steps.step_id", "=", "steps.id")
    .join("recipes", "steps.recipe_id", "=", "recipes.id")
    .where("ingredients.id", "=", id)
    .orderBy("ingredients.name")
}