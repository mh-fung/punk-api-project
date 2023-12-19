import './App.scss';
import BeerCard from './components/BeerCard/BeerCard';
import { Beer } from './types/types';
import { useEffect, useState } from 'react';

function App() {
  const [beers, setBeers] = useState<Beer[]>();

  const getBeers = async () => {
    const response = await fetch("https://api.punkapi.com/v2/beers");
    const data: Beer[] = await response.json();
    setBeers(data)
  };

  useEffect(() => {
    getBeers();
  }, []);
  return (
    <>
    {beers && <BeerCard beers={beers}/>}
    </>
  )
}

export default App
