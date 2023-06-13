import ajax from "../ajax";
import { isUserAuthenticated } from "../user/isUserAuth";

console.log(isUserAuthenticated().userKey);
export const DeleteItemfromApi = (itemId: string) =>
  ajax.delete(`product/${itemId}`, {
    headers: { Authorization: isUserAuthenticated().userKey },
  });
