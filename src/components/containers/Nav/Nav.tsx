import { FormEvent } from "react"
import SearchBox from "../../SearchBox/SearchBox"
import FiltersList from "../FiltersList/FiltersList";
import "./Nav.scss"
import { Filter } from "../../../types/types";

type NavProps = {
    filters: Filter[];
    handleInput: (event: FormEvent<HTMLInputElement>) => void;
    handleChecked: (event: FormEvent<HTMLInputElement>) => void;
};

const Nav = ({filters, handleInput, handleChecked}:NavProps) => {
    return (
        <div className="Nav">
            <SearchBox label="Search by Name: " handleInput={handleInput}/>
            <FiltersList filters={filters} handleChecked={handleChecked}/>
        </div>
    )
}

export default Nav;