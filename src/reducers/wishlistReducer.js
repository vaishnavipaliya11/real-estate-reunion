const wishlistReducer = (state, action) => {
   
    switch (action.type) {
        case "ADD-TO-WISHLIST":
            
            return { ...state, wishlist: [...state.wishlist, { ...action.payload }] }

        case "REMOVE-FROM-WISHLIST":
            
            return {
                ...state, wishlist: [...state.wishlist.filter(item => {
                    return action.payload.id !== item.id
                })]
            }
        default:
            return state;
    }
}
export { wishlistReducer }