const wishlistReducer = (state,action) =>{
    console.log("called");
    switch (action.type) {
        case "ADD-TO-WISHLIST":
            console.log(action.payload);
            return {...state, wishlist : [...state.wishlist ,{...action.payload} ]}
            
    
        default:
           return state;
    }
}
export {wishlistReducer}