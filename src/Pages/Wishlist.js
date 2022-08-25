import { StateCard } from "../Components/StateCard"
import { useWishlist } from "../context/WishlistContext"
import {useNavigate} from "react-router-dom"

const Wishlist = () => {
    const { wishlistState, wishlistDispatch } = useWishlist()
    const { wishlist } = wishlistState
    const navigate = useNavigate()
    return (
        <div>
            <h1>wishlist</h1>
            {wishlist.length === 0 ? (
                <div>
                    <h3>no items</h3>
                    <button onClick={() => navigate("/")}>view items </button>
                </div>
            ) : (
                <div className="cards-container">
                    {wishlist.map((cardData) => {
                        return (
                            <div>
                                <StateCard key={cardData?.id} cards={cardData} />
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}
export { Wishlist }