import "./sidebar.css";
const SideBar = ({ appliedFilters, setAppliedFilters }) => {
  return (
    <div class="product-side-bar">
      <div class="filter-btn">
        <p class="bar-heading">Filters</p>
        <button class="bar-heading clear-btn">Clear</button>
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
          <input type="checkbox" name="religious" />
          Nagpur
        </div>
        <div>
          <input type="checkbox" name="serve" />
          Mumbai
        </div>

        <div>
          <input type="checkbox" name="weaving" />
          Pune
        </div>
      </div>

      <div class="side-bar-category">
        <p class="bar-heading">Categories</p>
        <div>
          <input type="checkbox" name="Flats" />
          Flats
        </div>
        <div>
          <input type="checkbox" name="Bunglow" />
          Bunglow
        </div>

        <div>
          <input
            type="checkbox"
            name="Yurt"
          />
          Yurt
        </div>

        <div>
          <input type="checkbox" name="Bunglow" />
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
