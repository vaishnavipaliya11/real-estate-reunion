const filteredProducts = (list, appliedFilters) => {
  console.log(appliedFilters);
  let tempList = [...list];

  if (appliedFilters.maxPrice) {
    tempList = tempList.filter(
      (product) => product.price <= appliedFilters.maxPrice
    );
  }

  if (appliedFilters.rating === 4) {
    tempList = [...tempList].filter(
      (item) => item.rating >= appliedFilters.rating
    );
  }

  if (appliedFilters.rating === 3) {
    tempList = [...tempList].filter(
      (item) => item.rating >= appliedFilters.rating
    );
  }
  if (appliedFilters.rating === 2) {
    tempList = [...tempList].filter(
      (item) => item.rating >= appliedFilters.rating
    );
  }

  if (appliedFilters.sorting === "LOW_TO_HIGH") {
    tempList = [...tempList].sort((a, b) => a.price - b.price);
  }

  if (appliedFilters.sorting === "HIGH_TO_LOW") {
    tempList = [...tempList].sort((a, b) => b.price - a.price);
  }

  if (appliedFilters.categories.length > 0) {
    tempList = tempList.filter((product) =>
      appliedFilters.categories.includes(product.type)
    );
  }

  if (appliedFilters.cities.length > 0) {
    tempList = tempList.filter((product) =>
      appliedFilters.cities.includes(product.location)
    );
  }

  if (appliedFilters.search) {
    tempList = tempList.filter((item) =>
      item.location.toLowerCase().includes(appliedFilters.search.toLowerCase())
    );
  }

  return tempList;
};

export { filteredProducts };
