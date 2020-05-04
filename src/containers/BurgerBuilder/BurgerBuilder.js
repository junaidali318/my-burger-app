import React, { Component } from 'react';
import Aux from '../../hoc/Auxillary';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/OrderSummary/OrderSummary'

const INGREDIENTS_PRICES = {
    salad: 0.2,
    meat: 1.2,
    cheese: 0.3,
    bacon: 0.4
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            meat: 0,
            cheese: 0,
            bacon: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    updatePurchaseState = ingredients => {
        const sum = Object.keys(ingredients)
            .map(igKey => ingredients[igKey])
            .reduce((sum, el) => sum += el, 0)

        this.setState({ purchasable: sum > 0 })
    }

    addIngredientHandler = type => {
        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount + 1
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount

        const oldPrice = this.state.totalPrice
        const priceAddition = INGREDIENTS_PRICES[type]
        const updatedPrice = oldPrice + priceAddition

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: updatedPrice
        })

        this.updatePurchaseState(updatedIngredients)

    }

    removeIngredientHandler = type => {
        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount - 1
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount

        if (oldCount <= 0)
            return

        const oldPrice = this.state.totalPrice
        const priceDeduction = INGREDIENTS_PRICES[type]
        const updatedPrice = oldPrice - priceDeduction

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: updatedPrice
        })

        this.updatePurchaseState(updatedIngredients)

    }

    purchaseHandler = () => {
        this.setState({
            purchasing: true
        })
    }

    purchaseCancelHandler = () => {
        this.setState({
            purchasing: false
        })
    }

    purchaseContinueHandler = () => {
        alert('You Continue!')
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo)
            disabledInfo[key] = disabledInfo[key] <= 0

        return (
            <Aux>
                <Modal
                    show={this.state.purchasing}
                    modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                        price={this.state.totalPrice}
                        purchasedCanceled={this.purchaseCancelHandler}
                        purchasedContinued={this.purchaseContinueHandler}
                        ingredients={this.state.ingredients} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ordered={this.purchaseHandler}
                    purchasable={this.state.purchasable}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    ingredientsAdded={this.addIngredientHandler}
                    ingredientsRemoved={this.removeIngredientHandler} />
            </Aux>
        )
    }
}

export default BurgerBuilder;