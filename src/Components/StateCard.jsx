import "../Components/StateCard.css"
const StateCard = (cardData) => {
    const {img,type,price,rating} = cardData.cards
    return (
        <div className="product-card">
            <div
                className="badge"
            >
                 wishlist
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