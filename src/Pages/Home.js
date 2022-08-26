import { StateCard } from "../Components/StateCard";
import { data } from "../db/data";
import "../styles.css";
import { SideBar } from "../Components/SideBar";
import { useState } from "react";
import { filteredProducts } from "../utils/filteredProducts";
import { Topnav } from "../Components/Topnav";
const Home = () => {
  const [appliedFilters, setAppliedFilters] = useState({
    maxPrice: 20000,
    sortBy: "",
    categories: [],
    rating: "",
    search: "",
  });
  const finalProducts = filteredProducts(data, appliedFilters);
  return (
    <div className="parent-container">
      <Topnav
        appliedFilters={appliedFilters}
        setAppliedFilters={setAppliedFilters}
      />
      <div className="main-container">
        <div>
          <SideBar
            appliedFilters={appliedFilters}
            setAppliedFilters={setAppliedFilters}
          />
        </div>

        <div className="cards-container">
          {finalProducts?.map((cardData) => {
            return (
              <div>
                <StateCard key={cardData?.id} cards={cardData} />
              </div>
            );
          })}
          {!appliedFilters.maxPrice.length && (
            <p className="text-center">No products found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export { Home };
