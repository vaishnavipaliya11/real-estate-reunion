const wishlistReducer = (state, action) => {
    console.log("called");
    switch (action.type) {
        case "ADD-TO-WISHLIST":
            console.log("add", action.payload);
            return { ...state, wishlist: [...state.wishlist, { ...action.payload }] }

        case "REMOVE-FROM-WISHLIST":
            console.log("remove", action.payload);
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