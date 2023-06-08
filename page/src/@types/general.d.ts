type Prodact = {
  id: string;
  title: string;
  description: string;
  category: string;
  images: string[];
  brand: string;
  price: number;
  rating: string;
  amount: string;
  brands: string;
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
