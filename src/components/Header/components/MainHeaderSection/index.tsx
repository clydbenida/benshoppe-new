import { Link } from "react-router-dom";
import SearchBar from "./components/SearchBar";

export default function MainHeaderSection() {
  return (
    <section className="flex justify-between items-center">
      <Link to="/">
        <h2>App Logo</h2>
      </Link>
      <SearchBar />
      <div>
        <Link to="/cart">Cart</Link>
      </div>
    </section>
  )
}
