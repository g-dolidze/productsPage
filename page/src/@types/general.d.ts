import { categoryState } from "../pages/Category/redux/reduccer";

type Prodact = {
  id: string;
  title: string;
  description: string;
  category: string;
  images: string[];
  price: number;
  rating: string;
  amount: string;
};
type CartItem = Prodact & {
  quantity: number;
};
type SearchItem = Prodact;

type InitialState = {
  products: Prodact[];
  totalFound: number;
  chousenItems: CartItem[];
  searchedItems: SearchItem[];
};
type CategoryState = {
  tvs: [];
};
