import "./BeerCard.scss";
type BeerCardProps = {
  name: string;
  tagline: string;
  abv: number;
  image: string;
};

const BeerCard = ({ name, tagline, abv, image }: BeerCardProps) => {
  return (
    <div className="beerCardContainer">
      <div className="beerCard">
        <p className="beerCard__name">Name: {name}</p>
        <p>ABV: {abv}%</p>
        <img className="beerCard__image" src={image} alt={name} />
        <p className="beerCard__tagline">{tagline}</p>
      </div>
    </div>
  );
};

export default BeerCard;
