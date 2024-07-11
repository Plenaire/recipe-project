import React from "react";

// Additional component for rendering a single recipe row
const RecipeRow = ({ recipe, onDeleteRecipe }) => {
  return (
      <tr>
        <td>{recipe.name}</td>
        <td>{recipe.cuisine}</td>
        <td>
          <img src={recipe.photo} alt={recipe.name} />
        </td>
        <td className="content_td">
          <p>{recipe.ingredients}</p>
        </td>
        <td className="content_td">
          <p>{recipe.preparation}</p>
        </td>
        <td>{recipe.difficulty}</td>
        <td>
          <button name="delete" onClick={() => onDeleteRecipe(recipe.id)}>
            Delete
          </button>
        </td>
      </tr>
  );
};

function RecipeList({ recipes, onDeleteRecipe }) {
  return (
      <div className="recipe-list-container">
          <div className="recipe-list">
            <table>
              <thead>
              <tr>
                <th>Name</th>
                <th>Cuisine</th>
                <th>Photo</th>
                <th>Ingredients</th>
                <th>Preparation</th>
                <th>Difficulty</th>
                <th>Actions</th>
              </tr>
              </thead>
              <tbody>
              {recipes.map((recipe) => (
                  <RecipeRow
                      key={recipe.id}
                      recipe={recipe}
                      onDeleteRecipe={onDeleteRecipe}
                  />
              ))}
              </tbody>
            </table>
          </div>
      </div>
  );
}

export default RecipeList;