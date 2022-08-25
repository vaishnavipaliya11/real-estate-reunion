import { StateCard } from "../Components/StateCard"
import { data } from "../db/data"
import "../styles.css"
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Home</h1>
            <button onClick={() => navigate("/wishlist")}>Wishlist</button>
            <div className="cards-container">

                {data.map((cardData) => {
                    return (
                        <div>
                            <StateCard key={cardData?.id} cards={cardData} />
                        </div>
                    )
                })}
            </div>
        </div>

    )

}

export { Home }