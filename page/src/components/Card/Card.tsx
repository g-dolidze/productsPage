import { Link } from "react-router-dom";

const Card = ({ product }) => {
  // const [dispach,products.setProducts]=useProducts()

  return (
    <>
      <div className="card">
        <Link to={`product/${product.id}`}>
          <h1>{product.title} </h1>
        </Link>
        <img src={product?.images[0]} alt="image" />
        <div className="about">
          <h3>{product?.brand} </h3>
          <h5>{product?.price} </h5>
        </div>
      </div>
    </>
  );
};
export default Card;
