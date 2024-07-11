// App.js
import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
    const [recipes, setRecipes] = useState(RecipeData);

    const createRecipe = (newRecipe) => {
        setRecipes([...recipes, newRecipe]);
    };

    const deleteRecipe = (recipeId) => {
        setRecipes(recipes.filter((recipe) => recipe.id !== recipeId));
    };

    return (
        <div className="App">
            <header>
                <h1>Delicious Food Recipes</h1>
            </header>
            <RecipeList recipes={recipes} onDeleteRecipe={deleteRecipe} />
            <RecipeCreate onCreatePost={createRecipe} />
        </div>
    );
}

export default App;