import {ICartItem} from "../store/slices/cartSlice";

const getTotalCartItemsCount = (cartItems: ICartItem[]) => {
    if (cartItems.length === 0) return 0;
    return cartItems.reduce((accumulator, item)=> {
        return accumulator + (item.quantity ? item.quantity : 0);
    }, 0);
}

export default getTotalCartItemsCount