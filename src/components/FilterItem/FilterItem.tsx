import { useState, FormEvent } from "react";
import { Filter } from "../../types/types";
import "./FilterItem.scss";

type FilterItemProps = {
    filter: Filter
    handleChecked: (event: FormEvent<HTMLInputElement>) => void;
};

const FilterItem = ({filter, handleChecked}: FilterItemProps) => {
    const [isChecked, setIsChecked] = useState(false);

    const onClick = () => {
        handleChecked
        setIsChecked(!isChecked)
    }

    return (
        <div>
            <label htmlFor="">{filter.label}</label>
            <input className="checkbox" type="checkbox" onClick={onClick}/>
        </div>
    )
};

export default FilterItem;