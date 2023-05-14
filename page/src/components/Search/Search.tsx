import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../Redux/hooks";
import { getSearchedProducts } from "../../Helpers/Products";

const search = () => {
  const dispatch = useDispatch();
  const { products } = useAppSelector((state) => state.mainReducer);

  // useEffect(() => {
  //   const searchedProducts = async () => {
  //     const { data } = await getAllProducts(value);
  //     dispatch(getSearchedProducts(data.products));
  //   };
  //   searchedProducts();
  // }, []);
  return <div className="search">search</div>;
};

export default search;
