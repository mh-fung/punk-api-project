import { FormEventHandler } from "react";
import "./SearchBox.scss";

type SearchBoxProps = {
    label: string;
    searchTerm: string;
    handleInput: FormEventHandler<HTMLInputElement>;
}

const SearchBox = ({label, searchTerm, handleInput}: SearchBoxProps) => {
    return (
        <div>
            <label htmlFor={label}>{label}</label>
            <input className="input" type="text" value={searchTerm} onInput={handleInput}/>
        </div>
    )
};

export default SearchBox;