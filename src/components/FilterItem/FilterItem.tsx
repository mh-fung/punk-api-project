import { FormEventHandler } from "react";
import { Filter } from "../../types/types";
import "./FilterItem.scss";

type FilterItemProps = {
  filter: Filter;
  handleChecked: FormEventHandler<HTMLInputElement>;
};

const FilterItem = ({ filter, handleChecked }: FilterItemProps) => {
  return (
    <div className="filterItem">
      <label>{filter.label} </label>
      <input type="checkbox" value={filter.label} onClick={handleChecked} />
    </div>
  );
};

export default FilterItem;
