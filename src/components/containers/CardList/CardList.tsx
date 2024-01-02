import { FormEvent, useState } from "react";
import { Beer, Filter } from "../../../types/types";
import BeerCard from "../../BeerCard/BeerCard";
import "./CardList.scss";
import Pagination from "../../Pagination/Pagination";

type CardListProps = {
  filters: Filter[];
  beers: Beer[];
  searchTerm: string;
};

const CardList = ({ filters, beers, searchTerm }: CardListProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const cardsPerPage = 45;
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
      checkedFilters.includes("Classic Range")
        ? Number(beer.first_brewed.slice(-4)) < 2010
        : beer
    )
    .filter((beer) =>
      checkedFilters.includes("Acidic (ph < 4)") ? beer.ph < 4 : beer
    );
  const sortedBeers = [...filteredBeers].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const shownBeers = sortedBeers.slice(indexOfFirstCard, indexOfLastCard);

  const handleChangePage = (event: FormEvent) => {
    setCurrentPage(Number(event.currentTarget.textContent));
  };

  const displayedBeers = shownBeers.map((beer) => {
    return (
      <BeerCard
        key={beer.id}
        name={beer.name}
        tagline={beer.tagline}
        abv={beer.abv}
        image={beer.image_url}
        firstBrewed={beer.first_brewed}
        ph={beer.ph}
        description={beer.description}
      />
    );
  });

  if (filteredBeers.length == 0) {
    return (
      <div className="CardList--blank">
        {" "}
        Can't find what you'd like to drink? No worries! There will be one in
        the future!{" "}
      </div>
    );
  } else {
    return (
      <div className="CardList">
        {displayedBeers}
        {checkedFilters.length == 0 && searchTerm == "" && (
          <Pagination
            cardsPerPage={cardsPerPage}
            totalCards={beers.length}
            currentPage={currentPage}
            handlChangePage={handleChangePage}
          />
        )}
      </div>
    );
  }
};

export default CardList;
