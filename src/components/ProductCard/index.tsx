import { Star } from "lucide-react"
import { Link } from "react-router-dom"

export default function ProductCard(props: ProductType) {
  console.log(props)
  return (
    <Link to={`/product/${props._id}`}>
      <div className="border border-gray-200 shadow-xs p-2 rounded-sm">
        <img className="mb-2" width="150" src={props.imageUrl} />
        <h3 className="text-[16px] font-medium">{props.name}</h3>
        <div className="text-[16px] text-orange-600">₱{props.price}</div>
        <div className="flex justify-between">
          <div className="flex text-xs items-center">
            <div><Star fill="#FFD700" color="#FFD700" size={12} /></div>
            <div>{props.ratings}</div>
          </div>
          <div className="text-xs">{props.stock} remaining</div>
        </div>
      </div>
    </Link>
  )
}
