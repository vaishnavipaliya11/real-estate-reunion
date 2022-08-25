import "../Components/StateCard.css";
import { useWishlist } from "../context/WishlistContext";
const StateCard = (cardData) => {
  const { img, room, price, rating,location,type } = cardData.cards;
//   console.log("card data",cardData.cards);

  const { wishlistState, wishlistDispatch } = useWishlist();
  const { wishlist } = wishlistState;
  console.log("wishlist",wishlist);
  const wishlistHandler = () => {
    console.log("called");
    if (wishlist.find((item) => item.id === cardData.cards.id)) {
      console.log("wishlist", wishlist._id, "card data", cardData.cards);
      wishlistDispatch({
        type: "REMOVE-FROM-WISHLIST",
        payload: cardData.cards,
      });
    } else {
      wishlistDispatch({ type: "ADD-TO-WISHLIST", payload: cardData.cards });
    }
  };
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

        {wishlist.find((item) => item.id === cardData.cards.id) ? (
          <button className="clear-btn" onClick={() => wishlistHandler()}>
            wishlisted
          </button>
        ) : (
          <button className="clear-btn" onClick={() => wishlistHandler()}>
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

        <small> {rating} ⭐</small>
        <div className="product-bottom-details">
          <div className="product-price">
            <small>₹ {price}</small>
          </div>
          <div>
          <p>{location}</p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export { StateCard };
