class InMemorySearch {
  constructor() {
    this.index = {};
  }

  // Add documents to the index
  addDocuments(category, ...documents) {
    if (!this.index[category]) {
      this.index[category] = [];
    }
    this.index[category] = this.index[category].concat(documents);
  }

  // Search for documents in a category based on a filter function and sorting options
  search(category, filterFunction, { key, asc } = { key: "name", asc: true }) {
    if (!this.index[category]) {
      return [];
    }

    const filteredDocuments = this.index[category].filter(filterFunction);

    if (filteredDocuments.length === 0) {
      return [];
    }

    const sortedDocuments = filteredDocuments.sort((a, b) => {
      const valueA = key === "rating" ? a[key] : a[key].toLowerCase();
      const valueB = key === "rating" ? b[key] : b[key].toLowerCase();

      if (asc) {
        return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
      } else {
        return valueB < valueA ? -1 : valueB > valueA ? 1 : 0;
      }
    });

    return sortedDocuments;
  }
}

// Example usage
const searchEngine = new InMemorySearch();
searchEngine.addDocuments(
  "Movies",
  { name: "Avenger", rating: 8.5, year: 2017 },
  { name: "Black Adam", rating: 8.7, year: 2022 },
  { name: "John Wick 4", rating: 8.2, year: 2023 },
  { name: "Black Panther", rating: 9.0, year: 2022 }
);

console.log(
  searchEngine.search("Movies", (e) => e.rating > 8.5, {
    key: "rating",
    asc: false,
  })
);
