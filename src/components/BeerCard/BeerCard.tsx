import "./BeerCard.scss";
type BeerCardProps = {
    name: string;
    tagline: string;
    image: string;
}

const BeerCard = ({name, tagline, image}: BeerCardProps) => {
    
    return (
        <div className="beerCardsContainer">
            <div className="beerCard">
                <p className="beerCard__name">Name: {name}</p>
                <p>{tagline}</p>
                <img className="beerCard__image" src={image} alt={name} />
            </div>
        </div>
    )
};

export default BeerCard;