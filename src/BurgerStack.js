import React, { useState } from 'react';

function BurgerStack(props) {

    const trackNewTask = (e) => {
        setNewIngredient(e.target.value)
    }
    
    return (
        <div>
            <label>Creat Burger: </label>
            <input type="text" name="burger" onChange={trackNewIngredient} />
            <button onClick={(e) => {
                props.onClick(e, newIngredient);
            }}>Add</button>
        </div>
    )
}

export default BurgerStack;