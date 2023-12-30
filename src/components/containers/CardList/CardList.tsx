import { Beer, Filter } from "../../../types/types";
import BeerCard from "../../BeerCard/BeerCard";
import "./CardList.scss";

type CardListProps = {
  filters: Filter[];
  beers: Beer[];
  searchTerm: string;
};

const CardList = ({ filters, beers, searchTerm }: CardListProps) => {
  const checkedFilters = filters
    .filter((filter) => filter.isChecked == true)
    .map((filter) => filter.label);
  const filteredBeers = beers
    .filter((beer) => {
      return beer.name.toLowerCase().includes(searchTerm.toLowerCase());
    })
    .filter((beer) =>
      checkedFilters.includes("High ABV (> 6.0%)") ? beer.abv > 6 : beer
    )
    .filter((beer) =>
      checkedFilters.includes("Classis Range")
        ? Number(beer.first_brewed.slice(-4)) < 2010
        : beer
    )
    .filter((beer) =>
      checkedFilters.includes("Acidic (ph < 4)") ? beer.ph < 4 : beer
    );
  const sortedBeers = [...filteredBeers].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  const displayedBeers = sortedBeers.map((beer) => {
    return (
      <BeerCard
        key={beer.id}
        name={beer.name}
        tagline={beer.tagline}
        abv={beer.abv}
        image={beer.image_url}
      />
    );
  });

  return <div className="CardList">{displayedBeers}</div>;
};

export default CardList;
