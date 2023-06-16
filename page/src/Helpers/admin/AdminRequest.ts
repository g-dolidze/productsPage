import ajax from "../ajax";
import { isUserAuthenticated } from "../user/isUserAuth";

export const DeleteItemfromApi = (itemId: string) =>
  ajax.delete(`product/${itemId}`, {
    headers: { Authorization: isUserAuthenticated().userKey },
  });
export const AddNewItem = (newProduct: Prodact) => {
  console.log(newProduct);
  return ajax.post("product", newProduct, {
    headers: { Authorization: isUserAuthenticated().userKey },
  });
};
