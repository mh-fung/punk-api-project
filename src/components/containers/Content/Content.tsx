import "./Content.scss";
import { Beer } from "../../../types/types";
import CardList from "../CardList/CardList";

type ContentProps = {
    beers: Beer[];
    searchTerm: string;
}

const Content = ({beers, searchTerm}: ContentProps) => {
    return (
        <div>
            <CardList beers={beers} searchTerm={searchTerm}/>
        </div>
    )
}

export default Content;