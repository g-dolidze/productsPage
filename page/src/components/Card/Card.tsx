import { Link } from "react-router-dom";
import "./Card.scss";
const Card = ({ product }) => {
  // const [dispach,products.setProducts]=useProducts()

  return (
    <>
      <div className="card">
        <Link to={`product/${product.id}`}>
          <img src={product?.images[0]} alt="image" />
          <div className="about">
            <h5>{product.title} </h5>
            <h5>price: {product?.price} </h5>
          </div>
        </Link>
      </div>
    </>
  );
};
export default Card;
