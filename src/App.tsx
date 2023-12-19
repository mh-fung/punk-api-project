import './App.scss'
import BeerCard from './components/BeerCard/BeerCard'
import beers from './data/beers'
function App() {

  return (
    <>
    <BeerCard beers={beers}/>
    </>
  )
}

export default App
