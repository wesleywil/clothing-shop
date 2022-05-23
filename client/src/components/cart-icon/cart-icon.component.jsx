import React from 'react';
import {useDispatch, useSelector} from 'react-redux';


import { toggleCartHidden } from '../../redux/cart/cart.action';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './cart-icon.styles.scss';


const CartIcon = () => {
    const itemCount = useSelector(selectCartItemsCount);
    const dispatch = useDispatch();
    const toggleCartHiddenHandler = () => dispatch(toggleCartHidden());

    return(
        <div className='cart-icon' onClick={toggleCartHiddenHandler}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{itemCount}</span>
        </div>
    );
}



export default CartIcon;