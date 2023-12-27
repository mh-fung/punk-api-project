import './App.scss';
import ExploreBeers from './components/containers/ExploreBeers/ExploreBeers';
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
    {beers && <ExploreBeers beers={beers}/>}
    </>
  )
}

export default App
