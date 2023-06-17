import ajax from "../ajax";
import { isUserAuthenticated } from "../user/isUserAuth";

export const DeleteItemfromApi = (itemId: string) =>
  ajax.delete(`product/${itemId}`, {
    headers: { Authorization: isUserAuthenticated().userKey },
  });
export const AddNewItem = (newProduct: Prodact) =>
  ajax.post("product", newProduct, {
    headers: { Authorization: isUserAuthenticated().userKey },
  });

export const AddEditedItem = (editedItem: any, itemId: string) =>
  ajax.put(`product/${itemId}`, editedItem, {
    headers: { Authorization: isUserAuthenticated().userKey },
  });

