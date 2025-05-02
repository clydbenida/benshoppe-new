import { PropsWithChildren } from "react";

export default function BaseContainer({children}: PropsWithChildren) {
  return (
    <div className="sm:px-32 md:px-48 lg:px-64 px-2">
      {children}
    </div>
  )
}
