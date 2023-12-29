import { FormEventHandler} from "react";
import { Filter } from "../../types/types";
import "./FilterItem.scss";

type FilterItemProps = {
    filter: Filter
    handleChecked: FormEventHandler<HTMLInputElement>;
};

const FilterItem = ({filter, handleChecked}: FilterItemProps) => {

    return (
        <div>
            <label htmlFor="">{filter.label}</label>
            <input className="checkbox" type="checkbox" value={filter.label} onClick={handleChecked}/>
        </div>
    )
};

export default FilterItem;