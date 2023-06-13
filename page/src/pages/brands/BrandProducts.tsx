import React from "react";
import { categoriesArray } from "../../components/category/Category";

function BrandProducts({ setBrandKind }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        width: "100px  ",
        marginTop: "50px ",
      }}
    >
      {categoriesArray.map((item) => {
        return (
          <div
            style={{
              backgroundColor: "white",
              padding: " 10px ",
              width: "130px ",
              border: "1px solid black ",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            key={item}
            onClick={() => {
              setBrandKind(item);
            }}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}

export default BrandProducts;
