import "./sidebar.css";
const SideBar = ({ appliedFilters, setAppliedFilters }) => {
  return (
    <div class="product-side-bar">
      <div class="filter-btn">
        <p class="bar-heading">Filters</p>
        <button
          class="bar-heading clear-btn"
          onClick={() =>
            setAppliedFilters({
              ...appliedFilters,
              maxPrice: 20000,
              sorting: "",
              categories: [],
              rating: "",
              search: "",
            })
          }
        >
          Clear
        </button>
      </div>

      <div class="price-range-bar">
        <input
          type="range"
          min="2000"
          max="20000"
          value={appliedFilters.maxPrice}
          onChange={(e) =>
            setAppliedFilters({ ...appliedFilters, maxPrice: e.target.value })
          }
        />
        {appliedFilters.maxPrice}
        <div>
          <p>price</p>
        </div>
      </div>

      <div class="side-bar-category">
        <p class="bar-heading">Locations</p>
        
        <div>
          <input type="checkbox" name="Nagpur"
           />
          Nagpur
        </div>
        <div>
          <input type="checkbox" name="Mumbai" />
          Mumbai
        </div>

        <div>
          <input type="checkbox" name="Pune" />
          Pune
        </div>
      </div>

      <div class="side-bar-category">
        <p class="bar-heading">Categories</p>
        <div>
          <input
            type="checkbox"
            name="Flats"
            checked={appliedFilters.categories.includes("flats")}
            onChange={() =>{
              appliedFilters.categories.includes("flats")?setAppliedFilters({
                ...appliedFilters,
                categories: appliedFilters.categories.filter(category=>category!=="flats"),
              }):setAppliedFilters({
                ...appliedFilters,
                categories: [...appliedFilters.categories, "flats"],
              })
            }
            }
          />
          Flats
        </div>
        <div>
          <input
            type="checkbox"
            name="Bunglow"
            checked={appliedFilters.categories.includes("bunglow")}
            onChange={() =>{
              appliedFilters.categories.includes("bunglow")?setAppliedFilters({
                ...appliedFilters,
                categories: appliedFilters.categories.filter(category=>category!=="bunglow"),
              }):setAppliedFilters({
                ...appliedFilters,
                categories: [...appliedFilters.categories, "bunglow"],
              })
            }
            }
          />
          Bunglow
        </div>

        <div>
          <input
            type="checkbox"
            name="Yurt"
            checked={appliedFilters.categories.includes("yurt")}
            onChange={() =>{
              appliedFilters.categories.includes("yurt")?setAppliedFilters({
                ...appliedFilters,
                categories: appliedFilters.categories.filter(category=>category!=="yurt"),
              }):setAppliedFilters({
                ...appliedFilters,
                categories: [...appliedFilters.categories, "yurt"],
              })
            }
            }
          />
          Yurt
        </div>

        <div>
          <input
            type="checkbox"
            name="Wooden"
            checked={appliedFilters.categories.includes("wooden")}
            onChange={() =>{
              appliedFilters.categories.includes("wooden")?setAppliedFilters({
                ...appliedFilters,
                categories: appliedFilters.categories.filter(category=>category!=="wooden"),
              }):setAppliedFilters({
                ...appliedFilters,
                categories: [...appliedFilters.categories, "wooden"],
              })
            }
            }
          />
          Wooden
        </div>
      </div>

      <div class="ratings">
        <p class="bar-heading">Ratings</p>
        <div>
          <input
            type="radio"
            name="p-ratings"
            id="best-ratings"
            checked={appliedFilters.rating === 4}
            onChange={(e) =>
              setAppliedFilters({ ...appliedFilters, rating: 4 })
            }
          />{" "}
          4 & above
        </div>
        <div>
          <input
            type="radio"
            name="p-ratings"
            id="better-ratings"
            checked={appliedFilters.rating === 3}
            onChange={(e) =>
              setAppliedFilters({ ...appliedFilters, rating: 3 })
            }
          />{" "}
          3 & above
        </div>
        <div>
          <input
            type="radio"
            name="p-ratings"
            id="good-ratings"
            checked={appliedFilters.rating === 2}
            onChange={(e) =>
              setAppliedFilters({ ...appliedFilters, rating: 2 })
            }
          />{" "}
          2 & above
        </div>
      </div>

      <div class="sort-by">
        <p class="bar-heading">Sort By</p>
        <div>
          <input
            type="radio"
            name="sort"
            id="low-to-high"
            checked={appliedFilters.sorting === "LOW_TO_HIGH"}
            onChange={() =>
              setAppliedFilters({ ...appliedFilters, sorting: "LOW_TO_HIGH" })
            }
          />
          Price- low to high
        </div>
        <div>
          <input
            type="radio"
            name="sort"
            id="high-low"
            checked={appliedFilters.sorting === "HIGH_TO_LOW"}
            onChange={() =>
              setAppliedFilters({ ...appliedFilters, sorting: "HIGH_TO_LOW" })
            }
          />
          Price- high to low
        </div>
      </div>
    </div>
  );
};
export { SideBar };
