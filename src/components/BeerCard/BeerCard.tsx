import "./BeerCard.scss";
type BeerCardProps = {
    id: number;
    name: string;
    tagline: string;
    abv: number;
    image: string;
}

const BeerCard = ({id, name, tagline, abv, image}: BeerCardProps) => {
    
    return (
        <div key={id} className="beerCardsContainer">
            <div className="beerCard">
                <p className="beerCard__name">Name: {name}</p>
                <p>{tagline}</p>
                <p>{abv}</p>
                <img className="beerCard__image" src={image} alt={name} />
            </div>
        </div>
    )
};

export default BeerCard;