import { FormEventHandler } from "react";
import "./SearchBox.scss";

type SearchBoxProps = {
    label: string;
    handleInput: FormEventHandler<HTMLInputElement>;
}

const SearchBox = ({label, handleInput}: SearchBoxProps) => {
    return (
        <div className="searchBox">
            <label htmlFor={label}>{label}</label>
            <input className="input" type="text" onInput={handleInput}/>
        </div>
    )
};

export default SearchBox;