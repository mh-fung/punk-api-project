import { FormEventHandler} from "react";
import { Filter } from "../../types/types";
import "./FilterItem.scss";

type FilterItemProps = {
    filter: Filter
    handleChecked: FormEventHandler<HTMLInputElement>;
};

const FilterItem = ({filter, handleChecked}: FilterItemProps) => {

    return (
        <div className="filterItem">
            <label className="filterItem__label">{filter.label} </label>
            <input className="filterItem__checkbox" type="checkbox" value={filter.label} onClick={handleChecked}/>
        </div>
    )
};

export default FilterItem;