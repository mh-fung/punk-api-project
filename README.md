# Punk API project

The aim of this project is to build a website using React based on the PUNK API.

## Code Snippets

The first two code snippets are the exmaples to demonstrate the usage of React Hooks (useEffect and useState) to control the flow of data and to update the components.

This useEffect hook allows the data from the api to be rendered when the website is loaded and avoids the infinte loop.

```
  useEffect(() => {
    getBeers();
  }, []);
```

This useState hook allows each individual Beer Card to show more information when the button is clicked.

```
  const [showBack, setShowBack] = useState<boolean>(false);

  const handlClick = () => {
    setShowBack(!showBack);
  };
```

The following piece of code shows the core function of filtering the data based on the search term and the selected filters.

```
  const checkedFilters = filters
    .filter((filter) => filter.isChecked == true)
    .map((filter) => filter.label);
  const filteredBeers = beers
    .filter((beer) => {
      return beer.name.toLowerCase().includes(searchTerm.toLowerCase());
    })
    .filter((beer) =>
      checkedFilters.includes("High ABV (> 6.0%)") ? beer.abv > 6 : beer
    )
    .filter((beer) =>
      checkedFilters.includes("Classis Range")
        ? Number(beer.first_brewed.slice(-4)) < 2010
        : beer
    )
    .filter((beer) =>
      checkedFilters.includes("Acidic (ph < 4)") ? beer.ph < 4 : beer
    );
```
