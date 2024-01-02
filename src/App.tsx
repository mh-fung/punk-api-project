import "./App.scss";
import Content from "./components/containers/Content/Content";
import Nav from "./components/containers/Nav/Nav";
import { Beer, Filter } from "./types/types";
import { useEffect, useState, FormEvent } from "react";

function App() {
  const [beers, setBeers] = useState<Beer[]>();
  const [searchTerm, setSearchTerm] = useState<string>("");

  const [filters, setFilters] = useState<Filter[]>([
    { label: "High ABV (> 6.0%)", isChecked: false },
    { label: "Classis Range", isChecked: false },
    { label: "Acidic (ph < 4)", isChecked: false },
  ]);

  const endpoints = [
    "https://api.punkapi.com/v2/beers?page=1&per_page=80",
    "https://api.punkapi.com/v2/beers?page=2&per_page=80",
    "https://api.punkapi.com/v2/beers?page=3&per_page=80",
    "https://api.punkapi.com/v2/beers?page=4&per_page=80",
    "https://api.punkapi.com/v2/beers?page=5&per_page=80",
  ];
  const getBeers = async () => {
    const dataAll = endpoints.map(async (endpoints) => {
      const response = await fetch(endpoints);
      const data: Beer[] = await response.json();
      return data;
    });
    const result = await Promise.all(dataAll);
    setBeers(result.flat());
  };

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    setSearchTerm(event.currentTarget.value);
  };

  const handleChecked = (event: FormEvent<HTMLInputElement>) => {
    const updatedFilters = filters.map((filter) => {
      if (event.currentTarget.value === filter.label) {
        return { label: filter.label, isChecked: event.currentTarget.checked };
      } else {
        return { label: filter.label, isChecked: filter.isChecked };
      }
    });
    setFilters(updatedFilters);
  };

  useEffect(() => {
    getBeers();
  }, []);
  return (
    <div className="app">
      <header className="header">PUNK-API</header>
      <Nav
        filters={filters}
        handleInput={handleInput}
        handleChecked={handleChecked}
      />
      {beers && (
        <Content filters={filters} beers={beers} searchTerm={searchTerm} />
      )}
    </div>
  );
}

export default App;
