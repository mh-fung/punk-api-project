import { FormEvent } from "react";
import FilterItem from "../../FilterItem/FilterItem";
import "./FiltersList.scss";
import { Filter } from "../../../types/types";

type FiltersListProps = {
    filters: Filter[];
    handleChecked: (event: FormEvent<HTMLInputElement>) => void;
}

const FiltersList = ({filters, handleChecked}:FiltersListProps) => {
    const displayedFilters = filters.map((filter => {
        return <FilterItem filter={filter} handleChecked={handleChecked}/>
    }))
    return (
        <div>
            {displayedFilters}
        </div>
    )
};

export default FiltersList;