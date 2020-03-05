import React, { useState } from 'react';

function IngredientList() {
    const [ingredients, setIngredients] = useState([
        {name: 'Kaiser Bun', color: 'saddlebrown'},
        {name: 'Sesame Bun', color: 'sandybrown'},
        {name: 'Gluten Free Bun', color: 'peru'},
        {name: 'Lettuce Wrap', color: 'olivedrab'},
        {name: 'Beef Patty', color: '#3F250B'},
        {name: 'Soy Patty', color: '#3F250B'},
        {name: 'Black Bean Patty', color: '#3F250B'},
        {name: 'Chicken Patty', color: 'burlywood'},
        {name: 'Lettuce', color: 'lawngreen'},
        {name: 'Tomato', color: 'tomato'},
        {name: 'Bacon', color: 'maroon'},
        {name: 'Onion', color: 'lightyellow'}
    ]);

    const addIngredient = (e, setIngredient) => {
        e.preventDefault();
        setIngredients([newIngredient, ...ingredients]);
    }

    return (
        <div>
            <Input onclick={addIngredient} />
            <Ingredients ingredients={ingredients[0]} />
            <Input onclick={addIngredient} />
            <Ingredients ingredients={ingredients[1]} />
            <Input onclick={addIngredient} />
            <Ingredients ingredients={ingredients[2]} />
            <Input onclick={addIngredient} />
            <Ingredients ingredients={ingredients[3]} />
            <Input onclick={addIngredient} />
            <Ingredients ingredients={ingredients[4]} />
            <Input onclick={addIngredient} />
            <Ingredients ingredients={ingredients[5]} />
            <Input onclick={addIngredient} />
            <Ingredients ingredients={ingredients[6]} />
            <Input onclick={addIngredient} />
            <Ingredients ingredients={ingredients[7]} />
            <Input onclick={addIngredient} />
            <Ingredients ingredients={ingredients[8]} />
            <Input onclick={addIngredient} />
            <Ingredients ingredients={ingredients[9]} />
            <Input onclick={addIngredient} />
            <Ingredients ingredients={ingredients[10]} />
            <Input onclick={addIngredient} />
            <Ingredients ingredients={ingredients[11]} />
            <Input onclick={addIngredient} />
            <Ingredients ingredients={ingredients[12]} />
        </div>
    )

}
export default IngredientList;


