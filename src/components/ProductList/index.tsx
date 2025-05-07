import { useMemo } from "react";
import useAPI from "../../hooks/useAPI";
import ProductCard from "../ProductCard";

export default function ProductList() {
  const [products] = useAPI<ProductType[]>("/products", "get");

  const renderProductCards = useMemo(
    () => products?.length ? products?.map(({_id, name, stock, price, ratings, description, imageUrl}) => (
      <ProductCard
        _id={_id}
        name={name} 
        description={description}
        stock={stock}
        price={price}
        ratings={ratings}
        imageUrl={imageUrl}
      />
    )) : [], [products]);

  return (
    <div className="flex py-2 gap-4">
      {renderProductCards}
    </div>
  )
}
