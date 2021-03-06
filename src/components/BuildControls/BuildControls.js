import React from 'react'
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const buildControls = props => {
    const controls = [
        { label: 'Salad', type: 'salad' },
        { label: 'Meat', type: 'meat' },
        { label: 'Cheese', type: 'cheese' },
        { label: 'Bacon', type: 'bacon' }
    ]

    return (
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>{props.price.toFixed(2)}$</strong></p>
            {controls.map((ctrl) =>
                <BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    added={() => props.ingredientsAdded(ctrl.type)}
                    removed={() => props.ingredientsRemoved(ctrl.type)}
                    disabled={props.disabled[ctrl.type]} />)}
            <button 
                onClick={props.ordered}
                disabled={!props.purchasable}
                className={classes.OrderButton}>ORDER BUTTON</button>
        </div>
    )
}

export default buildControls