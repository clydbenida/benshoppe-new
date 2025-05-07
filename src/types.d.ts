type ApiMethod = "get" | "post" | "put" | "delete"

interface ReduxCartType {
  items?: Array<CartItemType>
}

interface ReduxUserType {
  token?: string;
}

interface CartItemType {
  productName: string;
  price: number; // Could be removed if we're integrating from a database
  quantity: number;
}

interface ProductType {
  _id?: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  ratings?: number;
  imageUrl?: string;
}

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

declare let gigya: any;
