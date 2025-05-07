import { useMemo } from "react";
import useJWT from "../../../../../hooks/useJWT"
import { Link } from "react-router-dom";
import UserDropdown from "./UserDropdown";
import { Skeleton } from "@/components/ui/skeleton";

export default function AuthButtons() {
  const {userToken, loading} = useJWT();
  const isUserAuthenticated = useMemo(() => Boolean(userToken), [userToken]);

  if (loading) {
    return ( 
      <div className="pt-2 opacity-25">
        <Skeleton className="w-[80px] h-[15px]" />
      </div>
    )
  }

  if (isUserAuthenticated) {
    return (
      <div>
        <UserDropdown />
      </div>
    )
  }

  return (
    <div>
      <Link to="/sign-up" className="text-xs">Sign up</Link>
      <span className="text-orange-200 mx-2">|</span>
      <Link to="/login" className="text-xs">Login</Link>
    </div>
  )
}
