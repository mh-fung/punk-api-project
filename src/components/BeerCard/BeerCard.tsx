import "./BeerCard.scss";
import { Beer
 } from "../../types/types";
type BeerCardProps = {
    beers: Beer[];
}


const BeerCard = ({beers}: BeerCardProps) => {
    
    return (
        <div className="beerCardsContainer">{beers.map((beer) => (
            <div className="beerCard">
                <p className="beerCard__name">Name: {beer.name}</p>
                <img className="beerCard__image" src={beer.image_url} alt={beer.name} />
            </div>
        ))}</div>
    )
};

export default BeerCard;