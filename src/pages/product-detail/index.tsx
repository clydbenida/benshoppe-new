import { useParams } from "react-router";
import BaseContainer from "../../components/BaseContainer";
import useAPI from "../../hooks/useAPI";
import Button from "../../components/Button";

export default function ProductDetail() {
  const params = useParams();

  const [product] = useAPI<ProductType>(`/products/${params.productId}`);

  console.log(params);
  return (
    <BaseContainer className="flex my-4">
      <div>
        <img className="mr-6" src={product?.imageUrl} width={300} />
      </div>
      <div>
        <h2 className="text-4xl font-bold">
          {product?.name}
        </h2>
        <div>
          {product?.price}
        </div>
        <div>{product?.ratings}</div>
        <div>{product?.description}</div>
        <div>
          <Button variant="secondary">
            Add to cart
          </Button>
          <Button>
            Buy now 
          </Button>
        </div>
      </div>
    </BaseContainer>
  );
}
