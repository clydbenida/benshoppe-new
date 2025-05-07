import { Link } from "react-router-dom";
import AuthButtons from "./components/AuthButtons";

export default function UserNavSection() {
  return (
    <section className="flex justify-between">
      <div>
        <Link to="/seller" className="text-xs">Seller Center</Link>
      </div>
      <AuthButtons />
    </section>
  )
}
