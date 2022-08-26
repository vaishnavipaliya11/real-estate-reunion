const filteredProducts = (list, appliedFilters) => {
  let tempList = [...list];

  if (appliedFilters.maxPrice) {
    tempList = tempList.filter(
      (product) => product.price <= appliedFilters.maxPrice
    );
  }

  if (appliedFilters.rating === 4) {
    return [...tempList].filter((item) => item.rating >= appliedFilters.rating);
  }

  if (appliedFilters.rating === 3) {
    return [...tempList].filter((item) => item.rating >= appliedFilters.rating);
  }
  if (appliedFilters.rating === 2) {
    return [...tempList].filter((item) => item.rating >= appliedFilters.rating);
  }

  if (appliedFilters.sorting === "LOW_TO_HIGH") {
    return [...tempList].sort((a, b) => a.price - b.price);
  }

  if (appliedFilters.sorting === "HIGH_TO_LOW") {
    return [...tempList].sort((a, b) => b.price - a.price);
  }

  return tempList;
};

export { filteredProducts };
