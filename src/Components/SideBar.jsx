import "./sidebar.css";
const SideBar = () => {
  return (
    <div class="product-side-bar">
      <div class="filter-btn">
        <p class="bar-heading">Filters</p>
        <button class="bar-heading clear-btn">Clear</button>
      </div>

      <div class="price-range-bar">
        <input type="range" min="2000" max="5000" />

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
          <input type="checkbox" name="2BHK" />
          2BHK
        </div>
        <div>
          <input type="checkbox" name="3BHK" />
          3BHK
        </div>

        <div>
          <input type="checkbox" name=" 4BHK" />
          4BHK
        </div>
      </div>

      <div class="ratings">
        <p class="bar-heading">Ratings</p>
        <div>
          <input type="radio" name="p-ratings" id="best-ratings" /> 4 & above
        </div>
        <div>
          <input type="radio" name="p-ratings" id="better-ratings" /> 3 & above
        </div>
        <div>
          <input type="radio" name="p-ratings" id="good-ratings" /> 2 & above
        </div>
      </div>

      <div class="sort-by">
        <p class="bar-heading">Sort By</p>
        <div>
          <input type="radio" name="sort" />
          Price- low to high
        </div>
        <div>
          <input type="radio" name="sort" id="high-low" />
          Price- high to low
        </div>
      </div>
    </div>
  );
};
export { SideBar };
