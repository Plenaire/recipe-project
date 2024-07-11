import React, { useState } from "react";

function RecipeCreate({ onCreatePost }) { // Add onCreatePost as a prop

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = { id: Date.now(), name, cuisine, photo, ingredients, preparation, difficulty }; // Create a newRecipe object with all the form data
    onCreatePost(newRecipe); // Call the onCreatePost function with the new recipe
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
    setDifficulty("");
  };

  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const handleNameChange = (event) => setName(event.target.value); // Set the name state
  const handleCuisineChange = (event) => setCuisine(event.target.value); // Set the cuisine state
  const handlePhotoChange = (event) => setPhoto(event.target.value); // Set the photo state
  const handleIngredientsChange = (event) => setIngredients(event.target.value); // Set the ingredients state
  const handlePreparationChange = (event) => setPreparation(event.target.value); // Set the preparation state
  const handleDifficultyChange = (event) => setDifficulty(event.target.value);

  return (
    <form name="create" onSubmit={handleSubmit}>
    <fieldset>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">
                Recipe Name:
                <br />
                <input
                    id="name"
                    type="text"
                    name="name"
                    onChange={handleNameChange}
                    value={name}
                    title="Enter the name of the recipe"
                />
              </label>
            </td>
            <td>
              <label htmlFor="cuisine">
                Cuisine:
                <br />
                <input
                    id="cuisine"
                    type="text"
                    name="cuisine"
                    onChange={handleCuisineChange}
                    value={cuisine}
                    title="Enter the cuisine of the recipe"
                />
              </label>
            </td>
            <td>
              <label htmlFor="photo">
                Photo URL:
                <input
                    id="photo"
                    type="text"
                    name="photo"
                    onChange={handlePhotoChange}
                    value={photo}
                    pattern="https?://.+"
                    title="Please enter a valid URL starting with http:// or https://"
                    required
                />
              </label>
            </td>
            <td>
              <label>Ingredients:
                <br />
                <textarea
                    id="ingredients"
                    name="ingredients"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    required={true}
                    rows={4}
                    className="no-resize"
                    title="Enter the ingredients of the recipe"
                /></label>
            </td>
            <td>
              <label>Preparation:
                <br />
                <textarea
                    id="preparation"
                    name="preparation"
                    value={preparation}
                    onChange={(e) => setPreparation(e.target.value)}
                    required={true}
                    rows={4}
                    className="no-resize"
                    title="Enter the preparation of the recipe"
                /></label>
            </td>
            <td>
              <label htmlFor="difficulty">
                Difficulty:
                <br />
                <select
                    id="difficulty"
                    name="difficulty"
                    onChange={handleDifficultyChange}
                    value={difficulty} // Set the value to the difficulty state
                    title="Select the difficulty of the recipe"
                >
                  <option value="⭐">1</option>
                  <option value="⭐⭐">2</option>
                  <option value="⭐⭐⭐">3</option>
                  <option value="⭐⭐⭐⭐">4</option>
                  <option value="⭐⭐⭐⭐⭐">5</option>
                </select>
              </label>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
      </fieldset>
    </form>
  );
}

export default RecipeCreate;
