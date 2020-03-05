import React, { useState } from 'react';

function BurgerPane(props) {
    return (
        <ul>
            {props.ingredients.map((ingredient, i) => {
                <li key={`ingredient-${i}`} >(ingredient</li>
            })}
        </ul>
    )
}

export default BurgerPane;