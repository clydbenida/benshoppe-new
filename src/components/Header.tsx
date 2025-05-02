import { Link } from "react-router-dom";
import BaseContainer from "./BaseContainer";

export default function Header() {
  return (
    <BaseContainer>
      <header className="flex justify-between">
        <Link to="/">
          <h2>App Logo</h2>
        </Link>
        <form className="flex grow-1 justify-center">
          <input type="text" placeholder="Search for products" />
          <button type="submit">Search</button>
        </form>
        <div>
          <Link to="/sign-up">Sign up</Link>
          <Link to="/login">Login</Link>
        </div>
      </header>
    </BaseContainer>
  )
}
