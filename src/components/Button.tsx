import { useMemo } from "react"

export default function Button({children, ...props}: ButtonProps) {
  const colorProperties = useMemo(() => {
    if (props.variant === "secondary") {
      return "text-orange-400 bg-orange-100 border border-orange-400"
    }

    return "bg-orange-400 text-white"

  }, [props.variant]); 
  return (
    <button className={`${colorProperties} px-4 py-2 cursor-pointer rounded-sm`}>
      {children}
    </button>
  )
}
