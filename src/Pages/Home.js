import { StateCard } from "../Components/StateCard";
import { data } from "../db/data";
import "../styles.css";
import { useNavigate } from "react-router-dom";
import { SideBar } from "../Components/SideBar";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="parent-container">
      <h1>Home</h1>
      <button onClick={() => navigate("/wishlist")}>Wishlist</button>
      <div className="main-container">
        <div>
          <SideBar />
        </div>

        <div className="cards-container">
          {data.map((cardData) => {
            return (
              <div>
                <StateCard key={cardData?.id} cards={cardData} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { Home };
