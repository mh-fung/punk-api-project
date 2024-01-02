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
    { label: "Classic Range", isChecked: false },
    { label: "Acidic (ph < 4)", isChecked: false },
  ]);

  const pages = [1, 2, 3, 4, 5];

  const getBeers = async () => {
    const dataAll = pages.map(async (page) => {
      const response = await fetch(
        `https://api.punkapi.com/v2/beers?page=${page}&per_page=80`
      );
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
