import React, { useState } from 'react'
import ClaudeRecipe from './ClaudeRecipe.jsx'
import IngredientsList from './IngredientsList.jsx'
import {getRecipeFromChefClaude} from './ai.js'

export default function Main() {
    const [ingredients, setIngredients] = useState([])
    const [recipe,setRecipe]=useState("")

    const recipeSection=React.useRef(null)
    React.useEffect(()=>{
        if (recipe !=="" && recipeSection.current!==null){
            recipeSection.current.scrollIntoView({behavior:"smooth"})
        }
    },[recipe])

    async function getRecipe() {
        const result=await getRecipeFromChefClaude(ingredients)
        setRecipe(result)
    }
    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => ([...prevIngredients, newIngredient]))
    }


    
    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {ingredients.length > 0 && <IngredientsList 
            ref={recipeSection} 
            ingredients={ingredients} 
            getRecipe={getRecipe}/>}
            {recipe && <section>
                
                <ClaudeRecipe recipe={recipe}/>
            </section>}
        </main>
    )
}