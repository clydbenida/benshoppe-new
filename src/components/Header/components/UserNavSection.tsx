import { Link } from "react-router-dom";

export default function UserNavSection() {
  return (
    <section className="flex justify-between">
      <div>
        <Link to="/seller" className="text-xs">Seller Center</Link>
      </div>
      <div>
        <Link to="/sign-up" className="text-xs">Sign up</Link>
        <span className="text-gray-400 mx-2">|</span>
        <Link to="/login" className="text-xs">Login</Link>
      </div>
    </section>
  )
}
