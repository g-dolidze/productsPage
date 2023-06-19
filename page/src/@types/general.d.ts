type Prodact = {
  map(arg0: (item: Prodact) => JSX.Element): React.ReactNode;
  id: string;
  title: string;
  description: string;
  category: string;
  images: string[];
  brand: string;
  price: number | string;
  rating: string;
  amount: string;
};
type CartItem = Prodact & {
  quantity: number;
};

type InitialState = {
  products: Prodact[];
  totalFound: number;
  choosenItems: CartItem[];
  favoriteItems: FavoriteItem[];
  searchItems: Prodact[];
  range: number;
  brands: string[];
  brandName: string;
  sales: Prodact[];
};
type TMyToken = {
  name: string;
  exp: number;
};
type UserItem = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phoneNumber: number;
  password: string;
  addressInfo: {
    city: string;
    street: string;
    zip_code: string;
    address: string;
  };
};
