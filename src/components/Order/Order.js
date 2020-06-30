import React from 'react'

import classes from './Order.css'

const order = props => {
    const ingredients = []

    for (let ingredientName in props.ingredients) {
        ingredients.push({
            amount: props.ingredients[ingredientName],
            name: ingredientName
        })
    }

    const ingredientOutput = ingredients.map(ig => (
        <span
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                padding: '5px',
                border: '1px solid black'
            }}
            key={ig.name}>{ig.name} ({ig.amount})</span>
    ))

    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong>USD {props.price.toFixed(2)}</strong></p>
        </div>
    )
}

export default order