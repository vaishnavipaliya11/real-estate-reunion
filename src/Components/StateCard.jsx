import "../Components/StateCard.css"
const StateCard = () => {
    return (
        <div class="product-card">
            <div
                class="badge"
            >
                wishlist
            </div>

            <div class="product-tumb">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX02Q1x8nsxCMe9Qc9a7fMb6ZxEScmUNAtvw&usqp=CAU" alt="houses" />
            </div>
            <div class="product-details">
                <span class="product-catagory">
                    {" "}
                    <p>catagory - type</p>
                </span>

                <p>{room}</p>
                <div class="product-bottom-details">
                    <div class="product-price">
                        <small>₹ price</small>
                    </div>
                    <div>
                        <small> rating ⭐</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { StateCard }