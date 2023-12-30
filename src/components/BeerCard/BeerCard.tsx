import { useState } from "react";
import "./BeerCard.scss";
type BeerCardProps = {
  name: string;
  tagline: string;
  abv: number;
  image: string;
  firstBrewed: string;
  ph: number;
  description: string;
};

const BeerCard = ({
  name,
  tagline,
  abv,
  image,
  firstBrewed,
  ph,
  description,
}: BeerCardProps) => {
  const [showBack, setShowBack] = useState<boolean>(false);

  const handlClick = () => {
    setShowBack(!showBack);
  };

  const frontContent = (
    <div className="cardFront">
      <p className="beerCard__information">Name: {name}</p>
      <p className="beerCard__information">ABV: {abv}%</p>
      <img className="cardFront__image" src={image} alt={name} />
      <p className="cardFront__tagline">{tagline}</p>
      <div onClick={handlClick}>
        <button>Click for more information</button>
      </div>
    </div>
  );

  const backContent = (
    <div className="cardBack">
      <p className="beerCard__information">Name: {name}</p>
      <p className="beerCard__information">ABV: {abv}%</p>
      <p>First Brewed: {firstBrewed}</p>
      <p>ph: {ph}</p>
      <p className="cardBack__description">{description}</p>
      <div onClick={handlClick}>
        <button>Back</button>
      </div>
    </div>
  );

  return (
    <div className="beerCardContainer">
      <div className="beerCard">{showBack ? backContent : frontContent}</div>
    </div>
  );
};

export default BeerCard;
