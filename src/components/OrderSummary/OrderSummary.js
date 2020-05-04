import React from 'react'
import Aux from '../../hoc//Auxillary'
import Button from '../UI/Button/Button'

const orderSummary = props => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => (
            <li key={igKey}>
                <span style={{ textTransform: 'capitalize' }}>{igKey}:</span>
                {props.ingredients[igKey]}
            </li>)
        )

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>TOTAL PRICE: {props.price.toFixed(2)}$</strong></p>
            <p>Ready to Checkout?</p>
            <Button clicked={props.purchasedCanceled} btnType='Danger'>CANCEL</Button>
            <Button clicked={props.purchasedContinued} btnType='Success'>CONTINUE</Button>
        </Aux>
    )
}

export default orderSummary