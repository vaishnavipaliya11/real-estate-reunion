import { StateCard } from "../Components/StateCard"
import { data } from "../db/data"
import "../styles.css"
const Home = () => {

    return (
        <div className="cards-container">
            <h1>Home Page</h1>
            {data.map((cardData) => {
                return (
                    <div>
                        <StateCard key={cardData?.id} cards={cardData} />
                    </div>
                )
            })}
        </div>
    )

}

export { Home }