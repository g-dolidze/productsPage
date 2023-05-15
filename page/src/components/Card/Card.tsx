import { Link } from "react-router-dom";
import "./Card.scss";
import { addToCart, addToFavorite } from "../../pages/Home/redux/actions";
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
            <h5>price: {parseFloat(product?.price).toFixed(2)} </h5>
          </Link>
          <div className="card_hover">
            <button onClick={() => dispatch(addToCart(product))}>
              add ot cart
            </button>
            <button onClick={() => dispatch(addToFavorite(product))}>
              favorit
            </button>
            <button>category</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
