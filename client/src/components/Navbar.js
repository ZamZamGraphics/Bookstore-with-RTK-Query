import { Link } from "react-router-dom";
import Logo from "../images/logo.svg";
import SearchForm from "./SearchForm";

export default function Navbar() {
  return (
    <nav className="py-4 2xl:px-6">
      <div className="container flex items-center justify-between">
        <Link to="/">
          <img src={Logo} width="150px" alt="Logo" className="object-contain" />
        </Link>

        <ul className="hidden md:flex items-center space-x-6">
          <Link
            className="font-semibold cursor-pointer"
            to="/"
            id="lws-bookStore"
          >
            <li>Book Store</li>
          </Link>
          <Link className="cursor-pointer" to="/books/add" id="lws-addBook">
            <li>Add Book</li>
          </Link>
        </ul>

        <SearchForm />
      </div>
    </nav>
  );
}
