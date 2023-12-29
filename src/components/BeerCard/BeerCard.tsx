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
        <div key={id} className="beerCardContainer">
            <div className="beerCard">
                <p className="beerCard__name">Name: {name}</p>
                <p className="beerCard__tagline">{tagline}</p>
                <p>ABV: {abv}</p>
                <img className="beerCard__image" src={image} alt={name} />
            </div>
        </div>
    )
};

export default BeerCard;