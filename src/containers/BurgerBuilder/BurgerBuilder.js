import React, { Component } from 'react';
import Aux from '../../hoc/Auxillary';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/BuildControls/BuildControls'

class BurgerBuilder extends Component {
    render() {
        return (
            <Aux>
                <Burger />
                <BuildControls />
            </Aux>
        )
    }
}

export default BurgerBuilder;