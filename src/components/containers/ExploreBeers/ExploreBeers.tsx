import { FormEvent, useState } from "react";
import "./ExploreBeers.scss";
import { Beer } from "../../../types/types";
import SearchBox from "../../SearchBox/SearchBox";
import BeerCard from "../../BeerCard/BeerCard";

type ExploreBeersProps = {
    beers: Beer[];
};


const ExploreBeers = ({beers}: ExploreBeersProps) => {
    const [searchTerm, setSearchTerm] = useState<string>("");

    const handleInput = (event: FormEvent<HTMLInputElement>) => {
        setSearchTerm(event.currentTarget.value)
    };
    
    const filteredBeers = beers.filter(beer => {
        return beer.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const displayedBeers = filteredBeers.map((beer => {
        return <BeerCard name={beer.name} tagline={beer.tagline} image={beer.image_url}/>
    }))

    return (
        <div>
            <SearchBox label="Search by Name: " searchTerm={searchTerm} handleInput={handleInput}/>
            {displayedBeers}
        </div>
    )
};

export default ExploreBeers;