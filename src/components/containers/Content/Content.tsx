import "./Content.scss";
import { Beer, Filter } from "../../../types/types";
import CardList from "../CardList/CardList";

type ContentProps = {
    filters: Filter[];
    beers: Beer[];
    searchTerm: string;
}

const Content = ({filters, beers, searchTerm}: ContentProps) => {
    return (
        <div>
            <CardList filters={filters} beers={beers} searchTerm={searchTerm}/>
        </div>
    )
}

export default Content;