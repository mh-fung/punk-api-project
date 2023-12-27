import { FormEvent } from "react"
import SearchBox from "../../SearchBox/SearchBox"
import "./Nav.scss"

type NavProps = {
    handleInput: (event: FormEvent<HTMLInputElement>) => void;
};

const Nav = ({handleInput}:NavProps) => {
    return (
        <div>
            <SearchBox label="Search by Name: " handleInput={handleInput}/>
        </div>
    )
}

export default Nav;