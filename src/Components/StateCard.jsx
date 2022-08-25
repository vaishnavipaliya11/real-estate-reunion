import "../Components/StateCard.css"
import { useWishlist } from "../context/WishlistContext"
const StateCard = (cardData) => {
    const { img, type, price, rating } = cardData.cards

    const { wishlistState, wishlistDispatch } = useWishlist()
    const { wishlist } = wishlistState
    console.log(wishlist);
    const wishlistHandler = () => {
        console.log("called");
        if (wishlist.find((item) => item._id === cardData.cards._id)) {
            console.log("wishlist", wishlist._id, "card data", cardData.cards._id);
            wishlistDispatch({ type: "REMOVE-FROM-WISHLIST", payload: cardData.cards })
        } else {
            wishlistDispatch({ type: "ADD-TO-WISHLIST", payload: cardData.cards })
        }
    }
    return (
        <div className="product-card">
            <div
                className="badge"
            // onClick={() => wishlistDispatch({
            //     type:"ADD-TO-WISHLIST",
            //     payload:cardData.cards
            // })}
            // onClick={() => wishlistHandler()}
            >
                {/* wishlist */}

                {wishlist.find((item) => item._id === cardData.cards._id) ? (
                    <button
                        className="clear-btn"
                        onClick={() => wishlistHandler()}
                    >
                        wishlisted
                    </button>
                ) : (
                    <button
                        className="clear-btn"
                        onClick={() => wishlistHandler()}
                    >
                        wishlist
                    </button>
                )}
            </div>

            <div className="product-tumb">
                <img src={img} alt="houses" />
            </div>
            <div className="product-details">
                <span className="product-catagory">
                    {" "}
                    <p>catagory - {type}</p>
                </span>

                <p>room</p>
                <div className="product-bottom-details">
                    <div className="product-price">
                        <small>₹ {price}</small>
                    </div>
                    <div>
                        <small> {rating} ⭐</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { StateCard }