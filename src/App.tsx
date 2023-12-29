import './App.scss';
import Content from './components/containers/Content/Content';
import Nav from './components/containers/Nav/Nav';
// import endpoints from './data/endpoints';
import { Beer, Filter } from './types/types';
import { useEffect, useState, FormEvent } from 'react';

function App() {
  const [beers, setBeers] = useState<Beer[]>();

  const [searchTerm, setSearchTerm] = useState<string>("");

  const [filters, setFilters] = useState<Filter[]>([
    {label: "High ABV (> 6.0%)", isChecked: false}, 
    {label: "Classis Range", isChecked: false}, 
    {label: "Acidic (ph < 4)", isChecked: false}
  ])
  const getBeers = async () => {
    const responsePage1 = await fetch("https://api.punkapi.com/v2/beers?page=1&per_page=80");
    const dataPage1: Beer[] = await responsePage1.json();
    const responsePage2 = await fetch("https://api.punkapi.com/v2/beers?page=2&per_page=80");
    const dataPage2: Beer[] = await responsePage2.json();
    const responsePage3 = await fetch("https://api.punkapi.com/v2/beers?page=3&per_page=80");
    const dataPage3: Beer[] = await responsePage3.json();
    const responsePage4 = await fetch("https://api.punkapi.com/v2/beers?page=4&per_page=80");
    const dataPage4: Beer[] = await responsePage4.json();
    const responsePage5 = await fetch("https://api.punkapi.com/v2/beers?page=5&per_page=80");
    const dataPage5: Beer[] = await responsePage5.json();
    const dataAll = dataPage1.concat(dataPage2, dataPage3, dataPage4, dataPage5)
    setBeers(dataAll)
  };

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
      setSearchTerm(event.currentTarget.value)
  };
  //   let dataAll: Beer[]
    
  //   endpoints.forEach(async (endpoint) => {
  //     const response = await fetch(endpoint);
  //     const data: Beer[] = await response.json();
  //     dataAll = dataAll.concat(data);
  //   });

  //   setBeers(dataAll)
  // };

  const handleChecked = (event: FormEvent<HTMLInputElement>) => {
    const updatedFilters = filters.map((filter => {
      if(event.currentTarget.value === filter.label) {
        return {label: filter.label, isChecked: event.currentTarget.checked}
      } else {
        return {label: filter.label, isChecked: filter.isChecked}
      }
    }));
    console.log(updatedFilters)
    setFilters(updatedFilters)
  }

  useEffect(() => {
    getBeers();
  }, []);
  return (
    <div>
      <Nav filters={filters} handleInput={handleInput} handleChecked={handleChecked} />
      {beers && <Content filters={filters} beers={beers} searchTerm={searchTerm}/>}
    </div>
  )
}

export default App;
