const db = require("../data/db-config");

module.exports = {
    getRecipes,
    getRecipeById,
    getInstructions,
    getShoppingList,
}

function getRecipes() {
    return db('recipes');
}

function getRecipeById(id) {
    return db('recipes').where({id}).first();
}

function getInstructions(id) {
    return db("steps")
    .select("steps.id", "recipes.name", "steps.step_number", "steps.instructions")
    .join("recipes", "steps.recipe_id", "=", "recipes.id")
    .where("recipes.id", "=", id)
    .orderBy("steps.step_number");
}

function getShoppingList(id) {
    return db('ingredients')
    .select("ingredients.name as ingredient name").sum("ingredients_to_steps.quantity as quantity")
    .join("ingredients_to_steps","ingredients.id", "=", "ingredients_to_steps.ingredient_id")
    .join("steps", "ingredients_to_steps.step_id", "=", "steps.id")
    .where("steps.recipe_id", "=", id)
    .orderBy("ingredients.name")
    .groupBy("ingredients.name");
}
