import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";

import {SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM} from '../Types';

const CartState = ({children}) => {


    return <CartContext.Provider value={{}}></CartContext.Provider>;
};

export default CartState;