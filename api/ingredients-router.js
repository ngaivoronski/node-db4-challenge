const express = require('express');

const Ingredients = require('./ingredients-model');

const router = express.Router();

router.get('/', (req, res) => {
    Ingredients.getIngredients()
    .then(ingredients => {
        res.json(ingredients);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get ingredients.' });
    });
});


router.get('/:id', (req, res) => {
    const { id } = req.params;

    Ingredients.getIngredientsById(id)
    .then(ingredient => {
        if (ingredient) {
            res.json(ingredient);
        } else {
            res.status(404).json({ message: 'Could not find the ingredient with that id.' })
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get the ingredient.' });
    });
});

router.get('/:id/recipes', (req, res) => {
    const { id } = req.params;

    Ingredients.getRecipesWithIngredient(id)
    .then(recipes => {
        if (recipes) {
            res.json(recipes);
        } else {
            res.status(404).json({ message: 'Could not find recipes with that ingredient.' })
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get recipes.' });
    });
});




module.exports = router;