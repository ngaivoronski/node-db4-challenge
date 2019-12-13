const express = require('express');

const Recipes = require('./recipes-model');

const router = express.Router();

router.get('/', (req, res) => {
    Recipes.getRecipes()
    .then(recipes => {
        res.json(recipes);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get schemes' });
    });
});


router.get('/:id', (req, res) => {
    const { id } = req.params;
    let recipeData = {};

    Recipes.getRecipeById(id)
    .then(recipe => {
        if (recipe) {
            Recipes.getInstructions(id)
                .then(steps => {
                    if (steps.length) {
                        recipeData = {...recipe, instructions: steps}
                        res.json(recipeData);
                    } else {
                        res.json(recipe);
                    }
            })
        } else {
            res.status(404).json({ message: 'Could not find recipe with that id.' })
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get the recipe.' });
    });
});



router.get('/:id/instructions', (req, res) => {
    const { id } = req.params;

    Recipes.getInstructions(id)
    .then(steps => {
        if (steps.length) {
            res.json(steps);
        } else {
            res.status(404).json({ message: 'Could not find steps for given recipe.' })
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get steps.' });
    });
});

router.get('/:id/shoppingList', (req, res) => {
    const { id } = req.params;

    Recipes.getShoppingList(id)
    .then(ingredients => {
        if (ingredients.length) {
            res.json(ingredients);
        } else {
            res.status(404).json({ message: 'Could not find ingredients for given recipe.' })
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get ingredients.' });
    });
});




module.exports = router;