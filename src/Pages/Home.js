import { StateCard } from "../Components/StateCard";
import { data } from "../db/data";
import "../styles.css";
import { useNavigate } from "react-router-dom";
import { SideBar } from "../Components/SideBar";
import { useState } from "react";
import { filteredProducts } from "../utils/filteredProducts";
const Home = () => {
  const navigate = useNavigate();
  const [appliedFilters, setAppliedFilters] = useState({
    maxPrice: 20000,
    sortBy: "",
    categories: [],rating:""
  });
  const finalProducts =filteredProducts(data,appliedFilters);
  return (
    <div className="parent-container">
      <h1>Home</h1>
      <button onClick={() => navigate("/wishlist")}>Wishlist</button>
      <div className="main-container">
        <div>
          <SideBar appliedFilters={appliedFilters } setAppliedFilters= {setAppliedFilters}/>
        </div>

        <div className="cards-container">
          {finalProducts.map((cardData) => {
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
