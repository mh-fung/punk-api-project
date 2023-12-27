import { Beer } from "../../../types/types";
import BeerCard from "../../BeerCard/BeerCard";
import "./CardList.scss";

type CardListProps = {
    beers: Beer[];
    searchTerm: string;
}

const CardList = ({beers, searchTerm}: CardListProps) => {
    
    const filteredBeers = beers.filter(beer => {
        return beer.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    const displayedBeers = filteredBeers.map((beer => {
        return <BeerCard name={beer.name} tagline={beer.tagline} image={beer.image_url}/>
    }))

    return (
        <div className="CardList">
            {displayedBeers}
        </div>
    )
}

export default CardList;