import { Link } from "react-router-dom";
import useJWT from "../../../../hooks/useJWT";

export default function UserNavSection() {
  const {userToken} = useJWT();
  return (
    <section className="flex justify-between">
      <div>
        <Link to="/seller" className="text-xs">Seller Center</Link>
      </div>
      {userToken ? (
        <div>
          <Link to="/sign-up" className="text-xs">User</Link>
        </div>
      ) : (
        <div>
          <Link to="/sign-up" className="text-xs">Sign up</Link>
          <span className="text-orange-200 mx-2">|</span>
          <Link to="/login" className="text-xs">Login</Link>
        </div>
      )}
    </section>
  )
}
