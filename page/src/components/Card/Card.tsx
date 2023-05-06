import { Link } from "react-router-dom";
import "./Card.scss";
import { addToCart } from "../../pages/Home/redux/actions";
import { useDispatch } from "react-redux";

const Card = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="card">
        <img src={product?.images[0]} alt="image" />
        <div className="about">
          <Link to={`product/${product.id}`}>
            <h5>{product.title} </h5>
            <h5>price: {product?.price} </h5>
          </Link>
          <button onClick={() => dispatch(addToCart(product))}>
            add ot cart
          </button>{" "}
          .
        </div>
      </div>
    </>
  );
};
export default Card;
