export const addToCart = (item, quantity, size)=> (dispatch, getState)=> {
    const cartItem = {
        name: item.name,
        _id: item._id,
        imgUrl: item.imgUrl,
        size: size,
        quantity: quantity,
        price: item.price,
        amount: item.price[size]*quantity
    };
    
    dispatch({type: 'ADD_TO_CART', payload: cartItem});
    
    const cartItems = getState().cartReducer.cartItems;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

}

export const deleteFromCart = (item)=> (dispatch, getState)=> {
    dispatch({type: 'DELETE_FROM_CART', payload: item});
    const cartItems = getState().cartReducer.cartItems;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}